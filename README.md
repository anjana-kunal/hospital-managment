# MedCore Health System

A comprehensive hospital management system with a React frontend and a Node.js/Express backend.

## Architecture

- **Frontend:** React + Vite, Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** JWT bearer tokens with bcrypt password hashing
- **Validation:** Zod
- **Security:** Helmet, CORS, rate limiting

## Setup Instructions

### Backend Setup

1. Install PostgreSQL and create a database named `medcore_health`.
2. Copy the environment file:
   ```bash
   cd backend
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

Backend runs on `http://localhost:5000`

### Frontend Setup

1. Copy the environment file:
   ```bash
   cd frontend
   copy .env.example .env
   ```
   (Make sure `VITE_API_BASE_URL=http://localhost:5000/api/v1` is set in your `.env`)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

Frontend runs on `http://127.0.0.1:3000`

## Demo Accounts

All demo accounts use the password: `Password@123`

- **Admin:** `admin@medcore.test`
- **Doctor:** `doctor@medcore.test`
- **Patient:** `patient@medcore.test`
