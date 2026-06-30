import ToolsPageClient from './ToolsPageClient';

export const metadata = {
  title: 'Free Numerology Tools & Calculators | Inner Insights',
  description:
    'Calculate your Life Path number, Name number (Chaldean & Pythagorean), Mobile number compatibility, and generate your Lo Shu Grid instantly with our interactive tools.',
  keywords: [
    'life path calculator',
    'name numerology calculator',
    'mobile numerology calculator',
    'lo shu grid generator',
    'Chaldean numerology calculator',
    'Pythagorean calculator',
    'free numerology tools',
  ],
  alternates: { canonical: '/tools' },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
