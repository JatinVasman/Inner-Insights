import Link from 'next/link';
import { CalendarCheck, ArrowRight, Star } from 'lucide-react';
import styles from '../about/about.module.css';

export const metadata = {
  title: 'Client Testimonials & Reviews | Inner Insights',
  description:
    'Read what Inner Insights clients say about their numerology, graphology and graphotherapy consultations with Priyanka Agrawal.',
  keywords: [
    'Inner Insights reviews',
    'numerology consultation reviews',
    'Priyanka Agrawal testimonials',
    'graphology client reviews',
  ],
  alternates: { canonical: '/testimonials' },
};

const row1 = [
  { name: 'Ritu S.', meta: 'Numerology consultation • Pune', text: 'The reading was specific and practical. I finally understood why one decision kept stalling — and exactly what to change.' },
  { name: 'Amit K.', meta: 'Business name numerology • Delhi', text: 'Calm, honest and clear. No fear-selling, just guidance I could act on the same week. I\'ve recommended her to my whole family.' },
  { name: 'Neha P.', meta: 'Career guidance • Bengaluru', text: 'I came in confused about a job switch and left with a clear plan. The advice was grounded and easy to follow.' },
  { name: 'Sanjay M.', meta: 'Business consultation • Mumbai', text: 'Professional and to the point. The remedies were simple and genuinely made a difference to how things moved.' },
  { name: 'Priya D.', meta: 'Marriage compatibility • Jaipur', text: 'Thoughtful and reassuring. It helped both of us understand each other better before the wedding.' },
];

const row2 = [
  { name: 'Rohan T.', meta: 'Signature analysis • Hyderabad', text: 'Fascinating and surprisingly accurate. The signature changes she suggested felt natural within days.' },
  { name: 'Meera J.', meta: 'Mobile numerology • Ahmedabad', text: 'Quick, friendly and useful. I picked a new number with confidence and understood the reasoning behind it.' },
  { name: 'Karan V.', meta: 'Graphotherapy • Chandigarh', text: 'The handwriting exercises were easy to stick with, and I noticed a calmer, more focused mindset over a few weeks.' },
  { name: 'Anjali R.', meta: 'Numerology consultation • Kolkata', text: 'Honest guidance without any pressure. I left feeling clearer and a lot more confident about my next steps.' },
  { name: 'Divya S.', meta: 'Graphology analysis • Surat', text: 'She read things from my handwriting that I had never told anyone. It was eye-opening and deeply insightful.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', name: 'Client Testimonials', url: 'https://innerinsights.net/testimonials' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://innerinsights.net/testimonials' },
      ],
    },
  ],
};

function TextCard({ t }) {
  return (
    <div className={styles.textCard}>
      <div className={styles.textCardStars}>
        {[...Array(5)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
      </div>
      <p className={styles.textCardQuote}>&ldquo;{t.text}&rdquo;</p>
      <p className={styles.textCardName}>{t.name}</p>
      <p className={styles.textCardMeta}>{t.meta}</p>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Testimonials</span>
          </nav>

          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>Testimonials</span>
              <h1 className={styles.heroTitle}>What our clients say.</h1>
              <p className={styles.heroLead}>
                Real guidance, real outcomes. Here&rsquo;s how consultations with Inner Insights have
                helped people make clearer decisions about life, work and relationships.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-primary"><CalendarCheck size={18} /> Book a Consultation</Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '340px' }}>
                {[
                  { name: 'Ritu S.', meta: 'Numerology • Pune', text: 'The reading was specific and practical. I finally understood why one decision kept stalling.' },
                  { name: 'Amit K.', meta: 'Business Numerology • Delhi', text: 'Calm, honest and clear. No fear-selling, just guidance I could act on the same week.' },
                  { name: 'Neha P.', meta: 'Career Guidance • Bengaluru', text: 'I came in confused about a job switch and left with a clear plan.' },
                ].map((q, i) => (
                  <div key={i} style={{
                    background: 'var(--surface-white)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '0.875rem',
                    padding: '1rem 1.25rem',
                    animation: `fadeUp 0.6s ease ${0.1 + i * 0.15}s both`,
                  }}>
                    <div style={{ display: 'flex', gap: '2px', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                      {'★★★★★'}
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.6rem' }}>
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>{q.name}</p>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>{q.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className={styles.statsBand}>
            <div className={styles.stat}><span className={styles.statNum}>20K+</span><span className={styles.statLabel}>Happy Clients</span></div>
            <div className={styles.stat}><span className={styles.statNum}>15+</span><span className={styles.statLabel}>Years of Practice</span></div>
            <div className={styles.stat}><span className={styles.statNum}>25+</span><span className={styles.statLabel}>Expert Services</span></div>
            <div className={styles.stat}><span className={styles.statNum}>100%</span><span className={styles.statLabel}>Satisfaction</span></div>
          </div>
        </div>
      </section>

      {/* Video Reviews — full bleed */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '3rem', overflow: 'hidden' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Video Reviews</span>
            <h2 className={styles.sectionTitle}>Hear it directly from our clients</h2>
          </div>
        </div>

        <div className={styles.videoMarquee}>
          <div className={styles.videoTrack}>
            {[...Array(11), ...Array(11)].map((_, i) => (
              <div key={i} className={styles.videoItem}>
                <video
                  className={styles.videoEl}
                  src={`/reviews/review-${(i % 11) + 1}.mp4`}
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text Reviews — two marquee rows */}
      <section className="section" style={{ paddingTop: 0, overflow: 'hidden' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Client Voices</span>
            <h2 className={styles.sectionTitle}>Stories from our consultations</h2>
          </div>
        </div>

        <div className={styles.textMarqueeWrap}>
          {/* Row 1 — scrolls left */}
          <div className={styles.textTrack}>
            {[...row1, ...row1].map((t, i) => <TextCard key={i} t={t} />)}
          </div>

          {/* Row 2 — scrolls right */}
          <div className={styles.textTrackReverse}>
            {[...row2, ...row2].map((t, i) => <TextCard key={i} t={t} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to write your own story?</h2>
            <p className={styles.ctaText}>Book a consultation with Priyanka, or share your experience if we&rsquo;ve worked together.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnLight}><CalendarCheck size={18} /> Book a Consultation</Link>
              <Link href="/contact" className={styles.ctaBtnGhost}>Share Your Experience <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
