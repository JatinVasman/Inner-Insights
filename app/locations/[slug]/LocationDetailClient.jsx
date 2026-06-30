'use client';

import Link from 'next/link';
import { MapPin, ArrowLeft, Phone, Mail, Clock, CalendarCheck, Sparkles, ShieldCheck } from 'lucide-react';
import styles from '../locations.module.css';

const DOMESTIC_LOCATIONS = [
  'Mumbai', 'Borivali', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
  'Ahmedabad', 'Pune', 'Noida', 'Gurgaon', 'Jaipur', 'Dehradun', 'Uttarakhand',
  'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Nagpur', 'Kochi', 'Coimbatore',
  'Ghaziabad', 'Faridabad', 'Thane', 'Navi Mumbai', 'Bhopal', 'Visakhapatnam',
  'Patna', 'Bhubaneswar', 'Vadodara', 'Rajkot', 'Ludhiana', 'Amritsar', 'Kanpur',
  'Varanasi', 'Agra', 'Nashik', 'Mysuru', 'Mangalore', 'Goa', 'Guwahati', 'Raipur',
  'Ranchi', 'Jodhpur', 'Udaipur', 'Vijayawada', 'Thiruvananthapuram', 'Madurai',
  'Meerut', 'Moradabad', 'Prayagraj', 'Jammu', 'Gwalior',
];

const INTERNATIONAL_LOCATIONS = ['USA', 'Australia', 'UK', 'Canada', 'Dubai'];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
const ALL_LOCATIONS = [...DOMESTIC_LOCATIONS, ...INTERNATIONAL_LOCATIONS];

export default function LocationDetailClient({ slug }) {
  // Find display name
  const locName = ALL_LOCATIONS.find(l => slugify(l) === slug) || 'Your Location';
  const isInternational = INTERNATIONAL_LOCATIONS.includes(locName);

  // Custom descriptions based on location
  const getCustomIntro = () => {
    if (locName === 'Borivali') {
      return 'Borivali serves as the primary consulting location and physical head office for Inner Insights. Clients looking for in-person consultations with Priyanka Agrawal can schedule prior appointments for comprehensive Name corrections, signature restructurings, and residential/commercial plan assessments.';
    }
    if (locName === 'Mumbai') {
      return 'As our metropolitan hub, Mumbai is active with both in-person and digital readings. We conduct physical Vastu audits for residences and corporate offices across Mumbai, alongside detailed personal name charts and handwriting correction plans.';
    }
    if (isInternational) {
      return `Inner Insights provides professional, remote-consulting services globally across ${locName}. Using high-definition Zoom video sessions and secure digital report deliveries, clients in ${locName} receive the exact same high-precision numerology, business branding alignments, and signature corrections as our local clients.`;
    }
    return `Inner Insights provides professional consultations for clients in ${locName}. Through online Zoom/WhatsApp consultations, Priyanka Agrawal conducts detailed chart decodings, name corrections, and non-demolition Vastu remedies to help you align your energy and clear life path blockages.`;
  };

  return (
    <>
      {/* ── BREADCRUMB HEADER ────────────────────────────────────────────────── */}
      <section className={styles.hero} style={{ padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <div style={{ width: '100%', textAlign: 'left' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Link href="/locations" className={styles.backLink}>
                <ArrowLeft size={16} /> Back to Locations
              </Link>
            </div>
            <span className={styles.eyebrow}>
              {isInternational ? 'International Consultation' : 'Domestic Consultation (India)'}
            </span>
            <h1 className={styles.title} style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              Services in {locName}
            </h1>
            <p className={styles.subtitle} style={{ textAlign: 'left', margin: 0, fontSize: '1rem' }}>
              Professional Numerology, Graphology, Mokshapatam &amp; Vastu Remedies.
            </p>
          </div>
        </div>
      </section>

      {/* ── DETAIL CONTENT & SIDEBAR ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            
            {/* Main Content Column */}
            <div className={styles.contentCol}>
              <h2>Align Your Energy in {locName}</h2>
              <p className={styles.subTitle}>Decode your life path and release energetic blocks.</p>
              
              <p className={styles.para}>{getCustomIntro()}</p>
              
              <p className={styles.para}>
                Priyanka Agrawal’s signature methodologies combine ancient esoteric science with modern psychological tools (NLP &amp; Hypnotherapy). We do not require structural demolition for Vastu adjustments, making our remedies completely non-invasive and easy to apply.
              </p>

              {/* Service Cards inside Location */}
              <div className={styles.featuresSection}>
                <h3>Our Core Expertises Available in {locName}</h3>
                
                <div className={styles.featuresGrid}>
                  <div className={styles.featureCard}>
                    <h4>Numerology &amp; Name Corrections</h4>
                    <p>Analysis of your core birth numbers and name vibration under Chaldean &amp; Pythagorean systems. spelling adjustments for career, marital harmony, and general prosperity.</p>
                  </div>
                  
                  <div className={styles.featureCard}>
                    <h4>Graphology &amp; Signature Styling</h4>
                    <p>Decode your subconscious traits from your handwriting. Modify your signature base to eliminate self-sabotaging habits and practice Graphotherapy drills.</p>
                  </div>
                  
                  <div className={styles.featureCard}>
                    <h4>Non-Demolition Vastu Remedies</h4>
                    <p>Balance the elemental energy (water, fire, earth, air, space) of your home or workplace using clocks, wristwatches, colours, and directional alignments.</p>
                  </div>
                  
                  <div className={styles.featureCard}>
                    <h4>Vedic Mokshapatam Coaching</h4>
                    <p>Ancient Board analysis of your karmic progression. Find clarity on life purpose, current planetary blockages, and necessary corrective actions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className={styles.sidebarCol}>
              <div className={styles.sideBox}>
                <h3>Book a Session</h3>
                <p>
                  Secure your slot for a personal Zoom consultation or Vastu assessment in {locName}.
                </p>

                <div className={styles.sideInfoList}>
                  <div className={styles.sideInfoItem}>
                    <Phone size={16} />
                    <span>+91 91521 72369</span>
                  </div>
                  <div className={styles.sideInfoItem}>
                    <Mail size={16} />
                    <span>contact@innerinsights.net</span>
                  </div>
                  <div className={styles.sideInfoItem}>
                    <Clock size={16} />
                    <span>Zoom Consultations Worldwide</span>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <CalendarCheck size={16} /> Book Consultation
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', justifyContent: 'center' }}>
                  <ShieldCheck size={14} color="#0d9488" />
                  <span>100% Secure &amp; Confidential</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
