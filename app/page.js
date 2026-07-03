'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CalendarCheck,
  Compass,
  ClipboardList,
  HeartHandshake,
  Users,
  ShieldCheck,
  Calculator,
  Feather,
  Brain,
  Watch,
  Smartphone,
  Briefcase,
  Star,
  Activity,
  Heart,
  PenTool,
  Map,
  Sparkles,
  Palette
} from 'lucide-react';
import ServicesSection from './components/ServicesSection';
import styles from './page.module.css';

export default function Home() {
  const [toolsTab, setToolsTab] = useState('all');
  const [blogTab, setBlogTab] = useState('all');
  return (
    <>
      <section className={styles.hero}>
        <div className="container" style={{ width: '100%' }}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Clarity • Balance • Harmony</span>
            <h1 className={styles.heroTitle}>Find Clarity.<br/>Invite Positivity.<br/>Live Your Best Life.</h1>
            <p className={styles.heroDesc}>
              Expert guidance in Numerology, Graphotherapy, NLP Therapy &amp; more to help you make better decisions and live a balanced life.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                <CalendarCheck size={18} />
                Book a Consultation
              </Link>
              <Link href="#services" className="btn-outline">
                <Compass size={18} />
                Explore Services →
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/hero.png"
            alt="Person meditating"
            fill
            className={styles.heroImage}
            priority
          />
        </div>
      </section>

      <div className="container">
        <div className={styles.statsBanner}>
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}>
              <ClipboardList size={32} strokeWidth={1.5} />
            </div>
            <div className={styles.statText}>
              <span className={styles.statTitle}>25+ Expert Services</span>
              <span className={styles.statDesc}>Complete solutions for every area of life.</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}>
               <HeartHandshake size={32} strokeWidth={1.5} />
            </div>
            <div className={styles.statText}>
              <span className={styles.statTitle}>Personalized Guidance</span>
              <span className={styles.statDesc}>Insights tailored just for you.</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}>
              <Users size={32} strokeWidth={1.5} />
            </div>
            <div className={styles.statText}>
              <span className={styles.statTitle}>Trusted by Thousands</span>
              <span className={styles.statDesc}>Proven results & happy clients.</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statIconWrapper}>
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <div className={styles.statText}>
              <span className={styles.statTitle}>100% Confidential</span>
              <span className={styles.statDesc}>Your privacy is our priority.</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="title-sm">Our Core Expertise</span>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Calculator size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Numerology</h3>
              <p className={styles.cardDesc}>Decode the power of numbers in your life.</p>
              <Link href="/services?category=Numerology" className={styles.linkArrow}>Explore →</Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Feather size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Graphotherapy</h3>
              <p className={styles.cardDesc}>Improve life with handwriting correction techniques.</p>
              <Link href="/services?category=Graphology" className={styles.linkArrow}>Explore →</Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Watch size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Wrist Watch Analysis</h3>
              <p className={styles.cardDesc}>Find the right dial, strap and wrist for your number.</p>
              <Link href="/services?category=Numerology" className={styles.linkArrow}>Explore →</Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Palette size={40} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>Scientific Logo Design</h3>
              <p className={styles.cardDesc}>A logo shaped by numerological &amp; colour principles, aligned to your business number for energy and impact.</p>
              <Link href="/services?category=Business+%26+Brand" className={styles.linkArrow}>Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="title-sm">Learn from the Expert</span>
            <h2 className={styles.sectionTitle}>Courses & Workshops</h2>
            <p className={styles.sectionSubtitle}>Master numerology, graphology and more with structured courses designed by Priyanka Agrawal.</p>
          </div>

          <div className={styles.grid}>
            {[
              { title: 'Numerology Fundamentals', desc: 'Learn to decode life path, destiny and soul numbers. Perfect for beginners.', tag: 'Numerology' },
              { title: 'Graphology Masterclass', desc: 'Understand personality through handwriting and build analysis skills from scratch.', tag: 'Graphology' },
              { title: 'Graphotherapy Program', desc: 'Rewire your mindset through structured handwriting exercises and drills.', tag: 'Graphotherapy' },
              { title: 'Mokshapatam Coaching', desc: 'Ancient karmic wisdom to find clarity, purpose and spiritual direction.', tag: 'Mokshapatam' },
              { title: 'Business Numerology', desc: 'Apply numerology to branding, naming, timing and growth for your business.', tag: 'Business' },
              { title: 'NLP & Hypnotherapy', desc: 'Transform limiting beliefs and access your full potential through the mind.', tag: 'NLP & Hypno' },
            ].map((course, i) => (
              <div key={i} className={styles.card} style={{ position: 'relative' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)', backgroundColor: 'rgba(118,83,158,0.08)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>{course.tag}</span>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDesc}>{course.desc}</p>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', borderRadius: '20px', padding: '0.2rem 0.75rem' }}>Coming Soon</span>
              </div>
            ))}
          </div>

          <div className={styles.viewAllContainer} style={{ marginTop: '2.5rem' }}>
            <Link href="/courses" className="btn-primary">View All Courses →</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface-alt)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Free Tools & Calculators</h2>
            <p className={styles.sectionSubtitle}>Powerful tools to calculate and discover important numerology insights.</p>
          </div>

          <div className={styles.tabContainer}>
            <button onClick={() => setToolsTab('all')} className={`${styles.tab} ${toolsTab === 'all' ? styles.tabActive : ''}`}>All Services</button>
            <button onClick={() => setToolsTab('numerology')} className={`${styles.tab} ${toolsTab === 'numerology' ? styles.tabActive : ''}`}>Numerology</button>
            <button onClick={() => setToolsTab('graphology')} className={`${styles.tab} ${toolsTab === 'graphology' ? styles.tabActive : ''}`}>Graphology</button>
            <button onClick={() => setToolsTab('mokshapatam')} className={`${styles.tab} ${toolsTab === 'mokshapatam' ? styles.tabActive : ''}`}>Mokshapatam</button>
            <button onClick={() => setToolsTab('nlp')} className={`${styles.tab} ${toolsTab === 'nlp' ? styles.tabActive : ''}`}>NLP & Hypno</button>
            <button onClick={() => setToolsTab('business')} className={`${styles.tab} ${toolsTab === 'business' ? styles.tabActive : ''}`}>Business</button>
            <button onClick={() => setToolsTab('relationships')} className={`${styles.tab} ${toolsTab === 'relationships' ? styles.tabActive : ''}`}>Relationships</button>
            <button onClick={() => setToolsTab('others')} className={`${styles.tab} ${toolsTab === 'others' ? styles.tabActive : ''}`}>Others</button>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { title: "Life Path Calculator", desc: "Discover your life path and purpose.", category: "numerology", href: "/tools/life-path-calculator", icon: <Activity className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Destiny Number", desc: "Calculate your destiny number.", category: "numerology", href: "/tools/name-numerology", icon: <Star className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Mobile Number Analysis", desc: "Find the luck score of your mobile number.", category: "numerology", href: "/tools/mobile-number-analysis", icon: <Smartphone className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Time Numerology", desc: "Discover auspicious timings using numerology.", category: "numerology", href: "/tools/personal-day-calculator", icon: <CalendarCheck className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Marriage Compatibility", desc: "Check numerological compatibility for marriage.", category: "relationships", href: "/tools/marriage-compatibility", icon: <Heart className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Signature Analysis", desc: "Understand personality through handwriting analysis.", category: "graphology", href: "/tools/signature-analysis", icon: <PenTool className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Mokshapatam Coaching", desc: "Guidance for spiritual growth and karmic wisdom.", category: "mokshapatam", href: "/services/mokshapatam", icon: <Map className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "NLP Therapy", desc: "Transform your mindset and achieve success.", category: "nlp", href: "/services", icon: <Brain className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Hypnotherapy", desc: "Access deep relaxation to heal past trauma.", category: "nlp", href: "/services", icon: <Sparkles className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> },
              { title: "Business Numerology", desc: "Optimize your business with numerological insights.", category: "business", href: "/tools/business-numerology", icon: <Briefcase className={styles.serviceCardIcon} size={32} strokeWidth={1.5} /> }
            ]
              .filter(s => toolsTab === 'all' || s.category === toolsTab)
              .map((s, i) => (
              <Link key={i} href={s.href} className={styles.serviceCard}>
                {s.icon}
                <h4 className={styles.serviceCardTitle}>{s.title}</h4>
                <p className={styles.serviceCardDesc}>{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className={styles.viewAllContainer}>
            <Link href="/tools" className="btn-primary">View All Tools →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '0.5rem' }}>Latest Insights & Articles</h2>
              <p className={styles.sectionSubtitle} style={{ margin: 0 }}>Read our expert articles on numerology, graphology and more.</p>
            </div>
            <Link href="/blog" className={styles.linkArrow}>View All Articles →</Link>
          </div>

          <div className={styles.tabContainer} style={{ justifyContent: 'flex-start' }}>
            <button onClick={() => setBlogTab('all')} className={`${styles.tab} ${blogTab === 'all' ? styles.tabActive : ''}`}>All Articles</button>
            <button onClick={() => setBlogTab('numerology')} className={`${styles.tab} ${blogTab === 'numerology' ? styles.tabActive : ''}`}>Numerology</button>
            <button onClick={() => setBlogTab('graphology')} className={`${styles.tab} ${blogTab === 'graphology' ? styles.tabActive : ''}`}>Graphology</button>
            <button onClick={() => setBlogTab('relationship')} className={`${styles.tab} ${blogTab === 'relationship' ? styles.tabActive : ''}`}>Relationship</button>
            <button onClick={() => setBlogTab('business')} className={`${styles.tab} ${blogTab === 'business' ? styles.tabActive : ''}`}>Business</button>
            <button onClick={() => setBlogTab('growth')} className={`${styles.tab} ${blogTab === 'growth' ? styles.tabActive : ''}`}>Personal Growth</button>
          </div>

          <div className={styles.blogGrid}>
            {[
              { category: 'numerology', title: 'What is Numerology and How Does it Work?', desc: 'Learn the basics of numerology and how numbers influence our lives.', categoryLabel: 'Numerology', date: 'May 12, 2024', image: '/blog-numerology.png', alt: 'Numerology Chart' },
              { category: 'numerology', title: 'Your Life Path Number Explained', desc: 'Discover what your life path number reveals about your purpose and destiny.', categoryLabel: 'Numerology', date: 'May 5, 2024', image: '/blog-numerology.png', alt: 'Numerology Numbers' },
              { category: 'numerology', title: 'The Hidden Power of Your Birth Date', desc: 'Unlock the deeper meaning behind the numbers in your birth date.', categoryLabel: 'Numerology', date: 'Apr 28, 2024', image: '/blog-numerology.png', alt: 'Birth Date Numerology' },
              { category: 'graphology', title: 'How Handwriting Reveals Your Personality?', desc: 'Discover the psychological patterns hidden in your handwriting.', categoryLabel: 'Graphology', date: 'May 8, 2024', image: '/blog-graphology.png', alt: 'Graphology Pen' },
              { category: 'graphology', title: 'What Your Signature Says About You', desc: 'Your signature is your brand — learn what it communicates to the world.', categoryLabel: 'Graphology', date: 'Apr 22, 2024', image: '/blog-graphology.png', alt: 'Signature Analysis' },
              { category: 'graphology', title: 'Graphotherapy: Rewriting Your Destiny', desc: 'How small changes in handwriting can bring big shifts in your mindset.', categoryLabel: 'Graphology', date: 'Apr 15, 2024', image: '/blog-graphology.png', alt: 'Graphotherapy' },
              { category: 'relationship', title: 'Numerology Compatibility: Find Your Perfect Match', desc: 'Use the power of numbers to discover your most compatible life partner.', categoryLabel: 'Relationship', date: 'May 3, 2024', image: '/blog-numerology.png', alt: 'Compatibility Numbers' },
              { category: 'relationship', title: 'Best Marriage Dates According to Numerology', desc: 'Choose an auspicious wedding date using your personal numbers.', categoryLabel: 'Relationship', date: 'Apr 18, 2024', image: '/blog-mokshapatam.png', alt: 'Marriage Numerology' },
              { category: 'relationship', title: 'Understanding Your Partner Through Numbers', desc: 'Learn how numerology can help you build a deeper, lasting bond.', categoryLabel: 'Relationship', date: 'Apr 10, 2024', image: '/blog-numerology.png', alt: 'Partner Numbers' },
              { category: 'business', title: 'Choose a Lucky Business Name with Numerology', desc: 'The right name can set your business on the path to success from day one.', categoryLabel: 'Business', date: 'May 1, 2024', image: '/blog-graphology.png', alt: 'Business Name' },
              { category: 'business', title: 'Best Date to Launch Your Business', desc: 'Align your launch date with numerological energy for maximum growth.', categoryLabel: 'Business', date: 'Apr 25, 2024', image: '/blog-numerology.png', alt: 'Business Launch' },
              { category: 'business', title: 'How Numerology Can Boost Your Career', desc: 'Make smarter career decisions by understanding your personal year cycle.', categoryLabel: 'Business', date: 'Apr 12, 2024', image: '/blog-graphology.png', alt: 'Career Numerology' },
              { category: 'growth', title: 'Mokshapatam Tips for Inner Peace', desc: 'Simple karmic tips to bring positivity and prosperity to your mind.', categoryLabel: 'Personal Growth', date: 'May 10, 2024', image: '/blog-mokshapatam.png', alt: 'Mokshapatam Board' },
              { category: 'growth', title: 'NLP: Rewire Your Mind for Success', desc: 'Powerful NLP techniques to break limiting beliefs and unlock your potential.', categoryLabel: 'Personal Growth', date: 'Apr 20, 2024', image: '/blog-mokshapatam.png', alt: 'NLP Mindset' },
              { category: 'growth', title: 'Daily Practices for a Balanced Life', desc: 'Simple daily habits rooted in ancient wisdom to bring harmony to your life.', categoryLabel: 'Personal Growth', date: 'Apr 8, 2024', image: '/blog-mokshapatam.png', alt: 'Balanced Life' },
            ]
              .filter(b => blogTab === 'all' ? true : b.category === blogTab)
              .slice(0, blogTab === 'all' ? 6 : 3)
              .map((b, i) => (
              <div key={i} className={styles.blogCard}>
                <div className={styles.blogImage}>
                  <Image src={b.image} fill style={{ objectFit: 'cover' }} alt={b.alt} loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogMetaCategory}>{b.categoryLabel}</span> • {b.date}
                  </div>
                  <h3 className={styles.blogTitle}>{b.title}</h3>
                  <p className={styles.blogDesc}>{b.desc}</p>
                  <Link href="#" className={styles.linkArrow}>Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}