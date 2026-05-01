import { Router } from 'express';
import { prisma } from '../config/prisma.js';
import { authenticate, authorize } from '../middleware/auth.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

router.use(authenticate);

router.get('/admin', authorize('ADMIN', 'SUPER_ADMIN'), asyncHandler(async (req, res) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(todayStart);
  todayEnd.setDate(todayEnd.getDate() + 1);

  const [
    totalPatients,
    activeDoctors,
    pendingDoctorApprovals,
    todayAppointments,
    availableBeds,
    occupiedBeds,
    unpaidInvoices,
    lowStockMedicines,
  ] = await Promise.all([
    prisma.patient.count(),
    prisma.doctor.count({ where: { approvalStatus: 'APPROVED', user: { status: 'ACTIVE' } } }),
    prisma.doctor.count({ where: { approvalStatus: 'PENDING' } }),
    prisma.appointment.count({ where: { scheduledAt: { gte: todayStart, lt: todayEnd } } }),
    prisma.bed.count({ where: { status: 'AVAILABLE' } }),
    prisma.bed.count({ where: { status: 'OCCUPIED' } }),
    prisma.invoice.count({ where: { status: { in: ['ISSUED', 'PARTIALLY_PAID', 'OVERDUE'] } } }),
    prisma.medicine.count({ where: { currentStock: { lte: 10 } } }),
  ]);

  res.json({
    success: true,
    data: {
      totalPatients,
      activeDoctors,
      pendingDoctorApprovals,
      todayAppointments,
      availableBeds,
      occupiedBeds,
      unpaidInvoices,
      lowStockMedicines,
    },
  });
}));

router.get('/doctor', authorize('DOCTOR'), asyncHandler(async (req, res) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(todayStart);
  todayEnd.setDate(todayEnd.getDate() + 1);

  const [todayAppointments, pendingLabOrders, activePrescriptions, recentAppointments] = await Promise.all([
    prisma.appointment.count({ where: { doctorId: req.user.doctor.id, scheduledAt: { gte: todayStart, lt: todayEnd } } }),
    prisma.labOrder.count({ where: { doctorId: req.user.doctor.id, status: { in: ['ORDERED', 'SAMPLE_COLLECTED', 'PROCESSING'] } } }),
    prisma.prescription.count({ where: { doctorId: req.user.doctor.id, status: 'ACTIVE' } }),
    prisma.appointment.findMany({
      where: { doctorId: req.user.doctor.id },
      orderBy: { scheduledAt: 'desc' },
      take: 10,
      include: { patient: true },
    }),
  ]);

  res.json({ success: true, data: { todayAppointments, pendingLabOrders, activePrescriptions, recentAppointments } });
}));

router.get('/patient', authorize('PATIENT'), asyncHandler(async (req, res) => {
  const [upcomingAppointments, activePrescriptions, pendingBills, unreadNotifications] = await Promise.all([
    prisma.appointment.findMany({
      where: { patientId: req.user.patient.id, scheduledAt: { gte: new Date() }, status: { in: ['REQUESTED', 'SCHEDULED', 'CHECKED_IN'] } },
      orderBy: { scheduledAt: 'asc' },
      take: 5,
      include: { doctor: { include: { user: true, department: true } } },
    }),
    prisma.prescription.count({ where: { patientId: req.user.patient.id, status: 'ACTIVE' } }),
    prisma.invoice.count({ where: { patientId: req.user.patient.id, status: { in: ['ISSUED', 'PARTIALLY_PAID', 'OVERDUE'] } } }),
    prisma.notification.count({ where: { userId: req.user.id, readAt: null } }),
  ]);

  res.json({ success: true, data: { upcomingAppointments, activePrescriptions, pendingBills, unreadNotifications } });
}));

export default router;
