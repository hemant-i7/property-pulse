export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role?: string;
  avatar?: string;
  rating: number; // 1-5
  content: string;
  date: string;
  propertyPurchased?: {
    id: string;
    name: string;
    location: string;
  };
}
