import Link from 'next/link';
import {
  advisoryConcepts,
  capitalSources,
  propertyTypeNames,
  selectedTransactions,
  site,
  solutionsPreview,
} from '@/data/site';

/** Entity markup so search engines can attach the firm to its name and contacts. */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: site.name,
  url: site.url,
  description:
    'Commercial real estate capital advisory and debt placement. Transactions from $1MM with no stated maximum, nationwide.',
  logo: `${site.url}/icon.svg`,
  telephone: site.phone,
  email: site.email,
  areaServed: 'US',
  address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: site.phone,
    email: site.email,
    areaServed: 'US',
    availableLanguage: 'English',
  },
  knowsAbout: [
    'Commercial real estate financing',
    'Debt placement',
    'Bridge loans',
    'Construction financing',
    'SBA 504 and 7(a) loans',
    'Agency and multifamily lending',
    'CMBS',
    'Private credit',
  ],
};

const creditCells = [
  { figure: '$1MM+', label: 'Minimum Financing' },
  { figure: 'Nationwide', label: 'Capital Access' },
  { figure: 'Full Capital Stack', label: 'Debt Solutions' },
  { figure: 'No Stated', label: 'Maximum' },
];

const approachColumns = [
  {
    number: '01',
    name: 'Underwrite',
    body: 'We evaluate the property, sponsorship, cash flow, business plan and capital requirements.',
  },
  {
    number: '02',
    name: 'Structure',
    body: 'We determine the financing structure best aligned with the transaction and sponsor objectives.',
  },
  {
    number: '03',
    name: 'Position',
    body: 'We prepare and position the opportunity for the appropriate segment of the lending market.',
  },
  {
    number: '04',
    name: 'Place',
    body: 'We identify, negotiate and coordinate with capital sources through closing.',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* 1 — Hero */}
      <section
        className="on-aubergine"
        style={{
          padding: 'clamp(88px, 13vw, 180px) var(--pad-x) clamp(64px, 8vw, 110px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="shell stack" style={{ gap: 'clamp(36px, 5vw, 64px)' }}>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 18 }}>
            <span
              style={{ width: 'clamp(28px, 5vw, 64px)', height: 1, background: 'var(--gold)' }}
            />
            <span className="eyebrow eyebrow--wide">Commercial Real Estate Capital Advisory</span>
          </p>

          <h1 className="h1 measure-hero" style={{ color: 'var(--paper)' }}>
            Capital Without Boundaries.
          </h1>

          <p className="lead measure-lead" style={{ color: 'var(--lavender-on-dark)' }}>
            Strategic debt placement for commercial real estate investors, owners and developers.
            From $1MM transactions to institutional-scale financings, LUX Commercial Capital
            structures and sources capital around the needs of the deal.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--gold">
              Discuss a Transaction
            </Link>
            <Link href="/capital-solutions" className="btn btn--outline">
              Explore Financing Solutions
            </Link>
          </div>

          <p
            style={{
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(14px, 2vw, 26px)',
              flexWrap: 'wrap',
              fontSize: 'clamp(10.5px, 1vw, 12.5px)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted-grey)',
              paddingTop: 'clamp(12px, 2vw, 24px)',
            }}
          >
            <span>$1MM Minimum Loan Size</span>
            <span style={{ color: 'var(--dark-rule-aubergine)' }} aria-hidden="true">
              •
            </span>
            <span>Nationwide Capital Access</span>
            <span style={{ color: 'var(--dark-rule-aubergine)' }} aria-hidden="true">
              •
            </span>
            <span>No Stated Maximum</span>
          </p>
        </div>

        <div
          className="shell"
          style={{
            marginTop: 'clamp(48px, 7vw, 96px)',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <span className="scroll-hairline" aria-hidden="true" />
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--dim-on-dark)',
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* 2 — Credibility strip */}
      <section className="rule-bottom">
        <div className="shell" style={{ padding: '0 var(--pad-x)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            }}
          >
            {creditCells.map((cell, index) => (
              <div
                key={cell.label}
                style={{
                  padding: `clamp(34px, 4vw, 52px) 24px clamp(34px, 4vw, 52px) ${
                    index === 0 ? '0' : 'clamp(20px, 3vw, 44px)'
                  }`,
                  borderRight:
                    index === creditCells.length - 1 ? undefined : '1px solid var(--rule-light)',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    lineHeight: 1,
                    color: 'var(--aubergine)',
                  }}
                >
                  {cell.figure}
                </p>
                <p className="meta-label" style={{ margin: '12px 0 0' }}>
                  {cell.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Introduction */}
      <section className="section">
        <div
          className="shell"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'start',
          }}
        >
          <h2 className="h2 h2--intro">
            More Than Financing.
            <br />
            Capital Strategy.
          </h2>
          <div className="stack" style={{ gap: 26, maxWidth: '62ch' }}>
            <p className="body body--emphasis">
              Every commercial real estate transaction has a different capital requirement.
            </p>
            <p className="body">
              LUX Commercial Capital works with owners, investors, developers and operators to
              identify, structure and place debt across an extensive network of banks, credit
              unions, agency lenders, debt funds, private lenders and specialty capital providers.
            </p>
            <p className="body">We don&rsquo;t force transactions into a single lending box.</p>
            <p className="pullquote">
              We build the capital strategy around the transaction.
            </p>
          </div>
        </div>
      </section>

      {/* 4 — Capital Solutions preview */}
      <section
        className="on-off-white rule-top rule-bottom"
        style={{ padding: 'clamp(80px, 10vw, 150px) var(--pad-x)' }}
      >
        <div className="shell stack" style={{ gap: 'clamp(44px, 5vw, 72px)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            <div className="stack" style={{ gap: 16 }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                Capital Solutions
              </p>
              <h2 className="h2 h2--md">Across the Capital Stack.</h2>
            </div>
            <Link href="/capital-solutions" className="rule-link">
              All fifteen solutions
            </Link>
          </div>

          <div className="cell-grid cell-grid--cards">
            {solutionsPreview.map((solution) => (
              <div
                key={solution.number}
                className="stack"
                style={{
                  background: 'var(--paper)',
                  padding: 'clamp(26px, 3vw, 38px)',
                  gap: 12,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 10,
                    letterSpacing: '0.24em',
                    color: 'var(--gold)',
                  }}
                >
                  {solution.number}
                </p>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: 'var(--display)',
                    fontSize: 24,
                    fontWeight: 400,
                    lineHeight: 1.2,
                    color: 'var(--ink-text)',
                  }}
                >
                  {solution.name}
                </h3>
                <p className="body body--card">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Property Types list */}
      <section style={{ padding: 'clamp(80px, 10vw, 150px) var(--pad-x)' }}>
        <div className="shell stack" style={{ gap: 'clamp(40px, 5vw, 64px)' }}>
          <div className="stack" style={{ gap: 16, maxWidth: '24ch' }}>
            <p className="eyebrow" style={{ margin: 0 }}>
              Property Types
            </p>
            <h2 className="h2 h2--md">Capital Across Commercial Real Estate.</h2>
          </div>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
              gap: '0 clamp(24px, 4vw, 64px)',
            }}
          >
            {propertyTypeNames.map((name) => (
              <li
                key={name}
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(19px, 1.8vw, 24px)',
                  color: 'var(--ink-text)',
                  padding: '16px 0',
                  borderBottom: '1px solid var(--rule-light)',
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — The LUX Approach */}
      <section className="on-ink section">
        <div className="shell stack" style={{ gap: 'clamp(48px, 6vw, 84px)' }}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="eyebrow" style={{ margin: 0 }}>
              The LUX Approach
            </p>
            <h2 className="h2" style={{ color: 'var(--paper)' }}>
              One Transaction.
              <br />
              The Entire Capital Market.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: 1,
              background: 'var(--dark-rule-ink)',
            }}
          >
            {approachColumns.map((step, index) => (
              <div
                key={step.number}
                className="stack"
                style={{
                  background: 'var(--ink)',
                  padding: `clamp(28px, 3vw, 40px) ${
                    index === approachColumns.length - 1 ? '0' : 'clamp(24px, 3vw, 36px)'
                  } clamp(28px, 3vw, 40px) ${index === 0 ? '0' : 'clamp(24px, 3vw, 36px)'}`,
                  gap: 18,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--display)',
                    fontSize: 44,
                    lineHeight: 1,
                    color: 'var(--gold)',
                  }}
                >
                  {step.number}
                </p>
                <h3 className="step-label" style={{ margin: 0, fontWeight: 400 }}>
                  {step.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: 'var(--grey-on-dark)',
                    fontWeight: 300,
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Capital Access */}
      <section style={{ padding: 'clamp(80px, 10vw, 150px) var(--pad-x)' }}>
        <div
          className="shell"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(40px, 6vw, 96px)',
            alignItems: 'start',
          }}
        >
          <div className="stack" style={{ gap: 24 }}>
            <h2 className="h2 h2--split">
              Not One Lender.
              <br />A Market of Capital.
            </h2>
            <p className="body measure-body">
              Different transactions belong with different capital sources.
            </p>
            <p className="body measure-body">
              LUX Commercial Capital provides access across traditional banking, government-backed
              lending, institutional debt, private credit and specialty finance markets — allowing
              us to pursue the structure that fits the transaction rather than the product a single
              lender happens to offer.
            </p>
          </div>
          <ul className="cell-grid cell-grid--sources" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {capitalSources.map((source) => (
              <li
                key={source}
                style={{
                  background: 'var(--paper)',
                  padding: '30px 20px',
                  textAlign: 'center',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-text)',
                }}
              >
                {source}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — Transaction size */}
      <section className="on-aubergine section">
        <div
          className="shell"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(44px, 6vw, 96px)',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: 'clamp(28px, 4vw, 56px)' }}>
            <div className="stack" style={{ gap: 8 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(56px, 8vw, 112px)',
                  lineHeight: 0.9,
                  color: 'var(--paper)',
                }}
              >
                $1MM
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Minimum
              </p>
            </div>
            <div
              style={{ width: 1, background: 'var(--dark-rule-aubergine)' }}
              aria-hidden="true"
            />
            <div className="stack" style={{ gap: 8 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(56px, 8vw, 112px)',
                  lineHeight: 0.9,
                  color: 'var(--paper)',
                }}
              >
                No
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}
              >
                Ceiling
              </p>
            </div>
          </div>
          <div className="stack" style={{ gap: 22 }}>
            <h2
              className="h2"
              style={{
                color: 'var(--paper)',
                fontSize: 'clamp(28px, 3.2vw, 44px)',
                lineHeight: 1.14,
              }}
            >
              From Private Investors to Institutional Transactions.
            </h2>
            <p
              className="body"
              style={{ color: 'var(--lavender-on-dark)', maxWidth: '52ch' }}
            >
              LUX Commercial Capital advises on transactions beginning at $1 million with the
              ability to pursue substantially larger institutional financing opportunities.
            </p>
            <p className="pullquote pullquote--dark">
              Capital requirements change with scale.
              <br />
              Our approach does not.
            </p>
          </div>
        </div>
      </section>

      {/* 9 — Why LUX */}
      <section
        className="on-off-white rule-bottom"
        style={{ padding: 'clamp(80px, 10vw, 150px) var(--pad-x)' }}
      >
        <div className="shell stack" style={{ gap: 'clamp(40px, 5vw, 68px)' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'start',
            }}
          >
            <h2 className="h2 h2--split">
              Capital Advisory.
              <br />
              Not Rate Shopping.
            </h2>
            <p className="body" style={{ maxWidth: '58ch' }}>
              Our role is not simply finding a lender. We analyze the transaction, determine the
              appropriate capital structure, identify suitable capital sources, position the
              opportunity, negotiate financing terms and help manage execution through closing.
            </p>
          </div>
          <ul
            className="cell-grid cell-grid--concepts"
            style={{ margin: 0, padding: 0, listStyle: 'none' }}
          >
            {advisoryConcepts.map((concept) => (
              <li
                key={concept}
                style={{
                  background: 'var(--off-white)',
                  padding: '28px 26px',
                  fontFamily: 'var(--display)',
                  fontSize: 22,
                  color: 'var(--ink-text)',
                }}
              >
                {concept}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10 — Selected Transactions */}
      <section style={{ padding: 'clamp(80px, 10vw, 150px) var(--pad-x)' }}>
        <div className="shell stack" style={{ gap: 'clamp(36px, 4vw, 56px)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div className="stack" style={{ gap: 14 }}>
              <p className="eyebrow" style={{ margin: 0 }}>
                Selected Transactions
              </p>
              <h2 className="h2 h2--sm">Representative Financings.</h2>
            </div>
            {/* Remove this tag once real closed transactions replace the placeholders. */}
            <p className="placeholder-tag" style={{ margin: 0 }}>
              Layout placeholders
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: 'clamp(16px, 2vw, 24px)',
            }}
          >
            {selectedTransactions.map((deal) => (
              <div
                key={`${deal.amount}-${deal.type}`}
                className="stack"
                style={{
                  border: '1px solid var(--rule)',
                  padding: 'clamp(28px, 3vw, 38px)',
                  gap: 20,
                  minHeight: 230,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(28px, 2.6vw, 36px)',
                    lineHeight: 1,
                    color: 'var(--aubergine)',
                  }}
                >
                  {deal.amount}
                </p>
                <span
                  style={{ width: 28, height: 1, background: 'var(--gold)' }}
                  aria-hidden="true"
                />
                <div className="stack" style={{ marginTop: 'auto', gap: 8 }}>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 11,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-text)',
                    }}
                  >
                    {deal.type}
                  </p>
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--muted-grey)' }}>
                    {deal.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — Final CTA */}
      <section
        className="on-aubergine"
        style={{ padding: 'clamp(88px, 11vw, 170px) var(--pad-x)' }}
      >
        <div
          className="shell stack"
          style={{ gap: 'clamp(28px, 3vw, 42px)', alignItems: 'flex-start' }}
        >
          <p className="eyebrow" style={{ margin: 0 }}>
            Let&rsquo;s Discuss the Transaction
          </p>
          <h2 className="h2 h2--cta" style={{ color: 'var(--paper)' }}>
            Every Deal Starts With the Right Capital Strategy.
          </h2>
          <p
            className="lead lead--banner"
            style={{ maxWidth: '58ch' }}
          >
            Tell us about the property, the business plan and the capital requirement. We&rsquo;ll
            help determine the appropriate financing strategy.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/contact" className="btn btn--gold">
              Submit a Transaction
            </Link>
            <Link href="/submit-your-deal" className="rule-link rule-link--on-dark">
              Just Tell Us About the Deal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
