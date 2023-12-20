import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export async function dashboardMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getSession({ req });

  // Redirect unauthenticated users to the login page
  if (!session) {
    res.writeHead(302, { Location: '/login' });
    res.end();
    return;
  }

  // Continue to the next middleware or handler
}

export default dashboardMiddleware