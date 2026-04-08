'use server';

import { createSession, deleteSession } from '@/app/lib/session';
import { redirect } from 'next/navigation';

interface StaffCredential {
  username: string;
  password: string;
}

function getStaffCredentials(): StaffCredential[] {
  const raw = process.env.STAFF_CREDENTIALS;
  if (!raw) {
    console.error('STAFF_CREDENTIALS env var is not set');
    return [];
  }
  try {
    return JSON.parse(raw);
  } catch {
    console.error('STAFF_CREDENTIALS env var is not valid JSON');
    return [];
  }
}

export async function login(
  _prevState: { error: string } | undefined,
  formData: FormData
): Promise<{ error: string } | undefined> {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return { error: 'Please enter both username/email and password.' };
  }

  const credentials = getStaffCredentials();
  const match = credentials.find(
    (cred) =>
      (cred.username.toLowerCase() === username.toLowerCase()) &&
      cred.password === password
  );

  if (!match) {
    return { error: 'Invalid username or password. Please try again.' };
  }

  await createSession(match.username);
  redirect('/staff-portal');
}

export async function logout() {
  await deleteSession();
  redirect('/staff-login');
}
