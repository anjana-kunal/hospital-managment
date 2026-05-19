import { Router } from 'express';
import { env } from '../config/env.js';
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

function createPatientRouter() {
  return createCrudRouter({
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
  });
}

function createDepartmentRouter() {
  return createCrudRouter({
    model: 'department',
    entity: 'Department',
    searchFields: ['name', 'code', 'description'],
    filterFields: ['isActive'],
    include: { doctors: { include: { user: { select: { id: true, fullName: true, email: true } } } }, beds: true },
    readRoles: ['PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'],
    writeRoles: ['ADMIN', 'SUPER_ADMIN'],
  });
}

function createScheduleSlotRouter() {
  return createCrudRouter({
    model: 'scheduleSlot',
    entity: 'ScheduleSlot',
    filterFields: ['doctorId', 'isBooked'],
    include: { doctor: { include: { user: { select: { id: true, fullName: true } } } }, appointment: true },
    orderBy: { startAt: 'asc' },
    readRoles: ['PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'],
    writeRoles: ['DOCTOR', 'ADMIN', 'SUPER_ADMIN'],
    createData: (body) => ({ ...body, startAt: new Date(body.startAt), endAt: new Date(body.endAt) }),
    updateData: (body) => ({ ...body, startAt: body.startAt ? new Date(body.startAt) : undefined, endAt: body.endAt ? new Date(body.endAt) : undefined }),
  });
}

function createAdminRouter() {
  const adminRouter = Router();

  adminRouter.get('/audit-logs', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
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

  adminRouter.get('/settings', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
    const data = await prisma.systemSetting.findMany({ orderBy: { key: 'asc' } });
    res.json({ success: true, data });
  }));

  adminRouter.put('/settings/:key', authenticate, authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
    const data = await prisma.systemSetting.upsert({
      where: { key: req.params.key },
      update: { value: req.body.value, category: req.body.category || 'general' },
      create: { key: req.params.key, value: req.body.value, category: req.body.category || 'general' },
    });

    res.json({ success: true, data });
  }));

  return adminRouter;
}

const routeGroups = {
  auth: [
    ['/auth', () => authRoutes],
  ],
  admin: [
    ['/users', () => usersRoutes],
    ['/dashboard', () => dashboardRoutes],
    ['/', createAdminRouter],
  ],
  patient: [
    ['/patients', createPatientRouter],
  ],
  doctor: [
    ['/doctors', () => doctorsRoutes],
    ['/departments', createDepartmentRouter],
    ['/schedule-slots', createScheduleSlotRouter],
  ],
  appointment: [
    ['/appointments', () => appointmentsRoutes],
  ],
  clinical: [
    ['/medical', () => medicalRoutes],
    ['/lab', () => labRoutes],
  ],
  payment: [
    ['/billing', () => billingRoutes],
    ['/stripe', () => stripeRoutes],
  ],
  operations: [
    ['/facility', () => facilityRoutes],
    ['/pharmacy', () => pharmacyRoutes],
  ],
  communication: [
    ['/communication', () => communicationRoutes],
  ],
};

const serviceGroups = {
  monolith: Object.keys(routeGroups),
  auth: ['auth'],
  admin: ['admin'],
  patient: ['patient'],
  doctor: ['doctor'],
  appointment: ['appointment'],
  clinical: ['clinical'],
  payment: ['payment'],
  operations: ['operations'],
  communication: ['communication'],
};

const selectedGroups = serviceGroups[env.serviceName];

if (!selectedGroups) {
  throw new Error(`Unknown MEDCORE_SERVICE "${env.serviceName}". Expected one of: ${Object.keys(serviceGroups).join(', ')}`);
}

for (const groupName of selectedGroups) {
  for (const [path, createRoute] of routeGroups[groupName]) {
    router.use(path, createRoute());
  }
}

export default router;
