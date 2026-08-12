import { PageBanner } from './PageBanner';
import { site } from '@/data/site';

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

/**
 * Shared shell for the Privacy Policy and Terms of Use. Long-form prose at a
 * comfortable measure, headings in Cormorant, the same 1px rules as the rest of
 * the site.
 */
export function LegalPage({
  eyebrow,
  title,
  lead,
  effective,
  sections,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  effective: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageBanner compact eyebrow={eyebrow} title={title} lead={lead} />

      <section className="section--tight">
        <div className="shell stack" style={{ gap: 'clamp(36px, 4vw, 52px)', maxWidth: '78ch' }}>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted-grey)',
            }}
          >
            Effective {effective}
          </p>

          {sections.map((section) => (
            <div key={section.heading} className="stack" style={{ gap: 16 }}>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(22px, 2.2vw, 30px)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  color: 'var(--aubergine)',
                }}
              >
                {section.heading}
              </h2>

              {section.body?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="body" style={{ maxWidth: '68ch' }}>
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="stack" style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                  {section.list.map((item) => (
                    <li
                      key={item.slice(0, 40)}
                      className="body"
                      style={{
                        maxWidth: '68ch',
                        paddingLeft: 22,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderBottom: '1px solid var(--rule-light)',
                        position: 'relative',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}
                      >
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div
            className="stack"
            style={{ gap: 12, borderTop: '1px solid var(--rule)', paddingTop: 28 }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontSize: 'clamp(22px, 2.2vw, 30px)',
                fontWeight: 400,
                color: 'var(--aubergine)',
              }}
            >
              Contact
            </h2>
            <p className="body" style={{ maxWidth: '68ch' }}>
              Questions about this page can go to{' '}
              <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid var(--gold)' }}>
                {site.email}
              </a>{' '}
              or {site.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
