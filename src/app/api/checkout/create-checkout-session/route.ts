import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
    apiVersion: '2026-01-28.clover' as any,
});

export async function POST() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const headersList = await headers();
        const host = headersList.get('host');
        const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
        const baseUrl = `${protocol}://${host}`;

        const supabase = await createClient();
        const { data: profile } = await supabase
            .from('profiles')
            .select('stripe_customer_id, business_name')
            .eq('user_id', userId)
            .single();

        let customerId = profile?.stripe_customer_id;

        if (!customerId) {
            // Create a new Stripe customer
            const customer = await stripe.customers.create({
                metadata: {
                    userId: userId,
                },
                name: profile?.business_name || 'ProBio User',
            });
            customerId = customer.id;

            // Save the customer ID to the profile
            await supabase
                .from('profiles')
                .update({ stripe_customer_id: customerId })
                .eq('user_id', userId);
        }

        const session = await stripe.checkout.sessions.create({
            client_reference_id: userId,
            customer: customerId,
            mode: 'subscription',
            payment_method_types: ['card'],
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID,
                    quantity: 1,
                },
            ],
            // Point back to our local /checkout/return route using dynamic base URL
            success_url: `${baseUrl}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/dashboard/settings`,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Error creating checkout session:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
