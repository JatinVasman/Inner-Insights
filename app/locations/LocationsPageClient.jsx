'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Globe, Search, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import styles from './locations.module.css';

const DOMESTIC_LOCATIONS = [
  { name: 'Mumbai', tag: 'Local Consultations & Vastu Auditing' },
  { name: 'Borivali', tag: 'Head Office - In-Person Appointments' },
  { name: 'Delhi', tag: 'Political & Business Consultation' },
  { name: 'Bangalore', tag: 'Tech Founder Numerology & Office Vastu' },
  { name: 'Hyderabad', tag: 'Vastu Energy Auditing & Family Readings' },
  { name: 'Chennai', tag: 'Educational & Business Name Alignment' },
  { name: 'Kolkata', tag: 'Creative Professionals & Signature Styling' },
  { name: 'Ahmedabad', tag: 'Industrial Business & Family Consultations' },
  { name: 'Pune', tag: 'Academic & Professional Career Guidance' },
  { name: 'Noida', tag: 'Professional Name Correction & Career Paths' },
  { name: 'Gurgaon', tag: 'Startup Branding & Team Alignment' },
  { name: 'Jaipur', tag: 'Gemstones, Vastu & Heritage Consultations' },
  { name: 'Dehradun', tag: 'Spiritual & Personal Growth Guidance' },
  { name: 'Uttarakhand', tag: 'Pilgrim & Spiritual Numerology Readings' },
  { name: 'Chandigarh', tag: 'Government & Business Numerology Consultations' },
  { name: 'Lucknow', tag: 'Family Name Correction & Career Readings' },
  { name: 'Surat', tag: 'Diamond & Trade Business Numerology' },
  { name: 'Indore', tag: 'Business & Educational Numerology Guidance' },
  { name: 'Nagpur', tag: 'Business & Career Numerology Consultations' },
  { name: 'Kochi', tag: 'Marine & Export Business Numerology' },
  { name: 'Coimbatore', tag: 'Industrial & Textile Business Guidance' },
  { name: 'Ghaziabad', tag: 'Corporate & Professional Name Correction' },
  { name: 'Faridabad', tag: 'Industrial Business & Career Numerology' },
  { name: 'Thane', tag: 'Suburban Name & Signature Corrections' },
  { name: 'Navi Mumbai', tag: 'Corporate & Brand Numerology Audits' },
  { name: 'Bhopal', tag: 'Government & Family Numerology Readings' },
  { name: 'Visakhapatnam', tag: 'Naval & Port Business Numerology' },
  { name: 'Patna', tag: 'Political & Educational Career Guidance' },
  { name: 'Bhubaneswar', tag: 'Temple City Spiritual & Business Guidance' },
  { name: 'Vadodara', tag: 'Cultural & Business Numerology Consultations' },
  { name: 'Rajkot', tag: 'Jewelry & Business Name Corrections' },
  { name: 'Ludhiana', tag: 'Industrial & Sports Business Numerology' },
  { name: 'Amritsar', tag: 'Spiritual & Heritage Business Consultations' },
  { name: 'Kanpur', tag: 'Manufacturing & Business Career Readings' },
  { name: 'Varanasi', tag: 'Spiritual & Vedic Numerology Consultations' },
  { name: 'Agra', tag: 'Tourism & Heritage Business Guidance' },
  { name: 'Nashik', tag: 'Agri & Business Numerology Readings' },
  { name: 'Mysuru', tag: 'Royal City Business & Personal Guidance' },
  { name: 'Mangalore', tag: 'Coastal Trade & Family Numerology' },
  { name: 'Goa', tag: 'Tourism & Hospitality Business Guidance' },
  { name: 'Guwahati', tag: 'Northeast Gateway Business Consultations' },
  { name: 'Raipur', tag: 'Mining & Industrial Business Numerology' },
  { name: 'Ranchi', tag: 'Government & Business Numerology Guidance' },
  { name: 'Jodhpur', tag: 'Royal Heritage & Business Consultations' },
  { name: 'Udaipur', tag: 'Tourism & Royal Business Numerology' },
  { name: 'Vijayawada', tag: 'Trade & Commercial Name Correction' },
  { name: 'Thiruvananthapuram', tag: 'IT & Government Career Guidance' },
  { name: 'Madurai', tag: 'Temple City Spiritual & Family Readings' },
  { name: 'Meerut', tag: 'Sports & Industrial Business Guidance' },
  { name: 'Moradabad', tag: 'Brass & Handicraft Business Numerology' },
  { name: 'Prayagraj', tag: 'Kumbh City Spiritual & Career Guidance' },
  { name: 'Jammu', tag: 'Border City Business & Family Readings' },
  { name: 'Gwalior', tag: 'Royal City Business & Name Correction' },
];

const INTERNATIONAL_LOCATIONS = [
  { name: 'USA', tag: 'Online Zoom Consultations & Career Timing' },
  { name: 'Australia', tag: 'Expat Numerology & Business Guidance' },
  { name: 'UK', tag: 'London Consultations & Brand Alignment' },
  { name: 'Canada', tag: 'Immigration Timing & Career Forecasts' },
  { name: 'Dubai', tag: 'Real Estate Vastu & Corporate Numerology' }
];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

export default function LocationsPageClient() {
  const [filter, setFilter] = useState('all'); // all | domestic | international
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const matchesSearch = (loc) => {
    return (
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const visibleDomestic = DOMESTIC_LOCATIONS.filter(matchesSearch);
  const visibleInternational = INTERNATIONAL_LOCATIONS.filter(matchesSearch);

  return (
    <>
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Global Reach</span>
            <h1 className={styles.title}>Consulting Locations</h1>
            <p className={styles.subtitle}>
              Inner Insights offers professional consultations worldwide. Browse our active service locations to read about local Vastu audits and in-person consultations.
            </p>

            {/* Dynamic Search Box */}
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={20} />
              <input
                type="text"
                placeholder="Search locations by city or country (e.g. Mumbai, Dubai, Vastu)..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION LISTINGS ────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          
          {/* Navigation Filter Buttons */}
          <div className={styles.tabContainer}>
            <button
              onClick={() => setFilter('all')}
              className={`${styles.tabBtn} ${filter === 'all' ? styles.tabBtnActive : ''}`}
            >
              All Locations ({visibleDomestic.length + visibleInternational.length})
            </button>
            <button
              onClick={() => setFilter('domestic')}
              className={`${styles.tabBtn} ${filter === 'domestic' ? styles.tabBtnActive : ''}`}
            >
              Domestic Cities ({visibleDomestic.length})
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`${styles.tabBtn} ${filter === 'international' ? styles.tabBtnActive : ''}`}
            >
              International Locations ({visibleInternational.length})
            </button>
          </div>

          {/* 1. Domestic Grid */}
          {(filter === 'all' || filter === 'domestic') && visibleDomestic.length > 0 && (
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>
                <Navigation size={22} className={styles.sectionTitleIcon} />
                Domestic Cities (India)
              </h2>
              <div className={styles.grid}>
                {visibleDomestic.map((city) => (
                  <Link
                    href={`/locations/${slugify(city.name)}`}
                    key={city.name}
                    className={styles.card}
                  >
                    <div className={styles.cardHeader}>
                      <MapPin size={20} className={styles.locIcon} />
                      <h3>{city.name}</h3>
                    </div>
                    <p>{city.tag}</p>
                    <span className={styles.cardLink}>
                      Explore Services <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 2. International Grid */}
          {(filter === 'all' || filter === 'international') && visibleInternational.length > 0 && (
            <div className={styles.sectionBlock} style={{ marginTop: '3.5rem' }}>
              <h2 className={styles.sectionTitle}>
                <Globe size={22} className={styles.sectionTitleIcon} />
                International Locations
              </h2>
              <div className={styles.grid}>
                {visibleInternational.map((country) => (
                  <Link
                    href={`/locations/${slugify(country.name)}`}
                    key={country.name}
                    className={styles.card}
                  >
                    <div className={styles.cardHeader}>
                      <Globe size={20} className={styles.locIcon} />
                      <h3>{country.name}</h3>
                    </div>
                    <p>{country.tag}</p>
                    <span className={styles.cardLink}>
                      Explore Services <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No results state */}
          {visibleDomestic.length === 0 && visibleInternational.length === 0 && (
            <div className={styles.noResults}>
              <MapPin size={48} strokeWidth={1} />
              <h3>No Locations Found</h3>
              <p>We couldn't find any locations matching "{searchQuery}". We offer online Zoom sessions globally to all cities and countries.</p>
              <Link href="/contact" className="btn-primary" style={{ marginTop: '1rem' }}>
                Contact for Global Readings
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ────────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <Sparkles size={36} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
              <h2 className={styles.ctaTitle}>Not Located in These Cities?</h2>
              <p className={styles.ctaDesc}>
                Over 70% of our clients consult online via Zoom or WhatsApp video calls. You will receive the exact same detailed charts, digital name spelling adjustments, signature corrections, and Vastu reports as our in-person clients.
              </p>
              <div className={styles.ctaActions}>
                <Link href="/contact" className="btn-primary">
                  Book an Online Zoom Consultation <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
