import type { Metadata, Viewport } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aureliajewels.com'),
  title: 'Aurelia Jewels | Heritage & Contemporary Fine Jewelry',
  description:
    'Timeless pieces, thoughtfully crafted for every unforgettable moment. An intimate dialogue between sovereign Indian goldsmithing and modern restraint.',
  keywords: [
    'luxury jewelry',
    'solitaire rings',
    'south sea pearls',
    '925 sterling silver',
    'BIS hallmarked jewelry',
    'Aurelia Jewels',
  ],
  openGraph: {
    title: 'Aurelia Jewels | Sovereign Indian Goldsmithing & Modern Restraint',
    description:
      'Timeless pieces, thoughtfully crafted for every unforgettable moment. Certified BIS hallmarked 925 silver and sovereign gold.',
    url: 'https://aureliajewels.com',
    siteName: 'Aurelia Jewels',
    images: [
      {
        url: '/images/hero-muse.webp',
        width: 1200,
        height: 630,
        alt: 'Aurelia Jewels Campaign Muse',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelia Jewels | Fine Jewelry Atelier',
    description:
      'Timeless pieces, thoughtfully crafted for every unforgettable moment.',
    images: ['/images/hero-muse.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${manrope.variable} ${playfair.variable}`}>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary selection:text-on-secondary">
        {children}
      </body>
    </html>
  );
}
