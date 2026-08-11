import type { Metadata } from 'next';
import { PageBanner } from '@/components/PageBanner';
import { advisoryConcepts, approachSteps } from '@/data/site';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Underwrite, structure, position, place. How LUX Commercial Capital takes a transaction to the debt market and manages it through closing.',
};

export default function OurApproachPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Approach"
        title="One Transaction. The Entire Capital Market."
        titleWidth="18ch"
      />

      <section className="section--flush">
        <div className="shell stack">
          {approachSteps.map((step, index) => (
            <div
              key={step.number}
              className="split"
              style={{
                gap: 'clamp(24px, 4vw, 64px)',
                padding: 'clamp(36px, 4vw, 56px) 0',
                borderTop: '1px solid var(--rule)',
                borderBottom:
                  index === approachSteps.length - 1 ? '1px solid var(--rule)' : undefined,
              }}
            >
              <div
                className="split__narrow"
                style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 'clamp(38px, 4vw, 58px)',
                    lineHeight: 0.9,
                    color: 'var(--gold)',
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h2
                  className="step-label"
                  style={{
                    margin: 0,
                    fontWeight: 400,
                    color: 'var(--ink-text)',
                    paddingTop: 10,
                  }}
                >
                  {step.name}
                </h2>
              </div>
              <div className="stack measure-wide split__wide" style={{ gap: 14 }}>
                <p className="body body--emphasis">{step.statement}</p>
                <p className="body" style={{ fontSize: 15, lineHeight: 1.7 }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="on-off-white rule-top section--tight">
        <div
          className="shell"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(36px, 5vw, 80px)',
            alignItems: 'start',
          }}
        >
          <h2 className="h2" style={{ fontSize: 'clamp(30px, 3.8vw, 52px)', lineHeight: 1.08 }}>
            Capital Advisory.
            <br />
            Not Rate Shopping.
          </h2>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '0 32px',
            }}
          >
            {advisoryConcepts.map((concept) => (
              <li
                key={concept}
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: 21,
                  color: 'var(--ink-text)',
                  padding: '14px 0',
                  borderBottom: '1px solid var(--rule)',
                }}
              >
                {concept}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
