# MedCore Health Backend

This backend is built for the existing MedCore Health React frontend.

## Architecture

- **Runtime:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** JWT bearer tokens with bcrypt password hashing
- **Validation:** Zod for important auth inputs
- **Security:** Helmet, CORS, rate limiting, request body limits

PostgreSQL is the best fit for this hospital-management project because the data is highly relational: users, patients, doctors, departments, appointments, medical records, lab orders, beds, inventory, invoices, and audit logs all need relationships, constraints, transactions, and reliable reporting.

## Main API Areas

Base URL: `http://localhost:5000/api/v1`

- `POST /auth/login`
- `POST /auth/register/patient`
- `GET /auth/me`
- `GET/POST/PATCH/DELETE /users`
- `GET/POST/PATCH/DELETE /patients`
- `GET/PATCH /doctors`
- `PATCH /doctors/:id/approval`
- `GET/POST/PATCH /appointments`
- `GET/POST/PATCH /medical/records`
- `GET/POST /medical/prescriptions`
- `GET/POST/PATCH /lab/orders`
- `GET/POST /lab/tests`
- `GET/POST /billing/invoices`
- `POST /billing/invoices/:id/payments`
- `GET/POST /facility/beds`
- `POST /facility/bed-assignments`
- `GET/POST /pharmacy/medicines`
- `POST /pharmacy/transactions`
- `GET/POST /communication/messages`
- `GET/POST /communication/notifications`
- `GET/POST /communication/announcements`
- `GET /dashboard/admin`
- `GET /dashboard/doctor`
- `GET /dashboard/patient`
- `GET /audit-logs`
- `GET/PUT /settings`

## Setup

1. Install PostgreSQL and create a database named `medcore_health`.
2. Copy the environment file:

```bash
copy .env.example .env
```

3. Update `DATABASE_URL` and `JWT_SECRET` in `.env`.
4. Install dependencies:

```bash
npm install
```

5. Create database tables:

```bash
npm run prisma:migrate -- --name init
```

6. Seed demo data:

```bash
npm run db:seed
```

7. Start the backend:

```bash
npm run dev
```

## Demo Accounts

All demo accounts use password `Password@123`.

- **Admin:** `admin@medcore.test`
- **Doctor:** `doctor@medcore.test`
- **Patient:** `patient@medcore.test`

## Login Request Example

```json
{
  "identifier": "admin@medcore.test",
  "password": "Password@123",
  "role": "ADMIN"
}
```

Use the returned token as:

```http
Authorization: Bearer YOUR_TOKEN
```

## Frontend Integration

Your Vite frontend runs on `http://127.0.0.1:3000`, which is already allowed by `CLIENT_ORIGIN` in `.env.example`.

Recommended frontend environment variable:

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```
