import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MainContainer from '@/components/layout/MainContainer';
import PropertyGrid from '@/components/property/PropertyGrid';
import { PropertyService } from '@/lib/contentstack';

export const metadata: Metadata = {
  title: 'Properties | PropertyPulse',
  description: 'Browse our extensive collection of premium properties in Mumbai',
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Await the search params in Next.js 15
  const params = await searchParams;
  
  // Example of reading search params for filters
  const location = params.location as string | undefined;
  const type = params.type as string | undefined;
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;

  // Fetch properties from Contentstack
  const properties = await PropertyService.searchProperties({
    location,
    type,
    minPrice,
    maxPrice,
  });
  
  return (
    <>
      <Header />
      <main className="bg-neutral-50 min-h-screen">
        <MainContainer className="py-12">
          <div className="flex flex-col gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 font-heading mb-2">
                Premium Properties
              </h1>
              <p className="text-lg text-neutral-600">
                Discover {properties.length} exceptional properties in Mumbai&apos;s most desirable locations
              </p>
            </div>
            
            {/* Filter summary */}
            {(location || type || minPrice || maxPrice) && (
              <div className="flex flex-wrap gap-3">
                {location && (
                  <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                    📍 {location}
                  </div>
                )}
                {type && (
                  <div className="bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium">
                    🏠 {type}
                  </div>
                )}
                {minPrice && (
                  <div className="bg-success-100 text-success-700 px-4 py-2 rounded-full text-sm font-medium">
                    💰 Min: ₹{minPrice.toLocaleString('en-IN')}
                  </div>
                )}
                {maxPrice && (
                  <div className="bg-success-100 text-success-700 px-4 py-2 rounded-full text-sm font-medium">
                    💰 Max: ₹{maxPrice.toLocaleString('en-IN')}
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Filter controls */}
          <div className="bg-white p-8 rounded-2xl shadow-soft border border-neutral-200 mb-12">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-neutral-700 mb-2">
                  📍 Location
                </label>
                <select
                  id="location"
                  name="location"
                  defaultValue={location}
                  className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Any Location</option>
                  <option value="Juhu">Juhu</option>
                  <option value="Bandra">Bandra</option>
                  <option value="Andheri">Andheri</option>
                  <option value="South Mumbai">South Mumbai</option>
                  <option value="Powai">Powai</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-neutral-700 mb-2">
                  🏠 Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  defaultValue={type}
                  className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Any Type</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Plot">Plot</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="priceRange" className="block text-sm font-semibold text-neutral-700 mb-2">
                  💰 Price Range
                </label>
                <select
                  id="priceRange"
                  name="priceRange"
                  className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Any Price</option>
                  <option value="0-5000000">Under ₹50L</option>
                  <option value="5000000-10000000">₹50L - ₹1Cr</option>
                  <option value="10000000-20000000">₹1Cr - ₹2Cr</option>
                  <option value="20000000-50000000">₹2Cr - ₹5Cr</option>
                  <option value="50000000-999999999">Above ₹5Cr</option>
                </select>
              </div>
              
              <div className="self-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 w-full rounded-xl transition-all duration-200 shadow-medium hover:shadow-large"
                >
                  🔍 Apply Filters
                </button>
              </div>
            </form>
          </div>
          
          {/* Property grid */}
          <PropertyGrid properties={properties} />
          
          {/* Pagination - Only show if there are properties */}
          {properties.length > 0 && (
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-neutral-300 rounded-xl hover:bg-neutral-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  ← Previous
                </button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-xl font-medium">
                  1
                </button>
                <button className="px-4 py-2 border border-neutral-300 rounded-xl hover:bg-neutral-100 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-neutral-300 rounded-xl hover:bg-neutral-100 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-neutral-300 rounded-xl hover:bg-neutral-100 transition-colors">
                  Next →
                </button>
              </div>
            </div>
          )}
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}
