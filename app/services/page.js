import { Suspense } from 'react';
import Link from 'next/link';
import { CalendarCheck, Calculator, PenTool, Briefcase, Watch, Map, BookOpen } from 'lucide-react';
import styles from './services.module.css';
import ServicesGrid from './ServicesGrid';

export const metadata = {
  title: 'All Services | Inner Insights — Numerology, Graphology & Vastu',
  description:
    'Explore 25+ specialised services by Priyanka Agrawal — numerology consultations, graphotherapy, signature analysis, vastu, business numerology, and more.',
  keywords: [
    'numerology services India',
    'graphotherapy consultation',
    'signature analysis',
    'vastu consultation',
    'business name numerology',
    'Priyanka Agrawal services',
  ],
  alternates: { canonical: '/services' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Inner Insights Services',
      url: 'https://innerinsights.net/services',
      description: '25+ numerology, graphology and vastu consulting services by Priyanka Agrawal.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://innerinsights.net/services' },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Services</span>
          </nav>

          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>What we offer</span>
              <h1 className={styles.heroTitle}>25+ services to guide<br />every area of your life.</h1>
              <p className={styles.heroLead}>
                From a personalised numerology reading to graphotherapy, signature design, vastu and
                business naming — each service is grounded in decades of practice by Priyanka Agrawal.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-primary">
                  <CalendarCheck size={18} /> Book a Consultation
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.catGrid}>
                {[
                  { Icon: Calculator, label: 'Numerology',       sub: '11 services', bg: 'rgba(118,83,158,0.1)', color: '#76539e' },
                  { Icon: Briefcase,  label: 'Business & Brand', sub: '5 services',  bg: 'rgba(160,120,0,0.1)',  color: '#8a6500' },
                  { Icon: PenTool,    label: 'Graphology',        sub: '2 services',  bg: 'rgba(13,148,136,0.1)', color: '#0d7369' },
                  { Icon: Watch,      label: 'Vastu & Energy',   sub: '5 services',  bg: 'rgba(180,83,9,0.1)',   color: '#b45309' },
                  { Icon: Map,        label: 'Coaching',          sub: '2 services',  bg: 'rgba(79,70,229,0.1)', color: '#4f46e5', wide: true },
                ].map(({ Icon, label, sub, bg, color, wide }) => (
                  <div key={label} className={`${styles.catPill}${wide ? ` ${styles.catPillWide}` : ''}`}>
                    <div className={styles.catPillIcon} style={{ backgroundColor: bg }}>
                      <Icon size={18} color={color} strokeWidth={1.75} />
                    </div>
                    <div className={styles.catPillText}>
                      <strong>{label}</strong>
                      <span>{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div className={styles.statsBand}>
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Specialised Services</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>20K+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLabel}>Years of Practice</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Online — Book Anywhere</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid with tab filters */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Browse by Category</span>
            <h2 className={styles.sectionTitle}>All Services</h2>
            <p className={styles.sectionSub}>
              Filter by area or scroll through everything. Each service is a real consultation with
              Priyanka — not a report.
            </p>
          </div>

          <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>Loading services...</div>}>
            <ServicesGrid />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Not sure which service is right for you?</h2>
            <p className={styles.ctaText}>
              Book a 15-minute discovery call and Priyanka will guide you to the most impactful
              starting point for your situation.
            </p>
            <Link href="/contact" className={styles.ctaBtn}>
              <CalendarCheck size={18} /> Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
