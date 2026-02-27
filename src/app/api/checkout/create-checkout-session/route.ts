import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2026-01-28.clover' as any,
});

export async function POST() {
    try {
        const session = await stripe.checkout.sessions.create({
            ui_mode: 'custom',
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'ProBio Premium Lifetime',
                            description: 'Lifetime access to all premium ProBio features.',
                        },
                        unit_amount: 19900, // $199.00
                    },
                    quantity: 1,
                },
            ],
            // We will point back to our local /checkout/return route
            return_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        return NextResponse.json({ client_secret: session.client_secret });
    } catch (err: any) {
        console.error('Error creating checkout session:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
