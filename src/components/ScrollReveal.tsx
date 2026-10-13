'use client';

import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            node.classList.add('revealed');
          }, delay);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const variantClass =
    variant === 'left'
      ? 'reveal-left'
      : variant === 'right'
      ? 'reveal-right'
      : variant === 'scale'
      ? 'reveal-scale'
      : 'reveal';

  return (
    <div ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
};
