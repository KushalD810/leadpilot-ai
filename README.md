import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      businessName = 'Your business',
      customerName = 'Customer',
      service = 'general service',
      message = '',
    } = body || {};

    const urgent = message.toLowerCase().includes('urgent') || message.toLowerCase().includes('today') || message.toLowerCase().includes('asap');
    const leadScore = urgent ? 'High' : 'Medium';
    const nextStep = urgent ? 'Dispatch a technician and confirm availability immediately' : 'Send a quote and follow up within 30 minutes';
    const followUp = urgent ? 'Call the customer in 10 minutes and confirm ETA' : 'Send a follow-up email with a quote summary';

    const reply = `Hi ${customerName},\n\nThanks for reaching out to ${businessName}. We can help with ${service}. We’re happy to review your request and get back to you quickly. ${urgent ? 'Because this looks time-sensitive, we can prioritize your request and check the fastest available appointment.' : 'We’ll review the details and provide the best next step shortly.'}\n\nPlease reply with your preferred time window or call us directly at the number on the website. We’ll confirm availability as soon as possible.\n\nBest,\n${businessName} Team`;

    return NextResponse.json({
      reply,
      summary: {
        leadScore,
        nextStep,
        followUp,
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        reply: 'We hit a temporary issue while generating the response. Please try again soon.',
        summary: {
          leadScore: 'High',
          nextStep: 'Retry manually',
          followUp: 'Check lead queue in 10 minutes',
        },
      },
      { status: 200 }
    );
  }
}
