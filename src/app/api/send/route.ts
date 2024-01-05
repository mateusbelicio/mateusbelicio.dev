import { NextResponse, type NextRequest } from 'next/server';

import { EmailTemplate } from '@/lib/emails/template';
import { resend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userEmail, userName, message } = body;

    const { data, error } = await resend.emails.send({
      from: `${userName} <onboarding@resend.dev>`,
      to: process.env.RESEND_TO,
      reply_to: userEmail,
      subject: '[M.DEV] New message',
      react: EmailTemplate({ userEmail, userName, message }),
    });

    if (error) throw error;

    return NextResponse.json({ message: 'success', data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'fail', error }, { status: 400 });
  }
}
