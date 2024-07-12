import { createSessionClient } from '@/lib/appwrite';

export async function GET(request) {
  const { account } = await createSessionClient(request);
  try {
    const user = await account.get();
    return Response.json(user);
  } catch (error) {
    console.log('error on user side wtf', error);

    return Response.json(error);
  }
}
