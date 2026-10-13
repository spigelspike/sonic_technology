export interface ProjectItem {
  id: string;
  name: string;
  city: 'Abu Dhabi' | 'Dubai';
  image: string;
}

export interface FieldPhotoItem {
  id: string;
  title: string;
  image: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

export const ABU_DHABI_PROJECTS: ProjectItem[] = [
  {
    id: 'corniche-towers',
    name: 'Corniche Towers',
    city: 'Abu Dhabi',
    image: '/assets/projects/CornicheTowersAD.avif',
  },
  {
    id: 'city-of-lights',
    name: 'City of Lights',
    city: 'Abu Dhabi',
    image: '/assets/projects/CityOfLights.avif',
  },
  {
    id: 'decovision',
    name: 'Decovision',
    city: 'Abu Dhabi',
    image: '/assets/projects/DecovisionAD.avif',
  },
  {
    id: 'etihad-towers',
    name: 'Etihad Towers',
    city: 'Abu Dhabi',
    image: '/assets/projects/EtihadTowersAD.avif',
  },
  {
    id: 'hilton-abu-dhabi',
    name: 'Hilton Abu Dhabi',
    city: 'Abu Dhabi',
    image: '/assets/projects/HiltonAbuDhabiAD.avif',
  },
  {
    id: 'le-meridien-abu-dhabi',
    name: 'Le Méridien Abu Dhabi',
    city: 'Abu Dhabi',
    image: '/assets/projects/LeMeridienAbuDhabiAD.avif',
  },
  {
    id: 'liwa-tower',
    name: 'Liwa Tower',
    city: 'Abu Dhabi',
    image: '/assets/projects/LiwaTowerAD.avif',
  },
  {
    id: 'yas-island-rotana',
    name: 'Yas Island Rotana',
    city: 'Abu Dhabi',
    image: '/assets/projects/YasIslandRotanaAD.avif',
  },
  {
    id: 'pizzaro',
    name: 'Pizzaro',
    city: 'Abu Dhabi',
    image: '/assets/projects/PizzaroAD.avif',
  },
  {
    id: 'robertos-abu-dhabi',
    name: "Roberto's",
    city: 'Abu Dhabi',
    image: "/assets/projects/Roberto'sAD.avif",
  },
  {
    id: 'punjab-grill',
    name: 'Punjab Grill',
    city: 'Abu Dhabi',
    image: '/assets/projects/PunjabGrillAD.avif',
  },
  {
    id: 'rosewood-abu-dhabi',
    name: 'Rosewood Abu Dhabi',
    city: 'Abu Dhabi',
    image: '/assets/projects/RosewoodAD.avif',
  },
  {
    id: 'studio-m-hotel',
    name: 'Studio M',
    city: 'Abu Dhabi',
    image: '/assets/projects/StudioMAD.avif',
  },
  {
    id: 'workers-village',
    name: "Workers' Village",
    city: 'Abu Dhabi',
    image: "/assets/projects/Worker'sVillageAD.avif",
  },
  {
    id: 'meena-tower',
    name: 'Meena Tower',
    city: 'Abu Dhabi',
    image: '/assets/projects/MeenaTowerAD.avif',
  },
];

export const DUBAI_PROJECTS: ProjectItem[] = [
  {
    id: 'mirdif-community',
    name: 'Mirdif',
    city: 'Dubai',
    image: '/assets/projects/MirdifDXB.avif',
  },
  {
    id: 'one-central-dwtc',
    name: 'One Central — DWTC',
    city: 'Dubai',
    image: '/assets/projects/OneCentral-H2B-DWTCDXB.avif',
  },
  {
    id: 'park-point-emaar',
    name: 'Park Point by Emaar',
    city: 'Dubai',
    image: '/assets/projects/ParkPointByEmaarDXB.avif',
  },
  {
    id: 'royal-atlantis-resort',
    name: 'The Royal Atlantis',
    city: 'Dubai',
    image: '/assets/projects/RoyalAtlantisDXB.avif',
  },
  {
    id: 'waldorf-astoria-dubai',
    name: 'Waldorf Astoria Dubai',
    city: 'Dubai',
    image: '/assets/projects/WaldorfAstoriaDubaiDXB.avif',
  },
];

export const ALL_PROJECTS: ProjectItem[] = [...ABU_DHABI_PROJECTS, ...DUBAI_PROJECTS];

export const FIELD_PHOTOS: FieldPhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Network Zone Diagnostic Matrix',
    image: '/assets/projects/screenshots1.webp',
  },
  {
    id: 'photo-2',
    title: 'Addressable Gas Panel Field Enclosure',
    image: '/assets/projects/screenshots2.webp',
  },
  {
    id: 'photo-3',
    title: 'JINU-SONIC Gas Panel HMI',
    image: '/assets/projects/screenshots3.webp',
  },
  {
    id: 'photo-4',
    title: 'Master Control Enclosure',
    image: '/assets/projects/screenshots4.webp',
  },
  {
    id: 'photo-5',
    title: 'Multichannel LEL% Gas Monitor',
    image: '/assets/projects/screeenshots5.webp',
  },
  {
    id: 'photo-6',
    title: 'Rotana Hotel Gas Safety Panel',
    image: '/assets/projects/screeenshots6.webp',
  },
  {
    id: 'photo-7',
    title: 'Sonic Technologies Fire & Gas Panel',
    image: '/assets/projects/screeenshots7.webp',
  },
  {
    id: 'photo-8',
    title: 'Gas Panel Alarm Monitoring',
    image: '/assets/projects/screeenshots8.webp',
  },
];

export const PARTNERS_LIST: PartnerItem[] = [
  {
    id: 'jinu',
    name: 'JINU',
    logo: '/assets/Jinu_clean.png',
  },
  {
    id: 'ls-electric',
    name: 'LS Electric',
    logo: '/assets/LSElectric_clean.png',
  },
  {
    id: 'al-fanar',
    name: 'Al Fanar',
    logo: '/assets/AlFanar_clean.png',
  },
  {
    id: 'boreal-laser',
    name: 'Boreal Laser',
    logo: '/assets/boreal.png',
  },
  {
    id: 'ehc',
    name: 'EHC',
    logo: '/assets/EHC_clean.png',
  },
  {
    id: 'hiteks',
    name: 'Hiteks',
    logo: '/assets/Hiteks_clean.png',
  },
];
