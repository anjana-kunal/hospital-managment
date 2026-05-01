import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { makeCode } from '../utils/codes.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

router.get('/tests', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.labTest.findMany({ where: { isActive: true }, orderBy: { name: 'asc' } });
  res.json({ success: true, data });
}));

router.post('/tests', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.labTest.create({ data: req.body });
  await writeAuditLog({ req, action: 'CREATE', entity: 'LabTest', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

router.get('/orders', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...(req.user.role === 'PATIENT' ? { patientId: req.user.patient?.id || '__none__' } : {}),
    ...(req.user.role === 'DOCTOR' ? { doctorId: req.user.doctor?.id || '__none__' } : {}),
    ...(req.query.status ? { status: req.query.status } : {}),
    ...(req.query.patientId ? { patientId: req.query.patientId } : {}),
  };

  const [data, total] = await Promise.all([
    prisma.labOrder.findMany({
      where,
      skip,
      take: limit,
      orderBy: { orderedAt: 'desc' },
      include: { patient: true, doctor: { include: { user: true } }, items: { include: { labTest: true } } },
    }),
    prisma.labOrder.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/orders', authorize('DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.labOrder.create({
    data: {
      labOrderCode: makeCode('LAB'),
      patientId: req.body.patientId,
      doctorId: req.user.role === 'DOCTOR' ? req.user.doctor.id : req.body.doctorId,
      appointmentId: req.body.appointmentId,
      priority: req.body.priority || 'routine',
      clinicalNotes: req.body.clinicalNotes,
      items: { create: (req.body.testIds || []).map((labTestId) => ({ labTestId })) },
    },
    include: { patient: true, doctor: { include: { user: true } }, items: { include: { labTest: true } } },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'LabOrder', entityId: data.id, metadata: req.body });

  res.status(201).json({ success: true, data });
}));

router.patch('/orders/:id', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.labOrder.update({
    where: { id: req.params.id },
    data: {
      status: req.body.status,
      sampleCollectedAt: req.body.sampleCollectedAt ? new Date(req.body.sampleCollectedAt) : undefined,
      resultAt: req.body.resultAt ? new Date(req.body.resultAt) : undefined,
      clinicalNotes: req.body.clinicalNotes,
    },
    include: { items: { include: { labTest: true } } },
  });

  await writeAuditLog({ req, action: 'UPDATE', entity: 'LabOrder', entityId: data.id, metadata: req.body });

  res.json({ success: true, data });
}));

router.patch('/order-items/:id/result', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.labOrderItem.update({ where: { id: req.params.id }, data: req.body, include: { labTest: true } });
  await writeAuditLog({ req, action: 'UPDATE', entity: 'LabOrderItem', entityId: data.id, metadata: req.body });
  res.json({ success: true, data });
}));

export default router;
