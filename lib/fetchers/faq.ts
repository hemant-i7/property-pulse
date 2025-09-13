/**
 * Mock API handlers for FAQs
 */

import { FAQ } from '@/types/faq';

// Mock FAQs data
const MOCK_FAQS: FAQ[] = [
  {
    id: '1',
    question: 'What services does PropertyPulse offer?',
    answer: 'PropertyPulse offers a comprehensive range of real estate services including property buying, selling, renting, and investment consultation. We also provide property valuation, legal assistance, and after-sales support.',
    category: 'general',
    order: 1,
  },
  {
    id: '2',
    question: 'How do I start searching for properties on PropertyPulse?',
    answer: 'You can start searching for properties by using our search filters on the homepage or the Properties page. Filter by location, property type, price range, and other amenities to find properties that match your requirements.',
    category: 'general',
    order: 2,
  },
  {
    id: '3',
    question: 'What documents do I need when buying a property?',
    answer: 'When buying a property, you\'ll need identification documents (PAN card, Aadhaar card), income proof (salary slips, ITR), bank statements, and address proof. For the property, check for the title deed, NOC from society, property tax receipts, and occupancy certificate.',
    category: 'buying',
    order: 1,
  },
  {
    id: '4',
    question: 'How long does the property buying process take?',
    answer: 'The property buying process in Mumbai typically takes 2-3 months from property selection to registration. This includes property selection, legal verification, loan approval (if required), agreement signing, and registration.',
    category: 'buying',
    order: 2,
  },
  {
    id: '5',
    question: 'What are the additional costs involved in buying a property?',
    answer: 'Besides the property cost, additional expenses include stamp duty (5-6% in Mumbai), registration fees (1%), GST (if applicable), society transfer charges, maintenance deposit, and legal fees. For loan customers, there are also processing fees and mortgage charges.',
    category: 'buying',
    order: 3,
  },
  {
    id: '6',
    question: 'How do I list my property for sale on PropertyPulse?',
    answer: 'To list your property for sale, contact our sales team through the "Contact Us" page or call our office directly. Our team will collect property details, arrange for professional photography, and create an attractive listing for your property.',
    category: 'selling',
    order: 1,
  },
  {
    id: '7',
    question: 'What commission does PropertyPulse charge for selling my property?',
    answer: 'PropertyPulse typically charges a commission of 1-2% of the total property value, depending on the property type and location. The exact commission structure will be discussed and agreed upon before signing the listing agreement.',
    category: 'selling',
    order: 2,
  },
  {
    id: '8',
    question: 'How does PropertyPulse determine the market value of my property?',
    answer: 'We determine property value through comprehensive market analysis, considering factors like location, size, age, amenities, recent transactions of similar properties, and current market trends. Our expert valuers conduct a detailed property inspection before providing a valuation.',
    category: 'selling',
    order: 3,
  },
  {
    id: '9',
    question: 'What are the typical rental terms in Mumbai?',
    answer: 'Standard rental agreements in Mumbai are typically for 11 months with an option to renew. Security deposits usually range from 2-3 months\' rent. Maintenance charges are either included in the rent or paid separately as per the agreement.',
    category: 'renting',
    order: 1,
  },
  {
    id: '10',
    question: 'Can PropertyPulse help with rental property management?',
    answer: 'Yes, PropertyPulse offers rental property management services including tenant finding, rent collection, property maintenance coordination, and periodic property inspections. We can create a customized management plan based on your specific requirements.',
    category: 'renting',
    order: 2,
  },
  {
    id: '11',
    question: 'What home loan options are available through PropertyPulse?',
    answer: 'While PropertyPulse is not a financial institution, we have partnerships with major banks and NBFCs to facilitate home loans for our clients. We can help you compare rates, understand eligibility criteria, and assist with the loan application process.',
    category: 'finance',
    order: 1,
  },
  {
    id: '12',
    question: 'What is the typical down payment required for property purchase?',
    answer: 'For residential properties, banks typically finance up to 75-90% of the property value, meaning you need to arrange 10-25% as down payment. For commercial properties, the down payment requirement is usually higher at 25-30% of the property value.',
    category: 'finance',
    order: 2,
  },
];

/**
 * Get all FAQs with optional category filtering
 */
export async function getFAQs(category?: string) {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let filteredFAQs = [...MOCK_FAQS];
  
  // Apply category filter if provided
  if (category && category !== 'all') {
    filteredFAQs = filteredFAQs.filter(faq => faq.category === category);
  }
  
  // Sort by category and then by order
  filteredFAQs.sort((a, b) => {
    // First sort by category
    if (a.category !== b.category) {
      return a.category.localeCompare(b.category);
    }
    // Then sort by order within the same category
    return a.order - b.order;
  });
  
  return filteredFAQs;
}

/**
 * Get FAQ categories
 */
export async function getFAQCategories() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return [
    { id: 'all', name: 'All FAQs' },
    { id: 'general', name: 'General' },
    { id: 'buying', name: 'Buying' },
    { id: 'selling', name: 'Selling' },
    { id: 'renting', name: 'Renting' },
    { id: 'finance', name: 'Financing' },
  ];
}
