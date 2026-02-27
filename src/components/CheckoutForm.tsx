"use client";

import React, { useState } from "react";
import { useCheckout, PaymentElement } from "@stripe/react-stripe-js/checkout";

export default function CheckoutForm() {
    const checkoutState = useCheckout();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState<string | null>(null);

    if (checkoutState.type === "loading") {
        return <div className="text-slate-400 p-4">Loading payment details...</div>;
    }

    if (checkoutState.type === "error") {
        return <div className="text-red-500 p-4">Error: {checkoutState.error.message}</div>;
    }

    const { checkout } = checkoutState;

    const handleEmailBlur = async () => {
        if (!email) return;
        const result = await checkout.updateEmail(email);
        if (result.type === "error") {
            setEmailError(result.error.message || "Invalid email format");
        } else {
            setEmailError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setEmailError("Email is required");
            return;
        }

        setLoading(true);
        setError(null);

        const result = await checkout.confirm();
        if (result.type === "error") {
            setError(result.error.message || "An error occurred");
            setLoading(false);
        }
        // If successful, Stripe automatically redirects to the return_url
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
                <h3 className="text-sm font-medium text-slate-300 mb-2">Order Summary</h3>
                <div className="flex justify-between items-center text-slate-50">
                    <span>{(checkout as any)?.lineItems?.[0]?.name || "ProBio Premium"}</span>
                    <span className="font-semibold">
                        {(((checkout as any)?.total?.total?.amount ?? 0) / 100).toLocaleString("en-US", {
                            style: "currency",
                            currency: ((checkout as any)?.total?.total?.currency ?? "usd").toLowerCase(),
                        })}
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(null);
                    }}
                    onBlur={handleEmailBlur}
                    className="w-full bg-slate-800 border-none rounded-lg p-3 text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-brand-amber transition-shadow outline-none"
                    placeholder="you@example.com"
                    required
                />
                {emailError && <p className="text-sm text-red-500">{emailError}</p>}
            </div>

            <PaymentElement
                options={{
                    layout: 'accordion',
                }}
            />

            {error && (
                <div className="text-red-400 text-sm mt-4 bg-red-950/30 p-3 rounded-md">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 bg-brand-amber hover:bg-yellow-400 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
}
