import { Metadata } from 'next';

type OpenGraphType = "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
type TwitterCardType = "summary" | "summary_large_image" | "player" | "app";

export type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: OpenGraphType;
    url?: string;
    images?: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter?: {
    card?: TwitterCardType;
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
  additionalMetaTags?: {
    name: string;
    content: string;
  }[];
};

export const defaultSEO: Metadata = {
  title: {
    default: 'Creative Agency - Digital Marketing & Web Development',
    template: '%s | Creative Agency',
  },
  description:
    'Creative Agency specializes in digital marketing, web development, and brand strategy. We help businesses grow their online presence with innovative solutions.',
  keywords: [
    'digital marketing',
    'web development',
    'brand strategy',
    'creative agency',
    'social media marketing',
    'SEO',
    'content creation',
  ],
  authors: [{ name: 'Creative Agency' }],
  creator: 'Creative Agency',
  publisher: 'Creative Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Creative Agency',
    title: 'Creative Agency - Digital Marketing & Web Development',
    description:
      'Creative Agency specializes in digital marketing, web development, and brand strategy. We help businesses grow their online presence with innovative solutions.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Creative Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Agency - Digital Marketing & Web Development',
    description:
      'Creative Agency specializes in digital marketing, web development, and brand strategy. We help businesses grow their online presence with innovative solutions.',
    images: ['/og-image.jpg'],
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export function generateSEOConfig(props: SEOProps): Metadata {
  const {
    title,
    description,
    canonical,
    openGraph,
    twitter,
    robots,
    additionalMetaTags,
  } = props;

  const metadata: Metadata = {
    title,
    description,
    metadataBase: new URL('https://marketing-agency.com'),
    alternates: canonical ? { canonical } : undefined,
    robots: robots
      ? `${robots.index ? 'index' : 'noindex'}, ${robots.follow ? 'follow' : 'nofollow'}`
      : undefined,
    openGraph: openGraph
      ? {
          title: openGraph.title || title,
          description: openGraph.description || description,
          type: openGraph.type || 'website',
          url: openGraph.url,
          images: openGraph.images,
        }
      : undefined,
    twitter: twitter
      ? {
          card: twitter.card || 'summary_large_image',
          title: twitter.title || title,
          description: twitter.description || description,
          images: twitter.images,
        }
      : undefined,
    other: additionalMetaTags?.reduce((acc, tag) => {
      acc[tag.name] = tag.content;
      return acc;
    }, {} as Record<string, string>),
  };

  return metadata;
}

export function generateStructuredData(type: 'Organization' | 'Service' | 'LocalBusiness', data: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return {
    __html: JSON.stringify({
      ...baseSchema,
      ...data,
    }),
  };
}

export const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Creative Agency',
  url: 'https://starzdustagency.com/',
  logo: 'https://starzdustagency.com/logo.png',
  description:
    'Creative Agency specializes in digital marketing, web development, and brand strategy. We help businesses grow their online presence with innovative solutions.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-323-336-7307',
    contactType: 'customer service',
    email: 'Starzdustllc@gmail.com',
    areaServed: 'US',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://www.instagram.com/starzdustagency',
  ],
}
