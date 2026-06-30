import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Inner Insights',
  description:
    'Read the Terms & Conditions for Inner Insights consultations and services. Understand our booking, cancellation, refund, and disclaimer policies.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = 'June 2025';

export default function TermsPage() {
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
            <span style={{ color: 'var(--text-primary)' }}>Terms & Conditions</span>
          </nav>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
            Legal
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>

          <p style={pStyle}>
            These Terms &amp; Conditions govern your use of the Inner Insights website at{' '}
            <a href="https://innerinsights.net" style={{ color: 'var(--primary)' }}>innerinsights.net</a> and
            all services provided by Priyanka Agrawal under the Inner Insights brand. By booking a
            consultation or using our website, you agree to these terms in full.
          </p>

          <h2 style={h2Style}>1. Services</h2>
          <p style={pStyle}>
            Inner Insights offers numerology consultations, graphology and graphotherapy sessions,
            Mokshapatam coaching, Vastu assessments, signature analysis, name corrections, and related
            advisory services. All sessions are advisory in nature and intended for personal development
            and self-awareness purposes only.
          </p>

          <h2 style={h2Style}>2. Disclaimer</h2>
          <p style={pStyle}>
            Numerology, graphology, and related practices are complementary wellness disciplines and are
            not a substitute for professional medical, legal, financial, or psychological advice. Inner
            Insights and Priyanka Agrawal make no guarantees of specific outcomes from any consultation.
            Results may vary based on individual circumstances and the implementation of recommendations.
          </p>

          <h2 style={h2Style}>3. Booking & Appointments</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Appointments must be booked in advance via the contact form, phone, or WhatsApp.',
              'A confirmed booking is subject to availability and mutual agreement on timing.',
              'Please arrive or join the Zoom call on time. Sessions begin at the scheduled time regardless of late arrival.',
              'Accurate personal details (full name, date of birth) must be provided before the session.',
            ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
          </ul>

          <h2 style={h2Style}>4. Cancellation & Rescheduling</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Cancellations made more than 24 hours before the scheduled session may be rescheduled at no additional charge.',
              'Cancellations within 24 hours of the session may be subject to a partial fee.',
              'No-shows without prior notice forfeit the session fee.',
              'Inner Insights reserves the right to reschedule sessions due to unavoidable circumstances, with adequate notice.',
            ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
          </ul>

          <h2 style={h2Style}>5. Payments & Refunds</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            {[
              'Payment is required to confirm a booking.',
              'All prices are inclusive of applicable taxes unless otherwise stated.',
              'Refunds are not provided for completed sessions.',
              'Refunds for cancelled sessions (meeting cancellation criteria above) are issued within 7 business days.',
              'We reserve the right to modify our pricing at any time, with notice provided on the website.',
            ].map((item) => <li key={item} style={liStyle}>{item}</li>)}
          </ul>

          <h2 style={h2Style}>6. Confidentiality</h2>
          <p style={pStyle}>
            All consultation details are kept strictly confidential. We do not share your personal
            information or reading content with third parties. Please refer to our{' '}
            <Link href="/privacy" style={{ color: 'var(--primary)' }}>Privacy Policy</Link> for
            full details on data handling.
          </p>

          <h2 style={h2Style}>7. Intellectual Property</h2>
          <p style={pStyle}>
            All content on this website — including articles, tools, videos, and reports — is the
            intellectual property of Inner Insights / Priyanka Agrawal. Reproduction, redistribution,
            or commercial use of any content without prior written permission is prohibited.
          </p>

          <h2 style={h2Style}>8. User Conduct</h2>
          <p style={pStyle}>
            You agree not to use this website or our services for any unlawful purpose, to harass
            or harm others, to transmit spam or malicious content, or to misrepresent your identity.
            We reserve the right to refuse service to anyone in violation of these terms.
          </p>

          <h2 style={h2Style}>9. Limitation of Liability</h2>
          <p style={pStyle}>
            Inner Insights and Priyanka Agrawal shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of our services or website. Our
            total liability shall not exceed the amount paid for the specific consultation in question.
          </p>

          <h2 style={h2Style}>10. Governing Law</h2>
          <p style={pStyle}>
            These Terms are governed by and construed in accordance with the laws of India.
            Any disputes arising shall be subject to the exclusive jurisdiction of the courts
            in Mumbai, Maharashtra.
          </p>

          <h2 style={h2Style}>11. Changes to These Terms</h2>
          <p style={pStyle}>
            We reserve the right to update these Terms &amp; Conditions at any time. Changes will be
            posted on this page with an updated &quot;Last updated&quot; date. Continued use of our services
            after changes constitutes acceptance of the revised terms.
          </p>

          <h2 style={h2Style}>12. Contact</h2>
          <p style={pStyle}>For questions about these Terms, please contact us:</p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={liStyle}><strong>Email:</strong> contact@innerinsights.net</li>
            <li style={liStyle}><strong>Phone:</strong> +91 91521 72369</li>
            <li style={liStyle}><strong>Contact page:</strong> <Link href="/contact" style={{ color: 'var(--primary)' }}>innerinsights.net/contact</Link></li>
          </ul>

        </div>
      </section>
    </>
  );
}
