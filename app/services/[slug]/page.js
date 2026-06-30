import Link from 'next/link';
import { CalendarCheck, Check, ArrowRight } from 'lucide-react';
import styles from './service.module.css';

const SERVICES = {
  numerology: {
    name: 'Numerology Consultation',
    tagline: 'Decode Your Life Path Through the Power of Numbers',
    metaDescription:
      'Book a personalised numerology consultation with Priyanka Agrawal at Inner Insights. Decode your Life Path, Destiny, Soul Urge & Personal Year numbers for clarity in career, relationships & finances.',
    keywords: ['numerology consultation India', 'life path number reading', 'destiny number analysis', 'personal year numerology', 'best numerologist online', 'Priyanka Agrawal numerology'],
    intro: 'Your birth date and full name carry a precise vibrational blueprint — one that shapes your natural strengths, recurring challenges, relationship patterns, and ideal timing for major decisions. A professional numerology consultation at Inner Insights maps this blueprint in full, giving you the clarity and direction you need to navigate life with confidence.',
    whatYouGet: [
      'Life Path, Destiny, Soul Urge & Personality number analysis',
      'Personal Year, Month & Day cycle forecasting',
      'Name vibration assessment against your birth numbers',
      'Career and business alignment guidance',
      'Relationship and compatibility insights',
      'Practical remedies: name corrections, colour therapy, gemstone guidance',
      'Written summary report + recorded session',
    ],
    faqs: [
      { q: 'What information do I need for a numerology consultation?', a: 'You need your full birth name (as on birth certificate), your commonly used name, and your complete date of birth. For relationship readings, the same details for your partner.' },
      { q: 'How long does a session take?', a: 'A standard numerology consultation is 45–60 minutes. Comprehensive readings covering multiple family members or business numerology may extend to 90 minutes.' },
      { q: 'Can I do a numerology consultation online?', a: 'Yes. Over 70% of our clients are served via Zoom or WhatsApp video. You receive the same depth of analysis as in-person sessions, plus a digital report.' },
      { q: 'How often should I get a numerology reading?', a: 'A foundational reading is typically done once. We recommend an annual Personal Year forecast reading at the start of each year or on your birthday.' },
    ],
  },
  mokshapatam: {
    name: 'Mokshapatam Coaching',
    tagline: 'Ancient Board Wisdom for Modern Life Clarity',
    metaDescription:
      'Experience Mokshapatam coaching with Priyanka Agrawal at Inner Insights — the ancient Indian board game used to identify karmic blockages, life purpose, and corrective action steps.',
    keywords: ['Mokshapatam coaching', 'karmic analysis India', 'spiritual life coaching', 'life purpose reading', 'Inner Insights Mokshapatam', 'karmic debt numerology'],
    intro: 'Mokshapatam — the ancient Indian precursor to Snakes & Ladders — is not a game but a profound diagnostic tool for understanding karmic progression, life lessons, and spiritual evolution. At Inner Insights, Priyanka Agrawal uses the original Mokshapatam framework alongside numerological analysis to identify the exact blockages holding you back and the precise corrective steps that move you forward.',
    whatYouGet: [
      'Full Mokshapatam board reading and karmic position mapping',
      'Identification of karmic debts and past-life patterns',
      'Life purpose and dharmic path clarification',
      'Current planetary blockage identification',
      'Remedial action plan with practical steps',
      'Integration with your numerological Life Path for deeper insight',
    ],
    faqs: [
      { q: 'What is Mokshapatam?', a: 'Mokshapatam is an ancient Indian philosophical board that maps the soul\'s journey through virtues (ladders) and vices (snakes). Used by sages, it provides a symbolic map of karmic patterns and corrective paths.' },
      { q: 'How does a Mokshapatam session work?', a: 'Priyanka guides you through the board reading using your birth details and intuitive analysis. Each position on the board corresponds to specific life themes, blockages, and growth opportunities.' },
      { q: 'Is Mokshapatam suitable for everyone?', a: 'Yes. It is particularly powerful for people at crossroads moments — career changes, relationship decisions, spiritual awakening, or when feeling stuck despite apparent success.' },
      { q: 'Can Mokshapatam be combined with numerology?', a: 'Absolutely. Most clients who book Mokshapatam also receive a numerology overlay, creating one of the most comprehensive life-guidance sessions available.' },
    ],
  },
  'name-correction': {
    name: 'Name Correction',
    tagline: 'Align Your Name\'s Vibration With Your Destiny Number',
    metaDescription:
      'Professional name correction service by Priyanka Agrawal at Inner Insights. Realign your name\'s numerological vibration with your destiny number for improved career prospects, health, and relationships.',
    keywords: ['name correction numerology', 'numerology name change', 'name vibration analysis', 'destiny number name correction', 'Inner Insights name correction', 'name spelling correction'],
    intro: 'Your name is not merely a label — it is a vibrational frequency that interacts with your birth numbers every time it is spoken, written, or thought. When your name\'s numerological value misaligns with your Life Path and Destiny numbers, it creates subtle but persistent friction across career, relationships, and health. Name correction at Inner Insights identifies this misalignment and recommends precise spelling adjustments that bring your name into harmony with your core numerical blueprint.',
    whatYouGet: [
      'Full numerological analysis of your current name under Chaldean & Pythagorean systems',
      'Comparison against your Life Path and Destiny numbers',
      'Identification of conflicting vibrations causing blockages',
      'Recommended spelling corrections (minor adjustments — not full name changes)',
      'Guidance on when and how to implement corrections',
      'Follow-up check on corrected name vibration',
    ],
    faqs: [
      { q: 'Does name correction require a legal name change?', a: 'No. Most name corrections involve minor spelling adjustments (e.g., adding or removing a letter) that can be applied in professional and personal usage without any legal process.' },
      { q: 'How quickly do name corrections show results?', a: 'Most clients report noticeable shifts in opportunities and interactions within 3–6 months of consistently using the corrected name vibration.' },
      { q: 'Can children\'s names be corrected?', a: 'Yes. In fact, early name correction is particularly impactful. We regularly work with parents of newborns and young children to optimise name vibrations.' },
      { q: 'What systems do you use for name correction?', a: 'We primarily use the Chaldean system (considered more accurate for name analysis) cross-referenced with the Pythagorean system to ensure comprehensive alignment.' },
    ],
  },
  'signature-analysis': {
    name: 'Signature Analysis',
    tagline: 'Your Signature Is Your Energetic Stamp on the World',
    metaDescription:
      'Professional signature analysis and redesign by Priyanka Agrawal at Inner Insights. Discover what your signature reveals about your subconscious beliefs and redesign it for success and alignment.',
    keywords: ['signature analysis numerology', 'signature redesign graphology', 'signature correction', 'graphology signature reading', 'Inner Insights signature analysis', 'Priyanka Agrawal graphology'],
    intro: 'Your signature is the most personal mark you make in the world — and in graphology, it is a direct window into your subconscious self-image, ambitions, and hidden beliefs about your own worth. A signature that contradicts your conscious goals creates subtle but constant self-sabotage. At Inner Insights, Priyanka Agrawal analyses your current signature across dozens of graphological parameters and redesigns it to project confidence, authority, and alignment with your numerological destiny.',
    whatYouGet: [
      'Full graphological analysis of your current signature',
      'Identification of self-limiting patterns in your signature strokes',
      'Numerological signature value calculation and alignment check',
      'Custom signature redesign options (2–3 variations)',
      'Graphotherapy practice plan for signature transition',
      'Follow-up review session after 30 days of practice',
    ],
    faqs: [
      { q: 'How does signature redesign work practically?', a: 'After your analysis session, Priyanka provides 2–3 redesigned signature options. You practise the chosen design for 30 days using graphotherapy drills until it becomes natural.' },
      { q: 'How long does a signature transition take?', a: 'With consistent daily practice of the graphotherapy drills, most clients develop a natural new signature within 30–45 days.' },
      { q: 'Can a signature change actually affect my life?', a: 'Yes. Graphotherapy\'s effectiveness has been documented in research. Your signature reinforces neural patterns related to self-concept every time you write it — changing it creates measurable shifts in confidence and how others perceive you.' },
      { q: 'Do I need to change my legal signature?', a: 'For maximum effect, yes — but you may phase it in gradually, using the new signature in personal contexts first before formal legal documents.' },
    ],
  },
  business: {
    name: 'Business Name Numerology',
    tagline: 'Build Your Brand on a Foundation of Aligned Vibration',
    metaDescription:
      'Professional business name numerology by Priyanka Agrawal at Inner Insights. Ensure your company name, brand, and launch date are aligned with your numerological profile for maximum success.',
    keywords: ['business name numerology', 'company name numerology India', 'brand name numerology', 'startup name numerology', 'business launch date numerology', 'Inner Insights business numerology'],
    intro: 'The name of your business is its permanent energetic identity — one that either attracts or repels the clients, partnerships, and opportunities you need. Business name numerology at Inner Insights analyses the vibrational compatibility between your proposed business name, the owner\'s Life Path number, the business category, and the numerological value of the name itself. The result is a brand foundation built on genuine energetic alignment.',
    whatYouGet: [
      'Numerological analysis of proposed business name(s)',
      'Compatibility check against founder\'s Life Path and Destiny numbers',
      'Brand energy assessment: attraction, authority, and prosperity vibrations',
      'Auspicious launch date selection',
      'Mobile number and office address number optimisation',
      'Logo colour guidance based on numerological principles',
      'Competitor name comparison (optional)',
    ],
    faqs: [
      { q: 'When should I get a business name numerology reading?', a: 'Ideally before finalising your business name — during the naming phase. However, we also work with established businesses seeking rebranding, where we analyse the current name and recommend adjustments.' },
      { q: 'Does business name numerology apply to personal brands and freelancers?', a: 'Absolutely. Whether you are a solopreneur, consultant, content creator, or freelancer, your professional name is your brand, and its numerological vibration affects how clients perceive and engage with you.' },
      { q: 'Can I check multiple business name options?', a: 'Yes. We can evaluate up to 5 name options in a single session and rank them by numerological compatibility with your personal profile.' },
      { q: 'What if my business is already established with a non-ideal name?', a: 'We work with you on minor adjustments (spelling variations, tagline shifts, trading name modifications) to improve alignment without requiring a full rebrand.' },
    ],
  },
  mobile: {
    name: 'Mobile Number Numerology',
    tagline: 'Your Mobile Number Influences Every Call, Every Opportunity',
    metaDescription:
      'Mobile number numerology analysis and optimisation by Priyanka Agrawal at Inner Insights. Discover if your current mobile number supports or blocks your career, relationships, and financial growth.',
    keywords: ['mobile number numerology', 'phone number numerology India', 'lucky mobile number', 'mobile numerology analysis', 'Inner Insights mobile numerology', 'best mobile number numerology'],
    intro: 'Every time someone dials your mobile number, a specific vibrational frequency is activated — and that frequency either resonates with or disrupts your personal numerological blueprint. In mobile numerology, the sum of your mobile digits (reduced to a single root number) determines its energy type. A mobile number out of alignment with your Life Path can subtly limit the quality of calls, connections, and opportunities you attract.',
    whatYouGet: [
      'Root number calculation and energy-type analysis for your current number',
      'Compatibility assessment against your Life Path, Destiny & Personal Year numbers',
      'Identification of whether your number is supporting or blocking key life areas',
      'SIM number recommendations if a change is advised',
      'WhatsApp Business number optimisation guidance',
      'Mobile number selection from 3 carrier-provided options (if changing)',
    ],
    faqs: [
      { q: 'How is a mobile number\'s numerological value calculated?', a: 'We add all the digits of your mobile number (excluding country code) and reduce to a single digit. This root number carries specific vibrational qualities that interact with your personal numbers.' },
      { q: 'Does the area code or country code matter?', a: 'For personal mobile numbers, we analyse the subscriber number (the digits after the country code). For business landlines, the full number including area code is considered.' },
      { q: 'What if my number comes out unfavourable — do I have to change it?', a: 'Not necessarily. We first assess the severity of the mismatch. In many cases, remedies (specific call habits, activating the number on an auspicious day, pairing with a corrected name vibration) can mitigate the impact without requiring a SIM change.' },
      { q: 'Is mobile numerology scientifically proven?', a: 'Mobile numerology is a complementary guidance practice. While not a hard science, thousands of clients report meaningful improvements in communication quality and opportunity flow after optimising their mobile numbers. Results are experiential and individual.' },
    ],
  },
};

const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const svc = SERVICES[slug];
  if (!svc) return { title: 'Service Not Found | Inner Insights' };
  return {
    title: `${svc.name} | Inner Insights`,
    description: svc.metaDescription,
    keywords: svc.keywords,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${svc.name} | Inner Insights`,
      description: svc.metaDescription,
      url: `https://innerinsights.net/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const svc = SERVICES[slug];

  if (!svc) {
    return (
      <section style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-primary)' }}>Service Not Found</h1>
        <Link href="/services" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>View All Services</Link>
      </section>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: svc.name,
        description: svc.metaDescription,
        provider: {
          '@type': 'Person',
          name: 'Priyanka Agrawal',
          url: 'https://innerinsights.net/about',
        },
        areaServed: 'Worldwide',
        url: `https://innerinsights.net/services/${slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://innerinsights.net/services' },
          { '@type': 'ListItem', position: 3, name: svc.name, item: `https://innerinsights.net/services/${slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: svc.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ backgroundColor: 'var(--surface-alt)', padding: '4rem 0 3rem', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <nav style={{ marginBottom: '1.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>/</span>
            <Link href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</Link>
            <span style={{ margin: '0 0.4rem' }}>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{svc.name}</span>
          </nav>

          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
            Inner Insights Service
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.75rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
            {svc.name}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
            {svc.tagline}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/contact" className="btn-primary">
              <CalendarCheck size={16} /> Book This Service
            </Link>
            <Link href="/services" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1.5px solid var(--primary)', color: 'var(--primary)',
              padding: '0.75rem 1.5rem', borderRadius: '9999px',
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
            }}>
              All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>

            {/* Left: Content */}
            <div style={{ minWidth: 0 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                About This Service
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.5rem' }}>
                {svc.intro}
              </p>

              {/* What you get */}
              <div style={{ background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2.5rem', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                  What You Receive
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {svc.whatYouGet.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      <Check size={16} color="var(--primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                Frequently Asked Questions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {svc.faqs.map(({ q, a }) => (
                  <div key={q} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1.25rem' }}>
                    <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.975rem', marginBottom: '0.4rem' }}>{q}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.7 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className={styles.sidebar}>
              <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius-lg)', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Book {svc.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Live, personalised session with Priyanka Agrawal via Zoom or WhatsApp. Available globally.
                </p>
                <Link href="/contact" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  backgroundColor: 'white', color: 'var(--primary)',
                  padding: '0.875rem 1.75rem', borderRadius: '9999px',
                  fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', width: '100%',
                }}>
                  <CalendarCheck size={16} /> Book a Session
                </Link>
                <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.25rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.4rem' }}>Questions first?</p>
                  <a href="tel:+919152172369" style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                    +91 91521 72369
                  </a>
                </div>
              </div>

              {/* Other services */}
              <div style={{ background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginTop: '1.5rem', border: '1px solid var(--border-light)' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Other Services</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {Object.entries(SERVICES)
                    .filter(([s]) => s !== slug)
                    .map(([s, sv]) => (
                      <li key={s} style={{ marginBottom: '0.6rem' }}>
                        <Link href={`/services/${s}`} style={{ color: 'var(--primary)', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <ArrowRight size={13} /> {sv.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
