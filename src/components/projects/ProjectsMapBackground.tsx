'use client';

import React from 'react';
import { UAE_MAP_DATA } from './uaeMapData';

export const ProjectsMapBackground: React.FC = () => {
  const { uaePath, omnPath, sauPath, qatPath, abuDhabi, dubai } = UAE_MAP_DATA;

  // Grid line definitions across the 900x700 coordinate system
  const gridLats = [
    { label: "23°00' N", y: 595 },
    { label: "24°00' N", y: 420 },
    { label: "25°00' N", y: 245 },
    { label: "26°00' N", y: 70 },
  ];

  const gridLons = [
    { label: "52°00' E", x: 133 },
    { label: "53°00' E", x: 300 },
    { label: "54°00' E", x: 467 },
    { label: "55°00' E", x: 633 },
    { label: "56°00' E", x: 800 },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 right-0 w-full lg:w-[65%] xl:w-[58%] h-full pointer-events-none select-none overflow-hidden"
      style={{
        maskImage:
          'radial-gradient(ellipse 95% 90% at 75% 45%, black 40%, rgba(0,0,0,0.5) 65%, transparent 88%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 95% 90% at 75% 45%, black 40%, rgba(0,0,0,0.5) 65%, transparent 88%)',
      }}
    >
      <svg
        viewBox="0 0 900 700"
        className="w-full h-full object-cover sm:object-contain object-right-top opacity-90 dark:opacity-80 transition-opacity"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Halftone Dot Pattern for Interior Land Shading */}
          <pattern id="landHatch" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.75" className="fill-[var(--border)]" opacity="0.6" />
          </pattern>

          {/* Topographic Linear Gradient */}
          <linearGradient id="uaeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--surface-2)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--card)" stopOpacity="0.4" />
          </linearGradient>

          {/* Mask for UAE territory */}
          <mask id="uaeOnlyMask">
            <path d={uaePath} fill="white" />
          </mask>
        </defs>

        {/* 1. Engineering Coordinate Grid Lines */}
        <g className="grid-lines" stroke="var(--border)" strokeWidth="0.75" opacity="0.45">
          {/* Latitude Lines */}
          {gridLats.map((lat, idx) => (
            <line
              key={`lat-${idx}`}
              x1="60"
              y1={lat.y}
              x2="880"
              y2={lat.y}
              strokeDasharray="2 4"
            />
          ))}

          {/* Longitude Lines */}
          {gridLons.map((lon, idx) => (
            <line
              key={`lon-${idx}`}
              x1={lon.x}
              y1="40"
              x2={lon.x}
              y2="660"
              strokeDasharray="2 4"
            />
          ))}

          {/* Grid Intersections Crosshairs */}
          {gridLats.map((lat, li) =>
            gridLons.map((lon, lo) => (
              <g key={`cross-${li}-${lo}`} transform={`translate(${lon.x}, ${lat.y})`}>
                <line x1="-4" y1="0" x2="4" y2="0" stroke="var(--border)" strokeWidth="1" />
                <line x1="0" y1="-4" x2="0" y2="4" stroke="var(--border)" strokeWidth="1" />
              </g>
            ))
          )}
        </g>

        {/* 2. Coordinate Grid Labels */}
        <g className="grid-labels fill-[var(--text-2)] font-mono text-[8px] opacity-60">
          {gridLats.map((lat, idx) => (
            <text key={`lat-lbl-${idx}`} x="70" y={lat.y - 4} textAnchor="start">
              {lat.label}
            </text>
          ))}
          {gridLons.map((lon, idx) => (
            <text key={`lon-lbl-${idx}`} x={lon.x + 4} y="55" textAnchor="start">
              {lon.label}
            </text>
          ))}
        </g>

        {/* 3. Surrounding Neighboring Lands (Muted Context) */}
        {sauPath && (
          <path
            d={sauPath}
            fill="var(--surface-2)"
            fillOpacity="0.2"
            stroke="var(--border)"
            strokeWidth="0.6"
            strokeDasharray="4 2"
            opacity="0.5"
          />
        )}
        {omnPath && (
          <path
            d={omnPath}
            fill="var(--surface-2)"
            fillOpacity="0.25"
            stroke="var(--border)"
            strokeWidth="0.6"
            strokeDasharray="4 2"
            opacity="0.6"
          />
        )}
        {qatPath && (
          <path
            d={qatPath}
            fill="var(--surface-2)"
            fillOpacity="0.2"
            stroke="var(--border)"
            strokeWidth="0.6"
            opacity="0.5"
          />
        )}

        {/* 4. Arabian Gulf Subtle Bathymetry Ripples (Concentric Coastal Waves) */}
        <g stroke="var(--border)" strokeWidth="0.75" fill="none" opacity="0.35">
          <path
            d="M 120 400 Q 280 370 480 370 Q 640 260 760 110"
            strokeDasharray="1 3"
          />
          <path
            d="M 100 380 Q 270 350 470 350 Q 630 240 750 90"
            strokeDasharray="1 4"
            opacity="0.6"
          />
          <path
            d="M 90 360 Q 260 330 460 330 Q 620 220 740 70"
            strokeDasharray="1 5"
            opacity="0.4"
          />
        </g>

        {/* 5. Main UAE Landmass with Architectural Blueprint Styling */}
        {/* Shaded land fill */}
        <path
          d={uaePath}
          fill="url(#uaeGradient)"
          stroke="none"
        />

        {/* Delicate Dot Matrix Pattern within UAE border */}
        <rect
          x="0"
          y="0"
          width="900"
          height="700"
          fill="url(#landHatch)"
          mask="url(#uaeOnlyMask)"
        />

        {/* Precise Geographic Coastline & Border Outline */}
        <path
          d={uaePath}
          fill="none"
          stroke="var(--text-2)"
          strokeWidth="1.25"
          className="opacity-75 dark:opacity-65"
        />

        {/* Delicate Internal Border / Hajar Mountains Topographic Ridge Accent */}
        <g stroke="var(--border)" strokeWidth="0.8" fill="none" opacity="0.45">
          <path d="M 720 180 Q 755 240 765 320 Q 755 360 725 430" strokeDasharray="3 3" />
          <path d="M 735 190 Q 770 250 780 330 Q 770 370 740 440" strokeDasharray="2 4" />
        </g>

        {/* 6. Subtle Geographic Water & Territory Typography */}
        <text
          x="390"
          y="230"
          className="fill-[var(--text-2)] font-mono text-[10px] tracking-[0.25em] italic uppercase"
          opacity="0.5"
        >
          ARABIAN GULF
        </text>

        <text
          x="830"
          y="310"
          transform="rotate(40, 830, 310)"
          className="fill-[var(--text-2)] font-mono text-[9px] tracking-[0.2em] italic uppercase"
          opacity="0.45"
        >
          GULF OF OMAN
        </text>

        <text
          x="475"
          y="500"
          textAnchor="middle"
          className="fill-[var(--text-2)] font-mono text-[11px] font-bold tracking-[0.28em] uppercase"
          opacity="0.32"
        >
          UNITED ARAB EMIRATES
        </text>

        {/* 7. Dotted Red Route Connecting Abu Dhabi and Dubai */}
        <path
          d={`M ${abuDhabi.x} ${abuDhabi.y} Q 608 262 ${dubai.x} ${dubai.y}`}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
          className="opacity-80"
        />

        {/* 8. Location Marker: Abu Dhabi */}
        <g transform={`translate(${abuDhabi.x}, ${abuDhabi.y})`}>
          {/* Concentric Outer Circle */}
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            className="opacity-50"
          />
          {/* Subtle Halo */}
          <circle
            cx="0"
            cy="0"
            r="4.5"
            fill="var(--accent)"
            className="opacity-25"
          />
          {/* Core Red Marker Dot */}
          <circle
            cx="0"
            cy="0"
            r="3.2"
            fill="var(--accent)"
          />
          <circle
            cx="0"
            cy="0"
            r="1"
            fill="#FFFFFF"
          />

          {/* Label: Abu Dhabi */}
          <text
            x="0"
            y="21"
            textAnchor="middle"
            className="fill-[var(--text)] font-heading text-[11px] font-bold tracking-tight"
          >
            Abu Dhabi
          </text>
          {/* Coordinate Annotation */}
          <text
            x="0"
            y="31"
            textAnchor="middle"
            className="fill-[var(--text-2)] font-mono text-[7.5px] opacity-80"
          >
            24°28&apos; N • 54°22&apos; E
          </text>
        </g>

        {/* 9. Location Marker: Dubai */}
        <g transform={`translate(${dubai.x}, ${dubai.y})`}>
          {/* Concentric Outer Circle */}
          <circle
            cx="0"
            cy="0"
            r="8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            className="opacity-50"
          />
          {/* Subtle Halo */}
          <circle
            cx="0"
            cy="0"
            r="4.5"
            fill="var(--accent)"
            className="opacity-25"
          />
          {/* Core Red Marker Dot */}
          <circle
            cx="0"
            cy="0"
            r="3.2"
            fill="var(--accent)"
          />
          <circle
            cx="0"
            cy="0"
            r="1"
            fill="#FFFFFF"
          />

          {/* Label: Dubai */}
          <text
            x="13"
            y="0"
            textAnchor="start"
            className="fill-[var(--text)] font-heading text-[11px] font-bold tracking-tight"
          >
            Dubai
          </text>
          {/* Coordinate Annotation */}
          <text
            x="13"
            y="10"
            textAnchor="start"
            className="fill-[var(--text-2)] font-mono text-[7.5px] opacity-80"
          >
            25°12&apos; N • 55°17&apos; E
          </text>
        </g>

        {/* 10. Blueprint Technical Marginalia (Engineering Accent Details) */}
        <g className="fill-[var(--text-2)] font-mono text-[7px] opacity-45" transform="translate(680, 625)">
          <text x="0" y="0">GRID // WGS-84 ZONE 40N</text>
          <text x="0" y="10">SCALE // 1:2,500,000</text>
          <text x="0" y="20">SYS // SONIC TELEMETRY REF</text>
        </g>

        {/* North Arrow / Orientation Compass */}
        <g transform="translate(830, 85)" className="opacity-45">
          <line x1="0" y1="14" x2="0" y2="-10" stroke="var(--text-2)" strokeWidth="0.8" />
          <polygon points="0,-14 -3,-7 3,-7" fill="var(--text-2)" />
          <text x="0" y="-18" textAnchor="middle" className="fill-[var(--text-2)] font-mono text-[7.5px] font-bold">
            N
          </text>
        </g>
      </svg>
    </div>
  );
};
