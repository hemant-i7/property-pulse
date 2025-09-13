'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface Filters {
  location?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'date-desc' | 'date-asc';
}

type FilterValue = string | number | string[] | undefined;

interface FilterContextType {
  filters: Filters;
  setFilter: (key: keyof Filters, value: FilterValue) => void;
  resetFilters: () => void;
  clearFilter: (key: keyof Filters) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({});
  
  const setFilter = (key: keyof Filters, value: FilterValue) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const clearFilter = (key: keyof Filters) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  };
  
  const resetFilters = () => {
    setFilters({});
  };
  
  return (
    <FilterContext.Provider value={{ filters, setFilter, resetFilters, clearFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook to use the filter context
export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}
