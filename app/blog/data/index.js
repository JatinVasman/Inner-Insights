import { lifePathBlogs } from './lifepath';
import { lifePathBlogs2 } from './lifepath2';
import { lifePathBlogs3 } from './lifepath3';
import { angelBlogs } from './angel';
import { birthdayNameBlogs } from './birthday-name';
import { businessBabyBlogs } from './business-baby';
import { mobileCompatBlogs } from './mobile-compat';
import { compatibilityBlogs } from './compatibility';
import { compatibilityBlogs2 } from './compatibility2';
import { compatibilityBlogs3 } from './compatibility3';
import { loshuGraphologyBlogs } from './loshu-graphology';
import { graphotherapyVastuBlogs } from './graphotherapy-vastu';
import { vastuCareerLoveBlogs } from './vastu-career-love';
import { moneyHealthYearBlogs } from './money-health-year';
import { houseGemsColorsBlogs } from './house-gems-colors';
import { festivalBasicsLocalBlogs } from './festival-basics-local';
import { celebrityLogoBlogs } from './celebrity-logo';
import { advancedNumerologyBlogs } from './advanced-numerology';
import { professionRemediesBlogs } from './profession-remedies';

export const allBlogs = [
  ...lifePathBlogs,
  ...lifePathBlogs2,
  ...lifePathBlogs3,
  ...angelBlogs,
  ...birthdayNameBlogs,
  ...businessBabyBlogs,
  ...mobileCompatBlogs,
  ...compatibilityBlogs,
  ...compatibilityBlogs2,
  ...compatibilityBlogs3,
  ...loshuGraphologyBlogs,
  ...graphotherapyVastuBlogs,
  ...vastuCareerLoveBlogs,
  ...moneyHealthYearBlogs,
  ...houseGemsColorsBlogs,
  ...festivalBasicsLocalBlogs,
  ...celebrityLogoBlogs,
  ...advancedNumerologyBlogs,
  ...professionRemediesBlogs,
];

export function getBlogBySlug(slug) {
  return allBlogs.find(b => b.slug === slug) || null;
}

export function getAllPostsMeta() {
  return allBlogs.map(b => ({
    slug: b.slug,
    title: b.title,
    category: b.category,
    categorySlug: b.categorySlug,
    excerpt: b.excerpt,
    date: b.date,
    readTime: b.readTime,
  }));
}

export const CATEGORIES = [
  { label: 'All Articles', slug: 'all' },
  { label: 'Life Path Numbers', slug: 'life-path-numbers' },
  { label: 'Angel Numbers', slug: 'angel-numbers' },
  { label: 'Birthday Numerology', slug: 'birthday-numerology' },
  { label: 'Name Numerology', slug: 'name-numerology' },
  { label: 'Business Numerology', slug: 'business-numerology' },
  { label: 'Baby Names', slug: 'baby-name-numerology' },
  { label: 'Mobile Numerology', slug: 'mobile-numerology' },
  { label: 'Compatibility', slug: 'numerology-compatibility' },
  { label: 'Lo Shu Grid', slug: 'lo-shu-grid' },
  { label: 'Graphology', slug: 'graphology' },
  { label: 'Signature Analysis', slug: 'signature-analysis' },
  { label: 'Graphotherapy', slug: 'graphotherapy' },
  { label: 'Wristwatch Analysis', slug: 'wristwatch-analysis' },
  { label: 'Wall Clock Vastu', slug: 'wall-clock-vastu' },
  { label: 'Vastu', slug: 'vastu' },
  { label: 'Career Numerology', slug: 'career-numerology' },
  { label: 'Love & Marriage', slug: 'love-marriage-numerology' },
  { label: 'Money & Wealth', slug: 'money-wealth-numerology' },
  { label: 'Health & Wellbeing', slug: 'health-numerology' },
  { label: 'Students & Exams', slug: 'student-numerology' },
  { label: 'Personal Year', slug: 'personal-year-numbers' },
  { label: 'House Numerology', slug: 'house-numerology' },
  { label: 'Vehicle Numerology', slug: 'vehicle-numerology' },
  { label: 'Gemstones', slug: 'gemstones-rudraksha' },
  { label: 'Lucky Colours', slug: 'lucky-colours-days' },
  { label: 'Festivals & Dates', slug: 'festivals-muhurat' },
  { label: 'Celebrity Numerology', slug: 'celebrity-numerology' },
  { label: 'Logo & Brand', slug: 'logo-brand-numerology' },
  { label: 'Numerology Basics', slug: 'numerology-basics' },
  { label: 'Near Me', slug: 'local-numerology' },
];
