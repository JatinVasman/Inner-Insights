import FaqPageClient from './FaqPageClient';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | Inner Insights',
  description:
    'Find answers to common questions about Numerology readings, Name Correction, Graphology, Graphotherapy, Mokshapatam coaching, Vastu remedies, and booking consultations with Priyanka Agrawal.',
  keywords: [
    'numerology FAQ',
    'handwriting analysis questions',
    'what is Mokshapatam',
    'name spelling correction FAQ',
    'Vastu remedies non-demolition',
    'Priyanka Agrawal consultations',
  ],
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return <FaqPageClient />;
}
