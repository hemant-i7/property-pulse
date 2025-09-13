import { Property } from '@/lib/contentstack';
import PropertyCard from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  loading?: boolean;
  className?: string;
}

export default function PropertyGrid({ properties, loading = false, className = '' }: PropertyGridProps) {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-neutral-200 rounded-2xl h-64 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
              <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
              <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2 font-heading">
            No Properties Found
          </h3>
          <p className="text-neutral-600">
            We couldn&apos;t find any properties matching your criteria. Try adjusting your filters or search terms.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {properties.map((property) => (
        <PropertyCard
          key={property.uid}
          property={property}
          className="animate-fade-in"
        />
      ))}
    </div>
  );
}