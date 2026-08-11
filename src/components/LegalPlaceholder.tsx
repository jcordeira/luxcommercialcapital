import { PageBanner } from './PageBanner';
import { site } from '@/data/site';

/**
 * The two legal pages are linked from the footer, so they exist as shells
 * rather than 404s. The copy has to come from counsel — do not draft it here.
 */
export function LegalPlaceholder({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <>
      <PageBanner compact eyebrow={eyebrow} title={title} lead={lead} />

      <section className="section--tight">
        <div className="shell stack" style={{ gap: 28, maxWidth: '64ch' }}>
          <p className="placeholder-tag" style={{ margin: 0 }}>
            Awaiting copy from counsel
          </p>
          <p className="body">
            This page is a placeholder. {site.name} will publish its {title.replace('.', '')} here.
          </p>
          <p className="body">
            In the meantime, information submitted through this site is treated as confidential and
            is reviewed only by a capital advisor at the firm. Questions can go to{' '}
            <a href={`mailto:${site.email}`} style={{ borderBottom: '1px solid var(--gold)' }}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
