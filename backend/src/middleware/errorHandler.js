import { Prisma } from '@prisma/client';
import { env } from '../config/env.js';

export function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

export function errorHandler(error, req, res, next) {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Internal server error';
  let details = error.details;

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      statusCode = 409;
      message = 'A record with this unique value already exists';
      details = error.meta;
    }

    if (error.code === 'P2025') {
      statusCode = 404;
      message = 'Record not found';
      details = error.meta;
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    details,
    stack: env.nodeEnv === 'development' ? error.stack : undefined,
  });
}
