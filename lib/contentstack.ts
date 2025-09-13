import Contentstack from 'contentstack';

// Initialize Contentstack with EU region
const Stack = Contentstack.Stack(
  process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || '',
  process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || '',
  process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || 'development'
);

// Set the region to EU since your endpoint is eu-cdn.contentstack.com
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
  description: {
    type: string;
    attrs: Record<string, unknown>;
    uid: string;
    children: Array<{
      type: string;
      attrs: Record<string, unknown>;
      uid: string;
      children: Array<{
        text: string;
      }>;
    }>;
    _version: number;
  };
  amenities: string;
  url: string;
  locale: string;
  created_at: string;
  updated_at: string;
  _version: number;
  tags: string[];
  publish_details: Array<{
    environment: string;
    locale: string;
    time: string;
    user: string;
    version: number;
  }>;
}

// Fallback data for development/demo
const fallbackProperties: Property[] = [
  {
    uid: 'demo-villa-juhu',
    title: 'Luxury Villa in Juhu',
    type: 'Villa',
    location: 'Juhu, Mumbai',
    price: '₹12,00,00,000',
    size: '3500 sq. ft',
    description: {
      type: 'doc',
      attrs: {},
      uid: 'villa_desc',
      children: [
        {
          type: 'p',
          attrs: {},
          uid: 'villa_para',
          children: [
            {
              text: 'Premium villa with private garden and pool, located in the prestigious Juhu area. This luxurious property features 4 bedrooms, a spacious living area, and direct beach access. Perfect for families seeking luxury and privacy.'
            }
          ]
        }
      ],
      _version: 2
    },
    amenities: 'Garden, Pool, Security, Clubhouse, Beach Access',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
    locale: 'en-us',
    created_at: '2025-09-13T17:25:46.501Z',
    updated_at: '2025-09-13T18:45:07.705Z',
    _version: 2,
    tags: [],
    publish_details: []
  },
  {
    uid: 'demo-apartment-bandra',
    title: 'Modern Apartment in Bandra',
    type: 'Apartment',
    location: 'Bandra West, Mumbai',
    price: '₹2,50,00,000',
    size: '1200 sq. ft',
    description: {
      type: 'doc',
      attrs: {},
      uid: 'apt_desc',
      children: [
        {
          type: 'p',
          attrs: {},
          uid: 'apt_para',
          children: [
            {
              text: 'Contemporary 2BHK apartment in the heart of Bandra West. Features modern amenities, excellent connectivity, and stunning city views. Perfect for young professionals and small families.'
            }
          ]
        }
      ],
      _version: 2
    },
    amenities: 'Gym, Swimming Pool, Parking, Security, Elevator',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    locale: 'en-us',
    created_at: '2025-09-13T17:25:46.501Z',
    updated_at: '2025-09-13T18:45:07.705Z',
    _version: 2,
    tags: [],
    publish_details: []
  },
  {
    uid: 'demo-penthouse-worli',
    title: 'Penthouse in Worli',
    type: 'Penthouse',
    location: 'Worli, Mumbai',
    price: '₹8,50,00,000',
    size: '2800 sq. ft',
    description: {
      type: 'doc',
      attrs: {},
      uid: 'pent_desc',
      children: [
        {
          type: 'p',
          attrs: {},
          uid: 'pent_para',
          children: [
            {
              text: 'Spectacular penthouse with panoramic views of the Mumbai skyline and Arabian Sea. Features premium finishes, private terrace, and world-class amenities. The epitome of luxury living.'
            }
          ]
        }
      ],
      _version: 2
    },
    amenities: 'Private Terrace, Jacuzzi, Concierge, Valet Parking, Sky Lounge',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    locale: 'en-us',
    created_at: '2025-09-13T17:25:46.501Z',
    updated_at: '2025-09-13T18:45:07.705Z',
    _version: 2,
    tags: [],
    publish_details: []
  }
];

// Service functions
export class PropertyService {
  // Get all properties
  static async getAllProperties(): Promise<Property[]> {
    try {
      const Query = Stack.ContentType('properties').Query();
      const result = await Query.toJSON().find();
      return result[0] || fallbackProperties;
    } catch (error) {
      console.error('Error fetching properties:', error);
      console.log('Using fallback properties for demo');
      return fallbackProperties;
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
      // Return fallback property if available
      const fallback = fallbackProperties.find(p => p.uid === uid);
      return fallback || null;
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
      // Return filtered fallback properties
      return fallbackProperties.filter(p => 
        p.location.toLowerCase().includes(location.toLowerCase())
      );
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
      // Return filtered fallback properties
      return fallbackProperties.filter(p => 
        p.type.toLowerCase() === type.toLowerCase()
      );
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
      // Return filtered fallback properties
      let filtered = fallbackProperties;
      
      if (filters.location) {
        filtered = filtered.filter(p => 
          p.location.toLowerCase().includes(filters.location!.toLowerCase())
        );
      }
      
      if (filters.type) {
        filtered = filtered.filter(p => 
          p.type.toLowerCase() === filters.type!.toLowerCase()
        );
      }
      
      // Client-side price filtering for fallback data
      if (filters.minPrice || filters.maxPrice) {
        filtered = filtered.filter((property: Property) => {
          const priceStr = property.price.replace(/[₹,]/g, '');
          const price = parseInt(priceStr);
          
          if (filters.minPrice && price < filters.minPrice) return false;
          if (filters.maxPrice && price > filters.maxPrice) return false;
          
          return true;
        });
      }
      
      return filtered;
    }
  }

  // Extract description text from rich text field
  static extractDescriptionText(description: Property['description']): string {
    try {
      return description.children
        .map(child => 
          child.children
            .map(textNode => textNode.text)
            .join(' ')
        )
        .join(' ');
    } catch {
      return 'No description available';
    }
  }
}