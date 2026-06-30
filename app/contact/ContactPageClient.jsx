'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Sparkles
} from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Numerology Consultation',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Numerology Consultation',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>Start Your Alignment</span>
            <h1 className={styles.title}>Get In Touch</h1>
            <p className={styles.subtitle}>
              Have questions about how Numerology, Graphology, or Vastu can transform your path? Reach out to Priyanka Agrawal today to book your session.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ──────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          <div className={styles.contactGrid}>
            
            {/* ── LEFT COLUMN: CONTACT DETAILS ────────────────────────────────── */}
            <div className={styles.infoCol}>
              <h2 className={styles.sectionTitle}>Contact Information</h2>
              <p className={styles.sectionDesc}>
                Whether you prefer a phone reading, online Zoom consultation, or a Vastu visit, choose the most convenient way to connect with us.
              </p>

              <div className={styles.infoCards}>
                {/* Phone Card */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <Phone size={24} />
                  </div>
                  <div className={styles.infoCardText}>
                    <h4>Call or Message</h4>
                    <p>Direct line or WhatsApp support:</p>
                    <a href="tel:+919152172369" className={styles.infoLink}>+91 91521 72369</a>
                    <div className={styles.whatsappActions}>
                      <a
                        href="https://wa.me/919152172369?text=Hello%20Inner%20Insights%2C%20I%20would%20like%20to%20book%20a%20consultation."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappBtn}
                      >
                        <MessageSquare size={14} /> Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <Mail size={24} />
                  </div>
                  <div className={styles.infoCardText}>
                    <h4>Email Enquiries</h4>
                    <p>Send your queries or collaboration requests:</p>
                    <a href="mailto:contact@innerinsights.net" className={styles.infoLink}>contact@innerinsights.net</a>
                  </div>
                </div>

                {/* Address Card */}
                <div className={styles.infoCard}>
                  <div className={styles.infoIconWrapper}>
                    <MapPin size={24} />
                  </div>
                  <div className={styles.infoCardText}>
                    <h4>Our Location</h4>
                    <p>Office consultation by prior appointment:</p>
                    <address className={styles.address}>
                      Borivali, Mumbai, Maharashtra - 400091.
                    </address>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className={styles.socialBlock}>
                <h4>Connect With Us</h4>
                <div className={styles.socialList}>
                  <a
                    href="https://www.facebook.com/p.innerinsights/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Facebook"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p.innerinsights/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: INTERACTIVE BOOKING FORM ────────────────────────── */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                {status === 'success' ? (
                  <div className={styles.successState}>
                    <CheckCircle2 size={64} className={styles.successIcon} />
                    <h3>Booking Request Received!</h3>
                    <p>
                      Thank you for reaching out. Priyanka Agrawal or a member of the Inner Insights team will connect with you on WhatsApp/Phone within 24 hours to schedule your slot.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                      style={{ marginTop: '1.5rem' }}
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className={styles.formTitle}>Book a Consultation</h3>
                    <p className={styles.formDesc}>
                      Fill out the form below, and we will get back to you with available slots and pricing details.
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                      <div className={styles.inputGroup}>
                        <label htmlFor="name" className={styles.label}>Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          className={styles.input}
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div className={styles.inputGrid}>
                        <div className={styles.inputGroup}>
                          <label htmlFor="phone" className={styles.label}>Phone / WhatsApp Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="e.g. +91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className={styles.input}
                            disabled={status === 'submitting'}
                          />
                        </div>

                        <div className={styles.inputGroup}>
                          <label htmlFor="email" className={styles.label}>Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="e.g. rahul@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            disabled={status === 'submitting'}
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label htmlFor="service" className={styles.label}>Select Service of Interest</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={styles.select}
                          disabled={status === 'submitting'}
                        >
                          <option>Numerology Consultation</option>
                          <option>Business Name Numerology</option>
                          <option>Name Correction Analysis</option>
                          <option>Mobile Numerology Analysis</option>
                          <option>Graphotherapy &amp; Handwriting Drill</option>
                          <option>Signature &amp; Watch Analysis</option>
                          <option>Mokshapatam Coaching</option>
                          <option>NLP &amp; Hypnotherapy Session</option>
                          <option>Vastu Auditing &amp; Remedies</option>
                          <option>Other Services</option>
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label htmlFor="message" className={styles.label}>Share Details or Date of Birth (Optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          placeholder="Please specify any specific questions or detail your DOB (Day-Month-Year) if booking a numerology reading."
                          value={formData.message}
                          onChange={handleChange}
                          className={styles.textarea}
                          disabled={status === 'submitting'}
                        />
                      </div>

                      {/* Error Message */}
                      {status === 'error' && errorMsg && (
                        <div className={styles.errorBanner}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          {errorMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>Sending Details...</>
                        ) : (
                          <>
                            <Send size={16} /> Send Booking Request
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONSULTATION HOURS BANNER ────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: 'var(--surface-alt)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className={styles.bannerCard}>
            <Clock size={36} className={styles.bannerIcon} />
            <div className={styles.bannerContent}>
              <h3>Consultation Hours</h3>
              <p>
                Online sessions are available worldwide. Office visits are scheduled strictly by prior appointment.
              </p>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursItem}>
                  <strong>Monday - Friday:</strong>
                  <span>10:00 AM - 07:00 PM (IST)</span>
                </div>
                <div className={styles.hoursItem}>
                  <strong>Saturday:</strong>
                  <span>11:00 AM - 05:00 PM (IST)</span>
                </div>
                <div className={styles.hoursItem}>
                  <strong>Sunday:</strong>
                  <span>Closed (Emergency Readings Only)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
