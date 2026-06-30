import { allBlogs } from './blog/data/index';

const BASE_URL = 'https://innerinsights.net';
const now = new Date();

const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');

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

const SERVICE_SLUGS = [
  'numerology', 'mokshapatam', 'name-correction',
  'signature-analysis', 'business', 'mobile',
];

export default function sitemap() {
  const staticPages = [
    { url: BASE_URL,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/numerology-for`,          lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,                    lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE_URL}/tools`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/testimonials`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations`,               lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pricing`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/courses`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/privacy`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/about/priyanka-agrawal`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about/why-us`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages = allBlogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: new Date(blog.date || now),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const locationPages = [...DOMESTIC_LOCATIONS, ...INTERNATIONAL_LOCATIONS].map((loc) => ({
    url: `${BASE_URL}/locations/${slugify(loc)}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages, ...locationPages];
}
