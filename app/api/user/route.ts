import { createSessionClient } from '@/lib/appwrite';

export async function GET(request?: any | null) {
  const { account } = await createSessionClient(request);
  try {
    const user = await account.get();
    return Response.json({ user: user, status: 'success' });
  } catch (error) {
    console.log('error while getting user from appwrite', error);

    return Response.json({ error: error, status: 'error' });
  }
}
