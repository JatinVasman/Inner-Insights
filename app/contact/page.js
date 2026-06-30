import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact Us | Book a Consultation | Inner Insights',
  description:
    'Get in touch with Priyanka Agrawal at Inner Insights. Book a consultation for Numerology, Graphology, Mokshapatam, NLP, or Vastu in Borivali, Mumbai.',
  keywords: [
    'contact inner insights',
    'Priyanka Agrawal contact number',
    'numerologist contact Mumbai',
    'book numerology consultation',
    'graphologist Borivali',
    'inner insights email address',
  ],
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
