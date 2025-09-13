import Link from "next/link";
import MainContainer from "@/components/layout/MainContainer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/hero/HeroBanner";
import PropertyGrid from "@/components/property/PropertyGrid";
import { PropertyService } from "@/lib/contentstack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | PropertyPulse - Find Your Dream Property in Mumbai",
  description: "PropertyPulse is Mumbai's premier real estate platform. Browse luxury apartments, villas, penthouses and commercial properties.",
};

export default async function Home() {
  // Fetch featured properties (first 6)
  const allProperties = await PropertyService.getAllProperties();
  const featuredProperties = allProperties.slice(0, 6);
  return (
    <>
      <Header />
      <main>
        <HeroBanner 
          title="Find Your Dream Home in Mumbai"
          subtitle="Discover premium properties in the city's most desirable locations"
          backgroundImage="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          showSearch={true}
        />
        
        <div className="bg-neutral-50">
          <MainContainer>
            {/* Featured Properties Section */}
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-heading">
                  Featured Properties
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Handpicked premium properties from Mumbai&apos;s most prestigious locations
                </p>
              </div>
              
              <PropertyGrid properties={featuredProperties} />
              
              {featuredProperties.length > 0 && (
                <div className="text-center mt-12">
                  <Link
                    href="/properties"
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-medium hover:shadow-large"
                  >
                    View All Properties
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </section>
          </MainContainer>
        </div>
          
        <MainContainer>
          {/* CTA Section */}
          <section className="py-20">
            <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white p-12 md:p-16 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                  Ready to find your dream property?
                </h2>
                <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                  Let our experts help you navigate Mumbai&apos;s real estate market and find the perfect home for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-primary-600 hover:bg-neutral-100 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-large hover:shadow-xl">
                    📞 Contact An Agent
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200">
                    📧 Get Free Consultation
                  </button>
                </div>
              </div>
            </div>
          </section>
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}
