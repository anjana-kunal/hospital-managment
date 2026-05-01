import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { notFound } from '../utils/httpError.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

router.get('/', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...(req.query.departmentId ? { departmentId: req.query.departmentId } : {}),
    ...(req.query.approvalStatus ? { approvalStatus: req.query.approvalStatus } : {}),
    ...(req.query.search ? {
      OR: [
        { specialization: { contains: req.query.search, mode: 'insensitive' } },
        { user: { fullName: { contains: req.query.search, mode: 'insensitive' } } },
      ],
    } : {}),
  };

  const [data, total] = await Promise.all([
    prisma.doctor.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { id: true, fullName: true, email: true, phone: true, status: true, avatarUrl: true } }, department: true },
    }),
    prisma.doctor.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.get('/pending', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.doctor.findMany({
    where: { approvalStatus: 'PENDING' },
    orderBy: { createdAt: 'desc' },
    include: { user: { select: { id: true, fullName: true, email: true, phone: true } }, department: true },
  });

  res.json({ success: true, data });
}));

router.get('/:id', authorize('PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.doctor.findUnique({
    where: { id: req.params.id },
    include: { user: { select: { id: true, fullName: true, email: true, phone: true, avatarUrl: true, status: true } }, department: true, scheduleSlots: true },
  });

  if (!data) throw notFound('Doctor not found');

  res.json({ success: true, data });
}));

router.patch('/:id/approval', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { approvalStatus } = req.body;
  const data = await prisma.doctor.update({
    where: { id: req.params.id },
    data: {
      approvalStatus,
      approvedAt: approvalStatus === 'APPROVED' ? new Date() : null,
      user: { update: { status: approvalStatus === 'APPROVED' ? 'ACTIVE' : approvalStatus === 'REJECTED' ? 'INACTIVE' : undefined } },
    },
    include: { user: true, department: true },
  });

  await writeAuditLog({ req, action: approvalStatus === 'APPROVED' ? 'APPROVE' : 'REJECT', entity: 'Doctor', entityId: data.id });

  res.json({ success: true, data });
}));

router.patch('/:id', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.doctor.update({
    where: { id: req.params.id },
    data: req.body,
    include: { user: true, department: true },
  });

  await writeAuditLog({ req, action: 'UPDATE', entity: 'Doctor', entityId: data.id, metadata: req.body });

  res.json({ success: true, data });
}));

export default router;
