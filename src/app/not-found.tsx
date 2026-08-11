import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export default function NotFound() {
  return (
    <>
      <PageBanner
        compact
        eyebrow="Not Found"
        title="This Page Does Not Exist."
        lead="The page you asked for is not here. The capital solutions, property types and transaction submission are all a click away."
      />

      <section className="section--tight">
        <div className="shell" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--aubergine">
            Return Home
          </Link>
          <Link href="/contact" className="btn btn--outline" style={{ color: 'var(--aubergine)', borderColor: 'var(--rule)' }}>
            Discuss a Transaction
          </Link>
        </div>
      </section>
    </>
  );
}
