import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { automationServices } from '@/app/config/services';
import { revampContent, siteConfig } from '@/app/config/site';

const recentRequests = new Map<string, { count: number; expires: number }>();

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json(
      { error: 'Please submit your inquiry from this website.' },
      { status: 403 },
    );
  }
  if (Number(request.headers.get('content-length')) > 16000) {
    return NextResponse.json(
      { error: 'Your inquiry is too long. Please shorten it and try again.' },
      { status: 413 },
    );
  }
  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 16000)
      return NextResponse.json(
        { error: 'Your inquiry is too long.' },
        { status: 413 },
      );
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json(
      { error: 'The inquiry could not be read. Please try again.' },
      { status: 400 },
    );
  }
  if (!body || typeof body !== 'object' || Array.isArray(body))
    return NextResponse.json(
      { error: 'Please provide a valid inquiry.' },
      { status: 400 },
    );
  const fields = body as Record<string, unknown>;
  if (typeof fields.website === 'string' && fields.website.trim())
    return NextResponse.json({ message: 'Inquiry received.' });
  const read = (key: string) =>
    typeof fields[key] === 'string' ? (fields[key] as string).trim() : '';
  const name = read('name'),
    email = read('email'),
    service = read('service') || 'not-sure',
    system = read('system');
  const volume = read('volume') || 'Not sure yet',
    deadline = read('deadline') || 'No fixed deadline',
    projectDetails = read('projectDetails');
  if (
    !name ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    !email ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    (fields.system !== undefined && typeof fields.system !== 'string') ||
    system.length > 300 ||
    projectDetails.length < 20 ||
    projectDetails.length > 5000 ||
    ['service', 'volume', 'deadline'].some(
      (field) =>
        fields[field] !== undefined && typeof fields[field] !== 'string',
    ) ||
    ![
      ...automationServices.map((item) => item.slug),
      'not-sure',
      'other',
    ].includes(service) ||
    !revampContent.contact.volumes.some((item) => item === volume) ||
    !revampContent.contact.deadlines.some((item) => item === deadline)
  ) {
    return NextResponse.json(
      {
        error:
          'Please check your name, email, and workflow details. Any additional fields must contain valid values.',
      },
      { status: 400 },
    );
  }
  // Basic per-instance throttling; production-wide limits can be supplied by the hosting edge.
  const now = Date.now();
  for (const [key, value] of recentRequests)
    if (value.expires < now) recentRequests.delete(key);
  const key = email.toLowerCase();
  const recent = recentRequests.get(key);
  if (recent && recent.count >= 3)
    return NextResponse.json(
      { error: 'Please wait a few minutes before sending another inquiry.' },
      { status: 429 },
    );
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      {
        error:
          'The inquiry form is temporarily unavailable. Please contact Nabeel by email.',
      },
      { status: 503 },
    );
  }
  recentRequests.set(key, {
    count: (recent?.count ?? 0) + 1,
    expires: recent?.expires ?? now + 10 * 60 * 1000,
  });
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const serviceName =
      automationServices.find((item) => item.slug === service)?.title ??
      (service === 'other' ? 'Another automation' : 'Not sure yet');
    const { error } = await resend.emails.send({
      from: `Beelodev Inquiry <${siteConfig.personal.email}>`,
      to: [siteConfig.personal.email],
      replyTo: email,
      subject: `Workflow inquiry: ${serviceName}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${serviceName}\nSystem: ${system || 'Not provided yet'}\nVolume: ${volume}\nDeadline: ${deadline}\n\nWorkflow and desired result:\n${projectDetails}`,
    });
    if (error) {
      console.error('Contact email delivery failed', { code: error.name });
      return NextResponse.json(
        {
          error:
            'Your inquiry could not be delivered. Please try again or contact Nabeel by email.',
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ message: 'Inquiry sent successfully.' });
  } catch {
    console.error('Contact email delivery failed unexpectedly');
    return NextResponse.json(
      {
        error:
          'Your inquiry could not be delivered. Please try again or contact Nabeel by email.',
      },
      { status: 500 },
    );
  }
}
