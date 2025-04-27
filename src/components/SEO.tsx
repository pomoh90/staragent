import { Metadata } from 'next';
import Script from 'next/script';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: 'website' | 'article' | 'book' | 'profile';
    url?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card?: 'summary_large_image' | 'summary' | 'player' | 'app';
    site?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  structuredData?: object;
}

export const generateMetadata = ({
  title,
  description,
  canonical,
  openGraph,
  twitter,
}: SEOProps): Metadata => {
  return {
    title,
    description,
    metadataBase: new URL('https://starzdustagency.com'),
    alternates: {
      canonical: canonical || '/',
    },
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      type: openGraph?.type || 'website',
      url: openGraph?.url || canonical || '/',
      images: openGraph?.images || [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitter?.card || 'summary_large_image',
      site: twitter?.site || '@starzdustagency',
      title: twitter?.title || title,
      description: twitter?.description || description,
      images: twitter?.image || '/og-image.jpg',
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
  };
};

export const SEO = ({
  structuredData,
}: Pick<SEOProps, 'structuredData'>) => {
  return (
    <>
      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
};