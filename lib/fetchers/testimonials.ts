/**
 * Mock API handlers for testimonials
 */

import { Testimonial } from '@/types/testimonial';

// Mock testimonials data
const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Vikram Shah',
    location: 'Bandra, Mumbai',
    role: 'Tech Entrepreneur',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    content: 'PropertyPulse made finding my dream home a breeze. Their professional team understood exactly what I was looking for and found the perfect property within my budget. Highly recommended!',
    date: '2023-11-15',
    propertyPurchased: {
      id: '1',
      name: 'Luxury Apartment in Bandra',
      location: 'Bandra West, Mumbai',
    },
  },
  {
    id: '2',
    name: 'Ananya Desai',
    location: 'Powai, Mumbai',
    role: 'Finance Manager',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    content: 'As a first-time homebuyer, I was nervous about the process. The PropertyPulse team guided me through every step with patience and expertise. They helped me find a beautiful apartment and negotiated a great deal!',
    date: '2023-10-22',
    propertyPurchased: {
      id: '3',
      name: 'Spacious 2BHK in Powai',
      location: 'Powai, Mumbai',
    },
  },
  {
    id: '3',
    name: 'Rajesh & Meera Kapoor',
    location: 'Worli, Mumbai',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    rating: 4,
    content: 'We were looking to upgrade to a larger home for our growing family. PropertyPulse understood our requirements perfectly and showed us properties that matched our criteria. We found our dream home within weeks!',
    date: '2023-09-10',
    propertyPurchased: {
      id: '2',
      name: 'Sea-facing Penthouse in Worli',
      location: 'Worli, Mumbai',
    },
  },
  {
    id: '4',
    name: 'Priya Sharma',
    location: 'Andheri, Mumbai',
    role: 'Marketing Director',
    avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 5,
    content: 'I was relocating to Mumbai for work and needed to find a home quickly. PropertyPulse made the process smooth and efficient. Their knowledge of the local market is impressive!',
    date: '2023-08-05',
  },
  {
    id: '5',
    name: 'Arjun Mehta',
    location: 'Juhu, Mumbai',
    role: 'Doctor',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
    content: "I've worked with several real estate agencies in Mumbai, but PropertyPulse stands out for their professionalism and client-focused approach. They found me an excellent investment property with great rental potential.",
    date: '2023-07-18',
  },
];

/**
 * Get testimonials with optional limit
 */
export async function getTestimonials(limit?: number) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Sort by date (newest first) and apply limit if provided
  const sortedTestimonials = [...MOCK_TESTIMONIALS].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return limit ? sortedTestimonials.slice(0, limit) : sortedTestimonials;
}
