import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy', {
    apiVersion: '2023-10-16' as any,
});

export async function POST() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const supabase = await createClient();
        const { data: profile } = await supabase
            .from('profiles')
            .select('stripe_customer_id')
            .eq('user_id', userId)
            .single();

        if (!profile || !profile.stripe_customer_id) {
            return new NextResponse('No Stripe customer found for user.', { status: 404 });
        }

        const returnUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard/settings`;

        const session = await stripe.billingPortal.sessions.create({
            customer: profile.stripe_customer_id,
            return_url: returnUrl,
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error('Error creating portal session:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
