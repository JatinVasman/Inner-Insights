import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtonsWrapper';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
  preload: false,
});

export const metadata = {
  metadataBase: new URL('https://innerinsights.net'),
  title: {
    default: 'Inner Insights | Logo Analysis, Wristwatch Analysis & Graphotherapy Experts',
    template: '%s | Inner Insights',
  },
  description:
    'Expert guidance in Numerology, Graphology, Graphotherapy, Mokshapatam, NLP & Hypnotherapy by Priyanka Agrawal. 20,000+ clients served across India & globally.',
  keywords: [
    'numerology consultation',
    'name correction numerology',
    'mobile number numerology',
    'graphology',
    'graphotherapy',
    'Mokshapatam coaching',
    'NLP therapy',
    'hypnotherapy',
    'signature analysis',
    'life path number',
    'destiny number',
    'career numerology',
    'business name numerology',
    'Priyanka Agrawal numerologist',
    'Inner Insights numerology',
    'best numerologist India',
  ],
  authors: [{ name: 'Priyanka Agrawal', url: 'https://innerinsights.net/about' }],
  creator: 'Priyanka Agrawal',
  publisher: 'Inner Insights',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://innerinsights.net',
    siteName: 'Inner Insights',
    title: 'Inner Insights | Numerology, Graphology & Mokshapatam by Priyanka Agrawal',
    description:
      'Expert guidance in Numerology, Graphology, Mokshapatam, NLP & Hypnotherapy by Priyanka Agrawal. 20,000+ clients served across India & globally.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Inner Insights — Numerology & Graphology by Priyanka Agrawal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inner Insights | Numerology, Graphology & Mokshapatam',
    description:
      'Expert numerology, graphology & Mokshapatam consultations by Priyanka Agrawal. 20,000+ clients served.',
    images: ['/hero.png'],
  },
  alternates: {
    canonical: 'https://innerinsights.net',
  },
  category: 'Spirituality & Wellness',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
