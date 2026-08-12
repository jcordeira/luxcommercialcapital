import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'LUX Commercial Capital is a commercial real estate capital advisory and debt placement firm serving owners, investors, developers, operators and sponsors nationwide.',
};

const stats = [
  { figure: '$1MM', label: 'Minimum transaction' },
  { figure: 'No Ceiling', label: 'Institutional scale' },
  { figure: 'Nationwide', label: 'Capital access' },
  { figure: 'Full Stack', label: 'Debt solutions' },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About"
        title="Capital for Commercial Real Estate."
        lead="Structured around the deal."
      />

      <section className="section--tight">
        <div
          className="shell"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'start',
          }}
        >
          <div className="stack" style={{ gap: 20 }}>
            <p className="eyebrow eyebrow--tight" style={{ margin: 0 }}>
              The Firm
            </p>
            <h2 className="subhead" style={{ margin: 0, fontWeight: 400 }}>
              A capital advisory and debt placement firm.
            </h2>
          </div>
          <div className="stack measure-wide" style={{ gap: 22 }}>
            <p
              className="body body--emphasis"
              style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', lineHeight: 1.72 }}
            >
              LUX Commercial Capital is a commercial real estate capital advisory and debt placement
              firm providing financing solutions for commercial real estate owners, investors,
              developers, operators and sponsors nationwide.
            </p>
            <p className="body" style={{ fontSize: 15.5 }}>
              We advise and arrange debt across the capital stack, from conventional permanent
              financing and SBA loans to bridge, construction, transitional and private capital.
              Transactions begin at $1 million with no stated maximum.
            </p>
            <p className="body" style={{ fontSize: 15.5 }}>
              The firm sells expertise, access, structuring and execution — not loan products.
            </p>
          </div>
        </div>
      </section>

      <section className="on-off-white rule-top rule-bottom section--tight">
        <div
          className="shell"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 'clamp(28px, 4vw, 56px)',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stack" style={{ gap: 12 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(30px, 3.4vw, 44px)',
                  lineHeight: 1,
                  color: 'var(--aubergine)',
                }}
              >
                {stat.figure}
              </p>
              <p className="meta-label" style={{ margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section--tight">
        <div className="shell stack" style={{ gap: 24, alignItems: 'flex-start' }}>
          <h2 className="h2 h2--sm">Tell us the transaction.</h2>
          <p className="body measure-body">
            Submissions are reviewed by a capital advisor. Where a transaction is not a fit, we say
            so directly.
          </p>
          <Link href="/contact" className="btn btn--aubergine">
            Discuss a Transaction
          </Link>
        </div>
      </section>
    </>
  );
}
