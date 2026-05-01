import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { env } from '../config/env.js';
import { authenticate, signToken } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { HttpError } from '../utils/httpError.js';
import { makeCode } from '../utils/codes.js';
import { writeAuditLog } from '../utils/audit.js';

const loginSchema = z.object({
  body: z.object({
    identifier: z.string().min(1),
    password: z.string().min(1),
    role: z.enum(['PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN']).optional(),
  }),
  query: z.object({}).passthrough(),
  params: z.object({}).passthrough(),
});

const registerPatientSchema = z.object({
  body: z.object({
    fullName: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7).optional(),
    password: z.string().min(8),
    dateOfBirth: z.string().optional(),
    gender: z.enum(['MALE', 'FEMALE', 'NON_BINARY', 'PREFER_NOT_TO_SAY', 'OTHER']).optional(),
    address: z.string().optional(),
    emergencyContactName: z.string().optional(),
    emergencyContactPhone: z.string().optional(),
    emergencyContactRelation: z.string().optional(),
    insuranceProvider: z.string().optional(),
    insurancePolicyNumber: z.string().optional(),
  }),
  query: z.object({}).passthrough(),
  params: z.object({}).passthrough(),
});

const router = Router();

router.post('/login', validate(loginSchema), asyncHandler(async (req, res) => {
  const { identifier, password, role } = req.validated.body;
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }],
      ...(role ? { role } : {}),
    },
    include: {
      patient: true,
      doctor: true,
      staff: true,
    },
  });

  if (!user) {
    throw new HttpError(401, 'Invalid credentials');
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);

  if (!isValidPassword) {
    throw new HttpError(401, 'Invalid credentials');
  }

  if (user.status === 'SUSPENDED' || user.status === 'INACTIVE') {
    throw new HttpError(403, 'Your account is not active');
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
    include: { patient: true, doctor: true, staff: true },
  });

  req.user = { id: updatedUser.id };
  await writeAuditLog({ req, action: 'LOGIN', entity: 'User', entityId: updatedUser.id });

  res.json({
    success: true,
    data: {
      token: signToken(updatedUser),
      user: {
        id: updatedUser.id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role,
        status: updatedUser.status,
        patient: updatedUser.patient,
        doctor: updatedUser.doctor,
        staff: updatedUser.staff,
      },
    },
  });
}));

router.post('/register/patient', validate(registerPatientSchema), asyncHandler(async (req, res) => {
  const data = req.validated.body;
  const passwordHash = await bcrypt.hash(data.password, env.bcryptSaltRounds);

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      passwordHash,
      role: 'PATIENT',
      status: 'ACTIVE',
      patient: {
        create: {
          patientCode: makeCode('PT'),
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
          gender: data.gender,
          address: data.address,
          emergencyContactName: data.emergencyContactName,
          emergencyContactPhone: data.emergencyContactPhone,
          emergencyContactRelation: data.emergencyContactRelation,
          insuranceProvider: data.insuranceProvider,
          insurancePolicyNumber: data.insurancePolicyNumber,
        },
      },
    },
    include: { patient: true },
  });

  req.user = { id: user.id };
  await writeAuditLog({ req, action: 'CREATE', entity: 'Patient', entityId: user.patient.id });

  res.status(201).json({
    success: true,
    data: {
      token: signToken(user),
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
        patient: user.patient,
      },
    },
  });
}));

router.get('/me', authenticate, asyncHandler(async (req, res) => {
  res.json({ success: true, data: req.user });
}));

export default router;
