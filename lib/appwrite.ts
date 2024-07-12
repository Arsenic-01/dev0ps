'use server';
import { Client, Account } from 'node-appwrite';
import { cookies } from 'next/headers';
import { account, client } from './appwrite.config';

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;
const PROJECT_ID = process.env.PROJECT_ID;

const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(process.env.API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
  };
};

const createSessionClient = async (request) => {
  const client = new Client().setEndpoint(ENDPOINT!).setProject(PROJECT_ID!);

  const session = request.cookies.get('session');
  if (session) {
    client.setSession(session.value);
  }
  return {
    get account() {
      return new Account(client);
    },
  };
};

const deleteSessionClient = async () => {
  try {
    const result = await account.deleteSession('current');
    return result;
  } catch (error) {
    console.log('error on delete session wtf', error);
  }
};

export { createAdminClient, createSessionClient, deleteSessionClient };
