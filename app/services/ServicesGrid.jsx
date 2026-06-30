'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Calculator, PenTool, Watch, Smartphone, Briefcase, Clock, Map, Heart,
  Brain, Sparkles, Timer, Palette, CreditCard, Edit, Home, Building2,
  Car, Landmark, Mail, Tag, CalendarDays, Users, Gem, Compass, BookOpen,
  Star, ArrowRight,
} from 'lucide-react';
import styles from './services.module.css';

const CAT_STYLES = {
  'Numerology':       { bg: 'rgba(118,83,158,0.1)',   color: 'var(--primary)' },
  'Business & Brand': { bg: 'rgba(160,120,0,0.1)',    color: '#8a6500' },
  'Graphology':       { bg: 'rgba(13,148,136,0.1)',   color: '#0d7369' },
  'Vastu & Energy':   { bg: 'rgba(217,119,6,0.1)',    color: '#b45309' },
  'Coaching':         { bg: 'rgba(79,70,229,0.1)',    color: '#4f46e5' },
};

const services = [
  // ── Numerology ──────────────────────────────────────────────────────────────
  {
    title: 'Numerology Consultation',
    slug: '/contact',
    category: 'Numerology',
    Icon: Calculator,
    desc: 'A personalised reading based on your name and date of birth. Understand your life path, strengths, challenges and the cycles shaping your decisions right now.',
  },
  {
    title: 'Mobile Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Smartphone,
    desc: 'Your phone number carries a vibration that influences your communication and opportunities. Find a number whose energy works consistently in your favour.',
  },
  {
    title: 'Time Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Timer,
    desc: 'Choose the most auspicious time to sign agreements, begin projects or make major decisions. Small timing shifts can meaningfully change outcomes.',
  },
  {
    title: 'Baby Name Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Star,
    desc: 'Give your newborn a name whose numerological value aligns with health, happiness and opportunity — grounded in both tradition and modern method.',
  },
  {
    title: 'Name Correction',
    slug: '/contact',
    category: 'Numerology',
    Icon: Edit,
    desc: 'A small adjustment in spelling can shift your number from friction to flow. Identify the right change without losing your identity or brand recognition.',
  },
  {
    title: 'Marriage Compatibility',
    slug: '/contact',
    category: 'Numerology',
    Icon: Heart,
    desc: 'Check life path alignment and numerological compatibility between partners before marriage. Understand where you naturally harmonise and where to communicate more.',
  },
  {
    title: 'House & Flat Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Home,
    desc: 'Your address sets the tone for your home — for rest, wealth, relationships or growth. Find out what your number says and how to balance its energy.',
  },
  {
    title: 'Car & Vehicle Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Car,
    desc: 'A vehicle registration number influences safety, journey luck and travel energy. Choose a total whose vibration works in your favour on every road.',
  },
  {
    title: 'Lucky Bank Account Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Landmark,
    desc: 'Your bank account and locker numbers carry a money vibration. Identify which numbers attract wealth flow and which to avoid for savings and investments.',
  },
  {
    title: 'Email & Social Handle Numerology',
    slug: '/contact',
    category: 'Numerology',
    Icon: Mail,
    desc: 'Your email address and username are extensions of your name energy. Choose handles that project the right vibration for professional growth and online presence.',
  },
  {
    title: 'Annual Personal Forecast',
    slug: '/contact',
    category: 'Numerology',
    Icon: CalendarDays,
    desc: 'A detailed forecast for your personal year — covering career, relationships, finances and timing. Know which months to push forward and which to plan quietly.',
  },
  // ── Business & Brand ─────────────────────────────────────────────────────────
  {
    title: 'Business Name Numerology',
    slug: '/contact',
    category: 'Business & Brand',
    Icon: Briefcase,
    desc: 'Your company name is your brand\'s first energetic impression. Find a name whose numerological value supports growth, trust and lasting commercial success.',
  },
  {
    title: 'Scientific Logo Design',
    slug: '/contact',
    category: 'Business & Brand',
    Icon: Palette,
    desc: 'A logo shaped by numerological and colour principles, aligned to your business number. Every element — colour, shape, direction — is chosen for energy and impact.',
  },
  {
    title: 'Visiting Card Numerology',
    slug: '/contact',
    category: 'Business & Brand',
    Icon: CreditCard,
    desc: 'The design, colours and layout of your business card carry energy. Get guidance on a card that leaves the right impression and opens doors after every handshake.',
  },
  {
    title: 'Brand & Tagline Numerology',
    slug: '/contact',
    category: 'Business & Brand',
    Icon: Tag,
    desc: 'Your tagline reinforces your brand number. Analyse and align your slogan so its numerological vibration matches your business name for consistent, powerful messaging.',
  },
  {
    title: 'Corporate & Team Numerology',
    slug: '/contact',
    category: 'Business & Brand',
    Icon: Users,
    desc: 'Understand the number profiles of your leadership team, identify role alignment and choose auspicious dates for launches, meetings and significant milestones.',
  },
  // ── Graphology ───────────────────────────────────────────────────────────────
  {
    title: 'Graphotherapy',
    slug: '/contact',
    category: 'Graphology',
    Icon: PenTool,
    desc: 'Change specific handwriting strokes to rewire thought patterns, build confidence and shift deep-rooted habits. A structured programme with daily exercises you practise at home.',
  },
  {
    title: 'Signature Analysis',
    slug: '/contact',
    category: 'Graphology',
    Icon: Edit,
    desc: 'Your signature reveals your self-image, ambition and the way the world perceives you. Identify what it says today and design one that invites confidence and success.',
  },
  // ── Vastu & Energy ───────────────────────────────────────────────────────────
  {
    title: 'Wristwatch Analysis',
    slug: '/contact',
    category: 'Vastu & Energy',
    Icon: Watch,
    desc: 'The wristwatch you wear influences your timing, punctuality and decision-making energy. Find the right dial colour, strap material and wrist for your number.',
  },
  {
    title: 'Wall Clock Vastu',
    slug: '/contact',
    category: 'Vastu & Energy',
    Icon: Clock,
    desc: 'Direction, shape and colour of your wall clock affect energy flow at home and at work. Correct placement improves timing, productivity and financial momentum.',
  },
  {
    title: 'Vastu Consultation',
    slug: '/contact',
    category: 'Vastu & Energy',
    Icon: Building2,
    desc: 'A home and office energy assessment based on Vastu principles. Simple, wall-free remedies that improve the flow of health, wealth and harmony in your space.',
  },
  {
    title: 'Gemstone & Rudraksha',
    slug: '/contact',
    category: 'Vastu & Energy',
    Icon: Gem,
    desc: 'The right gemstone or rudraksha worn correctly can amplify the strengths of your number. Get a personalised recommendation with full guidance on activation and care.',
  },
  {
    title: 'Lucky Colour & Direction',
    slug: '/contact',
    category: 'Vastu & Energy',
    Icon: Compass,
    desc: 'Identify your lucky colours for clothing, interiors and branding, and the best directions for your desk, bed and entrance — small shifts with meaningful energetic effects.',
  },
  // ── Coaching ─────────────────────────────────────────────────────────────────
  {
    title: 'Mokshapatam Coaching',
    slug: '/contact',
    category: 'Coaching',
    Icon: Map,
    desc: 'A life-purpose coaching programme built on the ancient wisdom of Mokshapatam. Gain clarity on karmic patterns, personal values and the choices that lead to fulfilment.',
  },
  {
    title: 'Numerology Courses & Workshops',
    slug: '/courses',
    category: 'Coaching',
    Icon: BookOpen,
    desc: 'Learn numerology from the ground up or deepen your existing knowledge. Structured online courses and live workshops for personal growth and professional practice.',
  },
];

const TABS = ['All Services', 'Numerology', 'Business & Brand', 'Graphology', 'Vastu & Energy', 'Coaching'];

export default function ServicesGrid() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState('All Services');

  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      const matchedTab = TABS.find(t => t.toLowerCase() === catParam.toLowerCase());
      if (matchedTab) {
        setActive(matchedTab);
      }
    }
  }, [searchParams]);

  const visible = active === 'All Services'
    ? services
    : services.filter(s => s.category === active);

  return (
    <>
      <div className={styles.tabBar}>
        {TABS.map(tab => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`${styles.tab}${active === tab ? ` ${styles.tabActive}` : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <p className={styles.resultCount}>
        Showing <strong>{visible.length}</strong> of {services.length} services
      </p>

      <div className={styles.grid}>
        {visible.map(({ title, slug, category, Icon, desc }) => {
          const cat = CAT_STYLES[category] || CAT_STYLES['Numerology'];
          return (
            <div key={title} className={styles.card}>
              <span
                className={styles.cardTag}
                style={{ backgroundColor: cat.bg, color: cat.color }}
              >
                {category}
              </span>
              <Icon className={styles.cardIcon} size={30} strokeWidth={1.5} />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <Link href="/contact" className={styles.cardLink}>
                Book a Consultation <ArrowRight size={14} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
