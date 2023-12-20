export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard/user', '/dashboard/user[id]'],
};