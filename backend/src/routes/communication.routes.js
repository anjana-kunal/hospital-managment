import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

router.get('/messages', asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const mailbox = req.query.mailbox || 'inbox';
  const where = mailbox === 'sent' ? { senderId: req.user.id } : { recipientId: req.user.id };
  const [data, total] = await Promise.all([
    prisma.message.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { sender: { select: { id: true, fullName: true, role: true } }, recipient: { select: { id: true, fullName: true, role: true } } },
    }),
    prisma.message.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/messages', asyncHandler(async (req, res) => {
  const data = await prisma.message.create({
    data: {
      senderId: req.user.id,
      recipientId: req.body.recipientId,
      subject: req.body.subject,
      body: req.body.body,
    },
    include: { sender: true, recipient: true },
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'Message', entityId: data.id, metadata: { recipientId: req.body.recipientId } });

  res.status(201).json({ success: true, data });
}));

router.patch('/messages/:id/read', asyncHandler(async (req, res) => {
  const data = await prisma.message.update({ where: { id: req.params.id }, data: { status: 'READ', readAt: new Date() } });
  res.json({ success: true, data });
}));

router.get('/notifications', asyncHandler(async (req, res) => {
  const data = await prisma.notification.findMany({ where: { userId: req.user.id }, orderBy: { createdAt: 'desc' }, take: 50 });
  res.json({ success: true, data });
}));

router.post('/notifications', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.notification.create({ data: req.body });
  await writeAuditLog({ req, action: 'CREATE', entity: 'Notification', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

router.patch('/notifications/:id/read', asyncHandler(async (req, res) => {
  const data = await prisma.notification.update({ where: { id: req.params.id }, data: { readAt: new Date() } });
  res.json({ success: true, data });
}));

router.get('/announcements', asyncHandler(async (req, res) => {
  const roleAudience = {
    PATIENT: 'PATIENTS',
    DOCTOR: 'DOCTORS',
    STAFF: 'STAFF',
    ADMIN: 'ADMINS',
    SUPER_ADMIN: 'ADMINS',
  };

  const data = await prisma.announcement.findMany({
    where: {
      isPublished: true,
      AND: [
        { OR: [{ audience: 'ALL' }, { audience: roleAudience[req.user.role] }] },
        { OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
      ],
    },
    orderBy: { publishAt: 'desc' },
  });

  res.json({ success: true, data });
}));

router.post('/announcements', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.announcement.create({ data: { ...req.body, publishedById: req.user.id } });
  await writeAuditLog({ req, action: 'CREATE', entity: 'Announcement', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

export default router;
