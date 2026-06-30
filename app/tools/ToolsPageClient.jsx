'use client';

import Link from 'next/link';
import {
  Calculator, PenTool, Smartphone, Grid, Briefcase,
  Heart, Calendar, Star, ArrowRight, Sparkles,
} from 'lucide-react';
import styles from './tools.module.css';

const ALL_TOOLS = [
  {
    slug: 'life-path-calculator',
    title: 'Life Path Calculator',
    desc: 'Discover your Life Path number, ruling planet, and core personality archetype from your birth date.',
    icon: Calculator,
    tag: 'Numerology',
    popular: true,
  },
  {
    slug: 'name-numerology',
    title: 'Name & Destiny Number',
    desc: 'Calculate your name vibration using Chaldean or Pythagorean systems with a full letter-by-letter breakdown.',
    icon: PenTool,
    tag: 'Numerology',
    popular: true,
  },
  {
    slug: 'mobile-number-analysis',
    title: 'Mobile Number Analyzer',
    desc: 'Check your phone number\'s vibrational energy and get an instant numerology luck score.',
    icon: Smartphone,
    tag: 'Numerology',
    popular: false,
  },
  {
    slug: 'lo-shu-grid',
    title: 'Lo Shu Grid Generator',
    desc: 'Generate your 3×3 Lo Shu Grid, analyse completed planes, and get Vastu remedies for missing numbers.',
    icon: Grid,
    tag: 'Numerology',
    popular: true,
  },
  {
    slug: 'business-numerology',
    title: 'Business Name Numerology',
    desc: 'Check if your business name is vibrationally aligned for growth, client attraction, and financial success.',
    icon: Briefcase,
    tag: 'Business',
    popular: false,
  },
  {
    slug: 'marriage-compatibility',
    title: 'Marriage Compatibility',
    desc: 'Compare two birth dates for a detailed numerological compatibility score and relationship analysis.',
    icon: Heart,
    tag: 'Relationships',
    popular: true,
  },
  {
    slug: 'personal-day-calculator',
    title: 'Personal Day & Year',
    desc: 'Find your Personal Year, Month, and Day numerological cycles for optimal timing of decisions.',
    icon: Calendar,
    tag: 'Time Numerology',
    popular: false,
  },
  {
    slug: 'signature-analysis',
    title: 'Signature Analysis Guide',
    desc: 'Learn what your signature reveals about your personality, self-image, and subconscious mind.',
    icon: Star,
    tag: 'Graphology',
    popular: false,
  },
];

export default function ToolsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Free Esoteric Utilities</span>
            <h1 className={styles.title}>Free Numerology Tools & Calculators</h1>
            <p className={styles.subtitle}>
              Eight free tools covering Life Path, Name Vibration, Mobile Number, Lo Shu Grid, Business Name, Compatibility, Personal Cycles, and Signature Analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.toolListingGrid}>
            {ALL_TOOLS.map(({ slug, title, desc, icon: Icon, tag, popular }) => (
              <Link key={slug} href={`/tools/${slug}`} className={styles.toolCard}>
                {popular && <span className={styles.toolCardPopular}>Popular</span>}
                <div className={styles.toolCardIconWrap}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className={styles.toolCardTag}>{tag}</div>
                <h2 className={styles.toolCardTitle}>{title}</h2>
                <p className={styles.toolCardDesc}>{desc}</p>
                <span className={styles.toolCardCta}>
                  Open Tool <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <Sparkles size={36} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
              <h2 className={styles.ctaTitle}>Looking for Deeper, Personalised Insights?</h2>
              <p className={styles.ctaDesc}>
                Free calculators are an excellent starting point, but a true reading requires analysing all 25+ elements of your chart — name vibrations, signature style, mobile number, wristwatch energy, and Vastu. Book a comprehensive private reading with Priyanka Agrawal.
              </p>
              <Link href="/contact" className="btn-primary">
                Book a Private Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
