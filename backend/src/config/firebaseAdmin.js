import admin from 'firebase-admin';
import process from 'process';
import { env } from './env.js';
import { HttpError } from '../utils/httpError.js';

export function getFirebaseAdmin() {
  if (admin.apps.length) {
    return admin;
  }

  if (!env.firebaseProjectId) {
    throw new HttpError(500, 'Firebase project ID is not configured');
  }

  if (env.firebaseServiceAccountPath) {
    process.env.GOOGLE_APPLICATION_CREDENTIALS = env.firebaseServiceAccountPath;
  }

  if (env.firebaseClientEmail && env.firebasePrivateKey) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: env.firebaseProjectId,
        clientEmail: env.firebaseClientEmail,
        privateKey: env.firebasePrivateKey.replace(/\\n/g, '\n'),
      }),
      projectId: env.firebaseProjectId,
    });

    return admin;
  }

  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    projectId: env.firebaseProjectId,
  });

  return admin;
}

export async function verifyFirebaseIdToken(idToken) {
  try {
    return await getFirebaseAdmin().auth().verifyIdToken(idToken);
  } catch (error) {
    throw new HttpError(401, 'Invalid Firebase authentication token');
  }
}
