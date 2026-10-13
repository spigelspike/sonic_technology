export interface TargetGasItem {
  id: string;
  formula: string;
  name: string;
  loRange: string;
  minimum?: string;
  hiAlarm: string;
  hiHiAlarm?: string;
  hazardType: 'Toxic' | 'Combustible' | 'Greenhouse' | 'Corrosive';
  typicalApplication: string;
}

export interface PathLengthItem {
  id: string;
  tier: string;
  opticsType: string;
  rangeMeters: string;
  rangeFeet: string;
  retroreflector: string;
  recommendedUse: string;
  alignmentTolerance: string;
}

export const TARGET_GASES: TargetGasItem[] = [
  {
    id: 'hf',
    formula: 'HF',
    name: 'Hydrogen Fluoride',
    loRange: '0.4 – 200 ppm-m',
    minimum: '4 ppm-m',
    hiAlarm: '4 ppm-m',
    hazardType: 'Toxic',
    typicalApplication: 'Alkylation Units, Semiconductor Fabrication, Chemical Refining',
  },
  {
    id: 'h2s',
    formula: 'H₂S',
    name: 'Hydrogen Sulfide',
    loRange: '120 – 100,000 ppm-m',
    hiAlarm: '10 ppm-m',
    hiHiAlarm: '40 ppm-m',
    hazardType: 'Toxic',
    typicalApplication: 'Sour Gas Processing, Oil Refineries, Wastewater Treatment, Desulfurization',
  },
  {
    id: 'nh3',
    formula: 'NH₃',
    name: 'Ammonia',
    loRange: '0 – 1,000 ppm-m',
    minimum: '4 ppm-m',
    hiAlarm: '20 ppm-m',
    hazardType: 'Toxic',
    typicalApplication: 'Industrial Refrigeration, Fertilizer Production, Cold Storage, SCR DeNOx',
  },
  {
    id: 'co2',
    formula: 'CO₂',
    name: 'Carbon Dioxide',
    loRange: '1,000 – 500,000 ppm-m',
    hiAlarm: '10,000 ppm-m',
    hiHiAlarm: '25,000 ppm-m',
    hazardType: 'Greenhouse',
    typicalApplication: 'Carbon Capture & Storage (CCS), Enhanced Oil Recovery, Breweries',
  },
  {
    id: 'co',
    formula: 'CO',
    name: 'Carbon Monoxide',
    loRange: '250 – 500,000 ppm-m',
    hiAlarm: '50 ppm-m',
    hiHiAlarm: '100 ppm-m',
    hazardType: 'Toxic',
    typicalApplication: 'Steel Manufacturing, Enclosed Loading Docks, Boiler Plants, Syngas Units',
  },
  {
    id: 'ch4',
    formula: 'CH₄',
    name: 'Methane',
    loRange: '0 – 1,000 ppm-m',
    hiAlarm: '1 LEL-m',
    hiHiAlarm: '3 LEL-m',
    hazardType: 'Combustible',
    typicalApplication: 'LNG Terminals, Wellheads, Gas Distribution Headers, Pipeline Compressor Stations',
  },
  {
    id: 'hcn',
    formula: 'HCN',
    name: 'Hydrogen Cyanide',
    loRange: '0 – 4,500 ppm-m',
    minimum: '4 ppm-m',
    hiAlarm: '10 ppm-m',
    hazardType: 'Toxic',
    typicalApplication: 'Plastics & Polymer Synthesis, Electroplating, Chemical Synthesis',
  },
  {
    id: 'hcl',
    formula: 'HCl',
    name: 'Hydrogen Chloride',
    loRange: '0 – 4,500 ppm-m',
    hiAlarm: '2 ppm-m',
    hiHiAlarm: '5 ppm-m',
    hazardType: 'Corrosive',
    typicalApplication: 'Chemical Processing, Semiconductor Etching, Steel Pickling Plants',
  },
  {
    id: 'c2h4',
    formula: 'C₂H₄',
    name: 'Ethylene',
    loRange: '0 – 5,000 ppm-m',
    hiAlarm: '20% LEL-m',
    hiHiAlarm: '60% LEL-m',
    hazardType: 'Combustible',
    typicalApplication: 'Petrochemical Steam Crackers, Polyethylene Plants, Fruit Ripening Chambers',
  },
];

export const PATH_LENGTHS: PathLengthItem[] = [
  {
    id: 'short-path',
    tier: 'Short-Path',
    opticsType: 'IMOS Internal Retro',
    rangeMeters: '5 – 20 m',
    rangeFeet: '15 – 65 ft',
    retroreflector: 'Single-Element IMOS Optical Array',
    recommendedUse: 'Indoor equipment bays, turbine enclosures, loading racks, and compact process skids.',
    alignmentTolerance: '± 1.5° wide-beam return tolerance',
  },
  {
    id: 'medium-path',
    tier: 'Medium-Path',
    opticsType: 'Mini Retroreflector',
    rangeMeters: '15 – 45 m',
    rangeFeet: '50 – 150 ft',
    retroreflector: 'Mini Multi-Facet Retroreflector',
    recommendedUse: 'Process compressor sheds, chemical manifold bays, pump stations, and pipe racks.',
    alignmentTolerance: '± 1.0° alignment cone',
  },
  {
    id: 'long-path',
    tier: 'Long-Path',
    opticsType: 'Cornercube Array',
    rangeMeters: '50 – 100 m',
    rangeFeet: '160 – 330 ft',
    retroreflector: 'Multi-Cornercube Reflective Enclosure',
    recommendedUse: 'Tank farm walkways, process plant boundaries, storage vessel perimeters, and jetty docks.',
    alignmentTolerance: '± 0.5° precision collimated beam',
  },
  {
    id: 'extra-long-path',
    tier: 'Extra Long-Path',
    opticsType: 'High-Density Cornercube Array',
    rangeMeters: '100 – 500 m',
    rangeFeet: '330 – 1640 ft',
    retroreflector: 'High-Density Sealed Cornercube Array',
    recommendedUse: 'Facility fence-line emission monitoring, refinery perimeter protection, and wide open-area leak curtains.',
    alignmentTolerance: '± 0.25° heavy-duty stable bracket mounting',
  },
];

export const INSTALLATION_STRATEGIES = [
  {
    id: 'prob-detection',
    number: '01',
    title: 'Increase Probability of Detection',
    summary: 'Line-of-sight and perimeter curtain strategies',
    description:
      'Open-path laser beams create a continuous optical detection curtain over wide areas. Unlike point detectors that require gas to reach a physical sensor body, open-path systems intercept dispersing gas plumes anywhere along the entire optical beam.',
  },
  {
    id: 'source-placement',
    number: '02',
    title: 'Detector Placement Relative to Source',
    summary: 'Multiple leak sources covered with a single path',
    description:
      'A single Boreal GasFinder-LoS optical path can span across dozens of potential leak sources—including flange gaskets, valve packings, pump seals, and compressor heads—eliminating the need for dozens of individual point detectors.',
  },
  {
    id: 'dispersion-movement',
    number: '03',
    title: 'Gas Dispersion & Meteorological Dynamics',
    summary: 'Air currents dictate plume trajectory and elevation',
    description:
      'Lighter-than-air gases (such as Methane) rise rapidly while heavier-than-air gases (such as H2S) hug the ground. Mounting heights between 2m and 4m capture the optimum dispersion envelope before dilution falls below measurable limits.',
  },
  {
    id: 'optical-clearance',
    number: '04',
    title: 'Clear Optical Line-of-Sight Protection',
    summary: 'Prevent transient vehicular and personnel beam blocks',
    description:
      'Elevating the beam path between 2m and 4m ensures full clearance above personnel, forklifts, and utility transport, maintaining uninterrupted optical beam transmission and continuous safety coverage.',
  },
];
