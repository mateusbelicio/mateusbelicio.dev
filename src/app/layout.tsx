import type { Metadata } from 'next';
import { Ibarra_Real_Nova, Public_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import { Toaster } from '@/components/ui/toaster';
import RootProviders from '@/components/providers';
import Main from '@/components/sections/main';

const fontSerif = Ibarra_Real_Nova({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const fontSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  title: { default: siteConfig.name, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  keywords: ['Mateus Belicio', 'developer', 'React', 'web', 'front-end'],
  authors: [{ name: 'Mateus Belício', url: 'https://mateusbelicio.dev' }],
  formatDetection: { telephone: false, date: false, email: false, address: false },
  creator: 'Mateus Belício',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: siteConfig.ogImage,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og.jpg'],
    creator: '@beliciomateus',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('bg-background font-sans antialiased', fontSerif.variable, fontSans.variable)}
      >
        <RootProviders>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </RootProviders>
        <Toaster />
        <SpeedInsights />
        <Analytics mode="production" />
      </body>
    </html>
  );
}
