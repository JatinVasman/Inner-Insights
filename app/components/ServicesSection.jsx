'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  PenTool,
  Watch,
  Smartphone,
  Briefcase,
  Clock,
  Map,
  Heart,
  Brain,
  Sparkles,
} from 'lucide-react';
import styles from '../page.module.css';

const services = [
  { title: 'Numerology Consultation', desc: 'Get a personalized reading based on your birth date.', category: 'Numerology', Icon: Calculator },
  { title: 'Signature Analysis', desc: 'Analyze your signature for success and growth.', category: 'Graphology', Icon: PenTool },
  { title: 'Wristwatch Analysis', desc: 'Find the right watch for positive energy.', category: 'Others', Icon: Watch },
  { title: 'Mobile Numerology', desc: 'Choose a lucky mobile number for yourself.', category: 'Numerology', Icon: Smartphone },
  { title: 'Business Numerology', desc: 'Find a lucky name for your business or brand.', category: 'Business', Icon: Briefcase },
  { title: 'Time Numerology', desc: 'Choose the time for important tasks.', category: 'Numerology', Icon: Clock },
  { title: 'Mokshapatam Coaching', desc: 'Bring clarity and karmic balance to your path.', category: 'Mokshapatam', Icon: Map },
  { title: 'Marriage Compatibility', desc: 'Check compatibility for a happy married life.', category: 'Others', Icon: Heart },
  { title: 'NLP Therapy', desc: 'Reprogram your mind for success and growth.', category: 'NLP & Hypno', Icon: Brain },
  { title: 'Hypnotherapy', desc: 'Access deep relaxation to heal past trauma.', category: 'NLP & Hypno', Icon: Sparkles },
];

const tabs = ['All Services', 'Numerology', 'Graphology', 'Mokshapatam', 'NLP & Hypno', 'Business', 'Others'];

export default function ServicesSection() {
  const [active, setActive] = useState('All Services');

  const visible =
    active === 'All Services' ? services : services.filter((s) => s.category === active);

  return (
    <section className="section" id="services">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionSubtitle}>
            25+ specialized services to guide you towards a better tomorrow.
          </p>
        </div>

        <div className={styles.tabContainer}>
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              aria-pressed={active === tab}
              className={`${styles.tab}${active === tab ? ` ${styles.tabActive}` : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.servicesGrid}>
          {visible.map(({ title, desc, category, Icon }) => {
            const categoryMap = {
              'Numerology': 'Numerology',
              'Graphology': 'Graphology',
              'Business': 'Business & Brand',
              'Mokshapatam': 'Coaching',
              'NLP & Hypno': 'Coaching',
              'Others': 'Vastu & Energy'
            };
            const targetCategory = categoryMap[category] || 'All Services';
            
            return (
              <Link
                href={`/services?category=${encodeURIComponent(targetCategory)}`}
                key={title}
                className={styles.serviceCard}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Icon className={styles.serviceCardIcon} size={32} strokeWidth={1.5} />
                <h4 className={styles.serviceCardTitle}>{title}</h4>
                <p className={styles.serviceCardDesc}>{desc}</p>
              </Link>
            );
          })}
        </div>

        <div className={styles.viewAllContainer}>
          <Link href="/services" className="btn-primary">View All Services →</Link>
        </div>
      </div>
    </section>
  );
}