import Link from 'next/link';

export const metadata = {
  title: '404 — Page Not Found | Inner Insights',
  description: 'The page you are looking for could not be found. Return to Inner Insights for expert numerology and graphology consultations.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      background: 'var(--surface-white)',
    }}>
      <div style={{ maxWidth: '520px' }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
          marginBottom: '1rem',
        }}>
          404 Error
        </p>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '2.5rem',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          lineHeight: 1.2,
        }}>
          Page Not Found
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          The page you are looking for doesn&apos;t exist or may have been moved.
          Let us guide you back to the right path.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Go to Home
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1.5px solid var(--primary)',
              color: 'var(--primary)',
              padding: '0.75rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Contact Us
          </Link>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { href: '/services', label: 'Our Services' },
            { href: '/blog', label: 'Read Blog' },
            { href: '/tools', label: 'Free Tools' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ fontSize: '0.875rem', color: 'var(--primary)', textDecoration: 'underline' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
