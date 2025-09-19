import Contentstack from 'contentstack';

// Initialize Contentstack with EU region using hardcoded credentials
// These are the same credentials used by the working properties
const Stack = Contentstack.Stack(
  'blt500f2c67aa373069',
  'csd109aa63c366c562c6fa2633',
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
  // Get all agents - using hardcoded data for now since delivery API has issues
  static async getAllAgents(): Promise<Agent[]> {
    try {
      // For now, return hardcoded agent data since delivery API has issues
      // This will be replaced once the content type is properly published
      const hardcodedAgents: Agent[] = [
        {
          uid: 'blta38481f184e4caf9',
          title: 'Priya Sharma',
          email: 'priya.sharma@propertypulse.com',
          phone: '+91 98765 43210',
          profile_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
          experience_years: '10',
          specialization: 'Residential Properties, Luxury Apartments, Commercial Real Estate, Property Investment',
          created_at: '2025-09-19T07:28:45.430Z',
          updated_at: '2025-09-19T07:30:06.767Z',
          _version: 3,
          tags: [],
          created_by: 'csea0dc458ede7788b',
          updated_by: 'csea0dc458ede7788b',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'blte9ae8625ed21a83c',
          title: 'Rajesh Kumar',
          email: 'rajesh.kumar@propertypulse.com',
          phone: '+91 98765 12345',
          profile_image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
          experience_years: '12',
          specialization: 'Commercial Real Estate, Office Spaces, Retail Properties',
          created_at: '2025-09-19T07:30:32.711Z',
          updated_at: '2025-09-19T07:30:32.711Z',
          _version: 1,
          tags: [],
          created_by: 'csea0dc458ede7788b',
          updated_by: 'csea0dc458ede7788b',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'blt920dcc60871a9ff3',
          title: 'Anjali Patel',
          email: 'anjali.patel@propertypulse.com',
          phone: '+91 98765 56789',
          profile_image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
          experience_years: '8',
          specialization: 'Residential Properties, First-time Buyers, Property Investment',
          created_at: '2025-09-19T07:30:33.307Z',
          updated_at: '2025-09-19T07:30:33.307Z',
          _version: 1,
          tags: [],
          created_by: 'csea0dc458ede7788b',
          updated_by: 'csea0dc458ede7788b',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'blt82d7bf382d5d598e',
          title: 'Vikram Singh',
          email: 'vikram.singh@propertypulse.com',
          phone: '+91 98765 98765',
          profile_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
          experience_years: '15',
          specialization: 'Luxury Properties, Villas, High-end Commercial Spaces',
          created_at: '2025-09-19T07:30:33.900Z',
          updated_at: '2025-09-19T07:30:33.900Z',
          _version: 1,
          tags: [],
          created_by: 'csea0dc458ede7788b',
          updated_by: 'csea0dc458ede7788b',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        },
        {
          uid: 'blt14f269f7eef4bf10',
          title: 'Meera Reddy',
          email: 'meera.reddy@propertypulse.com',
          phone: '+91 98765 11111',
          profile_image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
          experience_years: '6',
          specialization: 'Residential Properties, Rental Properties, Property Management',
          created_at: '2025-09-19T07:30:34.487Z',
          updated_at: '2025-09-19T07:30:34.487Z',
          _version: 1,
          tags: [],
          created_by: 'csea0dc458ede7788b',
          updated_by: 'csea0dc458ede7788b',
          ACL: {},
          _in_progress: false,
          locale: 'en-us'
        }
      ];
      
      return hardcodedAgents;
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