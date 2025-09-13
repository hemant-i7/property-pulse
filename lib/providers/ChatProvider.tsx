'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import ChatWidget from '@/components/chat/ChatWidget';

interface ChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ 
  children,
  apiKey 
}: { 
  children: ReactNode;
  apiKey?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  
  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);
  const toggleChat = () => setIsOpen(prev => !prev);
  
  return (
    <ChatContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
      {children}
      <ChatWidget apiKey={apiKey} />
    </ChatContext.Provider>
  );
}

// Custom hook to use the chat context
export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
