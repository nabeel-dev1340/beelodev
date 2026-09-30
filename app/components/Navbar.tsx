'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Beelodev home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            b.
          </span>
          <span>
            beelodev<span className="wordmark-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contact" className="button button-small header-cta">
            Let’s talk <ArrowUpRight size={16} />
          </Link>
          <button
            ref={menuButton}
            className="icon-button mobile-menu-toggle"
            type="button"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
          >
            {link.name}
            <ArrowUpRight size={16} />
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}>
          Discuss your workflow <ArrowUpRight size={16} />
        </Link>
      </nav>
    </header>
  );
}
