import Contentstack from 'contentstack';

// Initialize Contentstack with EU region using updated credentials
const Stack = Contentstack.Stack(
  'blt531c73cf4cc67a99',
  'cs5417e74462aca63580aa351c',
  'development'
);

// Set the region to EU since your stack is in EU region
Stack.setHost('eu-api.contentstack.com');

export default Stack;

// Property interface based on your Contentstack schema
export interface Property {
  uid: string;
  title: string;
  type: string;
  location: string;
  price: string;
  size: string;
  description: string | any; // Can be string or rich text object
  amenities: string;
  url: string;
  realeted_tags: string; // Updated to match actual CS field name
  locale: string;
  created_at: string;
  updated_at: string;
  _version: number;
  tags: string[];
  created_by: string;
  updated_by: string;
  ACL: Record<string, unknown>;
  _in_progress: boolean;
}

// No fallback data - using real Contentstack data only

// Service functions
export class PropertyService {
  // Get all properties
  static async getAllProperties(): Promise<Property[]> {
    try {
      const Query = Stack.ContentType('properties').Query();
      const result = await Query.toJSON().find();
      return result[0] || [];
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw new Error('Failed to fetch properties from Contentstack');
    }
  }

  // Get single property by UID
  static async getPropertyByUid(uid: string): Promise<Property | null> {
    try {
      const Query = Stack.ContentType('properties').Entry(uid);
      const result = await Query.toJSON().fetch();
      return result || null;
    } catch (error) {
      console.error('Error fetching property:', error);
      throw new Error(`Failed to fetch property with UID: ${uid}`);
    }
  }

  // Get properties by location
  static async getPropertiesByLocation(location: string): Promise<Property[]> {
    try {
      const Query = Stack.ContentType('properties').Query();
      Query.regex('location', location, 'i');
      const result = await Query.toJSON().find();
      return result[0] || [];
    } catch (error) {
      console.error('Error fetching properties by location:', error);
      throw new Error(`Failed to fetch properties for location: ${location}`);
    }
  }

  // Get properties by type
  static async getPropertiesByType(type: string): Promise<Property[]> {
    try {
      const Query = Stack.ContentType('properties').Query();
      Query.where('type', type);
      const result = await Query.toJSON().find();
      return result[0] || [];
    } catch (error) {
      console.error('Error fetching properties by type:', error);
      throw new Error(`Failed to fetch properties for type: ${type}`);
    }
  }

  // Search properties with filters
  static async searchProperties(filters: {
    location?: string;
    type?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<Property[]> {
    try {
      const Query = Stack.ContentType('properties').Query();
      
      if (filters.location) {
        Query.regex('location', filters.location, 'i');
      }
      
      if (filters.type) {
        Query.where('type', filters.type);
      }
      
      // Note: Price filtering would need to be done client-side 
      // since Contentstack stores price as string
      
      const result = await Query.toJSON().find();
      let properties = result[0] || [];
      
      // Client-side price filtering
      if (filters.minPrice || filters.maxPrice) {
        properties = properties.filter((property: Property) => {
          const priceStr = property.price.replace(/[₹,]/g, '');
          const price = parseInt(priceStr);
          
          if (filters.minPrice && price < filters.minPrice) return false;
          if (filters.maxPrice && price > filters.maxPrice) return false;
          
          return true;
        });
      }
      
      return properties;
    } catch (error) {
      console.error('Error searching properties:', error);
      throw new Error('Failed to search properties');
    }
  }

  // Extract description text from rich text object
  static extractDescriptionText(description: Property['description']): string {
    if (typeof description === 'string') {
      return description;
    }
    
    if (description && typeof description === 'object' && description.children) {
      // Extract text from rich text object
      const extractText = (node: any): string => {
        if (node.text) {
          return node.text;
        }
        if (node.children && Array.isArray(node.children)) {
          return node.children.map(extractText).join('');
        }
        return '';
      };
      
      return extractText(description) || 'No description available';
    }
    
    return 'No description available';
  }
}

// Agent interface based on your Contentstack schema
export interface Agent {
  uid: string;
  title: string;
  email: string;
  phone: string;
  profile_image: string;
  experience_years: string;
  specialization: string;
  locale: string;
  created_at: string;
  updated_at: string;
  _version: number;
  tags: string[];
  created_by: string;
  updated_by: string;
  ACL: Record<string, unknown>;
  _in_progress: boolean;
}

// Agent service functions
export class AgentService {
  // Get all agents from Contentstack
  static async getAllAgents(): Promise<Agent[]> {
    try {
      const Query = Stack.ContentType('agent').Query();
      const result = await Query.toJSON().find();
      return result[0] || [];
    } catch (error) {
      console.error('Error fetching agents:', error);
      throw new Error('Failed to fetch agents from Contentstack');
    }
  }

  // Get single agent by UID
  static async getAgentByUid(uid: string): Promise<Agent | null> {
    try {
      const agents = await this.getAllAgents();
      return agents.find(agent => agent.uid === uid) || null;
    } catch (error) {
      console.error('Error fetching agent:', error);
      throw new Error(`Failed to fetch agent with UID: ${uid}`);
    }
  }
}

// Blog interface based on your blog schema
export interface BlogPost {
  uid: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author_name: string;
  author_bio: string;
  author_avatar: string;
  categories: string;
  tags: string;
  published_at: string;
  read_time: string;
  locale: string;
  created_at: string;
  updated_at: string;
  _version: number;
  tags_array: string[];
  created_by: string;
  updated_by: string;
  ACL: Record<string, unknown>;
  _in_progress: boolean;
}

// Blog service functions
export class BlogService {
  // Get all blog posts
  static async getAllBlogPosts(): Promise<BlogPost[]> {
    try {
      // For now, return mock data since blog content type doesn't exist yet
      // This will be replaced once the blog content type is created in Contentstack
      const mockBlogPosts: BlogPost[] = [
        {
          uid: 'blog-1',
          title: 'Mumbai Real Estate Trends to Watch in 2025',
          slug: 'mumbai-real-estate-trends-2025',
          excerpt: "Discover the hottest areas, property types, and investment opportunities in Mumbai's real estate market for 2025.",
          content: `# Mumbai Real Estate Trends to Watch in 2025

The Mumbai real estate market continues to evolve rapidly as we move into 2025. Here are the key trends that buyers, sellers, and investors should be aware of:

## 1. South Mumbai Renaissance

After years of focus on suburban development, South Mumbai is seeing a renaissance with heritage building restorations and luxury redevelopments attracting high-net-worth buyers back to the city's historic core.

## 2. Transit-Oriented Development Boom

With the completion of multiple metro lines, properties within 500 meters of metro stations are commanding a 15-20% premium over similar properties further away.

## 3. Sustainable Living Spaces

Green buildings with LEED certification are no longer just nice-to-have but essential features for new developments, with buyers willing to pay up to 10% more for sustainable features.

## 4. Compact Luxury

The trend toward smaller but premium apartments continues, with 2-3 BHK luxury units in the 800-1200 sq ft range seeing the highest demand among young professionals.

## 5. Investment Outlook

Navi Mumbai and Thane continue to offer the best investment potential with infrastructure developments promising 12-15% appreciation over the next three years.`,
          featured_image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
          author_name: 'Deepak Malhotra',
          author_bio: 'Real estate analyst with 15+ years of experience in the Mumbai market',
          author_avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
          categories: 'Market Trends,Investment',
          tags: 'Mumbai,2025,Real Estate',
          published_at: '2023-12-15T10:00:00Z',
          read_time: '8',
          created_at: '2023-12-15T10:00:00Z',
          updated_at: '2023-12-15T10:00:00Z',
          _version: 1,
          tags_array: ['Mumbai', '2025', 'Real Estate'],
          created_by: 'system',
          updated_by: 'system',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'blog-2',
          title: 'The Ultimate Guide for First-Time Home Buyers in Mumbai',
          slug: 'first-time-home-buyers-guide',
          excerpt: 'Everything you need to know about buying your first home in Mumbai - from finances to paperwork.',
          content: `# The Ultimate Guide for First-Time Home Buyers in Mumbai

Buying your first home in Mumbai can be an exciting yet daunting experience. This comprehensive guide will walk you through the process step by step.

## Understanding Your Budget

Before you start looking at properties, it's crucial to have a clear understanding of your budget. Consider:

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
- Not considering future development plans in the area`,
          featured_image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
          author_name: 'Priya Sharma',
          author_bio: 'Real estate consultant specializing in helping first-time home buyers',
          author_avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
          categories: 'Buying Guide,First-Time Buyers',
          tags: 'Mumbai,Home Buying,Guide',
          published_at: '2023-11-20T09:30:00Z',
          read_time: '12',
          created_at: '2023-11-20T09:30:00Z',
          updated_at: '2023-11-25T14:15:00Z',
          _version: 1,
          tags_array: ['Mumbai', 'Home Buying', 'Guide'],
          created_by: 'system',
          updated_by: 'system',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        }
      ];
      
      return mockBlogPosts;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw new Error('Failed to fetch blog posts from Contentstack');
    }
  }

  // Get single blog post by slug
  static async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const posts = await this.getAllBlogPosts();
      return posts.find(post => post.slug === slug) || null;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      throw new Error(`Failed to fetch blog post with slug: ${slug}`);
    }
  }
}

// Testimonial interface
export interface Testimonial {
  uid: string;
  name: string;
  location: string;
  role: string;
  avatar: string;
  rating: string;
  content: string;
  date: string;
  property_purchased_name: string;
  property_purchased_location: string;
  locale: string;
  created_at: string;
  updated_at: string;
  _version: number;
  tags: string[];
  created_by: string;
  updated_by: string;
  ACL: Record<string, unknown>;
  _in_progress: boolean;
}

// Testimonial service functions
export class TestimonialService {
  // Get all testimonials
  static async getAllTestimonials(): Promise<Testimonial[]> {
    try {
      // For now, return mock data since testimonial content type doesn't exist yet
      // This will be replaced once the testimonial content type is created in Contentstack
      const mockTestimonials: Testimonial[] = [
        {
          uid: 'testimonial-1',
          name: 'Vikram Shah',
          location: 'Bandra, Mumbai',
          role: 'Tech Entrepreneur',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          rating: '5',
          content: 'PropertyPulse made finding my dream home a breeze. Their professional team understood exactly what I was looking for and found the perfect property within my budget. Highly recommended!',
          date: '2023-11-15',
          property_purchased_name: 'Luxury Apartment in Bandra',
          property_purchased_location: 'Bandra West, Mumbai',
          created_at: '2023-11-15T00:00:00Z',
          updated_at: '2023-11-15T00:00:00Z',
          _version: 1,
          tags: [],
          created_by: 'system',
          updated_by: 'system',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'testimonial-2',
          name: 'Ananya Desai',
          location: 'Powai, Mumbai',
          role: 'Finance Manager',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          rating: '5',
          content: 'As a first-time homebuyer, I was nervous about the process. The PropertyPulse team guided me through every step with patience and expertise. They helped me find a beautiful apartment and negotiated a great deal!',
          date: '2023-10-22',
          property_purchased_name: 'Spacious 2BHK in Powai',
          property_purchased_location: 'Powai, Mumbai',
          created_at: '2023-10-22T00:00:00Z',
          updated_at: '2023-10-22T00:00:00Z',
          _version: 1,
          tags: [],
          created_by: 'system',
          updated_by: 'system',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'testimonial-3',
          name: 'Rajesh & Meera Kapoor',
          location: 'Worli, Mumbai',
          role: 'Business Owners',
          avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
          rating: '4',
          content: 'We were looking to upgrade to a larger home for our growing family. PropertyPulse understood our requirements perfectly and showed us properties that matched our criteria. We found our dream home within weeks!',
          date: '2023-09-10',
          property_purchased_name: 'Sea-facing Penthouse in Worli',
          property_purchased_location: 'Worli, Mumbai',
          created_at: '2023-09-10T00:00:00Z',
          updated_at: '2023-09-10T00:00:00Z',
          _version: 1,
          tags: [],
          created_by: 'system',
          updated_by: 'system',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        }
      ];
      
      return mockTestimonials;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw new Error('Failed to fetch testimonials from Contentstack');
    }
  }

  // Get single testimonial by UID
  static async getTestimonialByUid(uid: string): Promise<Testimonial | null> {
    try {
      const testimonials = await this.getAllTestimonials();
      return testimonials.find(testimonial => testimonial.uid === uid) || null;
    } catch (error) {
      console.error('Error fetching testimonial:', error);
      throw new Error(`Failed to fetch testimonial with UID: ${uid}`);
    }
  }
}