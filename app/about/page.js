import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarCheck,
  User,
  Award,
  MessageSquareQuote,
  ArrowRight,
  Calculator,
  PenTool,
  Feather,
  Map,
  Brain,
  Sparkles,
} from 'lucide-react';
import styles from './about.module.css';

export const metadata = {
  title: 'About Inner Insights | Numerology, Graphology & Graphotherapy Practice',
  description:
    'Meet Inner Insights — the consulting practice of Priyanka Agrawal. 15+ years guiding people through numerology, graphology, graphotherapy and Mokshapatam to make clearer life decisions.',
  keywords: [
    'about Inner Insights',
    'Priyanka Agrawal numerologist',
    'numerology consultant',
    'graphology expert',
    'graphotherapy practitioner',
    'Mokshapatam coaching',
    'numerology consultation India',
  ],
  alternates: { canonical: '/about' },
};

const expertise = [
  { name: 'Numerology', tag: 'Numbers & life path', icon: Calculator, href: '/numerology-consultation' },
  { name: 'Graphology', tag: 'Handwriting & signature', icon: PenTool, href: '/signature-analysis' },
  { name: 'Graphotherapy', tag: 'Handwriting correction', icon: Feather, href: '/graphotherapy' },
  { name: 'Mokshapatam', tag: 'Karmic & life-purpose coaching', icon: Map, href: '/mokshapatam-coaching' },
  { name: 'NLP Therapy', tag: 'Mindset & behaviour', icon: Brain, href: '/services' },
  { name: 'Hypnotherapy', tag: 'Deep relaxation & healing', icon: Sparkles, href: '/services' },
];

const faqs = [
  {
    q: 'What does Inner Insights actually do?',
    a: 'We help you make clearer decisions using numerology, graphology, graphotherapy and allied practices — for questions about career, marriage, money, naming and personal growth. Every consultation ends with practical, do-this-next guidance.',
  },
  {
    q: 'Who will I be working with?',
    a: 'Your reading is done by Priyanka Agrawal, founder and chief numerologist, with 15+ years of practice. You can read her full background on the founder page.',
  },
  {
    q: 'Are sessions online or in person?',
    a: 'Most consultations are online, so you can book from anywhere in India or abroad. In-person sessions are available on request — see the contact page to arrange one.',
  },
  {
    q: 'How do I get started?',
    a: 'Try a free calculator to get a first reading, or book a consultation for a full, personalised session.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://innerinsights.net/about',
      name: 'About Inner Insights',
      url: 'https://innerinsights.net/about',
    },
    {
      '@type': 'Organization',
      name: 'Inner Insights',
      url: 'https://innerinsights.net',
      description:
        'Numerology, graphology, graphotherapy and Mokshapatam consulting practice founded by Priyanka Agrawal.',
      founder: { '@type': 'Person', name: 'Priyanka Agrawal' },
    },
    {
      '@type': 'Person',
      name: 'Priyanka Agrawal',
      jobTitle: 'Founder & Chief Numerologist',
      worksFor: { '@type': 'Organization', name: 'Inner Insights' },
      url: 'https://innerinsights.net/about/priyanka-agrawal',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://innerinsights.net/about' },
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span className={styles.breadcrumbCurrent}>About</span>
          </nav>

          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>About Us</span>
              <h1 className={styles.heroTitle}>Guidance that helps you decide with confidence.</h1>
              <p className={styles.heroLead}>
                Inner Insights is the consulting practice of Priyanka Agrawal — 15+ years
                helping people use numerology, graphology and allied sciences to make clearer
                decisions about career, relationships, money and wellbeing.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-primary">
                  <CalendarCheck size={18} />
                  Book a Consultation
                </Link>
                <Link href="/about/priyanka-agrawal" className="btn-outline">
                  Meet Priyanka
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.founderCard}>
                <div className={styles.founderCardRing} />
                <Image
                  src="/founder.jpeg"
                  alt="Priyanka Agrawal"
                  width={340}
                  height={420}
                  className={styles.founderCardImg}
                  priority
                  sizes="(max-width: 900px) 0px, 340px"
                />
                <div className={`${styles.founderCardBadge} ${styles.badge1}`}>
                  <strong>20K+</strong>
                  <span>Happy Clients</span>
                </div>
                <div className={`${styles.founderCardBadge} ${styles.badge2}`}>
                  <strong>15+</strong>
                  <span>Years of Practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Our Story</span>
            <h2 className={styles.sectionTitle}>Where ancient insight meets everyday decisions</h2>
          </div>
          <div className={styles.story}>
            <p>
              People rarely come to us asking about &ldquo;numerology.&rdquo; They come with a
              real question — should I take this job, is this the right partner, why does this
              name or number keep holding me back. Inner Insights exists to turn those questions
              into answers you can act on.
            </p>
            <p>
              Over 15 years and 20,000+ readings, the approach has stayed the same: combine
              numerology, graphology, graphotherapy and Mokshapatam with plain, practical advice.
              No jargon, no fear-selling — just a clear reading of where you are and what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.statsBand}>
            <div className={styles.stat}>
              <span className={styles.statNum}>15+</span>
              <span className={styles.statLabel}>Years of Practice</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>20K+</span>
              <span className={styles.statLabel}>Readings Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>25+</span>
              <span className={styles.statLabel}>Expert Services</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the practice (spokes) */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Explore</span>
            <h2 className={styles.sectionTitle}>Get to know Inner Insights</h2>
            <p className={styles.sectionSub}>
              Three quick ways to decide whether we&rsquo;re the right fit for you.
            </p>
          </div>
          <div className={styles.exploreGrid}>
            <Link href="/about/priyanka-agrawal" className={styles.exploreCard}>
              <span className={styles.exploreIcon}>
                <User size={24} strokeWidth={1.5} />
              </span>
              <h3 className={styles.exploreTitle}>Meet the Founder</h3>
              <p className={styles.exploreDesc}>
                Priyanka Agrawal&rsquo;s background, credentials and the experience behind every reading.
              </p>
              <span className={styles.exploreLink}>
                View profile <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/about/why-us" className={styles.exploreCard}>
              <span className={styles.exploreIcon}>
                <Award size={24} strokeWidth={1.5} />
              </span>
              <h3 className={styles.exploreTitle}>Why Inner Insights</h3>
              <p className={styles.exploreDesc}>
                What makes our approach different — and how a reading actually helps you decide.
              </p>
              <span className={styles.exploreLink}>
                See our approach <ArrowRight size={16} />
              </span>
            </Link>

            <Link href="/testimonials" className={styles.exploreCard}>
              <span className={styles.exploreIcon}>
                <MessageSquareQuote size={24} strokeWidth={1.5} />
              </span>
              <h3 className={styles.exploreTitle}>Stories &amp; Results</h3>
              <p className={styles.exploreDesc}>
                Real client experiences and the outcomes that followed their consultations.
              </p>
              <span className={styles.exploreLink}>
                Read testimonials <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder snapshot */}
      <section className="section">
        <div className="container">
          <div className={styles.founder}>
            <div className={styles.founderImageWrapper}>
              <Image
                src="/founder1.jpeg"
                alt="Priyanka Agrawal, Founder of Inner Insights"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.founderImage}
              />
            </div>
            <div>
              <span className={styles.founderRole}>Founder &amp; Chief Numerologist</span>
              <h2 className={styles.founderName}>Priyanka Agrawal</h2>
              <p className={styles.founderBio}>
                Priyanka is a trusted name in numerology, graphology and wellness consulting.
                What began as a personal fascination with numbers and handwriting grew into a
                full practice helping thousands of people find clarity, harmony and direction.
              </p>
              <p className={styles.founderBio}>
                She works one-to-one with every client — reading your numbers and handwriting,
                explaining what they mean in plain language, and giving you specific steps to move forward.
              </p>
              <p className={styles.founderSignature}>
                &ldquo;Numbers don&rsquo;t decide your life. They show you where to look.&rdquo;
              </p>
              <Link href="/about/priyanka-agrawal" className="link-arrow">
                Read Priyanka&rsquo;s full profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Promotion */}
      <section className="section">
        <div className="container">
          <div className={styles.bookPromo}>
            <div className={styles.bookCoverWrapper}>
              <div className={styles.bookCover3d}>
                <div className={styles.bookSpine3d} />
                <div className={styles.bookFace3d}>
                  <Image
                    src="/book-cover.jpg"
                    alt="Time is Talking by Priyanka Agrawal"
                    fill
                    className={styles.bookCoverImg}
                  />
                </div>
              </div>
              <div className={styles.bookShadow} />
            </div>

            <div className={styles.bookContent}>
              <span className={styles.bookBadge}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                Now Available on Amazon
              </span>
              <p className={styles.bookAuthorLine}>By Priyanka Agrawal</p>
              <h2 className={styles.bookTitle}>Time is Talking</h2>
              <p className={styles.bookSubtitle}>Decode Your Subconscious Patterns Through the Psychology of Time and the Watch You Wear</p>
              <p className={styles.bookDesc}>
                What does the watch on your wrist say about your mind? In this groundbreaking book, Priyanka Agrawal reveals how the timepiece you choose reflects deep subconscious patterns — and how understanding those patterns can help you make better decisions, break hidden blocks, and align with your true purpose.
              </p>
              <ul className={styles.bookHighlights}>
                <li>Discover what your watch choice reveals about your personality</li>
                <li>Decode the subconscious psychology behind how you relate to time</li>
                <li>Identify hidden patterns holding you back from growth</li>
                <li>Practical tools to align your mindset with your goals</li>
              </ul>
              <a
                href="https://amzn.in/d/04ZoezLA"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookBtn}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48" aria-label="Amazon" role="img">
                  <path fill="#ffffff" d="M25.403 25.96c-.743 1.482-2.015 2.436-3.393 2.758-.208 0-.527.105-.846.105-2.329 0-3.706-1.802-3.706-4.45 0-3.394 2.012-4.981 4.552-5.726 1.378-.317 2.97-.424 4.558-.424v1.273c0 2.437.105 4.343-1.165 6.464zm1.165-12.608c-1.377.105-2.969.21-4.558.418-2.435.322-4.87.746-6.88 1.7-3.92 1.59-6.57 4.98-6.57 9.959 0 6.257 4.024 9.433 9.113 9.433 1.693 0 3.07-.214 4.337-.528 2.018-.638 3.709-1.804 5.721-3.925 1.166 1.59 1.487 2.335 3.497 4.03.53.209 1.06.209 1.481-.105 1.273-1.062 3.5-2.97 4.663-4.03.53-.423.426-1.06.104-1.586-1.163-1.485-2.331-2.758-2.331-5.619v-9.538c0-4.026.322-7.736-2.645-10.489C30.065.85 26.25 0 23.283 0H22.01C16.612.313 10.894 2.646 9.618 9.323c-.212.85.426 1.166.85 1.27l5.932.743c.635-.107.954-.638 1.058-1.163.528-2.332 2.436-3.498 4.552-3.713h.427c1.272 0 2.65.531 3.389 1.593.847 1.27.742 2.967.742 4.452v.847z" />
                  <path fill="#FF9A00" d="M47.994 35.946v-.002c-.022-.5-.127-.881-.335-1.198l-.023-.03-.025-.032c-.212-.231-.415-.319-.635-.415-.658-.254-1.615-.39-2.766-.392-.827 0-1.739.079-2.656.28l-.003-.063-.923.308-.017.008-.522.17v.022a8.17 8.17 0 0 0-1.684.946c-.322.24-.587.56-.602 1.048a.978.978 0 0 0 .35.75 1.119 1.119 0 0 0 .861.232l.045-.002.034-.006c.452-.096 1.11-.161 1.88-.268.66-.074 1.36-.127 1.967-.127.429-.003.815.028 1.08.084a1.208 1.208 0 0 1 .328.11.955.955 0 0 1 .025.266c.006.508-.208 1.451-.505 2.372-.288.92-.638 1.843-.869 2.456a1.246 1.246 0 0 0-.093.466c-.006.246.096.545.31.743.21.197.48.276.706.276h.011c.339-.003.627-.138.875-.333 2.343-2.106 3.158-5.472 3.192-7.367l-.006-.302zm-6.945 2.92a1.645 1.645 0 0 0-.714.16c-.257.102-.52.221-.768.326l-.364.152-.474.19v.005c-5.15 2.09-10.56 3.315-15.567 3.422-.184.006-.37.006-.548.006-7.874.005-14.297-3.648-20.777-7.248a1.482 1.482 0 0 0-.685-.181c-.291 0-.59.11-.808.313a1.108 1.108 0 0 0-.344.805c-.003.392.209.754.505.988C6.587 43.087 13.253 47.994 22.22 48c.175 0 .353-.006.53-.008 5.704-.128 12.153-2.056 17.16-5.201l.03-.02a17.54 17.54 0 0 0 1.928-1.333c.384-.285.65-.731.65-1.194-.017-.822-.715-1.378-1.468-1.378z" />
                </svg>
                Get it on Amazon →
              </a>
            </div>
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
              <p className={styles.stepDesc}>Pick a time that suits you and tell us what you&rsquo;d like help with.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <h3 className={styles.stepTitle}>Share your details</h3>
              <p className={styles.stepDesc}>Your birth date, name and — where relevant — a handwriting or signature sample.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <h3 className={styles.stepTitle}>Get your reading</h3>
              <p className={styles.stepDesc}>A clear, personalised session covering what your numbers and writing reveal.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNum}>04</span>
              <h3 className={styles.stepTitle}>Apply the guidance</h3>
              <p className={styles.stepDesc}>Leave with specific, practical steps — and remedies if you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>What We Practise</span>
            <h2 className={styles.sectionTitle}>Areas of expertise</h2>
            <p className={styles.sectionSub}>
              Six core disciplines, each with dedicated services you can explore.
            </p>
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
          <div className={styles.centerLink}>
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Good to Know</span>
            <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>
                  {f.q === 'Who will I be working with?' ? (
                    <>
                      Your reading is done by Priyanka Agrawal, founder and chief numerologist,
                      with 15+ years of practice. You can read her full background on the{' '}
                      <Link href="/about/priyanka-agrawal">founder page</Link>.
                    </>
                  ) : f.q === 'How do I get started?' ? (
                    <>
                      Try a <Link href="/tools">free calculator</Link> to get a first reading, or{' '}
                      <Link href="/contact">book a consultation</Link> for a full, personalised session.
                    </>
                  ) : (
                    f.a
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.centerLink} style={{ marginTop: '2rem' }}>
            <Link href="/faq" className="link-arrow">
              See all FAQs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready for a clearer picture?</h2>
            <p className={styles.ctaText}>
              Book a one-to-one consultation with Priyanka, or browse plans and pricing first.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className={styles.ctaBtnLight}>
                <CalendarCheck size={18} />
                Book a Consultation
              </Link>
              <Link href="/pricing" className={styles.ctaBtnGhost}>
                View Pricing
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}