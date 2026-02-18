import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, budget, service, projectDetails } = body;

        // Validate required fields
        if (!name || !email || !budget || !service || !projectDetails) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Send email using Resend
        // Using verified domain email address
        const { data, error } = await resend.emails.send({
            from: 'BeeloDev Contact Form <support@beelodev.com>',
            to: ['support@beelodev.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Budget Range:</strong> ${budget}</p>
                        <p><strong>Service:</strong> ${service}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #333;">Project Details:</h3>
                        <p style="white-space: pre-wrap; color: #555;">${projectDetails}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
                        <p>This email was sent from the BeeloDev contact form.</p>
                    </div>
                </div>
            `,
            replyTo: email, // This allows you to reply directly to the sender
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
