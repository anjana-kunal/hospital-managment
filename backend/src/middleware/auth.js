import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma.js';
import { env } from '../config/env.js';
import { HttpError } from '../utils/httpError.js';

export function signToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      role: user.role,
      status: user.status,
    },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn },
  );
}

export async function authenticate(req, res, next) {
  try {
    const header = req.headers.authorization;

    if (!header?.startsWith('Bearer ')) {
      throw new HttpError(401, 'Authentication token is required');
    }

    const token = header.slice(7);
    const payload = jwt.verify(token, env.jwtSecret);
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        role: true,
        status: true,
        avatarUrl: true,
        patient: { select: { id: true, patientCode: true } },
        doctor: { select: { id: true, doctorCode: true, approvalStatus: true } },
        staff: { select: { id: true, employeeCode: true } },
      },
    });

    if (!user) {
      throw new HttpError(401, 'Invalid authentication token');
    }

    if (user.status === 'SUSPENDED' || user.status === 'INACTIVE') {
      throw new HttpError(403, 'Your account is not active');
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return next(new HttpError(401, 'Invalid or expired authentication token'));
    }

    return next(error);
  }
}

export function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return next(new HttpError(401, 'Authentication is required'));
    }

    if (!roles.includes(req.user.role)) {
      return next(new HttpError(403, 'You do not have permission to perform this action'));
    }

    return next();
  };
}
