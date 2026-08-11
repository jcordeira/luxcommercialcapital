import type { Metadata } from 'next';
import { PageBanner } from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'About',
  description:
    'LUX Commercial Capital is a commercial real estate capital advisory and debt placement firm serving owners, investors, developers, operators and sponsors nationwide.',
};

/** Leadership cards are placeholders until bios and credentials are supplied. */
const leadershipSlots = [1, 2, 3];

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
            <p className="body body--emphasis" style={{ fontSize: 'clamp(16px, 1.3vw, 18px)', lineHeight: 1.72 }}>
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

      <section className="on-off-white rule-top rule-bottom section--flush">
        <div className="shell stack" style={{ gap: 36 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontSize: 'clamp(26px, 3vw, 40px)',
                fontWeight: 400,
                color: 'var(--aubergine)',
              }}
            >
              Leadership
            </h2>
            <p className="placeholder-tag" style={{ margin: 0 }}>
              Awaiting bios and credentials
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(16px, 2vw, 24px)',
            }}
          >
            {leadershipSlots.map((slot) => (
              <div
                key={slot}
                className="stack"
                style={{
                  border: '1px solid var(--rule)',
                  background: 'var(--paper)',
                  padding: 'clamp(26px, 3vw, 36px)',
                  gap: 14,
                  minHeight: 200,
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    border: '1px solid var(--gold)',
                    background: 'var(--aubergine)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--display)',
                    fontSize: 18,
                    color: 'var(--paper)',
                    letterSpacing: '0.04em',
                    paddingLeft: '0.04em',
                  }}
                  aria-hidden="true"
                >
                  LC
                </span>
                <div className="stack" style={{ marginTop: 'auto', gap: 8 }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: 'var(--display)',
                      fontSize: 24,
                      color: 'var(--ink-text)',
                    }}
                  >
                    Name
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-grey)',
                    }}
                  >
                    Title
                  </p>
                  <p className="placeholder-value" style={{ margin: 0 }}>
                    bio placeholder
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
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
    </>
  );
}
