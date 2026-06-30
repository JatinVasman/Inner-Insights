import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../blog.module.css';
import { allBlogs, getBlogBySlug } from '../data/index';
import { getBlogFAQs } from '../data/faqs';

export async function generateStaticParams() {
  return allBlogs.map(b => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);
  if (!blog) return {};
  return {
    title: `${blog.title} | Inner Insights`,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: { canonical: `https://innerinsights.net/blog/${blog.slug}` },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: 'article',
      publishedTime: blog.date,
      authors: ['Priyanka Agrawal'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);
  if (!blog) notFound();

  const faqs = getBlogFAQs(blog);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: blog.title,
        description: blog.metaDescription,
        datePublished: blog.date,
        author: {
          '@type': 'Person',
          name: 'Priyanka Agrawal',
          url: 'https://innerinsights.net/about/priyanka-agrawal',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Inner Insights',
          url: 'https://innerinsights.net',
          logo: { '@type': 'ImageObject', url: 'https://innerinsights.net/logo.png' },
        },
        mainEntityOfPage: `https://innerinsights.net/blog/${blog.slug}`,
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleInner}>

            <div className={styles.articleBody}>
              <nav aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <Link href="/blog">Blog</Link>
                <span aria-hidden="true"> / </span>
                <span>{blog.category}</span>
              </nav>

              <span className={styles.articleCategory}>{blog.category}</span>
              <h1 className={styles.articleTitle}>{blog.title}</h1>
              <div className={styles.articleMeta}>
                <span>{blog.date}</span>
                <span>·</span>
                <span>{blog.readTime}</span>
                <span>·</span>
                <span>By Priyanka Agrawal</span>
              </div>

              <div className={styles.articleContent}>
                {blog.content.map((section, i) => (
                  <div key={i}>
                    {section.h && <h2 className={styles.sectionHeading}>{section.h}</h2>}
                    <p className={styles.sectionPara} dangerouslySetInnerHTML={{ __html: section.p }} />
                  </div>
                ))}
              </div>

              {blog.internalLinks && blog.internalLinks.length > 0 && (
                <div className={styles.relatedLinks}>
                  <h3 className={styles.relatedTitle}>Related Articles</h3>
                  <ul className={styles.relatedList}>
                    {blog.internalLinks.map((link, i) => (
                      <li key={i}>
                        <Link href={`/blog/${link.slug}`}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {faqs.length > 0 && (
                <section className={styles.faqSection} aria-label="Frequently Asked Questions">
                  <h2 className={styles.faqSectionTitle}>Frequently Asked Questions</h2>
                  <p className={styles.faqSectionSubtitle}>
                    Common questions about {blog.category} answered by Priyanka Agrawal, Inner Insights.
                  </p>
                  <div className={styles.faqList}>
                    {faqs.map((faq, i) => (
                      <div key={i} className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>{faq.q}</h3>
                        <p className={styles.faqAnswer}>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.sidebarCta}>
                <h3 className={styles.sidebarCtaTitle}>Get personalised guidance</h3>
                <p className={styles.sidebarCtaText}>
                  Book a one-on-one consultation with Priyanka Agrawal and get answers
                  specific to your numbers, name and life situation.
                </p>
                <a href="https://innerinsights.net/contact" className={styles.sidebarCtaBtn}>
                  Book a Consultation
                </a>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </>
  );
}
