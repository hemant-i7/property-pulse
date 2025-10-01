import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ContentPulseProvider, SmartChatAgent } from 'contentpulse-chat-sdk';



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "PropertyPulse | Premium Real Estate in Mumbai",
  description: "Find your dream property in Mumbai with PropertyPulse - luxury apartments, villas, penthouses, and commercial spaces at the best prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased bg-neutral-50 text-neutral-900`}

>  

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
        
        
        // Send button configuration
        sendButton: {
          backgroundColor: '#007bff',
          hoverBackgroundColor: '#0056b3',
          textColor: '#ffffff',
          size: '44px',
          icon: '➤', // Arrow emoji as fallback
        },
        
        // Message styling
       
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

        {children}
      </body>
      
    </html>
  );
}
