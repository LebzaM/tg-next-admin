
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter'

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Login',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith@gmail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials):Promise<any> {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || user.password !== credentials.password) {
          return null;
        }

        // Only return the necessary user information
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // Make sure to include the role if it's part of your user model
        }
      },
    }),
  ],
  session: {
    jwt: true, // Use JWT for sessions
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };