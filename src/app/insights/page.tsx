import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { articles, formatDate, readingMinutes } from '@/content/insights';

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
          <p className="eyebrow eyebrow--tight" style={{ margin: 0, paddingBottom: 8 }}>
            Latest
          </p>

          <div className="stack">
            {articles.map((article, index) => (
              <article
                key={article.slug}
                className="split"
                style={{
                  gap: 'clamp(16px, 3vw, 48px)',
                  padding: 'clamp(28px, 3vw, 40px) 0',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: index === articles.length - 1 ? '1px solid var(--rule)' : undefined,
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
                  {article.category}
                </p>

                <div className="stack split__wide" style={{ gap: 10 }}>
                  <h2 style={{ margin: 0, fontWeight: 400 }}>
                    <Link
                      href={`/insights/${article.slug}`}
                      style={{
                        fontFamily: 'var(--display)',
                        fontSize: 'clamp(22px, 2.4vw, 32px)',
                        lineHeight: 1.2,
                        color: 'var(--ink-text)',
                      }}
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="body body--row" style={{ maxWidth: '62ch' }}>
                    {article.standfirst}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-grey)',
                    }}
                  >
                    {readingMinutes(article)} min read
                  </p>
                </div>

                <p
                  className="split__trailing"
                  style={{ margin: 0, fontSize: 13, color: 'var(--muted-grey)' }}
                >
                  <time dateTime={article.published}>{formatDate(article.published)}</time>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="on-off-white rule-top section--tight">
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
              fontSize: 'clamp(24px, 3vw, 38px)',
              lineHeight: 1.15,
              color: 'var(--aubergine)',
              maxWidth: '24ch',
            }}
          >
            Tell us the transaction. We&rsquo;ll tell you the market.
          </p>
          <Link href="/contact" className="btn btn--aubergine">
            Discuss a Transaction
          </Link>
        </div>
      </section>
    </>
  );
}
