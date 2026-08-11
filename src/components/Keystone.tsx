/**
 * The keystone mark — the site's primary logo. A line drawing: never filled,
 * never recoloured beyond gold, white or the wordmark colour, never effected.
 */
export function Keystone({
  arch = '#2B1B3D',
  width = 30,
  height = 37,
}: {
  arch?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 58 72" fill="none" aria-hidden="true">
      <path
        d="M4 68V29C4 15.2 15.2 4 29 4C42.8 4 54 15.2 54 29V68H4Z"
        stroke={arch}
        strokeWidth="3.5"
      />
      <path
        d="M20 68V31C20 26 24 22 29 22C34 22 38 26 38 31V68"
        stroke="#C6A664"
        strokeWidth="3.5"
      />
    </svg>
  );
}

/** Keystone + wordmark, as it appears in the header and footer. */
export function Lockup({ reversed = false }: { reversed?: boolean }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <Keystone arch={reversed ? '#FFFFFF' : '#2B1B3D'} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span
          style={{
            fontFamily: 'var(--display)',
            fontSize: 20,
            lineHeight: 1,
            letterSpacing: '0.1em',
            color: reversed ? 'var(--paper)' : 'var(--aubergine)',
          }}
        >
          LUX
        </span>
        <span
          style={{
            fontSize: 7.5,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: reversed ? 'var(--muted-grey)' : 'var(--body-grey)',
          }}
        >
          Commercial Capital
        </span>
      </span>
    </span>
  );
}
