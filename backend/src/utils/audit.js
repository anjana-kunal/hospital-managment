import { prisma } from '../config/prisma.js';

export async function writeAuditLog({ req, action, entity, entityId, metadata }) {
  await prisma.auditLog.create({
    data: {
      actorId: req.user?.id,
      action,
      entity,
      entityId,
      metadata,
      ipAddress: req.ip,
      userAgent: req.get('user-agent'),
    },
  });
}
