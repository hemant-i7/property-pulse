'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  
  // Function to set theme and update localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (newTheme !== 'system') {
      localStorage.setItem('theme', newTheme);
    } else {
      localStorage.removeItem('theme');
    }
  };
  
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
    
    // Set up a media query to detect OS theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to update the DOM based on current theme
    const updateTheme = () => {
      const resolvedTheme = theme === 'system' 
        ? (mediaQuery.matches ? 'dark' : 'light')
        : theme;
        
      document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
      
      // Optional: update meta theme-color for mobile browsers
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        'content',
        resolvedTheme === 'dark' ? '#0a0a0a' : '#ffffff'
      );
    };
    
    // Initial theme application
    updateTheme();
    
    // Listen for changes in OS theme preference
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
