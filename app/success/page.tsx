'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl">
            ✓
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          Payment Successful!
        </h1>

        <p className="text-slate-300 mb-2">
          Your subscription is now active. You can start using LeadPilot immediately.
        </p>

        <p className="text-sm text-slate-400 mb-8">
          Session ID: {sessionId}
        </p>

        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="block rounded-lg bg-slate-800 px-6 py-3 font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Need help? Email support@leadpilot.com or check our docs.
        </p>
      </div>
    </main>
  );
}
