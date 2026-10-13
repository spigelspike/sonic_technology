'use client';

import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const current = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' | null;
      if (current === 'dark' || current === 'light') {
        setTheme(current);
        document.documentElement.classList.toggle('dark', current === 'dark');
      } else {
        const stored = localStorage.getItem('sonic_theme') as 'light' | 'dark' | null;
        if (stored) {
          setTheme(stored);
          document.documentElement.setAttribute('data-theme', stored);
          document.documentElement.classList.toggle('dark', stored === 'dark');
        }
      }
    } catch {
      // localStorage unavailable (e.g. privacy mode)
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      document.documentElement.setAttribute('data-theme', nextTheme);
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      localStorage.setItem('sonic_theme', nextTheme);
      
      // Update theme-color meta tag
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', nextTheme === 'light' ? '#F7F7F5' : '#090A0C');
      }
    } catch {
      // localStorage error fallback
    }
  };

  const actionLabel = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={actionLabel}
      title={actionLabel}
      className="inline-flex items-center justify-center w-11 h-11 rounded-[4px] border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:border-[var(--text-2)] hover:bg-[var(--surface-2)] focus-visible:outline-2 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-2 transition-colors cursor-pointer"
    >
      {/* Sun Icon (shown when dark to switch to light) */}
      <svg
        className={`w-5 h-5 ${mounted && theme === 'dark' ? 'block' : 'hidden'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>

      {/* Moon Icon (shown when light to switch to dark) */}
      <svg
        className={`w-5 h-5 ${!mounted || theme === 'light' ? 'block' : 'hidden'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>
  );
};
