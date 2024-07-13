import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background from '../components/background';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jasonlange.dev',
  description: 'Jason Lange | Senior Full-Stack Developer',
  openGraph: {
    title: 'jasonlange.dev',
    description: 'Jason Lange | Senior Full-Stack Developer',
    url: 'https://jasonlange.dev',
    siteName: 'jasonlange.dev',
    images: '/og.png',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        {children}

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
