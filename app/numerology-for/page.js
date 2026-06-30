import Link from 'next/link';
import {
  Briefcase, Heart, TrendingUp, Wallet, Leaf, GraduationCap,
  CalendarCheck, ArrowRight, Lightbulb,
} from 'lucide-react';
import styles from './numerology-for.module.css';

export const metadata = {
  title: 'Numerology by Need | Inner Insights — Find Your Answer',
  description:
    'People rarely search "numerology" — they search for help with career, marriage, money, health or business. Find the right guidance for exactly what you need.',
  keywords: [
    'numerology for career', 'numerology for marriage', 'numerology for business',
    'numerology for wealth', 'numerology for health', 'numerology for students',
  ],
  alternates: { canonical: '/numerology-for' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'CollectionPage', name: 'Numerology by Need', url: 'https://innerinsights.net/numerology-for' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'Numerology by Need', item: 'https://innerinsights.net/numerology-for' },
      ],
    },
  ],
};

const needs = [
  {
    title: 'Career & Job Growth',
    icon: Briefcase,
    accent: '#7c3aed',
    iconBg: 'rgba(124,58,237,0.1)',
    desc: 'Your life path number shapes your natural strengths, work style and the environments where you thrive. Stop chasing the wrong roles — understand the direction that is already written in your numbers.',
    points: [
      'Best careers and industries for your life path number',
      'Numerology for switching jobs or starting a business',
      'Choosing the right date for interviews and offer letters',
      'Remedies for career stagnation and recurring obstacles',
    ],
    services: ['Numerology Consultation', 'Annual Forecast', 'Name Correction', 'Time Numerology'],
    color: '#7c3aed',
  },
  {
    title: 'Marriage & Relationships',
    icon: Heart,
    accent: '#db2777',
    iconBg: 'rgba(219,39,119,0.1)',
    desc: 'Numerological compatibility goes beyond sun signs. It looks at how two people\'s life paths, name numbers and personal years interact — and what that means for long-term harmony.',
    points: [
      'Compatibility check before engagement or marriage',
      'Choosing an auspicious wedding date',
      'Understanding your partner\'s emotional and decision-making patterns',
      'Remedies for recurring conflicts and marriage delays',
    ],
    services: ['Marriage Compatibility', 'Numerology Consultation', 'Name Correction', 'Annual Forecast'],
    color: '#db2777',
  },
  {
    title: 'Business Success',
    icon: TrendingUp,
    accent: '#b45309',
    iconBg: 'rgba(180,83,9,0.1)',
    desc: 'Every successful business has an energetically aligned name, logo and launch date. Align your brand\'s numbers with your founder number to build something that works with you, not against you.',
    points: [
      'Choosing a business name with the right vibration',
      'Aligning your logo, tagline and visiting card energy',
      'Selecting your company incorporation and launch date',
      'Team numerology for better role and leadership fit',
    ],
    services: ['Business Name Numerology', 'Scientific Logo Design', 'Visiting Card Numerology', 'Corporate Numerology'],
    color: '#b45309',
  },
  {
    title: 'Money & Wealth',
    icon: Wallet,
    accent: '#047857',
    iconBg: 'rgba(4,120,87,0.1)',
    desc: 'Wealth is not just about earning — it is about the energy you hold around money. Numerology identifies which numbers attract financial flow, which create blockages and exactly how to shift them.',
    points: [
      'Lucky bank account and locker numbers for your profile',
      'Auspicious dates for investments, SIPs and property',
      'Remedies for recurring financial losses or stagnation',
      'Wealth-attracting colours, directions and habits by number',
    ],
    services: ['Lucky Bank Account Numerology', 'Annual Forecast', 'Lucky Colour & Direction', 'Numerology Consultation'],
    color: '#047857',
  },
  {
    title: 'Health & Wellbeing',
    icon: Leaf,
    accent: '#0369a1',
    iconBg: 'rgba(3,105,161,0.1)',
    desc: 'Numbers reveal patterns — including the stress patterns, energy dips and lifestyle tendencies that affect your health. Use numerology to build routines that work with your natural rhythm.',
    points: [
      'How your life path number shapes your stress response',
      'Best directions, colours and habits for your energy type',
      'Graphotherapy for anxiety, overthinking and self-confidence',
      'Numerology for building consistent wellness routines',
    ],
    services: ['Numerology Consultation', 'Graphotherapy', 'Lucky Colour & Direction', 'Gemstone & Rudraksha'],
    color: '#0369a1',
  },
  {
    title: 'Students & Exams',
    icon: GraduationCap,
    accent: '#6d28d9',
    iconBg: 'rgba(109,40,217,0.1)',
    desc: 'The right name, study direction and timing can meaningfully support a student\'s focus, memory and exam-day performance. Small changes, consistently applied, produce real results.',
    points: [
      'Lucky study room direction and seating for concentration',
      'Best colours and timing for exam day',
      'Name correction for students facing repeated setbacks',
      'Auspicious dates for submitting applications and forms',
    ],
    services: ['Numerology Consultation', 'Name Correction', 'Lucky Colour & Direction', 'Time Numerology'],
    color: '#6d28d9',
  },
];

export default function NumerologyForPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Numerology by Need</span>
          </nav>

          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>Find your answer</span>
              <h1 className={styles.heroTitle}>People don&rsquo;t search for numerology.<br />They search for what they need.</h1>
              <p className={styles.heroLead}>
                Whether it&rsquo;s a career that feels right, a marriage that lasts, a business that grows or a student
                who finally finds their focus — numerology works best when it&rsquo;s aimed at a real question.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-primary">
                  <CalendarCheck size={18} /> Book a Consultation
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.numberGrid}>
                {[
                  { n: '1', bg: 'rgba(118,83,158,0.12)', color: '#76539e', delay: '0s' },
                  { n: '2', bg: 'rgba(219,39,119,0.1)',  color: '#db2777', delay: '0.4s' },
                  { n: '3', bg: 'rgba(180,83,9,0.1)',    color: '#b45309', delay: '0.8s' },
                  { n: '4', bg: 'rgba(4,120,87,0.1)',    color: '#047857', delay: '1.2s' },
                  { n: '5', bg: 'rgba(3,105,161,0.12)',  color: '#0369a1', delay: '0s' },
                  { n: '6', bg: 'rgba(109,40,217,0.1)',  color: '#6d28d9', delay: '0.4s' },
                  { n: '7', bg: 'rgba(124,58,237,0.1)',  color: '#7c3aed', delay: '0.8s' },
                  { n: '8', bg: 'rgba(180,83,9,0.1)',    color: '#b45309', delay: '1.2s' },
                  { n: '9', bg: 'rgba(219,39,119,0.1)',  color: '#db2777', delay: '0s' },
                ].map(({ n, bg, color, delay }) => (
                  <div
                    key={n}
                    className={styles.numberOrb}
                    style={{ backgroundColor: bg, color, animationDelay: delay }}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className={styles.explainer}>
            <div className={styles.explainerIcon}>
              <Lightbulb size={26} />
            </div>
            <div className={styles.explainerText}>
              <h3>How this works</h3>
              <p>
                Each section below maps a real-life question to the numerology services most relevant to it.
                Read the area that matches your situation, see which services apply and book a consultation
                with Priyanka. You don&rsquo;t need to know anything about numerology — just bring your question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need cards */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Six Life Areas</span>
            <h2 className={styles.sectionTitle}>What do you need help with?</h2>
            <p className={styles.sectionSub}>Each area is a real question people bring to Priyanka every day.</p>
          </div>

          <div className={styles.needsGrid}>
            {needs.map(({ title, icon: Icon, accent, iconBg, desc, points, services, color }) => (
              <div
                key={title}
                className={styles.needCard}
                style={{ borderLeftColor: accent }}
              >
                <div className={styles.needCardTop}>
                  <div className={styles.needCardIconWrap} style={{ backgroundColor: iconBg }}>
                    <Icon size={24} color={accent} strokeWidth={1.75} />
                  </div>
                  <h3 className={styles.needCardTitle}>{title}</h3>
                </div>

                <p className={styles.needCardDesc}>{desc}</p>

                <ul className={styles.needCardPoints}>
                  {points.map((pt, i) => (
                    <li key={i}>
                      <span className={styles.bullet} style={{ backgroundColor: accent }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className={styles.needCardServices}>
                  {services.map(s => (
                    <span key={s} className={styles.serviceChip}>{s}</span>
                  ))}
                </div>

                <Link href="/contact" className={styles.needCardLink} style={{ color }}>
                  Book a consultation <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Not sure which area fits your situation?</h2>
            <p className={styles.ctaText}>
              Book a free 15-minute discovery call. Priyanka will listen, identify the most relevant
              area and recommend the right starting point — no preparation needed.
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
