import { NextRequest, NextResponse } from 'next/server';

// Contact form API route
// This can be extended to integrate with Salesforce, SendGrid, or any other service

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send to Salesforce as a Lead
    // 3. Send confirmation email
    // 4. Notify the team

    // Example: Salesforce integration would go here
    // const sfResponse = await createSalesforceLead({
    //   FirstName: name.split(' ')[0],
    //   LastName: name.split(' ').slice(1).join(' ') || 'Unknown',
    //   Email: email,
    //   Phone: phone,
    //   Description: message,
    //   LeadSource: 'Website Contact Form',
    // });

    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, phone, message });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      data: {
        id: `contact-${Date.now()}`,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API is running. Use POST to submit a form.',
  });
}
