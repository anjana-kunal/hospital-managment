import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { notFound } from '../utils/httpError.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

function patientScopedWhere(req) {
  return req.user.role === 'PATIENT' ? { patientId: req.user.patient?.id || '__none__' } : {};
}

router.get('/records', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...patientScopedWhere(req),
    ...(req.query.patientId ? { patientId: req.query.patientId } : {}),
    ...(req.query.doctorId ? { doctorId: req.query.doctorId } : {}),
    ...(req.query.type ? { type: req.query.type } : {}),
  };

  const [data, total] = await Promise.all([
    prisma.medicalRecord.findMany({
      where,
      skip,
      take: limit,
      orderBy: { recordedAt: 'desc' },
      include: { patient: true, doctor: { include: { user: true } }, appointment: true, prescriptions: { include: { items: true } } },
    }),
    prisma.medicalRecord.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/records', authorize('DOCTOR', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.medicalRecord.create({
    data: {
      patientId: req.body.patientId,
      doctorId: req.user.role === 'DOCTOR' ? req.user.doctor.id : req.body.doctorId,
      appointmentId: req.body.appointmentId,
      type: req.body.type || 'CONSULTATION',
      title: req.body.title,
      diagnosis: req.body.diagnosis,
      treatmentPlan: req.body.treatmentPlan,
      vitals: req.body.vitals,
      notes: req.body.notes,
      attachments: req.body.attachments,
      recordedAt: req.body.recordedAt ? new Date(req.body.recordedAt) : new Date(),
    },
    include: { patient: true, doctor: { include: { user: true } } },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'MedicalRecord', entityId: data.id, metadata: req.body });

  res.status(201).json({ success: true, data });
}));

router.get('/records/:id', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.medicalRecord.findFirst({
    where: { id: req.params.id, ...patientScopedWhere(req) },
    include: { patient: true, doctor: { include: { user: true } }, prescriptions: { include: { items: true } } },
  });

  if (!data) throw notFound('Medical record not found');

  res.json({ success: true, data });
}));

router.patch('/records/:id', authorize('DOCTOR', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.medicalRecord.update({ where: { id: req.params.id }, data: req.body });
  await writeAuditLog({ req, action: 'UPDATE', entity: 'MedicalRecord', entityId: data.id, metadata: req.body });

  res.json({ success: true, data });
}));

router.get('/prescriptions', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...patientScopedWhere(req),
    ...(req.query.patientId ? { patientId: req.query.patientId } : {}),
    ...(req.query.doctorId ? { doctorId: req.query.doctorId } : {}),
    ...(req.query.status ? { status: req.query.status } : {}),
  };
  const [data, total] = await Promise.all([
    prisma.prescription.findMany({
      where,
      skip,
      take: limit,
      orderBy: { prescribedAt: 'desc' },
      include: { patient: true, doctor: { include: { user: true } }, items: true },
    }),
    prisma.prescription.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/prescriptions', authorize('DOCTOR', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.prescription.create({
    data: {
      patientId: req.body.patientId,
      doctorId: req.user.role === 'DOCTOR' ? req.user.doctor.id : req.body.doctorId,
      appointmentId: req.body.appointmentId,
      medicalRecordId: req.body.medicalRecordId,
      status: req.body.status || 'ACTIVE',
      notes: req.body.notes,
      items: { create: req.body.items || [] },
    },
    include: { patient: true, doctor: { include: { user: true } }, items: true },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'Prescription', entityId: data.id, metadata: req.body });

  res.status(201).json({ success: true, data });
}));

export default router;
