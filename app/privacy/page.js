import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Inner Insights',
  description:
    'Read the Inner Insights privacy policy. Learn how Priyanka Agrawal and Inner Insights collect, use, and protect your personal information during consultations.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'June 2025';

export default function PrivacyPage() {
  const sectionStyle = { marginBottom: '2.5rem' };
  const h2Style = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.35rem',
    color: 'var(--text-primary)',
    marginBottom: '0.75rem',
    marginTop: '2rem',
  };
  const pStyle = { color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.975rem' };
  const liStyle = { color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.975rem', marginBottom: '0.4rem' };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--surface-alt)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ marginBottom: '1.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>/</span>
            <span style={{ color: 'var(--text-primary)' }}>Privacy Policy</span>
          </nav>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
            Legal
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>

          <div style={sectionStyle}>
            <p style={pStyle}>
              Inner Insights (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is operated by Priyanka Agrawal. This Privacy Policy
              explains how we collect, use, disclose, and protect your personal information when you
              visit <a href="https://innerinsights.net" style={{ color: 'var(--primary)' }}>innerinsights.net</a> or
              book a consultation with us.
            </p>
            <p style={pStyle}>
              By using our website or services, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>1. Information We Collect</h2>
            <p style={pStyle}>We may collect the following personal information:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {[
                'Name and date of birth (required for numerology calculations)',
                'Email address and phone number (for consultation booking and communication)',
                'Location / city (to provide location-relevant guidance)',
                'Payment information (processed securely via third-party payment gateways)',
                'Messages and consultation notes you share with us',
                'Technical data: IP address, browser type, pages visited (via analytics)',
              ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>2. How We Use Your Information</h2>
            <p style={pStyle}>Your information is used solely to:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {[
                'Deliver numerology, graphology, and related consultation services',
                'Communicate appointment confirmations, reports, and follow-ups',
                'Process payments securely',
                'Improve our website and service quality',
                'Send periodic newsletters or updates (only with your consent)',
                'Comply with legal obligations',
              ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>3. Confidentiality</h2>
            <p style={pStyle}>
              All consultation details, personal charts, and sensitive information shared during sessions
              are treated with strict confidentiality. We do not share, sell, or disclose your personal
              consultation content to any third party.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>4. Data Sharing</h2>
            <p style={pStyle}>
              We do not sell or rent your personal data. We may share data only with:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {[
                'Payment processors (Razorpay, Stripe, or similar) for transaction completion',
                'Email/communication tools (e.g., Gmail, WhatsApp) for session delivery',
                'Analytics providers (Google Analytics) in anonymised form',
                'Legal authorities if required by law',
              ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>5. Cookies</h2>
            <p style={pStyle}>
              Our website uses cookies to enhance user experience and gather anonymous analytics data.
              You may disable cookies in your browser settings; however, some website features may not
              function correctly without them.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>6. Data Retention</h2>
            <p style={pStyle}>
              We retain your personal information only as long as necessary to fulfil the purposes outlined
              in this policy, or as required by applicable law. Consultation records are stored securely and
              may be retained for up to 3 years for reference in follow-up sessions.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>7. Your Rights</h2>
            <p style={pStyle}>You have the right to:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {[
                'Access the personal data we hold about you',
                'Request correction of inaccurate data',
                'Request deletion of your data (subject to legal obligations)',
                'Withdraw consent for marketing communications at any time',
                'Lodge a complaint with the relevant data protection authority',
              ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
            </ul>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>8. Security</h2>
            <p style={pStyle}>
              We implement industry-standard security measures to protect your personal data from
              unauthorised access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet is 100% secure.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>9. Third-Party Links</h2>
            <p style={pStyle}>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of those sites and encourage you to review their privacy policies.
            </p>
          </div>

          <div style={sectionStyle}>
            <h2 style={h2Style}>10. Contact Us</h2>
            <p style={pStyle}>
              For any questions or concerns about this Privacy Policy, or to exercise your data rights,
              please contact us:
            </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={liStyle}><strong>Email:</strong> contact@innerinsights.net</li>
              <li style={liStyle}><strong>Phone:</strong> +91 91521 72369</li>
              <li style={liStyle}><strong>Website:</strong> <Link href="/contact" style={{ color: 'var(--primary)' }}>innerinsights.net/contact</Link></li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
