/**
 * Mock API handlers for blog data
 */

import { BlogPost } from '@/types/blog';

// Mock blog posts data
const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'mumbai-real-estate-trends-2025',
    title: 'Mumbai Real Estate Trends to Watch in 2025',
    excerpt: "Discover the hottest areas, property types, and investment opportunities in Mumbai\'s real estate market for 2025.",
    content: `
# Mumbai Real Estate Trends to Watch in 2025

The Mumbai real estate market continues to evolve rapidly as we move into 2025. Here are the key trends that buyers, sellers, and investors should be aware of:

## 1. South Mumbai Renaissance

After years of focus on suburban development, South Mumbai is seeing a renaissance with heritage building restorations and luxury redevelopments attracting high-net-worth buyers back to the city\'s historic core.

## 2. Transit-Oriented Development Boom

With the completion of multiple metro lines, properties within 500 meters of metro stations are commanding a 15-20% premium over similar properties further away.

## 3. Sustainable Living Spaces

Green buildings with LEED certification are no longer just nice-to-have but essential features for new developments, with buyers willing to pay up to 10% more for sustainable features.

## 4. Compact Luxury

The trend toward smaller but premium apartments continues, with 2-3 BHK luxury units in the 800-1200 sq ft range seeing the highest demand among young professionals.

## 5. Investment Outlook

Navi Mumbai and Thane continue to offer the best investment potential with infrastructure developments promising 12-15% appreciation over the next three years.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
    author: {
      id: 'a1',
      name: 'Deepak Malhotra',
      bio: 'Real estate analyst with 15+ years of experience in the Mumbai market',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    categories: [
      { id: 'c1', name: 'Market Trends', slug: 'market-trends' },
      { id: 'c2', name: 'Investment', slug: 'investment' },
    ],
    tags: [
      { id: 't1', name: 'Mumbai', slug: 'mumbai' },
      { id: 't2', name: '2025', slug: '2025' },
      { id: 't3', name: 'Real Estate', slug: 'real-estate' },
    ],
    publishedAt: '2023-12-15T10:00:00Z',
    updatedAt: '2023-12-15T10:00:00Z',
    readTime: 8,
  },
  {
    id: '2',
    slug: 'first-time-home-buyers-guide',
    title: 'The Ultimate Guide for First-Time Home Buyers in Mumbai',
    excerpt: 'Everything you need to know about buying your first home in Mumbai - from finances to paperwork.',
    content: `
# The Ultimate Guide for First-Time Home Buyers in Mumbai

Buying your first home in Mumbai can be an exciting yet daunting experience. This comprehensive guide will walk you through the process step by step.

## Understanding Your Budget

Before you start looking at properties, it\'s crucial to have a clear understanding of your budget. Consider:

- Your savings for down payment (typically 20% of property value)
- Your loan eligibility (check with multiple banks)
- Additional costs including stamp duty, registration, GST, and maintenance deposits

## Choosing the Right Location

Mumbai offers diverse neighborhoods, each with its own character and advantages:

- Consider your workplace and commute times
- Research upcoming infrastructure projects that might affect property values
- Visit prospective areas at different times of day to understand traffic and noise levels

## The Legal Process

Once you've found a property, be prepared for:

- Title verification (always use a reputable lawyer)
- Agreement to sell and sale deed execution
- Registration and stamp duty payment
- Society transfer procedures

## Common Pitfalls to Avoid

Many first-time buyers make these mistakes:

- Not accounting for all costs beyond the listing price
- Skipping proper legal verification
- Rushing the decision without comparing enough options
- Not considering future development plans in the area
    `,
    featuredImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    author: {
      id: 'a2',
      name: 'Priya Sharma',
      bio: 'Real estate consultant specializing in helping first-time home buyers',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    categories: [
      { id: 'c3', name: 'Buying Guide', slug: 'buying-guide' },
      { id: 'c4', name: 'First-Time Buyers', slug: 'first-time-buyers' },
    ],
    tags: [
      { id: 't1', name: 'Mumbai', slug: 'mumbai' },
      { id: 't4', name: 'Home Buying', slug: 'home-buying' },
      { id: 't5', name: 'Guide', slug: 'guide' },
    ],
    publishedAt: '2023-11-20T09:30:00Z',
    updatedAt: '2023-11-25T14:15:00Z',
    readTime: 12,
  },
  {
    id: '3',
    slug: 'luxury-interior-design-trends',
    title: '5 Luxury Interior Design Trends for Mumbai Homes in 2025',
    excerpt: 'Elevate your Mumbai home with these cutting-edge interior design trends that combine luxury with functionality.',
    content: `
# 5 Luxury Interior Design Trends for Mumbai Homes in 2025

The luxury interior design landscape in Mumbai is evolving rapidly, with homeowners seeking spaces that reflect both global sophistication and local sensibilities. Here are the top trends defining luxury interiors in 2025:

## 1. Biophilic Design Integration

The connection with nature has become paramount in urban Mumbai homes:

- Living walls and vertical gardens for space-efficient greenery
- Natural material palettes featuring local stones and sustainable woods
- Water features that create sensory experiences within the home

## 2. Smart Home Seamlessness

Technology integration has reached new levels of sophistication:

- Voice-activated systems that control everything from lighting to security
- Hidden tech solutions that maintain aesthetic integrity
- Wellness technology including air purification and circadian lighting systems

## 3. Multifunctional Luxury Spaces

With space at a premium in Mumbai, multifunctionality doesn't compromise on luxury:

- Transformable rooms that shift from home office to entertainment area
- Custom furniture pieces with hidden storage and multiple uses
- Sliding partitions that create flexible living arrangements

## 4. Artisanal Revival

Hand-crafted elements are making a strong comeback:

- Collaborations with local artisans for custom furnishings
- Revival of traditional techniques with contemporary applications
- Statement pieces that tell a story and create conversation

## 5. Sustainable Luxury

Eco-consciousness has become inseparable from true luxury:

- Upcycled and repurposed materials given high-end finishes
- Energy-efficient systems that reduce environmental impact
- Certified sustainable materials that don't compromise on aesthetic appeal
    `,
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    author: {
      id: 'a3',
      name: 'Aryan Mehta',
      bio: 'Interior design specialist and consultant for luxury properties',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    categories: [
      { id: 'c5', name: 'Interior Design', slug: 'interior-design' },
      { id: 'c6', name: 'Luxury Living', slug: 'luxury-living' },
    ],
    tags: [
      { id: 't6', name: 'Interior Design', slug: 'interior-design' },
      { id: 't7', name: 'Luxury', slug: 'luxury' },
      { id: 't8', name: 'Trends', slug: 'trends' },
    ],
    publishedAt: '2023-10-05T11:45:00Z',
    updatedAt: '2023-10-10T09:20:00Z',
    readTime: 7,
  },
];

/**
 * Get all blog posts with optional filtering
 */
export async function getBlogPosts(params?: {
  category?: string;
  tag?: string;
  search?: string;
  page?: number;
  limit?: number;
}) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredPosts = [...MOCK_BLOG_POSTS];
  
  // Apply filters if provided
  if (params) {
    if (params.category) {
      filteredPosts = filteredPosts.filter(post => 
        post.categories.some(cat => cat.slug === params.category)
      );
    }
    
    if (params.tag) {
      filteredPosts = filteredPosts.filter(post => 
        post.tags.some(tag => tag.slug === params.tag)
      );
    }
    
    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower)
      );
    }
  }
  
  // Sort by publish date (newest first)
  filteredPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  // Handle pagination
  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  
  return {
    posts: paginatedPosts,
    total: filteredPosts.length,
    page,
    limit,
    totalPages: Math.ceil(filteredPosts.length / limit),
  };
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) {
    throw new Error(`Blog post with slug ${slug} not found`);
  }
  
  // Add related posts
  const relatedPosts = MOCK_BLOG_POSTS
    .filter(p => p.id !== post.id)
    .filter(p => 
      p.categories.some(cat => 
        post.categories.some(postCat => postCat.id === cat.id)
      )
    )
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      featuredImage: p.featuredImage,
    }));
    
  return {
    ...post,
    related: relatedPosts,
  };
}

/**
 * Get blog categories
 */
export async function getBlogCategories() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Extract unique categories from blog posts
  const categories = MOCK_BLOG_POSTS.reduce((acc, post) => {
    post.categories.forEach(category => {
      if (!acc.some(c => c.id === category.id)) {
        acc.push(category);
      }
    });
    return acc;
  }, [] as { id: string, name: string, slug: string }[]);
  
  return categories;
}

/**
 * Get blog tags
 */
export async function getBlogTags() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Extract unique tags from blog posts
  const tags = MOCK_BLOG_POSTS.reduce((acc, post) => {
    post.tags.forEach(tag => {
      if (!acc.some(t => t.id === tag.id)) {
        acc.push(tag);
      }
    });
    return acc;
  }, [] as { id: string, name: string, slug: string }[]);
  
  return tags;
}
