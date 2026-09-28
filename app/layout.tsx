import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LeadPilot - AI Lead Assistant for Local Businesses',
  description: 'Automate lead follow-ups with AI-powered responses',
  keywords: ['AI', 'lead generation', 'business automation', 'local business'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
