import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

export default function MainContainer({ children, className = '' }: MainContainerProps) {
  return (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
