/**
 * Property filter options
 */

export const PROPERTY_TYPES = [
  { id: 'apartment', label: 'Apartment' },
  { id: 'villa', label: 'Villa' },
  { id: 'penthouse', label: 'Penthouse' },
  { id: 'plot', label: 'Plot' },
  { id: 'commercial', label: 'Commercial' },
];

export const PROPERTY_STATUS = [
  { id: 'for-sale', label: 'For Sale' },
  { id: 'for-rent', label: 'For Rent' },
  { id: 'sold', label: 'Sold' },
  { id: 'rented', label: 'Rented' },
];

export const LOCATIONS = [
  { id: 'south-mumbai', label: 'South Mumbai' },
  { id: 'bandra', label: 'Bandra' },
  { id: 'andheri', label: 'Andheri' },
  { id: 'juhu', label: 'Juhu' },
  { id: 'powai', label: 'Powai' },
  { id: 'worli', label: 'Worli' },
  { id: 'navi-mumbai', label: 'Navi Mumbai' },
  { id: 'thane', label: 'Thane' },
];

export const PRICE_RANGES = [
  { id: '0-5000000', label: 'Under ₹50L', min: 0, max: 5000000 },
  { id: '5000000-10000000', label: '₹50L - ₹1Cr', min: 5000000, max: 10000000 },
  { id: '10000000-20000000', label: '₹1Cr - ₹2Cr', min: 10000000, max: 20000000 },
  { id: '20000000-50000000', label: '₹2Cr - ₹5Cr', min: 20000000, max: 50000000 },
  { id: '50000000-999999999', label: 'Above ₹5Cr', min: 50000000, max: 999999999 },
];

export const BEDROOM_OPTIONS = [
  { id: '1', label: '1 BHK' },
  { id: '2', label: '2 BHK' },
  { id: '3', label: '3 BHK' },
  { id: '4', label: '4 BHK' },
  { id: '5', label: '5+ BHK' },
];

export const BATHROOM_OPTIONS = [
  { id: '1', label: '1' },
  { id: '2', label: '2' },
  { id: '3', label: '3' },
  { id: '4', label: '4+' },
];

export const AMENITIES = [
  { id: 'swimming-pool', label: 'Swimming Pool' },
  { id: 'gym', label: 'Gym' },
  { id: 'garden', label: 'Garden' },
  { id: 'parking', label: 'Parking' },
  { id: 'security', label: '24/7 Security' },
  { id: 'clubhouse', label: 'Clubhouse' },
  { id: 'play-area', label: 'Children\'s Play Area' },
  { id: 'elevator', label: 'Elevator' },
  { id: 'power-backup', label: 'Power Backup' },
  { id: 'water-supply', label: '24/7 Water Supply' },
  { id: 'jogging-track', label: 'Jogging Track' },
  { id: 'sports-facility', label: 'Sports Facility' },
];
