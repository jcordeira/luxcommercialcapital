import type { Metadata } from 'next';
import { PageBanner } from '@/components/PageBanner';
import { insightSlots } from '@/data/site';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Commentary on debt markets, structure and execution for commercial real estate sponsors.',
};

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Insights"
        title="Notes on the Capital Markets."
        lead="Commentary on debt markets, structure and execution for commercial real estate sponsors."
      />

      <section className="section--flush">
        <div className="shell stack" style={{ gap: 28 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 20,
              flexWrap: 'wrap',
              paddingBottom: 8,
            }}
          >
            <p className="eyebrow eyebrow--tight" style={{ margin: 0 }}>
              Latest
            </p>
            <p className="placeholder-tag" style={{ margin: 0 }}>
              Article slots — copy to be supplied
            </p>
          </div>

          <div className="stack">
            {insightSlots.map((slot, index) => (
              <article
                key={slot.category}
                className="split"
                style={{
                  gap: 'clamp(16px, 3vw, 48px)',
                  padding: 'clamp(28px, 3vw, 40px) 0',
                  borderTop: '1px solid var(--rule)',
                  borderBottom:
                    index === insightSlots.length - 1 ? '1px solid var(--rule)' : undefined,
                }}
              >
                <p
                  className="split__narrow"
                  style={{
                    margin: 0,
                    fontSize: 11,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--muted-grey)',
                  }}
                >
                  {slot.category}
                </p>
                <div className="stack split__wide" style={{ gap: 10 }}>
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: 'var(--display)',
                      fontSize: 'clamp(22px, 2.4vw, 32px)',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: 'var(--ink-text)',
                    }}
                  >
                    Article headline
                  </h2>
                  <p className="body body--row" style={{ maxWidth: '62ch' }}>
                    Standfirst — two lines summarising the piece.
                  </p>
                </div>
                <p className="placeholder-value split__trailing" style={{ margin: 0 }}>
                  date
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
