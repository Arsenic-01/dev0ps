///@ts-nocheck

import { createAdminClient } from '@/lib/appwrite';
import { LoginUserParams } from '@/types';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { account } = await createAdminClient();
  const { email, password } = await request.json();
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log('im ahere');

    cookies().set('session', session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: new Date(session.expire),
      path: '/',
    });

    return Response.json({ msg: 'Session Estrablished' });
  } catch (error) {
    Response.json({ error: error.message });
  }
}
