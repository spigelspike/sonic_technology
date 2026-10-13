'use client';

import React from 'react';

/**
 * ProjectTitleDots
 * Clean, high-density architectural engineering dot matrix
 * strictly localized to the project title background area.
 * Zero blurry red fade / artificial glows — pure precision CAD grid aesthetic.
 */
export const ProjectTitleDots: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-0 w-full lg:w-[62%] h-full pointer-events-none select-none overflow-hidden z-0"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* High-density architectural dot matrix: 14px pitch with crisp 1.1px dots */}
          <pattern
            id="denseCadDots"
            x="0"
            y="0"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.1"
              className="fill-[var(--text)] opacity-25 dark:opacity-30"
            />
          </pattern>

          {/* Smooth boundary fade so dots softly dissolve towards the map and bottom border */}
          <radialGradient id="denseDotsZoneMask" cx="20%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="45%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#fff" stopOpacity="0.45" />
            <stop offset="95%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>

          <mask id="titleAreaMask">
            <rect width="100%" height="100%" fill="url(#denseDotsZoneMask)" />
          </mask>
        </defs>

        {/* High-density architectural dots */}
        <rect
          width="100%"
          height="100%"
          fill="url(#denseCadDots)"
          mask="url(#titleAreaMask)"
        />

        {/* Subtle engineering corner registration marks */}
        <g className="stroke-[var(--text-2)] opacity-35" strokeWidth="0.8">
          <g transform="translate(24, 24)">
            <line x1="-5" y1="0" x2="5" y2="0" />
            <line x1="0" y1="-5" x2="0" y2="5" />
          </g>
          <g transform="translate(24, 320)">
            <line x1="-5" y1="0" x2="5" y2="0" />
            <line x1="0" y1="-5" x2="0" y2="5" />
          </g>
        </g>
      </svg>
    </div>
  );
};
