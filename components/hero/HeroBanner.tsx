'use client';

import Image from 'next/image';
import HeroSearch from './HeroSearch';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showSearch?: boolean;
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage,
  showSearch = true,
}: HeroBannerProps) {
  const handleSearch = (searchParams: { location: string; type: string; priceRange: string }) => {
    // Construct the URL with search parameters
    const searchUrl = new URLSearchParams();
    if (searchParams.location) searchUrl.append('location', searchParams.location);
    if (searchParams.type) searchUrl.append('type', searchParams.type);
    if (searchParams.priceRange) searchUrl.append('price', searchParams.priceRange);
    
    // Navigate to properties page with search params
    window.location.href = `/properties?${searchUrl.toString()}`;
  };
  
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || '/hero-background.jpg'}
          alt="Mumbai skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
        
        {showSearch && (
          <div className="mt-8">
            <HeroSearch onSearch={handleSearch} />
          </div>
        )}
      </div>
    </div>
  );
}
