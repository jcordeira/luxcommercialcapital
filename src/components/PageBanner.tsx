import type { ReactNode } from 'react';

/**
 * The aubergine banner every subpage opens with: gold eyebrow, page H1,
 * optional lead paragraph.
 */
export function PageBanner({
  eyebrow,
  title,
  lead,
  titleWidth = '20ch',
  compact = false,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  titleWidth?: string;
  compact?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className="on-aubergine"
      style={{
        padding: compact
          ? 'clamp(64px, 8vw, 110px) var(--pad-x)'
          : 'clamp(72px, 9vw, 130px) var(--pad-x)',
      }}
    >
      <div className="shell stack" style={{ gap: compact ? 22 : 24 }}>
        <p className="eyebrow" style={{ margin: 0 }}>
          {eyebrow}
        </p>
        <h1
          className={compact ? 'h1 h1--intake' : 'h1 h1--page'}
          style={{ color: 'var(--paper)', maxWidth: titleWidth }}
        >
          {title}
        </h1>
        {lead && (
          <p className="lead lead--banner" style={{ maxWidth: '60ch' }}>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
