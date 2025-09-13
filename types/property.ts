export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  type: 'apartment' | 'villa' | 'penthouse' | 'plot' | 'commercial';
  status: 'for-sale' | 'for-rent' | 'sold' | 'rented';
  bedrooms: number;
  bathrooms: number;
  area: {
    totalArea: number; // in square feet
    builtUpArea?: number;
    carpetArea?: number;
  };
  amenities: string[];
  features: string[];
  images: string[];
  floorPlan?: string;
  constructionYear?: number;
  furnishingStatus?: 'unfurnished' | 'semi-furnished' | 'fully-furnished';
  facing?: 'north' | 'south' | 'east' | 'west' | 'north-east' | 'north-west' | 'south-east' | 'south-west';
  possession?: 'ready-to-move' | 'under-construction';
  expectedCompletionDate?: string;
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
    profileImage?: string;
  };
  createdAt: string;
  updatedAt: string;
}
