'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './blog.module.css';

const POSTS_PER_PAGE = 24;

export default function BlogList({ posts, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.categorySlug === activeCategory);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const visible = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  function handleCat(slug) {
    setActiveCategory(slug);
    setPage(1);
  }

  return (
    <>
      <div className={styles.tabBar}>
        {categories.map(c => (
          <button
            key={c.slug}
            className={`${styles.tab}${activeCategory === c.slug ? ` ${styles.tabActive}` : ''}`}
            onClick={() => handleCat(c.slug)}
          >
            {c.label}
          </button>
        ))}
      </div>


<div className={styles.grid}>
        {visible.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            <span className={styles.cardCategory}>{post.category}</span>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <div className={styles.cardMeta}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              className={`${styles.pageBtn}${page === p ? ` ${styles.pageBtnActive}` : ''}`}
              onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
