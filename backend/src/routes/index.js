import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { createCrudRouter } from './crudRouter.js';
import authRoutes from './auth.routes.js';
import usersRoutes from './users.routes.js';
import doctorsRoutes from './doctors.routes.js';
import appointmentsRoutes from './appointments.routes.js';
import medicalRoutes from './medical.routes.js';
import labRoutes from './lab.routes.js';
import billingRoutes from './billing.routes.js';
import facilityRoutes from './facility.routes.js';
import pharmacyRoutes from './pharmacy.routes.js';
import communicationRoutes from './communication.routes.js';
import dashboardRoutes from './dashboard.routes.js';
import stripeRoutes from './stripe.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/doctors', doctorsRoutes);
router.use('/appointments', appointmentsRoutes);
router.use('/medical', medicalRoutes);
router.use('/lab', labRoutes);
router.use('/billing', billingRoutes);
router.use('/facility', facilityRoutes);
router.use('/pharmacy', pharmacyRoutes);
router.use('/communication', communicationRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/stripe', stripeRoutes);

router.use('/patients', createCrudRouter({
  model: 'patient',
  entity: 'Patient',
  searchFields: ['fullName', 'email', 'phone', 'patientCode'],
  include: {
    user: { select: { id: true, fullName: true, email: true, role: true, status: true } },
  },
  createData: (body) => ({
    ...body,
    dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : undefined,
  }),
  updateData: (body) => ({
    ...body,
    dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : undefined,
  }),
}));

router.use('/departments', createCrudRouter({
  model: 'department',
  entity: 'Department',
  searchFields: ['name', 'code', 'description'],
  filterFields: ['isActive'],
  include: { doctors: { include: { user: { select: { id: true, fullName: true, email: true } } } }, beds: true },
  readRoles: ['PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'],
  writeRoles: ['ADMIN', 'SUPER_ADMIN'],
}));

router.use('/schedule-slots', createCrudRouter({
  model: 'scheduleSlot',
  entity: 'ScheduleSlot',
  filterFields: ['doctorId', 'isBooked'],
  include: { doctor: { include: { user: { select: { id: true, fullName: true } } } }, appointment: true },
  orderBy: { startAt: 'asc' },
  readRoles: ['PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'],
  writeRoles: ['DOCTOR', 'ADMIN', 'SUPER_ADMIN'],
  createData: (body) => ({ ...body, startAt: new Date(body.startAt), endAt: new Date(body.endAt) }),
  updateData: (body) => ({ ...body, startAt: body.startAt ? new Date(body.startAt) : undefined, endAt: body.endAt ? new Date(body.endAt) : undefined }),
}));

router.get('/audit-logs', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...(req.query.entity ? { entity: req.query.entity } : {}),
    ...(req.query.actorId ? { actorId: req.query.actorId } : {}),
  };
  const [data, total] = await Promise.all([
    prisma.auditLog.findMany({ where, skip, take: limit, orderBy: { createdAt: 'desc' }, include: { actor: { select: { id: true, fullName: true, email: true, role: true } } } }),
    prisma.auditLog.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.get('/settings', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.systemSetting.findMany({ orderBy: { key: 'asc' } });
  res.json({ success: true, data });
}));

router.put('/settings/:key', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.systemSetting.upsert({
    where: { key: req.params.key },
    update: { value: req.body.value, category: req.body.category || 'general' },
    create: { key: req.params.key, value: req.body.value, category: req.body.category || 'general' },
  });

  res.json({ success: true, data });
}));

export default router;
