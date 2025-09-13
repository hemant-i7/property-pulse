export const ROUTES = {
  HOME: '/',
  PROPERTIES: '/properties',
  PROPERTY_DETAIL: (id: string) => `/properties/${id}`,
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOG: '/blog',
  BLOG_POST: (slug: string) => `/blog/${slug}`,
  FAQ: '/faq',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  SITEMAP: '/sitemap',
};
