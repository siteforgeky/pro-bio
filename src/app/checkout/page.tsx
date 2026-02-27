"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutProvider } from "@stripe/react-stripe-js/checkout";
import CheckoutForm from "@/components/CheckoutForm";

// Replace with your actual valid test key during testing if empty 
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/checkout/create-checkout-session", {
            method: "POST",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.client_secret) {
                    setClientSecret(data.client_secret);
                } else if (data.error) {
                    setError(data.error);
                }
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <h1 className="text-2xl font-bold text-slate-50 mt-2 mb-6 text-center">Checkout</h1>

                {error ? (
                    <div className="p-4 text-red-500 bg-red-950/20 rounded-xl text-center">
                        <p className="font-semibold">Configuration Error:</p>
                        <p className="text-sm mt-1">{error}</p>
                    </div>
                ) : !clientSecret ? (
                    <div className="p-8 text-center text-slate-400 flex flex-col items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-r-2 border-t-2 border-brand-amber animate-spin mb-4" />
                        Loading checkout...
                    </div>
                ) : (
                    <CheckoutProvider
                        stripe={stripePromise}
                        options={{
                            clientSecret,
                            elementsOptions: {
                                appearance: {
                                    theme: 'night',
                                    variables: {
                                        colorPrimary: '#f59e0b',
                                        colorBackground: '#1e293b',
                                        colorText: '#f8fafc',
                                        colorDanger: '#ef4444',
                                        fontFamily: 'system-ui, sans-serif',
                                        spacingUnit: '4px',
                                        borderRadius: '8px',
                                    }
                                }
                            }
                        }}
                    >
                        <CheckoutForm />
                    </CheckoutProvider>
                )}
            </div>
        </div>
    );
}
