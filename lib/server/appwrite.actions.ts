// src/lib/server/appwrite.js
'use server';
import { Client, Account } from 'node-appwrite';
import { cookies } from 'next/headers';

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;

export async function createSessionClient1() {
  const client = new Client().setEndpoint(ENDPOINT!).setProject(PROJECT_ID!);

  const session = cookies().get('session');
  if (!session || !session.value) {
    throw new Error('No session');
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}
