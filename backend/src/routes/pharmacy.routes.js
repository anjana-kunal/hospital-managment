import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { writeAuditLog } from '../utils/audit.js';

const router = Router();

router.use(authenticate);

router.get('/medicines', authorize('DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);
  const where = {
    ...(req.query.search ? { OR: [{ name: { contains: req.query.search, mode: 'insensitive' } }, { genericName: { contains: req.query.search, mode: 'insensitive' } }] } : {}),
    ...(req.query.category ? { category: req.query.category } : {}),
  };
  const [data, total] = await Promise.all([
    prisma.medicine.findMany({ where, skip, take: limit, orderBy: { name: 'asc' } }),
    prisma.medicine.count({ where }),
  ]);

  res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
}));

router.post('/medicines', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.medicine.create({ data: req.body });
  await writeAuditLog({ req, action: 'CREATE', entity: 'Medicine', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

router.post('/transactions', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const data = await prisma.$transaction(async (tx) => {
    const transaction = await tx.inventoryTransaction.create({ data: req.body });
    const delta = ['STOCK_IN', 'ADJUSTMENT'].includes(req.body.type) ? Number(req.body.quantity) : -Number(req.body.quantity);

    await tx.medicine.update({
      where: { id: req.body.medicineId },
      data: { currentStock: { increment: delta } },
    });

    return transaction;
  });

  await writeAuditLog({ req, action: 'CREATE', entity: 'InventoryTransaction', entityId: data.id, metadata: req.body });
  res.status(201).json({ success: true, data });
}));

router.get('/low-stock', authorize('STAFF', 'ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const medicines = await prisma.medicine.findMany({ where: { isActive: true }, orderBy: { currentStock: 'asc' } });
  const data = medicines.filter((medicine) => medicine.currentStock <= medicine.reorderLevel);
  res.json({ success: true, data });
}));

export default router;
