import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { solutionFamilies } from '@/data/site';

export const metadata: Metadata = {
  title: 'Capital Solutions',
  description:
    'Debt advisory and placement across the commercial real estate capital stack: permanent, bank, CMBS, SBA, agency, bridge, construction, value-add, private credit and special situations.',
};

export default function CapitalSolutionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Capital Solutions"
        title="Structured Around the Deal."
        lead="LUX Commercial Capital advises and arranges debt across the commercial real estate capital stack, from conventional permanent financing and SBA loans to bridge, construction, transitional and private capital."
      />

      <section className="section--tight">
        <div className="shell stack" style={{ gap: 'clamp(56px, 7vw, 96px)' }}>
          {solutionFamilies.map((family) => (
            <div key={family.eyebrow} className="split" style={{ gap: 'clamp(32px, 4vw, 64px)' }}>
              <div className="stack split__narrow" style={{ gap: 12 }}>
                <p className="eyebrow eyebrow--tight" style={{ margin: 0 }}>
                  {family.eyebrow}
                </p>
                <h2 className="subhead subhead--family" style={{ margin: 0, fontWeight: 400 }}>
                  {family.name}
                </h2>
              </div>

              <div
                className="stack split__wide"
                style={{ gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)' }}
              >
                {family.products.map((product) => (
                  <div
                    key={product.name}
                    className="stack"
                    style={{ background: 'var(--paper)', padding: '26px 28px', gap: 9 }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontFamily: 'var(--display)',
                        fontSize: 22,
                        fontWeight: 400,
                        color: 'var(--ink-text)',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p className="body body--row">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="on-ink section--tight">
        <div
          className="shell"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--display)',
              fontSize: 'clamp(26px, 3.4vw, 44px)',
              lineHeight: 1.1,
              color: 'var(--paper)',
              maxWidth: '24ch',
            }}
          >
            Tell us the transaction. We&rsquo;ll tell you the market.
          </p>
          <Link href="/contact" className="btn btn--gold">
            Discuss a Transaction
          </Link>
        </div>
      </section>
    </>
  );
}
