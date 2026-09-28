import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature') || '';

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );

    switch (event.type) {
      case 'checkout.session.completed':
        // Handle successful checkout
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('Payment successful for session:', session.id);
        // TODO: Create user account, assign subscription, send confirmation email
        break;

      case 'customer.subscription.updated':
        // Handle subscription changes
        const subscription = event.data.object as Stripe.Subscription;
        console.log('Subscription updated:', subscription.id);
        // TODO: Update user's plan, handle downgrades/upgrades
        break;

      case 'customer.subscription.deleted':
        // Handle subscription cancellation
        const deletedSub = event.data.object as Stripe.Subscription;
        console.log('Subscription cancelled:', deletedSub.id);
        // TODO: Deactivate account, notify user
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}
