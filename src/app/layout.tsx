import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Background from './background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'jasonlange.dev',
  description: 'Jason Lange',
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
      </body>
    </html>
  );
}
