import Link from 'next/link';
import styles from './blog.module.css';
import BlogList from './BlogList';
import { getAllPostsMeta, CATEGORIES } from './data/index';

export const metadata = {
  title: 'Numerology & Graphology Blog | Inner Insights',
  description:
    'Expert articles on life path numbers, angel numbers, name numerology, graphology, vastu and more — written from 15+ years of practice by Priyanka Agrawal.',
  keywords: [
    'numerology blog', 'graphology articles', 'life path numbers guide',
    'angel numbers meaning', 'vastu tips', 'Priyanka Agrawal blog',
  ],
  alternates: { canonical: '/blog' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      name: 'Inner Insights Blog',
      url: 'https://innerinsights.net/blog',
      description: 'Expert articles on numerology, graphology and vastu by Priyanka Agrawal.',
      author: { '@type': 'Person', name: 'Priyanka Agrawal' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://innerinsights.net/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://innerinsights.net/blog' },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Blog</span>
          </nav>
          <span className={styles.heroEyebrow}>Articles &amp; Insights</span>
          <h1 className={styles.heroTitle}>Articles on numerology,<br />graphology and vastu.</h1>
          <p className={styles.heroLead}>
            Research-backed, practical insights from Priyanka Agrawal&rsquo;s 15+ years of practice.
            Find your topic, explore your number, get clarity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <BlogList posts={getAllPostsMeta()} categories={CATEGORIES} />
        </div>
      </section>
    </>
  );
}
