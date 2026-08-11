'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Lockup } from './Keystone';
import { nav, site } from '@/data/site';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // The drawer only exists below 1040px; close it on navigation and whenever
  // the viewport grows past the breakpoint so it can't be left orphaned open.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1040px)');
    const close = () => setMenuOpen(false);
    wide.addEventListener('change', close);
    return () => wide.removeEventListener('change', close);
  }, []);

  const isCurrent = (href: string) => pathname === href || pathname === `${href}/`;

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link href="/" aria-label={`${site.name} home`}>
          <Lockup />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-header__link"
              aria-current={isCurrent(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="site-header__cta">
            Discuss a Transaction
          </Link>
        </nav>

        <div className="site-header__compact">
          <Link href="/contact" className="site-header__cta site-header__cta--compact">
            Discuss a Deal
          </Link>
          <button
            type="button"
            className="site-header__toggle"
            aria-expanded={menuOpen}
            aria-controls="site-drawer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="site-header__drawer" id="site-drawer">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/submit-your-deal">Tell Us About Your Deal</Link>
        </div>
      )}
    </header>
  );
}
