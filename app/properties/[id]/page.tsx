import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MainContainer from '@/components/layout/MainContainer';
import { PropertyService } from '@/lib/contentstack';

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = await PropertyService.getPropertyByUid(id);
  
  if (!property) {
    return {
      title: 'Property Not Found | PropertyPulse',
    };
  }

  return {
    title: `${property.title} | PropertyPulse`,
    description: PropertyService.extractDescriptionText(property.description),
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = await PropertyService.getPropertyByUid(id);

  if (!property) {
    notFound();
  }

  const description = PropertyService.extractDescriptionText(property.description);
  const amenitiesList = property.amenities.split(',').map(a => a.trim());

  return (
    <>
      <Header />
      <main className="bg-neutral-50 min-h-screen">
        <MainContainer className="py-12">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              href="/properties"
              className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Properties
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Property Image */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={property.url}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full font-medium">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-200">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-heading">
                    {property.title}
                  </h1>
                  
                  <div className="flex items-center text-neutral-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-lg">{property.location}</span>
                  </div>

                  <div className="flex items-center text-neutral-600 mb-6">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    <span className="text-lg">{property.size}</span>
                  </div>

                  <div className="text-4xl font-bold text-primary-600 font-heading">
                    {property.price}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4 font-heading">
                    About This Property
                  </h2>
                  <p className="text-neutral-700 leading-relaxed text-lg">
                    {description}
                  </p>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-6 font-heading">
                    Amenities & Features
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenitiesList.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-neutral-100 p-4 rounded-xl"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-neutral-700 font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-200 sticky top-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6 font-heading">
                  Interested in this property?
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                      defaultValue={`I'm interested in ${property.title}`}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-medium hover:shadow-large"
                  >
                    📧 Send Inquiry
                  </button>
                </form>
                
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-neutral-600">Call us directly:</span>
                    <a href="tel:+919876543210" className="text-primary-600 font-semibold hover:text-primary-700">
                      +91 98765 43210
                    </a>
                  </div>
                  
                  <button className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200">
                    📞 Schedule a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}