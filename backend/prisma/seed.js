import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const passwordHash = await bcrypt.hash('Password@123', 12);

function tomorrowAt(hour, minute = 0) {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(hour, minute, 0, 0);
  return date;
}

async function main() {
  const cardiology = await prisma.department.upsert({
    where: { code: 'CARD' },
    update: {},
    create: { name: 'Cardiology', code: 'CARD', description: 'Heart and vascular care', floor: '3', phone: '+1-555-3000' },
  });

  const radiology = await prisma.department.upsert({
    where: { code: 'RAD' },
    update: {},
    create: { name: 'Radiology', code: 'RAD', description: 'Imaging and diagnostics', floor: '2', phone: '+1-555-2000' },
  });

  const admin = await prisma.user.upsert({
    where: { email: 'admin@medcore.test' },
    update: {},
    create: {
      fullName: 'Alicia Vance',
      email: 'admin@medcore.test',
      phone: '+15551004',
      passwordHash,
      role: 'ADMIN',
      status: 'ACTIVE',
      staff: { create: { employeeCode: 'AD-0041', designation: 'System Admin' } },
    },
  });

  const doctorUser = await prisma.user.upsert({
    where: { email: 'doctor@medcore.test' },
    update: {},
    create: {
      fullName: 'Dr. Marcus Chen',
      email: 'doctor@medcore.test',
      phone: '+15554092',
      passwordHash,
      role: 'DOCTOR',
      status: 'ACTIVE',
      doctor: {
        create: {
          doctorCode: 'DR-1001',
          departmentId: cardiology.id,
          licenseNumber: 'LIC-CARD-1001',
          specialization: 'Cardiology',
          qualification: 'MD, FACC',
          experienceYears: 12,
          consultationFee: 150,
          approvalStatus: 'APPROVED',
          approvedAt: new Date(),
          bio: 'Consultant cardiologist focused on preventive cardiac care.',
          availability: { monday: ['09:00-13:00'], wednesday: ['14:00-18:00'] },
        },
      },
    },
    include: { doctor: true },
  });

  const patientUser = await prisma.user.upsert({
    where: { email: 'patient@medcore.test' },
    update: {},
    create: {
      fullName: 'Eleanor Sterling',
      email: 'patient@medcore.test',
      phone: '+15552934819',
      passwordHash,
      role: 'PATIENT',
      status: 'ACTIVE',
      patient: {
        create: {
          patientCode: 'PT-84920',
          fullName: 'Eleanor Sterling',
          email: 'patient@medcore.test',
          phone: '+15552934819',
          dateOfBirth: new Date('1988-04-12'),
          gender: 'FEMALE',
          address: '123 Healthway Drive',
          bloodGroup: 'O+',
          allergies: 'Penicillin',
          emergencyContactName: 'Daniel Sterling',
          emergencyContactPhone: '+15552934820',
          emergencyContactRelation: 'Spouse',
          insuranceProvider: 'BlueCross',
          insurancePolicyNumber: 'BC-442910',
        },
      },
    },
    include: { patient: true },
  });

  const appointment = await prisma.appointment.upsert({
    where: { appointmentCode: 'APT-SEED-001' },
    update: {},
    create: {
      appointmentCode: 'APT-SEED-001',
      patientId: patientUser.patient.id,
      doctorId: doctorUser.doctor.id,
      departmentId: cardiology.id,
      createdById: admin.id,
      scheduledAt: tomorrowAt(10, 30),
      durationMinutes: 30,
      type: 'IN_PERSON',
      status: 'SCHEDULED',
      reason: 'Routine heart checkup',
      symptoms: 'Occasional palpitations',
    },
  });

  await prisma.medicalRecord.upsert({
    where: { appointmentId: appointment.id },
    update: {},
    create: {
      patientId: patientUser.patient.id,
      doctorId: doctorUser.doctor.id,
      appointmentId: appointment.id,
      type: 'CONSULTATION',
      title: 'Initial Cardiology Consultation',
      diagnosis: 'Mild hypertension under observation',
      treatmentPlan: 'Lifestyle changes and follow-up in 4 weeks',
      vitals: { bp: '138/86', pulse: 78, spo2: 98 },
      notes: 'Patient advised low-sodium diet and regular exercise.',
    },
  });

  await prisma.labTest.upsert({
    where: { code: 'CBC' },
    update: {},
    create: { name: 'Complete Blood Count', code: 'CBC', category: 'Hematology', price: 45 },
  });

  await prisma.labTest.upsert({
    where: { code: 'LIPID' },
    update: {},
    create: { name: 'Lipid Profile', code: 'LIPID', category: 'Biochemistry', price: 65 },
  });

  await prisma.bed.upsert({
    where: { bedNumber: 'C-301-A' },
    update: {},
    create: { bedNumber: 'C-301-A', ward: 'Cardiac Ward', roomNumber: '301', floor: '3', departmentId: cardiology.id, status: 'AVAILABLE' },
  });

  await prisma.bed.upsert({
    where: { bedNumber: 'R-201-B' },
    update: {},
    create: { bedNumber: 'R-201-B', ward: 'Radiology Recovery', roomNumber: '201', floor: '2', departmentId: radiology.id, status: 'MAINTENANCE' },
  });

  await prisma.medicine.upsert({
    where: { sku: 'MED-ASP-75' },
    update: {},
    create: { name: 'Aspirin 75mg', genericName: 'Aspirin', sku: 'MED-ASP-75', category: 'Cardiology', unit: 'tablet', reorderLevel: 50, currentStock: 220, price: 2.5 },
  });

  await prisma.medicine.upsert({
    where: { sku: 'MED-ATOR-10' },
    update: {},
    create: { name: 'Atorvastatin 10mg', genericName: 'Atorvastatin', sku: 'MED-ATOR-10', category: 'Cardiology', unit: 'tablet', reorderLevel: 40, currentStock: 35, price: 4.25 },
  });

  await prisma.invoice.upsert({
    where: { invoiceNumber: 'INV-SEED-001' },
    update: {},
    create: {
      invoiceNumber: 'INV-SEED-001',
      patientId: patientUser.patient.id,
      appointmentId: appointment.id,
      status: 'ISSUED',
      subtotal: 150,
      tax: 0,
      discount: 0,
      total: 150,
      dueDate: tomorrowAt(23, 59),
      items: { create: [{ description: 'Cardiology consultation', quantity: 1, unitPrice: 150, total: 150 }] },
    },
  });

  await prisma.announcement.create({
    data: {
      title: 'Welcome to MedCore Health HMS',
      body: 'The hospital management backend is ready with seeded demo data.',
      audience: 'ALL',
      publishedById: admin.id,
    },
  });

  await prisma.systemSetting.upsert({
    where: { key: 'hospital_profile' },
    update: {},
    create: {
      key: 'hospital_profile',
      category: 'general',
      value: { name: 'MedCore Health', timezone: 'Asia/Kolkata', emergencyPhone: '+1-555-911' },
    },
  });

  console.log('Database seeded successfully');
  console.log('Demo users: admin@medcore.test, doctor@medcore.test, patient@medcore.test');
  console.log('Password for all demo users: Password@123');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
