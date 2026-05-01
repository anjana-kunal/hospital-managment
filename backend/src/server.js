import { prisma } from './config/prisma.js';
import { env, validateEnv } from './config/env.js';
import { createApp } from './app.js';

validateEnv();

const app = createApp();
const server = app.listen(env.port, () => {
  console.log(`MedCore Health API listening on port ${env.port}`);
});

async function shutdown(signal) {
  console.log(`${signal} received. Shutting down API server...`);
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
