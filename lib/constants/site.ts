/**
 * Site-wide constants
 */

export const SITE_NAME = 'PropertyPulse';
export const SITE_DESCRIPTION = 'Find your dream property in Mumbai';
export const SITE_URL = 'https://propertypulse.com';

export const CONTACT_EMAIL = 'info@propertypulse.com';
export const CONTACT_PHONE = '+91 9876543210';
export const OFFICE_ADDRESS = '123 Real Estate Avenue, Mumbai, Maharashtra 400001';

export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/propertypulse',
  twitter: 'https://twitter.com/propertypulse',
  instagram: 'https://instagram.com/propertypulse',
  linkedin: 'https://linkedin.com/company/propertypulse',
};

export const OFFICE_HOURS = {
  weekdays: '9:00 AM - 6:00 PM',
  saturday: '10:00 AM - 4:00 PM',
  sunday: 'Closed',
};

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.propertypulse.com',
  contentPulseKey: process.env.NEXT_PUBLIC_CONTENTPULSE_API_KEY,
};

export const DEFAULT_SEO = {
  title: 'PropertyPulse | Premium Real Estate in Mumbai',
  description: 'Find your dream property in Mumbai with PropertyPulse - luxury apartments, villas, penthouses, and commercial spaces at the best prices.',
  keywords: 'real estate, mumbai property, luxury apartments, villas, penthouses, property listings',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'PropertyPulse - Premium Mumbai Real Estate',
      },
    ],
  },
  twitter: {
    handle: '@propertypulse',
    site: '@propertypulse',
    cardType: 'summary_large_image',
  },
};
