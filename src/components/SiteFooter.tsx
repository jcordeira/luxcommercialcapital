import Link from 'next/link';
import { Lockup } from './Keystone';
import { nav, site } from '@/data/site';

const firmLinks = nav.filter((item) => item.href !== '/contact');

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell stack" style={{ gap: 'clamp(40px, 5vw, 72px)' }}>
        <div className="site-footer__columns">
          <div className="stack" style={{ gap: 20 }}>
            <Link href="/" aria-label={`${site.name} home`}>
              <Lockup reversed />
            </Link>
            <p
              style={{
                margin: 0,
                fontSize: 13.5,
                lineHeight: 1.7,
                color: 'var(--grey-on-dark)',
                fontWeight: 300,
                maxWidth: '26ch',
              }}
            >
              {site.tagline}
            </p>
          </div>

          <nav className="stack" style={{ gap: 14 }} aria-label="Firm">
            <h2 className="site-footer__heading">Firm</h2>
            {firmLinks.map((item) => (
              <Link key={item.href} href={item.href} className="site-footer__link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="stack" style={{ gap: 14 }}>
            <h2 className="site-footer__heading">Contact</h2>
            <a href={`tel:${site.phone.replace(/-/g, '')}`} className="site-footer__link">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="site-footer__link">
              {site.email}
            </a>
            <span className="site-footer__link">{site.office}</span>
            <Link
              href="/contact"
              className="rule-link"
              style={{ color: 'var(--paper)', alignSelf: 'flex-start', marginTop: 6 }}
            >
              Submit a Transaction
            </Link>
            <Link
              href="/submit-your-deal"
              className="site-footer__link"
              style={{
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                paddingTop: 4,
                alignSelf: 'flex-start',
              }}
            >
              Tell Us About Your Deal
            </Link>
          </div>

          <nav className="stack" style={{ gap: 14 }} aria-label="Legal">
            <h2 className="site-footer__heading">Legal</h2>
            <Link href="/privacy-policy" className="site-footer__link">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="site-footer__link">
              Terms of Use
            </Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span style={{ fontSize: 12, color: 'var(--dim-on-dark)', fontWeight: 300 }}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--dim-on-dark)',
            }}
          >
            $1MM Minimum. No Ceiling.
          </span>
        </div>
      </div>
    </footer>
  );
}
