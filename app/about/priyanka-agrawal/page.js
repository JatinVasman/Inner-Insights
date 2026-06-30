import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarCheck,
  ArrowRight,
  Award,
  Users,
  Layers,
  HeartHandshake,
  Globe,
  ShieldCheck,
  Star,
  Calculator,
  PenTool,
  Feather,
  Map,
  Brain,
  Sparkles,
} from 'lucide-react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Priyanka Agrawal — Founder & Chief Numerologist | Inner Insights',
  description:
    'Meet Priyanka Agrawal, founder of Inner Insights. 15+ years and 20,000+ readings across numerology, graphology, graphotherapy and Mokshapatam, helping people decide with clarity.',
  keywords: [
    'Priyanka Agrawal numerologist',
    'best numerologist India',
    'graphologist Priyanka Agrawal',
    'numerology expert',
    'graphotherapy practitioner',
  ],
  alternates: { canonical: '/about/priyanka-agrawal' },
};

const credentials = [
  { icon: Award, title: '15+ years of practice', text: 'A decade and a half guiding clients through life, career and relationship decisions.' },
  { icon: Users, title: '20,000+ readings', text: 'Personal consultations for individuals, families and business owners across India and abroad.' },
  { icon: Layers, title: 'Multi-discipline insight', text: 'Numerology, graphology, graphotherapy and Mokshapatam combined into one clear reading.' },
  { icon: HeartHandshake, title: 'Personalised approach', text: 'Every session is one-to-one — no templates, no generic reports.' },
  { icon: Globe, title: 'Pan-India & global clients', text: 'Online consultations make guidance accessible wherever you are.' },
  { icon: ShieldCheck, title: 'Confidential & ethical', text: 'Honest guidance and remedies — never fear-based selling.' },
];

const journey = [
  { phase: 'The beginning', body: 'A personal fascination with how numbers and handwriting reflect personality grew into serious, sustained study of numerology and graphology.' },
  { phase: 'Building the practice', body: 'Years of one-to-one readings refined a practical, no-jargon style focused on decisions clients could actually act on.' },
  { phase: 'Expanding the toolkit', body: 'Graphotherapy and Mokshapatam were added so guidance could address mindset and habits, not just charts.' },
  { phase: 'Today', body: 'Inner Insights serves thousands of clients a year with consultations, calculators and content — all rooted in the same hands-on approach.' },
];

const expertise = [
  { name: 'Numerology', tag: 'Numbers & life path', icon: Calculator, href: '/numerology-consultation' },
  { name: 'Graphology', tag: 'Handwriting & signature', icon: PenTool, href: '/signature-analysis' },
  { name: 'Graphotherapy', tag: 'Handwriting correction', icon: Feather, href: '/graphotherapy' },
  { name: 'Mokshapatam', tag: 'Karmic & life-purpose coaching', icon: Map, href: '/mokshapatam-coaching' },
  { name: 'NLP Therapy', tag: 'Mindset & behaviour', icon: Brain, href: '/services' },
  { name: 'Hypnotherapy', tag: 'Deep relaxation & healing', icon: Sparkles, href: '/services' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://innerinsights.net/about/priyanka-agrawal',
      name: 'Priyanka Agrawal',
      jobTitle: 'Founder & Chief Numerologist',
      worksFor: { '@type': 'Organization', name: 'Inner Insights', url: 'https://innerinsights.net' },
      url: 'https://innerinsights.net/about/priyanka-agrawal',
      image: 'https://innerinsights.net/founder.jpeg',
      knowsAbout: ['Numerology', 'Graphology', 'Graphotherapy', 'Mokshapatam', 'NLP', 'Hypnotherapy'],
      description:
        'Founder of Inner Insights with 15+ years of experience in numerology, graphology, graphotherapy and Mokshapatam.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://innerinsights.net/about' },
        { '@type': 'ListItem', position: 3, name: 'Priyanka Agrawal', item: 'https://innerinsights.net/about/priyanka-agrawal' },
      ],
    },
  ],
};

export default function PriyankaAgrawalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/about">About</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>Priyanka Agrawal</span>
          </nav>

          <div className={styles.authorHero}>
            <div className={styles.authorHeroImg}>
              <Image
                src="/founder.jpeg"
                alt="Priyanka Agrawal, Founder & Chief Numerologist of Inner Insights"
                fill
                className={styles.authorHeroImage}
                priority
              />
            </div>
            <div>
              <span className={styles.heroEyebrow}>Founder &amp; Chief Numerologist</span>
              <h1 className={styles.heroTitle}>Priyanka Agrawal</h1>
              <p className={styles.lede}>
                Priyanka is the founder of Inner Insights and a trusted name in numerology,
                graphology and wellness consulting. Over 15+ years she has given 20,000+ readings,
                helping people find clarity about career, relationships, money and personal growth.
              </p>
              <p className={styles.lede}>
                Her style is practical and personal: read the numbers and the handwriting, explain
                what they mean in plain language, and hand you specific steps you can act on.
              </p>
              <div className={styles.tagRow}>
                <span className={styles.tag}><Award size={15} /> 15+ years</span>
                <span className={styles.tag}><Users size={15} /> 20,000+ readings</span>
                <span className={styles.tag}><Globe size={15} /> Online &amp; in-person</span>
              </div>
              <Link href="/contact" className="btn-primary">
                <CalendarCheck size={18} /> Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Experience &amp; Expertise</span>
            <h2 className={styles.sectionTitle}>Why clients trust Priyanka</h2>
          </div>
          <div className={styles.credGrid}>
            {credentials.map(({ icon: Icon, title, text }) => (
              <div key={title} className={styles.credCard}>
                <span className={styles.credIcon}><Icon size={24} strokeWidth={1.5} /></span>
                <h3 className={styles.credTitle}>{title}</h3>
                <p className={styles.credText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>The Journey</span>
            <h2 className={styles.sectionTitle}>A practice built one reading at a time</h2>
          </div>
          <div className={styles.timeline}>
            {journey.map(({ phase, body }) => (
              <div key={phase} className={styles.timelineItem}>
                <div className={styles.timelinePhase}>{phase}</div>
                <p className={styles.timelineBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>What She Practises</span>
            <h2 className={styles.sectionTitle}>Areas of expertise</h2>
          </div>
          <div className={styles.expertiseGrid}>
            {expertise.map(({ name, tag, icon: Icon, href }) => (
              <Link key={name} href={href} className={styles.expertiseCard}>
                <Icon className={styles.expertiseIcon} size={28} strokeWidth={1.5} />
                <span>
                  <span className={styles.expertiseName}>{name}</span>
                  <br />
                  <span className={styles.expertiseTag}>{tag}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className={styles.centerLink} style={{ marginTop: '2.5rem' }}>
            <Link href="/services" className="btn-primary">View All Services <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Client words */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>In Their Words</span>
            <h2 className={styles.sectionTitle}>What clients say about working with Priyanka</h2>
          </div>
          <div className={styles.quoteGrid2}>
            <div className={styles.quoteCard}>
              <span className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </span>
              <p className={styles.quoteText}>
                &ldquo;The reading was specific and practical. I finally understood why one decision
                kept stalling — and what to change. It genuinely helped.&rdquo;
              </p>
              <div className={styles.quoteHead}>
                <span className={styles.quoteAvatar}>R</span>
                <span>
                  <span className={styles.quoteName}>Ritu S.</span><br />
                  <span className={styles.quoteMeta}>Numerology consultation</span>
                </span>
              </div>
            </div>
            <div className={styles.quoteCard}>
              <span className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </span>
              <p className={styles.quoteText}>
                &ldquo;Calm, honest and clear. No fear-selling, just guidance I could act on the
                same week. I&rsquo;ve recommended her to my whole family.&rdquo;
              </p>
              <div className={styles.quoteHead}>
                <span className={styles.quoteAvatar}>A</span>
                <span>
                  <span className={styles.quoteName}>Amit K.</span><br />
                  <span className={styles.quoteMeta}>Business name numerology</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.centerLink} style={{ marginTop: '2rem' }}>
            <Link href="/testimonials" className="link-arrow">Read more testimonials <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Work with Priyanka directly</h2>
            <p className={styles.ctaText}>Book a one-to-one consultation and get clear, practical guidance for your situation.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnLight}><CalendarCheck size={18} /> Book a Consultation</Link>
              <Link href="/about/why-us" className={styles.ctaBtnGhost}>Why Inner Insights <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}