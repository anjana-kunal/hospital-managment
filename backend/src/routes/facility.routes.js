import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

router.get('/beds', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = { ...(req.query.status ? { status: req.query.status } : {}), ...(req.query.ward ? { ward: req.query.ward } : {}) };
  const [data, total] = await Promise.all([
    prisma.bed.findMany({ where, skip, take: limit, orderBy: { bedNumber: 'asc' }, include: { department: true, assignments: { where: { dischargeAt: null }, include: { patient: true } } } }),
    prisma.bed.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/beds', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.bed.create({ data: req.body });
  await writeAuditLog({ req, action: 'CREATE', entity: 'Bed', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

router.post('/bed-assignments', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.$transaction(async (tx) => {
    const assignment = await tx.bedAssignment.create({
      data: {
        bedId: req.body.bedId,
        patientId: req.body.patientId,
        admissionAt: req.body.admissionAt ? new Date(req.body.admissionAt) : new Date(),
        reason: req.body.reason,
        notes: req.body.notes,
      },
      include: { bed: true, patient: true },
    });

    await tx.bed.update({ where: { id: req.body.bedId }, data: { status: 'OCCUPIED' } });
    return assignment;
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'BedAssignment', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

router.patch('/bed-assignments/:id/discharge', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const existing = await prisma.bedAssignment.findUnique({ where: { id: req.params.id } });
  const data = await prisma.$transaction(async (tx) => {
    const assignment = await tx.bedAssignment.update({ where: { id: req.params.id }, data: { dischargeAt: new Date(), notes: req.body.notes } });
    await tx.bed.update({ where: { id: existing.bedId }, data: { status: 'CLEANING' } });
    return assignment;
  });

  await writeAuditLog({ req, action: 'UPDATE', entity: 'BedAssignment', entityId: data.id, metadata: req.body });
  res.json({ success: true, data });
}));

export default router;
