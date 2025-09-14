'use client';

import dynamic from "next/dynamic";
import "@contentpulse/widget/styles";

// Import types from ContentPulse package
import type { ChatMessage } from "@contentpulse/widget";

// Dynamically import the ContentPulse widget
const ContentPulseWidget = dynamic(
  () => import("@contentpulse/widget").then(mod => mod.ContentPulseWidget),
  { 
    ssr: false,
    loading: () => (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-pulse">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>
    )
  }
);

interface PropertyChatWidgetProps {
  apiKey?: string;
  deliveryToken?: string;
  environment?: string;
  openaiApiKey?: string;
}

export default function PropertyChatWidget({ 
  apiKey = process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
  deliveryToken = process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
  environment = process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || 'development',
  openaiApiKey = process.env.NEXT_PUBLIC_LLM_API_KEY
}: PropertyChatWidgetProps) {
  // Use manual configuration since AutoContentPulseWidget has configuration issues
  // This ensures the widget works with the environment variables we set up

  // Show configuration status
  if (!apiKey) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg" title="PropertyPulse Assistant needs configuration">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
      </div>
    );
  }

  console.log('PropertyPulse Widget Config:', { apiKey: apiKey?.substring(0, 10) + '...', deliveryToken: deliveryToken?.substring(0, 10) + '...', environment, openaiApiKey: openaiApiKey ? 'SET' : 'NOT SET' });

  // Manual configuration for PropertyPulse following installation guide best practices
  const config = {
    contentstack: {
      apiKey,
      deliveryToken,
      environment,
      region: 'eu' as const
    },
    llm: {
      provider: 'openai' as const,
      apiKey: openaiApiKey || 'placeholder',
      model: 'gpt-4'
    },
    widget: {
      welcomeMessage: "Hi! I'm your PropertyPulse assistant. I can help you find the perfect property in Mumbai. What type of property are you looking for?",
      position: 'bottom-right' as const,
      primaryColor: '#3B82F6'
    },
    personality: 'professional',
    enableMCP: true,
    enableLogging: true
  };

  return (
    <ContentPulseWidget 
      {...config}
      onMessageSent={(message: ChatMessage) => {
        console.log('PropertyPulse - User sent:', message.content);
        // Track user interactions
        if (typeof window !== 'undefined' && 'gtag' in window) {
          (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'chat_message_sent', {
            custom_parameter: 'propertypulse_chat',
            message_length: message.content.length
          });
        }
      }}
      onMessageReceived={(message: ChatMessage) => {
        console.log('PropertyPulse - AI responded:', message.content);
        // Track AI responses
      }}
      onError={(error: Error) => {
        console.error('PropertyPulse - Widget error:', error);
        // Handle errors gracefully
      }}
    />
  );
}
