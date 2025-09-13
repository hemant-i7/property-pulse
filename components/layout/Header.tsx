'use client';

import Link from 'next/link';
import MainContainer from './MainContainer';
import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  const toggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full border px-3 py-2 text-xs font-medium hover:bg-background-subtle"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
}

export default function Header() {
  return (
    <header className="py-4 border-b border-border">
      <MainContainer>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">
            PropertyPulse
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/properties" className="hover:text-primary">
              Properties
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="rounded-full bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary-hover"
            >
              Chat with Agent
            </button>
          </div>
        </div>
      </MainContainer>
    </header>
  );
}
