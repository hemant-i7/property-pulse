'use client';

import { Agent } from '@/types/agent';
import Image from 'next/image';
import { useState } from 'react';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleContactClick = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      window.open(`tel:${agent.phone}`, '_self');
    } else {
      window.open(`mailto:${agent.email}`, '_self');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden group">
      {/* Profile Image */}
      <div className="relative h-64 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={agent.profile_image}
            alt={`${agent.title} profile`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
            <div className="text-6xl text-primary-600 font-bold">
              {agent.title.split(' ').map(name => name[0]).join('')}
            </div>
          </div>
        )}
        
        {/* Experience Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-neutral-800">
          {agent.experience_years} years
        </div>
      </div>

      {/* Agent Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-2 font-heading">
          {agent.title}
        </h3>
        
        <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
          {agent.specialization}
        </p>

        {/* Contact Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => handleContactClick('phone')}
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </button>
          
          <button
            onClick={() => handleContactClick('email')}
            className="flex-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </button>
        </div>
      </div>
    </div>
  );
}
