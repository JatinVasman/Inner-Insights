import { notFound } from 'next/navigation';
import ToolRenderer from './ToolRenderer';

const TOOLS_META = {
  'life-path-calculator': {
    title: 'Life Path Number Calculator — Free | Inner Insights',
    description: 'Calculate your Life Path number free. Enter your birth date to discover your core personality, life lessons, destiny, and ruling planet according to numerology.',
    heading: 'Life Path Calculator',
    subtitle: 'Enter your birth date to discover your core numerology number, ruling planet, and life purpose.',
  },
  'name-numerology': {
    title: 'Name Numerology & Destiny Number Calculator | Inner Insights',
    description: 'Check your name\'s numerological vibration using Chaldean and Pythagorean systems. Get a full letter-by-letter breakdown and your Destiny Number instantly.',
    heading: 'Name Numerology Calculator',
    subtitle: 'Analyse your name or destiny number using Chaldean (ancient) or Pythagorean (western) numerology.',
  },
  'mobile-number-analysis': {
    title: 'Mobile Number Numerology Analyzer — Luck Score | Inner Insights',
    description: 'Check your mobile number\'s numerological luck score. Find out if your phone number vibration supports your career, finances, and relationships.',
    heading: 'Mobile Number Analyzer',
    subtitle: 'Calculate your mobile number\'s vibrational energy and numerology luck score.',
  },
  'lo-shu-grid': {
    title: 'Lo Shu Grid Generator — Free Online Calculator | Inner Insights',
    description: 'Generate your personal Lo Shu Grid from your birth date. See completed planes, missing numbers, and Vastu remedies tailored to your numerology chart.',
    heading: 'Lo Shu Grid Generator',
    subtitle: 'Generate your personal 3×3 Lo Shu Grid, analyse completed planes, and get Vastu remedies for missing numbers.',
  },
  'business-numerology': {
    title: 'Business Name Numerology Calculator | Inner Insights',
    description: 'Check if your business name carries the right vibrational energy. Calculate your business name number using Chaldean numerology and get actionable success insights.',
    heading: 'Business Name Numerology',
    subtitle: 'Find out if your business name is numerologically aligned for growth, clients, and financial success.',
  },
  'marriage-compatibility': {
    title: 'Marriage Compatibility Calculator — Numerology | Inner Insights',
    description: 'Check your marriage compatibility using Life Path numerology. Enter two birth dates to get a detailed compatibility analysis, score, and relationship insights.',
    heading: 'Marriage Compatibility Calculator',
    subtitle: 'Enter two birth dates to check your numerological compatibility for love and marriage.',
  },
  'personal-day-calculator': {
    title: 'Personal Day, Month & Year Calculator — Time Numerology | Inner Insights',
    description: 'Find your Personal Year, Personal Month, and Personal Day numbers. Understand the numerological energy of any date and plan your decisions at the right time.',
    heading: 'Personal Day & Year Calculator',
    subtitle: 'Discover your current Personal Year, Month, and Day numerological cycles for optimal timing.',
  },
  'signature-analysis': {
    title: 'Signature Analysis — What Your Signature Reveals | Inner Insights',
    description: 'Learn what your signature reveals about your personality, self-image, ambition, and subconscious beliefs. Book a professional signature analysis with Priyanka Agrawal.',
    heading: 'Signature Analysis',
    subtitle: 'Understand what your signature reveals about your personality, self-image, and subconscious mind.',
  },
};

export async function generateStaticParams() {
  return Object.keys(TOOLS_META).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tool = TOOLS_META[slug];
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: `/tools/${slug}` },
    openGraph: {
      title: tool.title,
      description: tool.description,
      type: 'website',
    },
  };
}

export default async function ToolPage({ params }) {
  const { slug } = await params;
  const tool = TOOLS_META[slug];
  if (!tool) notFound();
  return <ToolRenderer slug={slug} heading={tool.heading} subtitle={tool.subtitle} />;
}
