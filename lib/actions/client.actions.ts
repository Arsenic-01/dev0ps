'use server';

import { Query, ID } from 'node-appwrite';

import { DATABASE_ID, CLIENT_ID, databases, users } from '../appwrite.config';
import { parseStringify } from '../utils';
import { CreateUserParams } from '@/types';
import GeneratedUserId from './generateUserId';

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      GeneratedUserId(),
      user.email,
      user.phone,
      user.password,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error.code === 409) {
      return error.message;
    }

    console.error('An error occurred while creating a new user:', error);
  }
};

// CREATE USER DOCUMENT

export const registerUserDocument = async ({ ...user }: CreateUserParams) => {
  try {
    // Create new user document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newUser = await databases.createDocument(
      DATABASE_ID!,
      CLIENT_ID!,
      ID.unique(),
      {
        ...user,
      }
    );

    return parseStringify(newUser);
  } catch (error) {
    console.error('An error occurred while creating a new user:', error);
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      'An error occurred while retrieving the user details:',
      error
    );
  }
};

// GET CLIENT
export const getClient = async (userId: string) => {
  try {
    const clients = await databases.listDocuments(DATABASE_ID!, CLIENT_ID!, [
      Query.equal('userId', [userId]),
    ]);

    return parseStringify(clients.documents[0]);
  } catch (error) {
    console.error(
      'An error occurred while retrieving the client details:',
      error
    );
  }
};
