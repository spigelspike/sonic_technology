export interface ProjectItem {
  id: string;
  name: string;
  city: 'Abu Dhabi' | 'Dubai';
  category: 'Hospitality' | 'Commercial' | 'Infrastructure';
  image: string;
  scope: string;
  systems: string[];
  sensorsCount: number;
  highlight: string;
}

export interface GasDetectorSpec {
  formula: string;
  commonName: string;
  casNumber: string;
  measurementRange: string;
  hiAlarm: string;
  hiHiAlarm: string;
  recommendedDetector: string;
  technology: 'Open-Path Laser' | 'Catalytic Bead / MOS' | 'Electrochemical';
  typicalApplications: string;
}

export interface HardwareItem {
  id: string;
  title: string;
  subtitle: string;
  model: string;
  origin: string;
  summary: string;
  specs: { label: string; value: string }[];
  keyFeatures: string[];
  badge?: string;
}

export const PARTNERS = [
  { name: 'LS Electric', role: 'Global Industrial Power & Automation', logo: 'LS Electric' },
  { name: 'Boreal Laser', role: 'Open-Path Laser Gas Detection Pioneer', logo: 'Boreal Laser' },
  { name: 'Al Fanar', role: 'Electrical & Systems Engineering', logo: 'Al Fanar' },
  { name: 'JINU', role: 'Industrial Sensors & Microelectronics', logo: 'JINU' },
  { name: 'EHC', role: 'Industrial Equipment & Controls', logo: 'EHC' },
  { name: 'Hiteks', role: 'Precision Instrumentation', logo: 'Hiteks' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'etihad-towers',
    name: 'Etihad Towers',
    city: 'Abu Dhabi',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    scope: 'Multi-tower Addressable Gas Detection & Central SCADA Loop',
    systems: ['FPGA Central Panel', 'Addressable Gas Sensors', 'Emergency Solenoid Interlock', 'SCADA Supervisory'],
    sensorsCount: 284,
    highlight: 'Continuous gas monitoring across 5 towers with automated isolation zones',
  },
  {
    id: 'royal-atlantis',
    name: 'The Royal Atlantis Resort',
    city: 'Dubai',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1200&auto=format&fit=crop',
    scope: 'High-Density Kitchen LPG Detection & Multi-Zone Fire Safety',
    systems: ['Pipe-in-Pipe LPG Detectors', 'Buzzer Warning Relays', 'Central BMS Integration', 'Dual 4-20mA Loops'],
    sensorsCount: 420,
    highlight: 'Sub-second LPG leak isolation safeguarding ultra-luxury culinary venues',
  },
  {
    id: 'waldorf-astoria',
    name: 'Waldorf Astoria Palm Jumeirah',
    city: 'Dubai',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    scope: 'Integrated Life Safety, Gas Transmitters & Alarm Terminals',
    systems: ['Wall-Mount Detectors', 'RS485 Modbus Network', 'Supervisory Alert Engine'],
    sensorsCount: 160,
    highlight: 'Full perimeter gas supervision with 24/7 cloud logging',
  },
  {
    id: 'yas-rotana',
    name: 'Yas Island Rotana',
    city: 'Abu Dhabi',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
    scope: 'Thermal Unit RTU Supervisory & Kitchen Gas Alarm Systems',
    systems: ['Conventional Gas Panels', 'Remote Thermal Units', 'Audio-Visual Sounders'],
    sensorsCount: 112,
    highlight: 'Integrated hospitality safety network with zero nuisance alarms',
  },
  {
    id: 'rosewood-ad',
    name: 'Rosewood Abu Dhabi',
    city: 'Abu Dhabi',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
    scope: 'Precision Gas Monitoring & Mechanical Room Supervised Control',
    systems: ['FPGA Gas Loops', 'SCADA Real-time Telemetry', 'Automatic Interlocks'],
    sensorsCount: 144,
    highlight: 'Al Maryah Island luxury destination protected by Sonic fail-safe architecture',
  },
  {
    id: 'one-central-dwtc',
    name: 'One Central — DWTC',
    city: 'Dubai',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    scope: 'District Commercial Energy SCADA & Flammable Gas Surveillance',
    systems: ['Industrial Control Panels', 'Fiber Optic SCADA', 'High-speed RTU Units'],
    sensorsCount: 310,
    highlight: 'District-scale industrial automation powering Dubai World Trade Centre zone',
  },
  {
    id: 'park-point-emaar',
    name: 'Park Point by Emaar',
    city: 'Dubai',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    scope: 'Residential Gas Detection & Central Alarm Distribution',
    systems: ['Wall Mount LPG Transmitters', 'RS485 Bus', 'Central Alarm Hub'],
    sensorsCount: 195,
    highlight: 'Community-wide safety telemetry integrated into master facility controls',
  },
  {
    id: 'corniche-towers',
    name: 'Corniche Towers',
    city: 'Abu Dhabi',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop',
    scope: 'Addressable Gas & Fire Defense Infrastructure',
    systems: ['Multi-Spectrum Detectors', 'SCADA Edge Logging', 'Dual Redundant Loops'],
    sensorsCount: 220,
    highlight: 'High-rise waterfront monitoring engineered for humid marine environments',
  },
];

export const HARDWARE_PRODUCTS: HardwareItem[] = [
  {
    id: 'laser-gas-finder',
    title: 'GasFinder — Line of Sight (LoS)',
    subtitle: 'Open-Path Laser-Based Optical Gas Detector',
    model: 'Boreal GasFinder-LoS (Sonic Engineered)',
    origin: 'Partnership with Boreal Laser Inc.',
    summary: 'Military-grade optical spectroscopy detecting toxic and combustible gas plumes across path lengths up to 500 meters in under 1 second.',
    badge: 'Flagship Optical Sensor',
    specs: [
      { label: 'Response Time', value: '< 1.0 Second' },
      { label: 'Path Length', value: '5 m to 500+ m' },
      { label: 'Cross Sensitivity', value: 'Zero (No interference from solar/steam)' },
      { label: 'Calibration', value: 'Internal reference cell (No bump tests required)' },
      { label: 'Outputs', value: 'Dual 4-20 mA, Modbus RS485 / Ethernet TCP' },
      { label: 'Operating Temp', value: '-55°C to +65°C (Extreme UAE Desert Rated)' },
    ],
    keyFeatures: [
      'Continuous line-of-sight monitoring for large open process units',
      'True failsafe operation with continuous optical beam health check',
      'Immune to sensor poisoning, moisture saturation, and catalytic fatigue',
      'Integrated optical alignment scope for rapid field commissioning',
    ],
  },
  {
    id: 'pipe-in-pipe',
    title: 'Pipe-In-Pipe Gas Detector-Transmitter',
    subtitle: 'Specialized Fuel & LPG Annular Space Gas Monitoring',
    model: 'SONIC-ADD-MC2 / JINU-SONIC-ADD-MC',
    origin: 'Manufactured in the UAE',
    summary: 'Engineered specifically for interstitial double-wall gas pipelines. Detects fuel gas migration before pressure vessels or utility chases are compromised.',
    badge: 'Made in UAE',
    specs: [
      { label: 'Target Gases', value: 'LPG, Propane, Butane, Methane, Hydrogen' },
      { label: 'Detection Range', value: '0 ... 100% LEL' },
      { label: 'Process Connection', value: 'NPT 3/4" Male Threaded' },
      { label: 'Electrical Interface', value: 'Two analog outputs: 4-20 mA or 0-10 V' },
      { label: 'Digital Interface', value: 'RS485 Modbus RTU Slave' },
      { label: 'Alerting Options', value: 'Dual dry-contact relays + 85 dB audible buzzer' },
    ],
    keyFeatures: [
      'Engineered and manufactured locally in the UAE for extreme conditions',
      'Sealed IP65 housing prevents external contaminant ingress into sensor cell',
      'Direct pipeline pipe-in-pipe coupling without flow-restricting adapters',
      'Optional 72x36 mm high-contrast LCD with self-test diagnostics push-button',
    ],
  },
  {
    id: 'wall-mount-e2638',
    title: 'Wall-Mount Multi-Gas Detector',
    subtitle: 'Industrial Plant & Commercial Boiler Room Gas Sentinel',
    model: 'E2638 Series (Sonic Advanced Edition)',
    origin: 'Manufactured in the UAE',
    summary: 'Heavy-duty wall-mounted transmitter designed for commercial kitchens, underground parking, boiler rooms, and chemical storage facilities.',
    badge: 'IP65 Heavy Duty',
    specs: [
      { label: 'Sensor Chemistries', value: 'Pellistor (Catalytic Bead) / MOS / Electrochemical' },
      { label: 'Enclosure Rating', value: 'IP65 Polycarbonate with Flame-Retardant UL94-V0' },
      { label: 'Dimensions', value: 'H90 × W145 × D50 mm (Compact Footprint)' },
      { label: 'Analog Signals', value: 'User-selectable 4-20 mA or 0-10 V' },
      { label: 'Digital Bus', value: 'RS485 Modbus RTU (Up to 128 devices on single trunk)' },
      { label: 'Relay Ratings', value: '2 × SPST relays (250 VAC / 30 VDC, 5A)' },
    ],
    keyFeatures: [
      'Plug-and-play field calibrated sensor modules for rapid 5-minute swapout',
      'Visual red/green dual-status LED indicators visible from 20 meters',
      'Direct control of exhaust fans and emergency shutoff valves without external PLC',
      'Full compliance with UAE Civil Defence life-safety fire safety codes',
    ],
  },
  {
    id: 'fpga-scada-panels',
    title: 'FPGA Firmware & Central SCADA RTUs',
    subtitle: 'Hardware-Deterministic Safety Logic & Distributed Control',
    model: 'SONIC-CORE RTU-8000',
    origin: 'Proprietary Sonic Technologies IP',
    summary: 'Proprietary hardware control panels running customized FPGA embedded gate-arrays for true deterministic sub-millisecond safety interlocks.',
    badge: 'Proprietary FPGA Engine',
    specs: [
      { label: 'Processing Core', value: 'Xilinx/Altera FPGA Embedded Fabric' },
      { label: 'Loop Capacity', value: 'Up to 16 addressable gas/fire loops (4,096 points)' },
      { label: 'Deterministic Cycle', value: '< 15 ms full loop evaluation' },
      { label: 'Communication', value: 'Modbus TCP, BACnet/IP, DNP3, IEC 60870-5-104' },
      { label: 'Backup Power', value: 'Redundant 24VDC battery management system with 72h standby' },
      { label: 'Supervision', value: 'Autonomous Edge AI Agent monitoring loop integrity' },
    ],
    keyFeatures: [
      'Eliminates OS crash vulnerabilities through pure hardware-level gate logic',
      'Integrated Remote Thermal Unit (RTU) functions for SCADA telemetry',
      'Real-time automated logging of all sensor drifts, calibrations, and alarms',
      'Engineered for mission-critical airports, high-rise buildings, and oil & gas facilities',
    ],
  },
];

export const GAS_SPECS: GasDetectorSpec[] = [
  {
    formula: 'CH4',
    commonName: 'Methane (Natural Gas)',
    casNumber: '74-82-8',
    measurementRange: '0 – 100% LEL (or 100 – 500,000 ppm-m)',
    hiAlarm: '10% LEL (1.0 LEL-m)',
    hiHiAlarm: '20% LEL (3.0 LEL-m)',
    recommendedDetector: 'GasFinder-LoS (Open-Path) or Pipe-in-Pipe MC2',
    technology: 'Open-Path Laser',
    typicalApplications: 'LNG Terminals, Gas Metering Skids, Building Risers, Turbine Enclosures',
  },
  {
    formula: 'LPG',
    commonName: 'Liquefied Petroleum Gas (Propane/Butane)',
    casNumber: '68476-85-7',
    measurementRange: '0 – 100% LEL',
    hiAlarm: '10% LEL',
    hiHiAlarm: '20% LEL',
    recommendedDetector: 'SONIC-ADD-MC2 Pipe-in-Pipe or Wall-Mount E2638',
    technology: 'Catalytic Bead / MOS',
    typicalApplications: 'Hotel Commercial Kitchens, Residential Gas Risers, Bottling Plants',
  },
  {
    formula: 'H2S',
    commonName: 'Hydrogen Sulfide',
    casNumber: '7783-06-4',
    measurementRange: '0 – 100 ppm (or 100 – 100,000 ppm-m)',
    hiAlarm: '10 ppm',
    hiHiAlarm: '40 ppm',
    recommendedDetector: 'GasFinder-LoS Open-Path Laser or Toxic E2638',
    technology: 'Open-Path Laser',
    typicalApplications: 'Oil Refineries, Wastewater Treatment Plants, Crude Storage Tanks',
  },
  {
    formula: 'NH3',
    commonName: 'Ammonia (Refrigerant)',
    casNumber: '7664-41-7',
    measurementRange: '8 – 6,500 ppm-m (or 0 – 1,000 ppm)',
    hiAlarm: '25 ppm',
    hiHiAlarm: '50 ppm',
    recommendedDetector: 'GasFinder-LoS Optical or Wall-Mount Ammonia',
    technology: 'Open-Path Laser',
    typicalApplications: 'Industrial Cold Storage, Fertilizer Plants, HVAC Chiller Plants',
  },
  {
    formula: 'CO',
    commonName: 'Carbon Monoxide',
    casNumber: '630-08-0',
    measurementRange: '0 – 300 ppm (or 250 – 500,000 ppm-m)',
    hiAlarm: '50 ppm',
    hiHiAlarm: '100 ppm',
    recommendedDetector: 'Wall-Mount E2638-CO or GasFinder-LoS CO',
    technology: 'Electrochemical',
    typicalApplications: 'Enclosed Parking Garages, Boiler Rooms, Steel Manufacturing',
  },
  {
    formula: 'HF',
    commonName: 'Hydrogen Fluoride',
    casNumber: '7664-39-3',
    measurementRange: '0.4 – 250 ppm-m',
    hiAlarm: '3 ppm',
    hiHiAlarm: '9 ppm',
    recommendedDetector: 'GasFinder-LoS Open-Path Laser (Boreal Ultra-Sensitive)',
    technology: 'Open-Path Laser',
    typicalApplications: 'Alkylation Units, Semiconductor Fabrication, Chemical Refining',
  },
  {
    formula: 'CO2',
    commonName: 'Carbon Dioxide',
    casNumber: '124-38-9',
    measurementRange: '1,000 – 500,000 ppm-m',
    hiAlarm: '20,000 ppm (2% Vol)',
    hiHiAlarm: '30,000 ppm (3% Vol)',
    recommendedDetector: 'GasFinder-LoS Open Path Infrared / Optical',
    technology: 'Open-Path Laser',
    typicalApplications: 'Carbon Capture & Storage, Breweries, Enhanced Oil Recovery',
  },
];
