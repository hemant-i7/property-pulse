import { useState, useEffect } from 'react';

type MediaQueryType = {
  [key: string]: boolean;
};

export function useMediaQuery(): MediaQueryType {
  const [mediaQueries, setMediaQueries] = useState<MediaQueryType>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
  });

  useEffect(() => {
    // Define the media queries
    const mediaQueryLists = {
      isMobile: window.matchMedia('(max-width: 639px)'),
      isTablet: window.matchMedia('(min-width: 640px) and (max-width: 1023px)'),
      isDesktop: window.matchMedia('(min-width: 1024px) and (max-width: 1279px)'),
      isLargeDesktop: window.matchMedia('(min-width: 1280px)'),
    };

    // Function to update state based on media queries
    const updateMediaQueries = () => {
      const updatedMediaQueries = {
        isMobile: mediaQueryLists.isMobile.matches,
        isTablet: mediaQueryLists.isTablet.matches,
        isDesktop: mediaQueryLists.isDesktop.matches,
        isLargeDesktop: mediaQueryLists.isLargeDesktop.matches,
      };
      setMediaQueries(updatedMediaQueries);
    };

    // Initial update
    updateMediaQueries();

    // Add event listeners for each media query
    Object.values(mediaQueryLists).forEach(mql => {
      mql.addEventListener('change', updateMediaQueries);
    });

    // Cleanup
    return () => {
      Object.values(mediaQueryLists).forEach(mql => {
        mql.removeEventListener('change', updateMediaQueries);
      });
    };
  }, []);

  return mediaQueries;
}
