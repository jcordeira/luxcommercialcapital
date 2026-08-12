import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, formatDate, getArticle, readingMinutes } from '@/content/insights';
import { site } from '@/data/site';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${site.url}/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.standfirst,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: article.title,
      description: article.standfirst,
      publishedTime: article.published,
      modifiedTime: article.updated ?? article.published,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${site.url}/insights/${article.slug}`;
  const others = articles.filter((other) => other.slug !== article.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.standfirst,
    datePublished: article.published,
    dateModified: article.updated ?? article.published,
    articleSection: article.category,
    inLanguage: 'en-US',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: site.name, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      logo: { '@type': 'ImageObject', url: `${site.url}/icon.svg` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="on-aubergine" style={{ padding: 'clamp(64px, 8vw, 110px) var(--pad-x)' }}>
        <div className="shell stack" style={{ gap: 22, maxWidth: '80ch' }}>
          <p className="eyebrow" style={{ margin: 0 }}>
            {article.category}
          </p>
          <h1
            className="h1 h1--page"
            style={{ color: 'var(--paper)', maxWidth: '24ch', fontSize: 'clamp(32px, 4.6vw, 62px)' }}
          >
            {article.title}
          </h1>
          <p className="lead lead--banner" style={{ maxWidth: '58ch' }}>
            {article.standfirst}
          </p>
          <p
            style={{
              margin: 0,
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted-grey)',
              paddingTop: 6,
            }}
          >
            <time dateTime={article.published}>{formatDate(article.published)}</time>
            <span style={{ color: 'var(--dark-rule-aubergine)' }} aria-hidden="true">
              •
            </span>
            <span>{readingMinutes(article)} min read</span>
          </p>
        </div>
      </section>

      <article className="section--tight">
        <div className="shell article-body">
          {article.blocks.map((block, index) => {
            if (block.type === 'h2') {
              return (
                <h2 key={index} className="article-h2">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={index} className="article-quote">
                  {block.text}
                </blockquote>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="article-list">
                  {block.items.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="article-p">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      <section className="on-off-white rule-top section--tight">
        <div className="shell stack" style={{ gap: 'clamp(32px, 4vw, 48px)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <h2 className="h2 h2--sm">Discuss a transaction.</h2>
            <Link href="/contact" className="btn btn--aubergine">
              Submit a Transaction
            </Link>
          </div>

          {others.length > 0 && (
            <div className="stack" style={{ gap: 0 }}>
              <p className="eyebrow eyebrow--tight" style={{ margin: '0 0 8px' }}>
                More insights
              </p>
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/insights/${other.slug}`}
                  className="split"
                  style={{
                    gap: 'clamp(16px, 3vw, 48px)',
                    padding: 'clamp(22px, 2.5vw, 30px) 0',
                    borderTop: '1px solid var(--rule)',
                  }}
                >
                  <span
                    className="split__narrow"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--muted-grey)',
                    }}
                  >
                    {other.category}
                  </span>
                  <span
                    className="split__wide"
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 'clamp(20px, 2vw, 26px)',
                      lineHeight: 1.25,
                      color: 'var(--ink-text)',
                    }}
                  >
                    {other.title}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
