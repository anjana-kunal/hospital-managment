import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma.js';
import { env } from '../config/env.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { notFound } from '../utils/httpError.js';
import { makeCode } from '../utils/codes.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate, authorize('ADMIN', 'SUPER_ADMIN'));

router.get('/', asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...(req.query.role ? { role: req.query.role } : {}),
    ...(req.query.status ? { status: req.query.status } : {}),
    ...(req.query.search ? {
      OR: [
        { fullName: { contains: req.query.search, mode: 'insensitive' } },
        { email: { contains: req.query.search, mode: 'insensitive' } },
        { phone: { contains: req.query.search, mode: 'insensitive' } },
      ],
    } : {}),
  };

  const [data, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        role: true,
        status: true,
        avatarUrl: true,
        lastLoginAt: true,
        createdAt: true,
        patient: true,
        doctor: { include: { department: true } },
        staff: { include: { department: true } },
      },
    }),
    prisma.user.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const data = await prisma.user.findUnique({
    where: { id: req.params.id },
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
      status: true,
      avatarUrl: true,
      lastLoginAt: true,
      createdAt: true,
      updatedAt: true,
      patient: true,
      doctor: { include: { department: true } },
      staff: { include: { department: true } },
    },
  });

  if (!data) throw notFound('User not found');

  res.json({ success: true, data });
}));

router.post('/', asyncHandler(async (req, res) => {
  const { password, patient, doctor, staff, ...body } = req.body;
  const passwordHash = await bcrypt.hash(password || 'ChangeMe@123', env.bcryptSaltRounds);
  const data = {
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    role: body.role,
    status: body.status || 'PENDING',
    avatarUrl: body.avatarUrl,
    passwordHash,
  };

  if (body.role === 'PATIENT') {
    data.patient = {
      create: {
        patientCode: makeCode('PT'),
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        ...patient,
        dateOfBirth: patient?.dateOfBirth ? new Date(patient.dateOfBirth) : undefined,
      },
    };
  }

  if (body.role === 'DOCTOR') {
    data.doctor = {
      create: {
        doctorCode: makeCode('DR'),
        licenseNumber: doctor?.licenseNumber || makeCode('LIC'),
        specialization: doctor?.specialization || 'General Medicine',
        qualification: doctor?.qualification,
        departmentId: doctor?.departmentId,
        experienceYears: doctor?.experienceYears || 0,
        consultationFee: doctor?.consultationFee,
        approvalStatus: doctor?.approvalStatus || 'PENDING',
        bio: doctor?.bio,
        availability: doctor?.availability,
      },
    };
  }

  if (body.role === 'STAFF' || body.role === 'ADMIN' || body.role === 'SUPER_ADMIN') {
    if (staff) {
      data.staff = {
        create: {
          employeeCode: staff.employeeCode || makeCode('ST'),
          departmentId: staff.departmentId,
          designation: staff.designation || body.role,
        },
      };
    }
  }

  const created = await prisma.user.create({
    data,
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
      status: true,
      patient: true,
      doctor: true,
      staff: true,
    },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'User', entityId: created.id });

  res.status(201).json({ success: true, data: created });
}));

router.patch('/:id', asyncHandler(async (req, res) => {
  const { password, ...body } = req.body;
  const data = { ...body };

  if (password) {
    data.passwordHash = await bcrypt.hash(password, env.bcryptSaltRounds);
  }

  delete data.patient;
  delete data.doctor;
  delete data.staff;

  const updated = await prisma.user.update({
    where: { id: req.params.id },
    data,
    select: {
      id: true,
      fullName: true,
      email: true,
      phone: true,
      role: true,
      status: true,
      avatarUrl: true,
      updatedAt: true,
    },
  });

  await writeAuditLog({ req, action: 'UPDATE', entity: 'User', entityId: updated.id, metadata: body });

  res.json({ success: true, data: updated });
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const deleted = await prisma.user.delete({ where: { id: req.params.id } });
  await writeAuditLog({ req, action: 'DELETE', entity: 'User', entityId: deleted.id });

  res.json({ success: true, data: deleted });
}));

export default router;
