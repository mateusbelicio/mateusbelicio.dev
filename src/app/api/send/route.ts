import { NextResponse, type NextRequest } from 'next/server';

import { EmailTemplate } from '@/lib/emails/template';
import { resend } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { invitedByEmail, invitedByUserName, message } = body;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_TO,
      to: process.env.RESEND_TO,
      subject: '[M.DEV] New message',
      react: EmailTemplate({ invitedByEmail, invitedByUserName, message }),
    });

    if (error) throw error;

    return NextResponse.json({ message: 'success', data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'fail', error }, { status: 400 });
  }
}
