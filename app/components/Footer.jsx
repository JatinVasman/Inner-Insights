import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const domesticLocations = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune',
  'Noida', 'Gurgaon', 'Jaipur', 'Dehradun', 'Uttarakhand', 'Chandigarh', 'Lucknow',
  'Surat', 'Indore', 'Nagpur', 'Kochi', 'Coimbatore', 'Ghaziabad', 'Faridabad',
  'Thane', 'Navi Mumbai', 'Bhopal', 'Visakhapatnam', 'Patna', 'Bhubaneswar',
  'Vadodara', 'Rajkot', 'Ludhiana', 'Amritsar', 'Kanpur', 'Varanasi', 'Agra',
  'Nashik', 'Mysuru', 'Mangalore', 'Goa', 'Guwahati', 'Raipur', 'Ranchi',
  'Jodhpur', 'Udaipur', 'Vijayawada', 'Thiruvananthapuram', 'Madurai', 'Meerut',
  'Moradabad', 'Prayagraj', 'Jammu', 'Gwalior',
];

const internationalLocations = ['USA', 'Australia', 'UK', 'Canada', 'Dubai'];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className="container">
        <div className={styles.footerGrid}>
          
          <div className={styles.logoCol}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Image src="/logo.png" alt="Inner Insights" width={72} height={44} />
              </div>
              <Link href="/" className={styles.logoText}>
                <span className={styles.logoTextTitle}>Inner Insights</span>
                <span className={styles.logoTextSubtitle}>Discover. Align. Evolve.</span>
              </Link>
            </div>
            <p className={styles.brandDesc}>
              Expert guidance in Numerology, Graphology, Mokshapatam & more to help you live a balanced and successful life.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className={styles.socialIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/">Home</Link></li>
              <li className={styles.linkItem}><Link href="/about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="/services">Services</Link></li>
              <li className={styles.linkItem}><Link href="/numerology-for">Numerology for You</Link></li>
              <li className={styles.linkItem}><Link href="/tools">Tools</Link></li>
              <li className={styles.linkItem}><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Important Links</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/locations">Locations</Link></li>
              <li className={styles.linkItem}><Link href="/pricing">Pricing</Link></li>
              <li className={styles.linkItem}><Link href="/faq">FAQ</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Contact Us</Link></li>
              <li className={styles.linkItem}><Link href="/privacy">Privacy Policy</Link></li>
              <li className={styles.linkItem}><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Popular Services</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/services/numerology">Numerology Consultation</Link></li>
              <li className={styles.linkItem}><Link href="/services/mokshapatam">Mokshapatam Coaching</Link></li>
              <li className={styles.linkItem}><Link href="/services/name-correction">Name Correction</Link></li>
              <li className={styles.linkItem}><Link href="/services/signature-analysis">Signature Analysis</Link></li>
              <li className={styles.linkItem}><Link href="/services/business">Business Name Numerology</Link></li>
              <li className={styles.linkItem}><Link href="/services/mobile">Mobile Numerology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Subscribe to get updates and insights delivered to your inbox.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" className={styles.newsletterInput} required />
              <button type="submit" className={styles.newsletterSubmit} aria-label="Subscribe">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        <div className={styles.locations}>
          <div className={styles.locationsBlock}>
            <h4 className={styles.locationsTitle}>Our Services Are Available In Domestic Locations</h4>
            <div className={styles.pillRow}>
              {domesticLocations.map((city) => (
                <Link key={city} href={`/locations/${slugify(city)}`} className={styles.pill}>
                  {city}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.locationsBlock}>
            <h4 className={styles.locationsTitle}>Our Services Are Available In International Locations</h4>
            <div className={styles.pillRow}>
              {internationalLocations.map((country) => (
                <Link key={country} href={`/locations/${slugify(country)}`} className={styles.pill}>
                  {country}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Inner Insights. All Rights Reserved.
          </div>
          
          <div className={styles.trustIndicators}>
            <div className={styles.indicator}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>100% Confidential</span>
            </div>
            <div className={styles.indicator}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className={styles.indicator}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Trusted by Thousands</span>
            </div>
            <div className={styles.indicator}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
              <span>Support That Cares</span>
            </div>
          </div>
        </div>

        <div className={styles.creditBar}>
          <span>
            <a
              href="https://businessvolunteers.online/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
            >
              Business Volunteer
            </a>{' '}
            | All Rights Reserved 2025
          </span>
          <span>Digital Marketing Agency / Company in Noida, Delhi NCR, India</span>
        </div>
      </div>
    </footer>
  );
}