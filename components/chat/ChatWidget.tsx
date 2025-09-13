'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ChatWidgetProps {
  apiKey?: string;
}

export default function ChatWidget({ apiKey }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Only run on client side
    setMounted(true);
    
    // Expose a global method to open/close the chat
    if (typeof window !== 'undefined') {
      (window as typeof window & { chat?: { open: () => void; close: () => void; toggle: () => void } }).chat = {
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        toggle: () => setIsOpen(prev => !prev)
      };
    }
    
    // Initialize ContentPulse SDK here (if available)
    // This is a placeholder for the actual SDK integration
    console.log('ContentPulse SDK initialized with API key:', apiKey);
    
    return () => {
      // Cleanup
      if (typeof window !== 'undefined') {
        (window as typeof window & { chat?: { open: () => void; close: () => void; toggle: () => void } }).chat = undefined;
      }
    };
  }, [apiKey]);
  
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };
  
  if (!mounted) return null;
  
  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-chat bg-primary hover:bg-primary-hover text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? '✕' : '💬'}
      </button>
      
      {/* Chat window portal */}
      {isOpen && createPortal(
        <div className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-bg-elevated rounded-lg shadow-xl border border-border z-chat overflow-hidden flex flex-col">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-medium">Chat with PropertyPulse</h3>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-accent"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto">
            <div className="mb-4 bg-bg-alt p-3 rounded-lg max-w-[80%]">
              <p>👋 Hello! How can I help you find your dream property today?</p>
            </div>
            
            {/* More messages would appear here */}
          </div>
          
          <div className="border-t border-border p-3">
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow p-2 border border-border rounded-md"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white px-4 rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
