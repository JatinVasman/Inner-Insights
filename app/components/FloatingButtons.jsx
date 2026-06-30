'use client';
import styles from './FloatingButtons.module.css';

export default function FloatingButtons() {
  return (
    <div className={styles.wrapper}>
      <a
        href="https://www.instagram.com/p.innerinsights"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.instagram}`}
        aria-label="Follow us on Instagram"
      >
        <span className={styles.tooltip}>Follow us on Instagram</span>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8"/>
          <circle cx="17.5" cy="6.5" r="1" fill="white"/>
        </svg>
      </a>

      <a
        href="https://wa.me/919152172369"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.whatsapp}`}
        aria-label="Chat with us on WhatsApp"
      >
        <span className={styles.tooltip}>Chat with us on WhatsApp</span>
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.952 9.952 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm5.236 14.236c-.22.618-1.292 1.18-1.77 1.22-.478.038-.925.217-3.12-.65-2.65-1.05-4.34-3.76-4.47-3.93-.13-.18-1.07-1.42-1.07-2.71s.67-1.93.91-2.19c.24-.26.52-.32.7-.32l.5.01c.16 0 .38-.06.59.45.22.53.75 1.83.82 1.96.07.13.11.28.02.45-.09.17-.13.28-.26.43l-.38.44c-.13.13-.27.27-.11.53.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.16 1.34.26.13.41.11.56-.07.15-.18.64-.75.81-1.01.17-.26.34-.21.57-.13.23.08 1.47.69 1.72.82.25.13.42.19.48.3.06.1.06.6-.16 1.18Z"/>
        </svg>
      </a>
    </div>
  );
}
