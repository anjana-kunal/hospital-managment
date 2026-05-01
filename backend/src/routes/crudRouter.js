import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, paginatedResponse } from '../utils/pagination.js';
import { notFound } from '../utils/httpError.js';
import { writeAuditLog } from '../utils/audit.js';

function buildWhere(query, searchFields, filterFields) {
  const where = {};

  for (const field of filterFields) {
    if (query[field] !== undefined && query[field] !== '') {
      where[field] = query[field];
    }
  }

  if (query.search && searchFields.length) {
    where.OR = searchFields.map((field) => ({
      [field]: { contains: query.search, mode: 'insensitive' },
    }));
  }

  return where;
}

export function createCrudRouter({
  model,
  entity,
  searchFields = [],
  filterFields = [],
  include,
  select,
  orderBy = { createdAt: 'desc' },
  readRoles = ['PATIENT', 'DOCTOR', 'STAFF', 'ADMIN', 'SUPER_ADMIN'],
  writeRoles = ['STAFF', 'ADMIN', 'SUPER_ADMIN'],
  createData = (body) => body,
  updateData = (body) => body,
}) {
  const router = Router();
  const repository = prisma[model];

  router.use(authenticate);

  router.get('/', authorize(...readRoles), asyncHandler(async (req, res) => {
    const { page, limit, skip } = getPagination(req.query);
    const where = buildWhere(req.query, searchFields, filterFields);
    const [data, total] = await Promise.all([
      repository.findMany({ where, skip, take: limit, orderBy, include, select }),
      repository.count({ where }),
    ]);

    res.json({ success: true, ...paginatedResponse({ data, total, page, limit }) });
  }));

  router.get('/:id', authorize(...readRoles), asyncHandler(async (req, res) => {
    const data = await repository.findUnique({ where: { id: req.params.id }, include, select });

    if (!data) {
      throw notFound(`${entity} not found`);
    }

    res.json({ success: true, data });
  }));

  router.post('/', authorize(...writeRoles), asyncHandler(async (req, res) => {
    const data = await repository.create({ data: createData(req.body), include, select });
    await writeAuditLog({ req, action: 'CREATE', entity, entityId: data.id, metadata: req.body });

    res.status(201).json({ success: true, data });
  }));

  router.patch('/:id', authorize(...writeRoles), asyncHandler(async (req, res) => {
    const data = await repository.update({ where: { id: req.params.id }, data: updateData(req.body), include, select });
    await writeAuditLog({ req, action: 'UPDATE', entity, entityId: data.id, metadata: req.body });

    res.json({ success: true, data });
  }));

  router.delete('/:id', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
    const data = await repository.delete({ where: { id: req.params.id } });
    await writeAuditLog({ req, action: 'DELETE', entity, entityId: data.id });

    res.json({ success: true, data });
  }));

  return router;
}
