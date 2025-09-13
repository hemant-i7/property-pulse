import Image from 'next/image';
import Link from 'next/link';
import { Property, PropertyService } from '@/lib/contentstack';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className = '' }: PropertyCardProps) {
  const description = PropertyService.extractDescriptionText(property.description);
  
  return (
    <Link href={`/properties/${property.uid}`}>
      <div className={`group bg-white rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 overflow-hidden border border-neutral-200 hover:border-primary-300 ${className}`}>
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.url}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {property.type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Price */}
          <div className="mb-3">
            <span className="text-2xl font-bold text-primary-600 font-heading">
              {property.price}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors font-heading">
            {property.title}
          </h3>

          {/* Location */}
          <div className="flex items-center text-neutral-600 mb-3">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Size */}
          <div className="flex items-center text-neutral-600 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span className="text-sm">{property.size}</span>
          </div>

          {/* Description */}
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-4">
            {property.amenities.split(',').slice(0, 3).map((amenity, index) => (
              <span
                key={index}
                className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded-md text-xs"
              >
                {amenity.trim()}
              </span>
            ))}
            {property.amenities.split(',').length > 3 && (
              <span className="text-neutral-500 text-xs">
                +{property.amenities.split(',').length - 3} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700">
              View Details
            </span>
            <svg className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}