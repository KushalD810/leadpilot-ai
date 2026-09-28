'use client';

import { useState } from 'react';

export default function CheckoutButton({
  planName,
  priceId,
}: {
  planName: string;
  priceId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, planName }),
      });

      if (!response.ok) {
        throw new Error('Failed to start checkout');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout failed');
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-60 transition-colors"
      >
        {loading ? 'Loading...' : `Choose ${planName}`}
      </button>
      {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
    </>
  );
}
