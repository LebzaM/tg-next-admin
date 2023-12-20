
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/prisma/client';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
          password: { label: 'Password', type: 'password' },
        },
        authorize: async (credentials) => {
          const { email, password } = credentials ?? { email: 'hr@admin.com', password: 'Test1234' }; // Provide default values
        
          const user = await prisma.user.findUnique({
            where: { email },
          });
        
          if (user && user.password === password) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        },
      }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
      callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
          // Add role to the token
          if (user) {
            token.role = user.role;
          }
          return token;
        },
      },
    });