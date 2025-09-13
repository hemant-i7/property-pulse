/**
 * Mock API handlers for property data
 * These would be replaced with actual API calls to your backend or Contentstack
 */

import { Property } from '@/types/property';
import { AMENITIES, LOCATIONS, PROPERTY_TYPES } from '../constants/filters';

// Mock properties data
const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Apartment in Bandra',
    description: 'A beautiful luxury apartment with sea view in the heart of Bandra West.',
    price: 25000000, // 2.5 crore
    location: {
      area: 'Bandra West',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      coordinates: {
        latitude: 19.0596,
        longitude: 72.8295,
      },
    },
    type: 'apartment',
    status: 'for-sale',
    bedrooms: 3,
    bathrooms: 3,
    area: {
      totalArea: 1800,
      builtUpArea: 1500,
      carpetArea: 1200,
    },
    amenities: ['swimming-pool', 'gym', 'parking', 'security'],
    features: ['Sea View', 'Corner Unit', 'Vastu Compliant', 'Air Conditioning'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83',
    ],
    floorPlan: 'https://example.com/floorplan1.jpg',
    constructionYear: 2019,
    furnishingStatus: 'semi-furnished',
    facing: 'west',
    possession: 'ready-to-move',
    agent: {
      id: 'a1',
      name: 'Priya Sharma',
      phone: '+91 9876543210',
      email: 'priya@propertypulse.com',
      profileImage: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    createdAt: '2023-11-15T10:30:00Z',
    updatedAt: '2023-12-01T14:45:00Z',
  },
  {
    id: '2',
    title: 'Sea-facing Penthouse in Worli',
    description: 'Luxurious penthouse with panoramic sea views and premium finishes.',
    price: 150000000, // 15 crore
    location: {
      area: 'Worli',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      coordinates: {
        latitude: 19.0128,
        longitude: 72.8185,
      },
    },
    type: 'penthouse',
    status: 'for-sale',
    bedrooms: 4,
    bathrooms: 4,
    area: {
      totalArea: 4200,
      builtUpArea: 3800,
      carpetArea: 3200,
    },
    amenities: ['swimming-pool', 'gym', 'parking', 'security', 'clubhouse', 'jogging-track'],
    features: ['Sea View', 'Private Terrace', 'Home Automation', 'Italian Marble Flooring'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      'https://images.unsplash.com/photo-1486304873000-235643847519',
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da',
    ],
    floorPlan: 'https://example.com/floorplan2.jpg',
    constructionYear: 2020,
    furnishingStatus: 'fully-furnished',
    facing: 'south-west',
    possession: 'ready-to-move',
    agent: {
      id: 'a2',
      name: 'Rahul Khanna',
      phone: '+91 9876543211',
      email: 'rahul@propertypulse.com',
      profileImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    createdAt: '2023-10-10T09:15:00Z',
    updatedAt: '2023-11-25T11:30:00Z',
  },
  {
    id: '3',
    title: 'Commercial Space in BKC',
    description: 'Premium office space in Bandra Kurla Complex with modern amenities.',
    price: 80000000, // 8 crore
    location: {
      area: 'Bandra Kurla Complex',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      coordinates: {
        latitude: 19.0672,
        longitude: 72.8691,
      },
    },
    type: 'commercial',
    status: 'for-sale',
    bedrooms: 0,
    bathrooms: 4,
    area: {
      totalArea: 3000,
      builtUpArea: 2800,
      carpetArea: 2400,
    },
    amenities: ['parking', 'security', 'power-backup', 'elevator'],
    features: ['Corner Property', '24/7 Access', 'Premium Lobby', 'Conference Room'],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
    ],
    floorPlan: 'https://example.com/floorplan3.jpg',
    constructionYear: 2018,
    furnishingStatus: 'unfurnished',
    facing: 'north-east',
    possession: 'ready-to-move',
    agent: {
      id: 'a3',
      name: 'Amit Patel',
      phone: '+91 9876543212',
      email: 'amit@propertypulse.com',
      profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    createdAt: '2023-09-05T14:20:00Z',
    updatedAt: '2023-10-18T16:45:00Z',
  },
];

/**
 * Get properties with optional filtering
 */
export async function getProperties(params?: {
  location?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  amenities?: string[];
  page?: number;
  limit?: number;
}) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filteredProperties = [...MOCK_PROPERTIES];
  
  // Apply filters if provided
  if (params) {
    if (params.location) {
      filteredProperties = filteredProperties.filter(
        property => property.location.area.toLowerCase().includes(params.location!.toLowerCase())
      );
    }
    
    if (params.type) {
      filteredProperties = filteredProperties.filter(
        property => property.type === params.type
      );
    }
    
    if (params.minPrice) {
      filteredProperties = filteredProperties.filter(
        property => property.price >= params.minPrice!
      );
    }
    
    if (params.maxPrice) {
      filteredProperties = filteredProperties.filter(
        property => property.price <= params.maxPrice!
      );
    }
    
    if (params.bedrooms) {
      filteredProperties = filteredProperties.filter(
        property => property.bedrooms >= params.bedrooms!
      );
    }
    
    if (params.amenities && params.amenities.length > 0) {
      filteredProperties = filteredProperties.filter(property => 
        params.amenities!.every(amenity => property.amenities.includes(amenity))
      );
    }
  }
  
  // Handle pagination
  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);
  
  return {
    properties: paginatedProperties,
    total: filteredProperties.length,
    page,
    limit,
    totalPages: Math.ceil(filteredProperties.length / limit),
  };
}

/**
 * Get a single property by ID
 */
export async function getPropertyById(id: string) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const property = MOCK_PROPERTIES.find(p => p.id === id);
  
  if (!property) {
    throw new Error(`Property with ID ${id} not found`);
  }
  
  return property;
}

/**
 * Get property filter options
 */
export async function getPropertyFilterOptions() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return {
    locations: LOCATIONS,
    propertyTypes: PROPERTY_TYPES,
    amenities: AMENITIES,
  };
}
