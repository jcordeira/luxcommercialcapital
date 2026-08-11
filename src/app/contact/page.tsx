import type { Metadata } from 'next';
import { PageBanner } from '@/components/PageBanner';
import { TransactionForm } from '@/components/TransactionForm';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Submit a commercial real estate transaction to LUX Commercial Capital. Submissions are reviewed by a capital advisor.',
};

const details = [
  { label: 'Telephone', value: site.phone, href: `tel:${site.phone.replace(/-/g, '')}` },
  { label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { label: 'Office', value: site.office },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Submit a Transaction"
        title="Tell Us About the Deal."
        lead="Tell us about the property, the business plan and the capital requirement. We'll help determine the appropriate financing strategy."
      />

      <section className="section--flush">
        <div className="shell split" style={{ gap: 'clamp(40px, 6vw, 90px)' }}>
          <div className="stack split__narrow" style={{ gap: 30 }}>
            <div className="stack" style={{ gap: 12 }}>
              <p className="eyebrow eyebrow--tight" style={{ margin: 0 }}>
                Direct
              </p>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(24px, 2.6vw, 34px)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--aubergine)',
                }}
              >
                Speak with the firm
              </h2>
            </div>

            <div className="stack" style={{ gap: 18 }}>
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="stack"
                  style={{
                    gap: 5,
                    paddingBottom: 16,
                    borderBottom: '1px solid var(--rule-light)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 10.5,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-grey)',
                    }}
                  >
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a href={detail.href} style={{ fontSize: 16, color: 'var(--ink-text)' }}>
                      {detail.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: 16, color: 'var(--ink-text)' }}>{detail.value}</span>
                  )}
                </div>
              ))}
            </div>

            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.65,
                color: 'var(--body-grey)',
                fontWeight: 300,
                textWrap: 'pretty',
              }}
            >
              Submissions are reviewed by a capital advisor. Where a transaction is not a fit, we
              say so directly.
            </p>
          </div>

          <div className="split__wide">
            <TransactionForm />
          </div>
        </div>
      </section>
    </>
  );
}
