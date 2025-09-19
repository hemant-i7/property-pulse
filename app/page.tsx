import Link from "next/link";
import MainContainer from "@/components/layout/MainContainer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/hero/HeroBanner";
import PropertyGrid from "@/components/property/PropertyGrid";
import AgentGrid from "@/components/agent/AgentGrid";
import { PropertyService, AgentService, BlogService, TestimonialService } from "@/lib/contentstack";
import { Metadata } from "next";
import { ContentPulseProvider, SmartChatAgent } from 'contentpulse-chat-sdk';







export const metadata: Metadata = {
  title: "Home | PropertyPulse - Find Your Dream Property in Mumbai",
  description: "PropertyPulse is Mumbai's premier real estate platform. Browse luxury apartments, villas, penthouses and commercial properties.",
};

export default async function Home() {
  // Fetch featured properties (first 6)
  const allProperties = await PropertyService.getAllProperties();
  const featuredProperties = allProperties.slice(0, 6);
  console.log(featuredProperties);

  
  // Fetch agents (first 4 for homepage)
  const allAgents = await AgentService.getAllAgents();
  const featuredAgents = allAgents.slice(0, 4);

  // Fetch featured blog posts (first 3 for homepage)
  const allBlogPosts = await BlogService.getAllBlogPosts();
  const featuredBlogPosts = allBlogPosts.slice(0, 3);

  // Fetch testimonials (first 3 for homepage)
  const allTestimonials = await TestimonialService.getAllTestimonials();
  const featuredTestimonials = allTestimonials.slice(0, 3);

  return (
    <>
      <Header />

      <ContentPulseProvider
      agentId="68cc32341ae74bab9671ad5a"
      apiBaseUrl="http://localhost:8000"
      darkMode={true}
       // Enable lead capture
       enableLeadCapture={true}
      
       // Configure lead capture settings
       leadCaptureSettings={{
         messageThreshold: 1, // Show call prompt after 2 messages
         enableCallPrompts: true,
         callPromptMessage: "Would you like to speak with our team?",
         dataFields: {
           phone: true, // Required for calls
         },
       }}
      visualConfig={{
        // Trigger button (the chat opener)
        trigger: {
          backgroundColor: '#007bff',
          size: 'large',
          icon: '💬', // Chat bubble emoji
        },
        
        // Chat window
        window: {
          width: '450px',
          backgroundColor: '#ffffff',
        },
        
        // Header styling
        header: {
          backgroundColor: '#007bff',
          textColor: '#ffffff',
        },
        
        // Send button configuration
        sendButton: {
          backgroundColor: '#007bff',
          hoverBackgroundColor: '#0056b3',
          textColor: '#ffffff',
          size: '44px',
          icon: '➤', // Arrow emoji as fallback
        },
        
        // Message styling
        userMessage: {
          backgroundColor: '#007bff',
          textColor: '#ffffff',
        },
        assistantMessage: {
          backgroundColor: '#f8f9fa',
          textColor: '#212529',
        },
      }}
    >
      <SmartChatAgent 
        apiKey="blt299817f8cfd244c4"
        title="PropertyPulse Assistant"
        subtitle="Powered by ContentPulse"
        placeholder="Ask me anything..."
        welcomeMessage="Hello! I'm your property assistant. How can I help?"
      />
    </ContentPulseProvider>


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

        {/* Featured Agents Section */}
        <div className="bg-white">
          <MainContainer>
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-heading">
                  Meet Our Expert Agents
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Our experienced professionals are here to guide you through every step of your property journey
                </p>
              </div>
              
              <AgentGrid agents={featuredAgents} />
              
              {featuredAgents.length > 0 && (
                <div className="text-center mt-12">
                  <Link
                    href="/agents"
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-medium hover:shadow-large"
                  >
                    View All Agents
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </section>
          </MainContainer>
        </div>

        {/* Featured Blog Posts Section */}
        <div className="bg-neutral-50">
          <MainContainer>
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-heading">
                  Latest Insights
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Stay updated with the latest trends and insights in Mumbai&apos;s real estate market
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredBlogPosts.map((post) => (
                  <article key={post.uid} className="bg-white rounded-xl shadow-medium hover:shadow-large transition-all duration-200 overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.featured_image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                        <span>{post.author_name}</span>
                        <span>•</span>
                        <span>{post.read_time} min read</span>
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                      >
                        Read More
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {featuredBlogPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Link
                    href="/blog"
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-medium hover:shadow-large"
                  >
                    View All Articles
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </section>
          </MainContainer>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white">
          <MainContainer>
            <section className="py-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-heading">
                  What Our Clients Say
                </h2>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                  Don&apos;t just take our word for it - hear from our satisfied clients
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTestimonials.map((testimonial) => (
                  <div key={testimonial.uid} className="bg-neutral-50 p-8 rounded-xl">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < parseInt(testimonial.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-neutral-700 mb-6 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                        <p className="text-sm text-neutral-600">{testimonial.location}</p>
                        {testimonial.role && (
                          <p className="text-sm text-neutral-500">{testimonial.role}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

      
      {/* PropertyPulse Chat Assistant */}
      
    </>
  );
}
