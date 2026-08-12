import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { site } from '@/data/site';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Commercial Real Estate Capital Advisory`,
    template: `%s — ${site.name}`,
  },
  description:
    'Strategic debt placement for commercial real estate investors, owners and developers. Transactions from $1MM with no stated maximum, nationwide.',
  // Resolved per route against metadataBase, so every page gets its own canonical.
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: `${site.name} — Commercial Real Estate Capital Advisory`,
    description:
      'Strategic debt placement for commercial real estate investors, owners and developers. Transactions from $1MM with no stated maximum, nationwide.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
