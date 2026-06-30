'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, CalendarCheck } from 'lucide-react';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/courses', label: 'Courses' },
  { href: '/numerology-for', label: 'Numerology by Need' },
  { href: '/tools', label: 'Tools' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  const navClass = (href) =>
    `${styles.navLink}${isActive(href) ? ` ${styles.navLinkActive}` : ''}`;

  const mobileNavClass = (href) =>
    `${styles.mobileNavLink}${isActive(href) ? ` ${styles.mobileNavLinkActive}` : ''}`;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoIcon} aria-label="Inner Insights home">
              <Image src="/logo.png" alt="Inner Insights" width={76} height={46} priority />
            </Link>
            <Link href="/" className={styles.logoText}>
              <span className={styles.logoTextTitle}>Inner Insights</span>
              <span className={styles.logoTextSubtitle}>Discover. Align. Evolve.</span>
            </Link>
          </div>

          <div className={styles.headerActions}>
            <nav className={styles.nav}>
              {NAV_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className={navClass(href)}>{label}</Link>
              ))}
            </nav>

            <Link href="/contact" className="btn-primary">
              Book Consultation
            </Link>
          </div>

          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`${styles.overlay}${menuOpen ? ` ${styles.overlayVisible}` : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={`${styles.drawer}${menuOpen ? ` ${styles.drawerOpen}` : ''}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.logoText} onClick={() => setMenuOpen(false)}>
            <span className={styles.logoTextTitle}>Inner Insights</span>
            <span className={styles.logoTextSubtitle}>Discover. Align. Evolve.</span>
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className={styles.drawerLinks}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={mobileNavClass(href)}>
              {label}
            </Link>
          ))}
        </div>

        <div className={styles.drawerFooter}>
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
            <CalendarCheck size={18} />
            Book Consultation
          </Link>
        </div>
      </nav>
    </>
  );
}
