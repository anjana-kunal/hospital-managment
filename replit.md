# MedCore Health - Hospital Management System

## Overview
Full-stack healthcare management platform (MedCore HMS) with a React frontend and Express/Prisma backend.

## Architecture

### Frontend (`/frontend`)
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Dev Port**: 5000 (webview)
- **Build**: `cd frontend && npm run dev`

### Backend (`/backend`)
- **Framework**: Express.js
- **ORM**: Prisma with PostgreSQL
- **Auth**: JWT (jsonwebtoken) + bcryptjs
- **Dev Port**: 3001 (console)
- **Build**: `cd backend && npm run dev`

## Key Configuration

### Vite Config (`frontend/vite.config.js`)
- Host: `0.0.0.0` (required for Replit proxy)
- Port: `5000` (webview)
- `allowedHosts: true` (bypasses host header verification)
- Proxy: `/api` and `/health` routes forwarded to `http://localhost:3001`

### Backend (`backend/src/app.js`)
- CORS: `CLIENT_ORIGIN=*` in dev allows all origins
- Trust proxy enabled for Replit's reverse proxy

## Environment Variables
| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Replit managed) |
| `JWT_SECRET` | Secret for signing JWT tokens (Replit secret) |
| `JWT_EXPIRES_IN` | Token expiry, default `7d` |
| `PORT` | Backend port, set to `3001` |
| `CLIENT_ORIGIN` | CORS origin, set to `*` in dev |
| `NODE_ENV` | `development` |
| `BCRYPT_SALT_ROUNDS` | Password hashing rounds, default `12` |

## Database
- Replit managed PostgreSQL
- Prisma schema at `backend/prisma/schema.prisma`
- Migrations at `backend/prisma/migrations/`
- Run migrations: `cd backend && npx prisma migrate deploy`
- Seed data: `cd backend && npm run db:seed`

## Workflows
- **Start application** — Frontend dev server (port 5000, webview)
- **Backend API** — Express API server (port 3001, console)

## Pages
The frontend has 44+ pages covering:
- Public: Landing, Login, Forgot Password, OTP Verification, Patient Registration
- Patient: Dashboard, Appointments, Medical History, Prescriptions, Lab Reports, Messages
- Doctor: Dashboard, Appointments Queue, Schedule Management, Patient Directory
- Admin: Dashboard, User Management, Doctor Approvals, Billing, Audit Logs, Reports

## API Routes (`/api/v1/`)
- `/auth` — Authentication (login, register, logout)
- `/users` — User management
- `/doctors` — Doctor management
- `/appointments` — Appointment CRUD
- `/medical` — Medical records
- `/lab` — Lab orders and tests
- `/billing` — Invoices and payments
- `/facility` — Beds, wards
- `/pharmacy` — Medicine inventory
- `/communication` — Messages, notifications, announcements
- `/dashboard` — Dashboard stats
- `/patients` — Patient CRUD
- `/departments` — Department CRUD
- `/schedule-slots` — Doctor schedule slots
- `/audit-logs` — Admin audit logs
- `/settings` — System settings

## Deployment
- Target: `autoscale`
- Build: `cd frontend && npm run build && cd ../backend && npm install && npx prisma generate`
- Run: `cd backend && node src/server.js`
