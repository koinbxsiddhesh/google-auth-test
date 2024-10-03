// app/api/auth/callback/route.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { OAuth2Client } from 'google-auth-library';
import { NextResponse } from 'next/server';

const client = new OAuth2Client('422653780828-djdcn61s7f1ifculsfgb6ihsi6e0s2f3.apps.googleusercontent.com'); // Replace with your client ID

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  console.log('req line 14',req);
  
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ success: false, message: 'idToken is required' });
  }

  return handleSignIn(idToken, res);
}

async function handleSignIn(idToken: string, res: NextApiResponse) {
  try {
    // Verify the token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: '422653780828-djdcn61s7f1ifculsfgb6ihsi6e0s2f3.apps.googleusercontent.com',
    });

    const payload = ticket.getPayload();
    console.log('User Info:', payload);

    // Here you can manage user data, e.g., create a session or store user data in your database

    // Redirect to a callback page with a success message
    const redirectUrl = '/callback'; // Change this to your desired callback URL
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('Error verifying ID token:', error);
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }
}
