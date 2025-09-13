'use client';

import { useState } from 'react';

interface HeroSearchProps {
  onSearch: (searchParams: { location: string; type: string; priceRange: string }) => void;
}

export default function HeroSearch({ onSearch }: HeroSearchProps) {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ location, type, priceRange });
  };
  
  return (
    <div className="bg-background-elevated shadow-lg rounded-lg p-4 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium text-text-muted mb-1">
            Location
          </label>
          <select 
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-border rounded-md"
          >
            <option value="">Any Location</option>
            <option value="south-mumbai">South Mumbai</option>
            <option value="bandra">Bandra</option>
            <option value="andheri">Andheri</option>
            <option value="juhu">Juhu</option>
            <option value="powai">Powai</option>
          </select>
        </div>
        
        <div className="flex-1">
          <label htmlFor="type" className="block text-sm font-medium text-text-muted mb-1">
            Property Type
          </label>
          <select 
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 border border-border rounded-md"
          >
            <option value="">Any Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="penthouse">Penthouse</option>
            <option value="plot">Plot</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>
        
        <div className="flex-1">
          <label htmlFor="priceRange" className="block text-sm font-medium text-text-muted mb-1">
            Price Range
          </label>
          <select 
            id="priceRange"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full p-2 border border-border rounded-md"
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
            className="bg-primary hover:bg-primary-hover text-white font-medium py-2 px-6 rounded-md transition-colors h-[42px]"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
