import type { Metadata } from 'next';
import Link from 'next/link';
import { PageBanner } from '@/components/PageBanner';
import { IntakeForm } from '@/components/IntakeForm';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Tell Us About Your Deal',
  description:
    'Six questions, under two minutes. Enough for us to tell you whether the transaction is financeable and where the capital should come from.',
};

const nextSteps = [
  {
    number: '01',
    body: 'We read the submission and come back to you, usually the same business day.',
  },
  { number: '02', body: 'A short call to understand the property, the plan and the timing.' },
  {
    number: '03',
    body: "If it's financeable, we tell you the structure and the likely capital sources. If it isn't, we tell you that too.",
  },
];

export default function SubmitYourDealPage() {
  return (
    <>
      <PageBanner
        compact
        eyebrow="Deal Intake"
        title="Tell Us About Your Deal."
        lead="Six questions, under two minutes. Enough for us to tell you whether the transaction is financeable and where the capital should come from."
      >
        <p
          style={{
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            flexWrap: 'wrap',
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--muted-grey)',
            paddingTop: 8,
          }}
        >
          <span>$1MM Minimum</span>
          <span style={{ color: 'var(--dark-rule-aubergine)' }} aria-hidden="true">
            •
          </span>
          <span>No Ceiling</span>
          <span style={{ color: 'var(--dark-rule-aubergine)' }} aria-hidden="true">
            •
          </span>
          <span>Nationwide</span>
        </p>
      </PageBanner>

      <section style={{ padding: 'clamp(48px, 6vw, 90px) var(--pad-x)' }}>
        <div className="shell split" style={{ gap: 'clamp(36px, 5vw, 80px)' }}>
          <IntakeForm />

          <div className="stack split__narrow" style={{ gap: 30 }}>
            <div className="stack" style={{ gap: 14 }}>
              <h2 className="eyebrow eyebrow--tight" style={{ margin: 0, fontWeight: 400 }}>
                What Happens Next
              </h2>
              {nextSteps.map((step) => (
                <div key={step.number} style={{ display: 'flex', gap: 14 }}>
                  <span
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: 22,
                      lineHeight: 1.2,
                      color: 'var(--gold)',
                    }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.65,
                      color: 'var(--body-grey)',
                      fontWeight: 300,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="stack"
              style={{ borderTop: '1px solid var(--rule-light)', paddingTop: 22, gap: 12 }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: 'var(--body-grey)',
                  fontWeight: 300,
                }}
              >
                Have full documents ready?
              </p>
              <Link href="/contact" className="rule-link" style={{ alignSelf: 'flex-start' }}>
                Full transaction submission
              </Link>
            </div>

            <div
              className="stack"
              style={{ borderTop: '1px solid var(--rule-light)', paddingTop: 22, gap: 8 }}
            >
              <span
                style={{
                  fontSize: 10.5,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted-grey)',
                }}
              >
                Email
              </span>
              <a href={`mailto:${site.email}`} style={{ fontSize: 15, color: 'var(--ink-text)' }}>
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
