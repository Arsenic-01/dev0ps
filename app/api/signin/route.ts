import { createAdminClient } from '@/lib/appwrite';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { account } = await createAdminClient();
  const { email, password } = await request.json();

  try {
    const session = await account.createEmailPasswordSession(email, password);

    const maxAge = Math.floor(
      (new Date(session.expire).getTime() - Date.now()) / 1000
    );

    cookies().set('session', session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge,
      path: '/',
    });

    return Response.json({ status: 'success', msg: 'Session Established' });
  } catch (error: any) {
    if (
      error.message.includes(
        'A user with the same id, email, or phone already exists in this project.'
      )
    ) {
      return Response.json({ status: 'error', error: 'User already exists' });
    } else if (error.message.includes('Invalid credentials')) {
      return Response.json({ status: 'error', error: 'Invalid credentials' });
    } else if (error.message.includes('Invalid `password` param')) {
      return Response.json({
        status: 'error',
        error: 'Please Set a Strong Password',
      });
    } else {
      return Response.json({ status: 'error', error: error.message });
    }
  }
}
