export const metadata = {
  title: 'Courses | Inner Insights',
  description: 'Online courses in Numerology, Graphology and Graphotherapy by Priyanka Agrawal. Coming soon.',
};

export default function CoursesPage() {
  return (
    <section className="section" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent-gold)',
          marginBottom: '1.25rem',
        }}>
          Coming Soon
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '3rem',
          color: 'var(--text-primary)',
          marginBottom: '1.25rem',
          lineHeight: 1.15,
        }}>
          Courses are on their way.
        </h1>
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '520px',
          margin: '0 auto 2.5rem',
        }}>
          Structured online courses and live workshops in Numerology, Graphology and Graphotherapy —
          built from 15+ years of practice by Priyanka Agrawal.
        </p>
      </div>
    </section>
  );
}
