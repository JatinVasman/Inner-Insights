'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Calculator,
  PenTool,
  Home,
  Brain
} from 'lucide-react';
import styles from './faq.module.css';

const FAQ_DATA = [
  {
    id: 'q1',
    category: 'booking',
    question: 'How do I book a consultation with Priyanka Agrawal?',
    answer: 'You can book a consultation directly through our [Contact Page](/contact), call us at +91 91521 72369, or message us on WhatsApp. We offer online video sessions (via Zoom or Google Meet) globally, as well as in-person consultations by prior appointment at our office in Borivali, Mumbai.'
  },
  {
    id: 'q2',
    category: 'booking',
    question: 'What details do I need to share for a reading?',
    answer: 'For a comprehensive Numerology reading, you need to share your exact date of birth (Day-Month-Year) and your full name as it is written in official documents. For business name readings, please share the prospective names and birth details of all active business partners.'
  },
  {
    id: 'q3',
    category: 'numerology',
    question: 'Can changing my name spelling really impact my life?',
    answer: 'Yes. Every letter carries a specific mathematical and phonetic frequency. A name correction balances these frequencies, aligning your name vibration harmoniously with your birth date numbers. This positive vibration acts as a filter that reduces friction, speeds up delays, and attracts better career, relationship, and health opportunities.'
  },
  {
    id: 'q4',
    category: 'numerology',
    question: 'What is the difference between Chaldean and Pythagorean systems?',
    answer: 'Chaldean numerology is an ancient Babylonian system based on sound vibrations (phonetics), mapping letters to numbers 1-8. It is highly accurate for name corrections. Pythagorean numerology is a Western system matching letters sequentially 1-9. We analyze both systems to provide a multi-dimensional, holistic reading.'
  },
  {
    id: 'q5',
    category: 'numerology',
    question: 'How does mobile numerology work and why does it matter?',
    answer: 'Your phone number is an active energetic channel you use constantly. Mobile numerology evaluates the cumulative digit sum (which should align with your core numbers) and checks the sequence. For example, ending digits like 4 or 8 can attract financial blocks or communication gaps, whereas ending in 1, 5, or 6 is generally supportive.'
  },
  {
    id: 'q6',
    category: 'graphology',
    question: 'What can handwriting and signature analysis reveal?',
    answer: 'Handwriting is "brain writing." It projects your subconscious personality, emotional blockages, confidence levels, logic speeds, and past traumas. Your signature represents your public identity. Signature analysis identifies self-sabotage patterns, fears, or physical blocks, allowing us to restructure it for success.'
  },
  {
    id: 'q7',
    category: 'graphology',
    question: 'What is Graphotherapy and how does it work?',
    answer: 'Graphotherapy is the science of reprogramming personality traits through conscious handwriting drills. By practicing specific strokes, connections, and baselines under guidance for 30 to 90 days, you build new neural pathways in the brain to increase focus, cure procrastination, and boost self-esteem.'
  },
  {
    id: 'q8',
    category: 'vastu',
    question: 'Do Vastu remedies require breaking walls or demolition?',
    answer: 'No. At Inner Insights, we specialize in non-demolition Vastu remedies. We balance the directions and elements of your residential or commercial space using color therapy, elemental placement adjustments, metals, and everyday objects (like wall clocks and watches) without structural damage.'
  },
  {
    id: 'q9',
    category: 'vastu',
    question: 'What is Mokshapatam and how is it read?',
    answer: 'Mokshapatam is an ancient Indian Vedic board game representing the soul\'s evolutionary journey. It has 72 boxes covering karmic patterns, virtues, and vices. We read it using a special die and board mapping to analyze your current karmic blockages, life purpose, and future direction.'
  },
  {
    id: 'q10',
    category: 'vastu',
    question: 'Do I need to prepare anything before an NLP or Hypnotherapy session?',
    answer: 'No special preparation is required. Just ensure you are in a quiet, comfortable space where you won\'t be disturbed. For online sessions, a good internet connection and headphones are recommended. We begin with a brief talk to align on your goals and ensure you feel relaxed.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions', Icon: HelpCircle },
  { id: 'booking', label: 'General & Booking', Icon: MessageSquare },
  { id: 'numerology', label: 'Numerology', Icon: Calculator },
  { id: 'graphology', label: 'Graphology & Handwriting', Icon: PenTool },
  { id: 'vastu', label: 'Vastu & Vedic Coaching', Icon: Home }
];

export default function FaqPageClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (id) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Helper to parse markdown links in answers to Next.js links
  const renderAnswerText = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <Link key={match[2]} href={match[2]} style={{ color: 'var(--primary)', fontWeight: 600 }}>
          {match[1]}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Support Center</span>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Find detailed explanations on how numerology corrections, handwriting changes, and Vedic Vastu remedies work.
            </p>

            {/* Dynamic Search Box */}
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search questions by keyword (e.g. name correction, vastu, whatsapp)..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ TABS & ACCORDION ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className={styles.faqLayout}>
            
            {/* Category tabs list */}
            <div className={styles.tabsCol}>
              <div className={styles.tabsWrapper}>
                {CATEGORIES.map((cat) => {
                  const Icon = cat.Icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabBtnActive : ''}`}
                    >
                      <Icon size={18} />
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion list */}
            <div className={styles.listCol}>
              {filteredFaqs.length > 0 ? (
                <div className={styles.accordionList}>
                  {filteredFaqs.map((faq) => {
                    const isOpen = openFaq[faq.id];
                    return (
                      <div
                        key={faq.id}
                        className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className={styles.faqQuestionBtn}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.questionText}>{faq.question}</span>
                          <ChevronDown className={styles.chevron} size={18} />
                        </button>
                        
                        <div className={styles.answerWrapper}>
                          <div className={styles.answerContent}>
                            <p>{renderAnswerText(faq.answer)}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.noResults}>
                  <HelpCircle size={48} strokeWidth={1} />
                  <h3>No FAQs Found</h3>
                  <p>We couldn't find any questions matching "{searchQuery}". Try typing another keyword or check out a different category.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION SECTION ──────────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <Sparkles size={36} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
              <h2 className={styles.ctaTitle}>Still Have Questions?</h2>
              <p className={styles.ctaDesc}>
                If you couldn't find the answer you were looking for, feel free to send us a direct message on WhatsApp or book a private call with Priyanka Agrawal.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className="btn-primary">
                  Go to Contact Page <ArrowRight size={14} />
                </Link>
                <a
                  href="https://wa.me/919152172369?text=Hello%20Inner%20Insights%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ backgroundColor: 'var(--surface-white)' }}
                >
                  Chat with Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
