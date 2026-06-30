import Link from 'next/link';
import { CalendarCheck, Check, Phone } from 'lucide-react';

export const metadata = {
  title: 'Pricing & Consultation Packages | Inner Insights',
  description:
    'Explore consultation packages by Priyanka Agrawal at Inner Insights. Transparent pricing for numerology readings, name corrections, graphology, Vastu, and Mokshapatam coaching.',
  keywords: [
    'numerology consultation price',
    'name correction fees',
    'graphology session cost',
    'Vastu consultation pricing',
    'Inner Insights pricing',
    'Priyanka Agrawal fees',
  ],
  alternates: { canonical: '/pricing' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://innerinsights.net/pricing' },
  ],
};

const plans = [
  {
    name: 'Starter Reading',
    tag: 'Most Popular',
    price: 'Contact for Price',
    highlight: true,
    description: 'Perfect for first-time clients wanting clarity on their core numbers and life direction.',
    features: [
      'Life Path & Destiny Number Analysis',
      'Soul Urge & Personality Numbers',
      'Personal Year Forecast (current year)',
      'Name Vibration Check',
      'Written Summary Report',
      '45-minute Zoom Session',
    ],
  },
  {
    name: 'Comprehensive Package',
    tag: 'Best Value',
    price: 'Contact for Price',
    highlight: false,
    description: 'In-depth reading covering all core numbers plus remedies, corrections, and a 12-month forecast.',
    features: [
      'Everything in Starter Reading',
      'Name Correction Recommendations',
      'Signature Analysis & Redesign',
      'Gemstone & Colour Therapy Guidance',
      'Business/Mobile Number Check',
      '90-minute Zoom Session + Follow-up Call',
    ],
  },
  {
    name: 'Business & Brand',
    tag: 'Entrepreneurs',
    price: 'Contact for Price',
    highlight: false,
    description: 'Numerological alignment for your business name, logo energy, team compatibility, and launch timing.',
    features: [
      'Business Name Numerology Audit',
      'Brand & Logo Vibration Analysis',
      'Launch Date Selection',
      'Owner Life Path & Business Compatibility',
      'Team Compatibility Check (up to 5 members)',
      'Office Vastu Overview',
    ],
  },
  {
    name: 'Mokshapatam Coaching',
    tag: 'Spiritual Growth',
    price: 'Contact for Price',
    highlight: false,
    description: 'Ancient board-based karmic analysis to identify life blockages and corrective action steps.',
    features: [
      'Mokshapatam Board Reading',
      'Karmic Debt Identification',
      'Life Purpose Clarity Session',
      'Planetary Blockage Analysis',
      'Remedial Action Plan',
      '60-minute Deep-Dive Session',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: 'var(--surface-alt)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ marginBottom: '1.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>/</span>
            <span style={{ color: 'var(--text-primary)' }}>Pricing</span>
          </nav>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
            Transparent Pricing
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Consultation Packages
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '600px' }}>
            Every session is a live, personalised consultation with Priyanka Agrawal — not an automated report.
            Contact us to receive a custom quote based on your needs.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {plans.map((plan) => (
              <div key={plan.name} style={{
                background: plan.highlight ? 'var(--primary)' : 'var(--surface-white)',
                border: `1px solid ${plan.highlight ? 'var(--primary)' : 'var(--border-light)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {plan.tag && (
                  <span style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '1.5rem',
                    backgroundColor: 'var(--accent-gold)',
                    color: '#1a1a1a',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                  }}>
                    {plan.tag}
                  </span>
                )}

                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: plan.highlight ? 'white' : 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {plan.name}
                </h2>
                <p style={{ fontSize: '0.875rem', color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {plan.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', flex: 1 }}>
                  {plan.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.875rem', color: plan.highlight ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)' }}>
                      <Check size={15} color={plan.highlight ? 'white' : 'var(--primary)'} style={{ marginTop: '2px', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    backgroundColor: plan.highlight ? 'white' : 'var(--primary)',
                    color: plan.highlight ? 'var(--primary)' : 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                  }}
                >
                  <CalendarCheck size={15} /> Book This Package
                </Link>
              </div>
            ))}
          </div>

          {/* Note + Phone CTA */}
          <div style={{ background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', textAlign: 'center', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              Need a Custom Package?
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 1.5rem' }}>
              Every client&apos;s situation is unique. Contact Priyanka directly to discuss your specific requirements
              and receive a personalised quote for combined or extended sessions.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">
                <CalendarCheck size={16} /> Book a Consultation
              </Link>
              <a
                href="tel:+919152172369"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1.5px solid var(--primary)',
                  color: 'var(--primary)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} /> +91 91521 72369
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
