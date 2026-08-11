import type { Metadata } from 'next';
import { PageBanner } from '@/components/PageBanner';
import { propertyTypes } from '@/data/site';

export const metadata: Metadata = {
  title: 'Property Types',
  description:
    'Financing across multifamily, mixed-use, retail, office, industrial, self storage, hospitality, healthcare, assisted living, land, construction and portfolio transactions.',
};

export default function PropertyTypesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Property Types"
        title="Capital Across Commercial Real Estate."
        lead="Asset class shapes the capital available to a transaction. We work across the spectrum of income-producing, owner-occupied and development real estate."
      />

      <section className="section--flush">
        <div className="shell">
          <ul
            className="cell-grid cell-grid--types"
            style={{ margin: 0, padding: 0, listStyle: 'none' }}
          >
            {propertyTypes.map((type) => (
              <li
                key={type.name}
                className="stack"
                style={{
                  background: 'var(--paper)',
                  padding: 'clamp(26px, 3vw, 36px)',
                  gap: 10,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--display)',
                    fontSize: 26,
                    fontWeight: 400,
                    color: 'var(--aubergine)',
                  }}
                >
                  {type.name}
                </h2>
                <p className="body body--row">{type.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
