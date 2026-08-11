import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Received',
  description: 'Your submission has reached LUX Commercial Capital.',
  robots: { index: false, follow: false },
};

/**
 * Where the browser lands when a form is submitted without JavaScript. With
 * JavaScript the sender stays on the form and sees the inline confirmation.
 */
export default function ThankYouPage() {
  return (
    <>
      <PageBanner
        compact
        eyebrow="Received"
        title="Thank You."
        lead="Your submission has reached the firm. A capital advisor will follow up directly, usually the same business day."
      />

      <section className="section--tight">
        <div className="shell stack" style={{ gap: 28, alignItems: 'flex-start' }}>
          <p className="body measure-body">
            If the transaction is time-sensitive, call {site.phone} or email {site.email} and
            reference your submission.
          </p>
          <Link href="/" className="btn btn--aubergine">
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
