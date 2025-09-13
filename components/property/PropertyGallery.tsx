'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

export default function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0] || '/placeholder-property.jpg');
  
  return (
    <div className="mb-6">
      <div className="aspect-[16/9] relative rounded-lg overflow-hidden mb-2">
        <Image
          src={mainImage}
          alt={`${title} main view`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
          className="object-cover"
        />
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {images.slice(0, 5).map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative aspect-[4/3] rounded overflow-hidden ${mainImage === image ? 'ring-2 ring-primary' : ''}`}
          >
            <Image
              src={image}
              alt={`${title} view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
