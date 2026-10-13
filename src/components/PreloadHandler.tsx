'use client';

import { useEffect } from 'react';

export function PreloadHandler() {
  useEffect(() => {
    // Remove preload class after hydration has completed to enable CSS transitions
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
