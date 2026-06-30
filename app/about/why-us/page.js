import Link from 'next/link';
import {
  CalendarCheck,
  ArrowRight,
  Award,
  HeartHandshake,
  Layers,
  ShieldCheck,
  Compass,
  Clock,
  Star,
  Target,
  Lightbulb,
  BadgeCheck,
} from 'lucide-react';
import styles from '../about.module.css';

export const metadata = {
  title: 'Why Choose Inner Insights | Our Approach & What Makes Us Different',
  description:
    'Practical, personal and confidential guidance from a 15+ year practice. See how Inner Insights works and why thousands choose us for numerology, graphology and graphotherapy.',
  keywords: [
    'why choose Inner Insights',
    'best numerology consultant',
    'genuine numerologist',
    'numerology approach',
    'trusted graphologist',
  ],
  alternates: { canonical: '/about/why-us' },
};

const differentiators = [
  { icon: Award, title: '15+ years of practice', text: 'A long, consistent track record across thousands of real consultations — not a side project.' },
  { icon: HeartHandshake, title: 'One-to-one with Priyanka', text: 'You work directly with the founder. Every reading is personal, never an automated report.' },
  { icon: Layers, title: 'Multi-discipline insight', text: 'Numerology, graphology, graphotherapy and Mokshapatam combined for a fuller picture.' },
  { icon: Compass, title: 'Practical, not fear-based', text: 'Clear next steps and honest remedies — we never use fear to push services.' },
  { icon: ShieldCheck, title: '100% confidential', text: 'Your details and your reading stay private. Always.' },
  { icon: Clock, title: 'Online & flexible', text: 'Consult from anywhere in India or abroad, at a time that suits you.' },
];

const principles = [
  { icon: Target, title: 'We start with your question', text: 'Career, marriage, money, a name — we focus on the decision you actually need help with.' },
  { icon: Lightbulb, title: 'We explain, in plain language', text: 'No jargon. You leave understanding what your numbers and writing mean for you.' },
  { icon: BadgeCheck, title: 'We give you something to do', text: 'Every session ends with specific, doable steps and remedies where relevant.' },
];

const faqs = [
  {
    q: 'How is Inner Insights different from a free online calculator?',
    a: 'Calculators give you a number. We interpret it for your exact situation, combine it with handwriting and other tools, and tell you what to do next.',
  },
  {
    q: 'Will you push expensive remedies on me?',
    a: 'No. Guidance is honest and practical. Where a remedy genuinely helps we will say so, but we never use fear to sell.',
  },
  {
    q: 'Do I need to visit in person?',
    a: 'Most clients consult online from anywhere. In-person sessions are available on request via the contact page.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'AboutPage', name: 'Why Inner Insights', url: 'https://innerinsights.net/about/why-us' },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://innerinsights.net/about' },
        { '@type': 'ListItem', position: 3, name: 'Why Inner Insights', item: 'https://innerinsights.net/about/why-us' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function WhyUsPage() {
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
            <span className={styles.breadcrumbCurrent}>Why Inner Insights</span>
          </nav>

          <div className={styles.heroInner}>
            <span className={styles.heroEyebrow}>Why Inner Insights</span>
            <h1 className={styles.heroTitle}>Guidance that&rsquo;s practical, personal and proven.</h1>
            <p className={styles.heroLead}>
              There&rsquo;s no shortage of numerology online. What sets Inner Insights apart is a
              15+ year practice, one-to-one attention, and advice you can actually act on.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary"><CalendarCheck size={18} /> Book a Consultation</Link>
              <Link href="/services" className="btn-outline">Explore Services <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>The Difference</span>
            <h2 className={styles.sectionTitle}>Six reasons clients choose us</h2>
          </div>
          <div className={styles.diffGrid}>
            {differentiators.map(({ icon: Icon, title, text }) => (
              <div key={title} className={styles.diffCard}>
                <span className={styles.diffIcon}><Icon size={26} strokeWidth={1.5} /></span>
                <h3 className={styles.diffTitle}>{title}</h3>
                <p className={styles.diffText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>How It Works</span>
            <h2 className={styles.sectionTitle}>From question to clear next step</h2>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <h3 className={styles.stepTitle}>Book your slot</h3>
              <p className={styles.stepDesc}>Pick a time and tell us what you&rsquo;d like help with.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.stepTitle}>Share your details</h3>
              <p className={styles.stepDesc}>Birth date, name and — where relevant — a handwriting sample.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <h3 className={styles.stepTitle}>Get your reading</h3>
              <p className={styles.stepDesc}>A clear, personalised session in plain language.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>04</span>
              <h3 className={styles.stepTitle}>Apply the guidance</h3>
              <p className={styles.stepDesc}>Leave with specific steps and remedies if you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>What You Can Expect</span>
            <h2 className={styles.sectionTitle}>Our promise in every session</h2>
          </div>
          <div className={styles.credGrid}>
            {principles.map(({ icon: Icon, title, text }) => (
              <div key={title} className={styles.credCard}>
                <span className={styles.credIcon}><Icon size={24} strokeWidth={1.5} /></span>
                <h3 className={styles.credTitle}>{title}</h3>
                <p className={styles.credText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.quoteGrid2}>
            <div className={styles.quoteCard}>
              <span className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </span>
              <p className={styles.quoteText}>
                &ldquo;Clear, honest and genuinely useful. I came in confused and left with a plan.&rdquo;
              </p>
              <div className={styles.quoteHead}>
                <span className={styles.quoteAvatar}>N</span>
                <span>
                  <span className={styles.quoteName}>Neha P.</span><br />
                  <span className={styles.quoteMeta}>Career guidance</span>
                </span>
              </div>
            </div>
            <div className={styles.quoteCard}>
              <span className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </span>
              <p className={styles.quoteText}>
                &ldquo;Professional and to the point. The remedies were simple and made a real difference.&rdquo;
              </p>
              <div className={styles.quoteHead}>
                <span className={styles.quoteAvatar}>S</span>
                <span>
                  <span className={styles.quoteName}>Sanjay M.</span><br />
                  <span className={styles.quoteMeta}>Business consultation</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.centerLink} style={{ marginTop: '2rem' }}>
            <Link href="/testimonials" className="link-arrow">Read all testimonials <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Good to Know</span>
            <h2 className={styles.sectionTitle}>Questions people ask before booking</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
          <div className={styles.centerLink} style={{ marginTop: '2rem' }}>
            <Link href="/faq" className="link-arrow">See all FAQs <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>See the difference for yourself</h2>
            <p className={styles.ctaText}>Book a consultation with Priyanka, or read more about her background first.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnLight}><CalendarCheck size={18} /> Book a Consultation</Link>
              <Link href="/about/priyanka-agrawal" className={styles.ctaBtnGhost}>Meet Priyanka <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}