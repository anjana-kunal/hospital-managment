import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { notFound } from '../utils/httpError.js';
import { makeCode } from '../utils/codes.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

function accessibleAppointmentWhere(req) {
  if (req.user.role === 'PATIENT') return { patientId: req.user.patient?.id || '__none__' };
  if (req.user.role === 'DOCTOR') return { doctorId: req.user.doctor?.id || '__none__' };
  return {};
}

router.get('/', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...accessibleAppointmentWhere(req),
    ...(req.query.patientId ? { patientId: req.query.patientId } : {}),
    ...(req.query.doctorId ? { doctorId: req.query.doctorId } : {}),
    ...(req.query.status ? { status: req.query.status } : {}),
  };

  const [data, total] = await Promise.all([
    prisma.appointment.findMany({
      where,
      skip,
      take: limit,
      orderBy: { scheduledAt: 'desc' },
      include: {
        patient: true,
        doctor: { include: { user: { select: { fullName: true, email: true, phone: true } }, department: true } },
      },
    }),
    prisma.appointment.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.get('/queue/today', authorize('DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);

  const data = await prisma.appointment.findMany({
    where: {
      scheduledAt: { gte: start, lt: end },
      status: { in: ['SCHEDULED', 'CHECKED_IN', 'IN_PROGRESS'] },
      ...(req.user.role === 'DOCTOR' ? { doctorId: req.user.doctor?.id || '__none__' } : {}),
    },
    orderBy: { scheduledAt: 'asc' },
    include: { patient: true, doctor: { include: { user: true, department: true } } },
  });

  res.json({ success: true, data });
}));

router.post('/', authorize('PATIENT', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.appointment.create({
    data: {
      appointmentCode: makeCode('APT'),
      patientId: req.user.role === 'PATIENT' ? req.user.patient.id : req.body.patientId,
      doctorId: req.body.doctorId,
      departmentId: req.body.departmentId,
      createdById: req.user.id,
      scheduledAt: new Date(req.body.scheduledAt),
      durationMinutes: req.body.durationMinutes || 30,
      type: req.body.type || 'IN_PERSON',
      status: req.body.status || 'REQUESTED',
      reason: req.body.reason,
      symptoms: req.body.symptoms,
      notes: req.body.notes,
    },
    include: { patient: true, doctor: { include: { user: true, department: true } } },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'Appointment', entityId: data.id, metadata: req.body });

  res.status(201).json({ success: true, data });
}));

router.get('/:id', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.appointment.findFirst({
    where: { id: req.params.id, ...accessibleAppointmentWhere(req) },
    include: {
      patient: true,
      doctor: { include: { user: true, department: true } },
      medicalRecord: true,
      prescriptions: { include: { items: true } },
      labOrders: { include: { items: { include: { labTest: true } } } },
      invoices: true,
    },
  });

  if (!data) throw notFound('Appointment not found');

  res.json({ success: true, data });
}));

router.patch('/:id/status', authorize('DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.appointment.update({
    where: { id: req.params.id },
    data: { status: req.body.status, cancellationReason: req.body.cancellationReason },
    include: { patient: true, doctor: { include: { user: true } } },
  });

  await writeAuditLog({ req, action: 'UPDATE', entity: 'Appointment', entityId: data.id, metadata: req.body });

  res.json({ success: true, data });
}));

router.patch('/:id', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.appointment.update({
    where: { id: req.params.id },
    data: {
      ...req.body,
      scheduledAt: req.body.scheduledAt ? new Date(req.body.scheduledAt) : undefined,
    },
    include: { patient: true, doctor: { include: { user: true, department: true } } },
  });

  await writeAuditLog({ req, action: 'UPDATE', entity: 'Appointment', entityId: data.id, metadata: req.body });

  res.json({ success: true, data });
}));

export default router;
