import LocationsPageClient from './LocationsPageClient';

export const metadata = {
  title: 'Our Consulting Locations | Inner Insights',
  description:
    'Inner Insights provides online and in-person Numerology, Graphology, Mokshapatam coaching, and Vastu remedies across major domestic cities in India and international locations.',
  keywords: [
    'numerology services locations',
    'numerologist near me',
    'graphologist Borivali',
    'vastu consultant Mumbai',
    'online numerology India',
    'international numerology consulting',
  ],
  alternates: { canonical: '/locations' },
};

export default function LocationsPage() {
  return <LocationsPageClient />;
}
