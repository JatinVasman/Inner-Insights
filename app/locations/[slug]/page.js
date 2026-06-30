import LocationDetailClient from './LocationDetailClient';

const DOMESTIC_LOCATIONS = [
  'Mumbai', 'Borivali', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
  'Ahmedabad', 'Pune', 'Noida', 'Gurgaon', 'Jaipur', 'Dehradun', 'Uttarakhand',
  'Chandigarh', 'Lucknow', 'Surat', 'Indore', 'Nagpur', 'Kochi', 'Coimbatore',
  'Ghaziabad', 'Faridabad', 'Thane', 'Navi Mumbai', 'Bhopal', 'Visakhapatnam',
  'Patna', 'Bhubaneswar', 'Vadodara', 'Rajkot', 'Ludhiana', 'Amritsar', 'Kanpur',
  'Varanasi', 'Agra', 'Nashik', 'Mysuru', 'Mangalore', 'Goa', 'Guwahati', 'Raipur',
  'Ranchi', 'Jodhpur', 'Udaipur', 'Vijayawada', 'Thiruvananthapuram', 'Madurai',
  'Meerut', 'Moradabad', 'Prayagraj', 'Jammu', 'Gwalior',
];

const INTERNATIONAL_LOCATIONS = ['USA', 'Australia', 'UK', 'Canada', 'Dubai'];

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
const ALL_LOCATIONS = [...DOMESTIC_LOCATIONS, ...INTERNATIONAL_LOCATIONS];

export async function generateStaticParams() {
  return ALL_LOCATIONS.map((loc) => ({
    slug: slugify(loc),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const locName = ALL_LOCATIONS.find(l => slugify(l) === slug) || 'Your Location';
  
  return {
    title: `Best Numerologist & Graphologist in ${locName} | Inner Insights`,
    description: `Professional Numerology consultations, Name corrections, Graphology, and Vastu remedies in ${locName} by Priyanka Agrawal. Book a Zoom or in-person session.`,
    keywords: [
      `numerology ${slug}`,
      `best numerologist in ${slug}`,
      `graphology ${slug}`,
      `name correction ${slug}`,
      `vastu remedies ${slug}`,
    ]
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  return <LocationDetailClient slug={slug} />;
}
