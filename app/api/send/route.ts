import { NextResponse } from 'next/server';
import ContactEmail from '@/emails/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

// Named export for POST method
export async function POST(request: Request) {
  const { email, name, subject, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'vedbhor25@gmail.com',
      subject: subject,
      text: message,
      react: ContactEmail({ name, email, subject, message }),
    });

    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
