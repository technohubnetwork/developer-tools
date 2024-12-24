import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tools | meghoshpritam',
  description: 'A collection of tools to make your web development easier.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Navigation /> */}
        <main className="min-h-[96dvh]">{children}</main>
        <Toaster />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
