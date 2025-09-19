import MainContainer from "@/components/layout/MainContainer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AgentGrid from "@/components/agent/AgentGrid";
import { getAllAgents } from "@/lib/fetchers/agents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Agents | PropertyPulse - Expert Real Estate Agents in Mumbai",
  description: "Meet our team of experienced real estate agents in Mumbai. Get expert guidance for buying, selling, or renting properties.",
};

export default async function AgentsPage() {
  const agents = await getAllAgents();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
          <MainContainer>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                Meet Our Expert Agents
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Our experienced real estate professionals are here to help you find your dream property or sell your current home with confidence.
              </p>
            </div>
          </MainContainer>
        </section>

        {/* Agents Grid */}
        <section className="py-20 bg-neutral-50">
          <MainContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4 font-heading">
                Our Team of Professionals
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Each agent brings unique expertise and local market knowledge to help you make informed decisions.
              </p>
            </div>
            
            <AgentGrid agents={agents} />
          </MainContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <MainContainer>
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white p-12 md:p-16 rounded-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Ready to Work with Our Agents?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Contact any of our agents directly or let us connect you with the perfect professional for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-large hover:shadow-xl">
                  📞 Contact Us Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-semibold py-4 px-8 rounded-xl transition-all duration-200">
                  📧 Get Free Consultation
                </button>
              </div>
            </div>
          </MainContainer>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
