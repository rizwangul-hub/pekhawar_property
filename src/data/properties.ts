import { Property, Testimonial } from '../types';

export const PESHAWAR_AREAS = [
  'University Town',
  'Hayatabad',
  'DHA Peshawar',
  'Regi Model Town',
  'Warsak Road',
  'Ring Road',
  'G.T. Road'
];

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'pekhawar-prop-1',
    title: '1 Kanal Luxury Designer Villa with Basement',
    category: 'Houses',
    type: 'Buy',
    price: 68000000,
    priceLabel: '6.8 Crore PKR',
    location: 'Phase 5, Hayatabad',
    address: 'Sector D-1, Phase 5, Hayatabad, Peshawar, KP',
    area: '1 Kanal',
    bedrooms: 6,
    bathrooms: 7,
    description: 'This ultra-luxurious, double-story Spanish design villa is the epitome of elegance. Located in the highly sought-after Phase 5 Hayatabad, it features premium imported marble flooring, customized woodwork, dual access kitchen layouts, a massive home theater basement, stunning lawn garden, and independent car parking spaces for up to 4 vehicles.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '6 Master Bedrooms with Ensuite Bathrooms',
      'Fully Equipped Designer Italian Kitchens (Main & Dirty)',
      'Basement Home Theater & Gym Area',
      'Spacious Landscaped Front Lawn',
      '2 Servant Quarters with Attached Baths',
      'Imported Spanish Tiles & Bath Fittings',
      'CCTV Monitoring & 24/7 Gated Security'
    ],
    agent: {
      name: 'Haji Gul Khan',
      phone: '0345-9587887',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: true,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-2',
    title: '10 Marla Premium Facing-Park Plot',
    category: 'Residential Plots',
    type: 'Buy',
    price: 13500000,
    priceLabel: '1.35 Crore PKR',
    location: 'DHA Peshawar',
    address: 'Block C, Phase 1, DHA Peshawar, KP',
    area: '10 Marla',
    description: 'A superb opportunity to purchase an ideal 10 Marla plot situated in DHA Peshawar Block C, directly facing a gorgeous community park. Highly lucrative for investment or custom constructing your dream residence in Peshawar\'s premier gated community containing elite security and infrastructure.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Facing 40-Kanal Community Park',
      'Fully Developed & Possession Available',
      'Gated Community with Ultra-Modern Security',
      'Underground Electricity, Gas & Water Connection',
      'Adjacent to Main Commercial Axis',
      'Clean Registry & Direct Transfer'
    ],
    agent: {
      name: 'Sheraz Pekhawari',
      phone: '0343-5124244',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: true,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-3',
    title: 'Modern Retail Shop in Luxury Commercial Plaza',
    category: 'Commercial Properties',
    type: 'Buy',
    price: 32000000,
    priceLabel: '3.2 Crore PKR',
    location: 'University Road',
    address: 'University Road, Peshawar Town, Peshawar, KP',
    area: '450 Sq. Ft.',
    description: 'Ideally positioned business showroom/shop on the ground floor of an ultra-modern corporate tower on University Road. This strategic corner unit boasts massive high-visibility glass facade frontage on the main arterial road, fetching top-tier rental yields from leading national/international brand tenants.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Ground Floor Corner Placement',
      'Double Height Glass Windows',
      'High Rental Income Potential (Pre-Leased Options)',
      'Backup Generators & Elevators',
      'Wide Premium Public Footfall Route',
      'Dedicated Basement Car Parking'
    ],
    agent: {
      name: 'Haji Gul Khan',
      phone: '0345-9587887',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: true,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-4',
    title: '3-Bedroom Luxury Apartment, Warsak Towers',
    category: 'Apartments',
    type: 'Rent',
    price: 85000,
    priceLabel: '85,000 PKR / Month',
    location: 'Warsak Road',
    address: 'Warsak Heights, Main Warsak Road, Peshawar, KP',
    area: '1,850 Sq. Ft.',
    bedrooms: 3,
    bathrooms: 3,
    description: 'This state-of-the-art semi-furnished premium apartment offers urban sophistication on Warsak Road. Featuring massive airy balconies with breathtaking panoramic views of Peshawar skyline, high-end marble floors, a luxury custom-cabinet kitchen, and immediate access to grocery marts and schools.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '3 Spacious Bedrooms + Built-in Wardrobes',
      'Modern High-Efficiency Fitted Kitchen',
      '2 Dedicated Covered Basement Parking Bays',
      '24/7 Power Backup (Integrated UPS/Solar Ready)',
      'Access to Resident Rooftop BBQ Deck',
      'Dedicated Elevator & Secure Intercom Link'
    ],
    agent: {
      name: 'Sheraz Pekhawari',
      phone: '0343-5124244',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: false,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-5',
    title: '12 Marla Custom Luxury Corner House',
    category: 'Houses',
    type: 'Buy',
    price: 49500000,
    priceLabel: '4.95 Crore PKR',
    location: 'University Town',
    address: 'Sector B-3, University Town, Peshawar, KP',
    area: '12 Marla',
    bedrooms: 5,
    bathrooms: 6,
    description: 'An architectural masterpiece double-unit house located in the elite, serene environment of University Town Peshawar. Boasting a modern minimalist facade, dual side open ventilation, gorgeous drawing rooms with separate entryways for traditional Peshawar hospitality (Hujra layout compatibility), and premium sanitary installs.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '5 Master Bedrooms & Wardrobe Closets',
      'Traditional Peshawar Hujra / Lounge with Separate Gate',
      'Chic High-End Turkish Kitchen Fittings',
      'Elegant Rooftop Lounge with Majestic Mountain Views',
      'Corner Plot with Extra Frontage Parking',
      'Highest Grade Solid Ash Wood Work'
    ],
    agent: {
      name: 'Haji Gul Khan',
      phone: '0345-9587887',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: true,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-6',
    title: '1 Kanal Prime Commercial Plot',
    category: 'Commercial Properties',
    type: 'Buy',
    price: 98000000,
    priceLabel: '9.8 Crore PKR',
    location: 'Ring Road',
    address: 'Main Ring Road Sector Commercial, Peshawar, KP',
    area: '1 Kanal',
    description: 'Ideally suited Commercial plot facing the primary Ring Road commercial expressway. This property has complete approvals for constructible limits of up to a basement + 6-floor hybrid plaza. Ideal for shopping complexes, surgical clinics, educational institutes, bank branches, or corporate headquarters.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      '120-Foot Main Highway Exposure',
      'LDA/Peshawar Municipality Authorized NOC',
      'Corner Plot with Secondary Safe Side Lane Access',
      'Direct Gas Pipeline & Commercial Feeder Line Installed',
      'Immediate Demarcation and Registry papers',
      'Excellent Investment with Massive Capital Capitalization'
    ],
    agent: {
      name: 'Sheraz Pekhawari',
      phone: '0343-5124244',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: false,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-7',
    title: '1 Kanal Fully Developed plot, Regi Model Town',
    category: 'Residential Plots',
    type: 'Buy',
    price: 18500000,
    priceLabel: '1.85 Crore PKR',
    location: 'Regi Model Town',
    address: 'Block Zone 3, Regi Model Town, Peshawar, KP',
    area: '1 Kanal',
    description: 'Perfect rectangular 1 Kanal fully developed corner residential plot in Regi Model Town (Zone 3), Peshawar. Positioned on a extra wide 60-foot boulevard. This area features lush landscaping, active markets, state offices, parks, and schools fully operational nearby. Immediate construction possible.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    ],
    features: [
      'Wide 60ft Front Boulevard',
      'Ready for Instant Brick Layout Structure',
      'Excellent Underground Clean Drinking Water Table',
      'Active Civic Electricity Installed & Working Roads',
      'Direct Security Patrol Coverage Zone',
      'High Margin Longterm Security Hold'
    ],
    agent: {
      name: 'Haji Gul Khan',
      phone: '0345-9587887',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: false,
    status: 'Available'
  },
  {
    id: 'pekhawar-prop-8',
    title: '2-Bedroom Luxury Suite, University Road',
    category: 'Apartments',
    type: 'Rent',
    price: 55000,
    priceLabel: '55,000 PKR / Month',
    location: 'University Town',
    address: 'Town Residency, University Road, Peshawar, KP',
    area: '1,200 Sq. Ft.',
    bedrooms: 2,
    bathrooms: 2,
    description: 'Elegantly furnished 2 bedroom luxury flat featuring state of the art finishes, modular open plan American kitchen, modern LED light ceilings, wooden room tiling, custom wardrobes, and robust security locks in one of Peshawar\'s most connected locations.',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Fully Furnished Living Space & Curtains',
      'Modern Master Suite + Standard Guest Suite',
      'Split AC Units Pre-Installed',
      '24 Hours Smart Lift Connectivity',
      'Gated Safe Parking Multi-level Ground Floor',
      'Trash Chute & On-Premise Cleaning Staff'
    ],
    agent: {
      name: 'Sheraz Pekhawari',
      phone: '0343-5124244',
      whatsapp: '+923435124244',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80'
    },
    featured: false,
    status: 'Available'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Major (R) Kamran Afridi',
    role: 'Property Investor',
    rating: 5,
    comment: 'Excellent service and professional guidance of Haji Gul Khan. They made my investment transaction in DHA Peshawar absolutely stress-free and completely genuine.',
    date: 'February 14, 2026'
  },
  {
    id: 'test-2',
    name: 'Dr. Sajjad Ahmad',
    role: 'Home Buyer in University Town',
    rating: 5,
    comment: 'Very trustworthy and experienced property consultants. Honest pricing with zero hidden margins. Pekhawar Property Dealer is highly recommended for safe real estate deals.',
    date: 'April 03, 2026'
  },
  {
    id: 'test-3',
    name: 'Nadia Yusuf',
    role: 'Tenant Partner',
    rating: 5,
    comment: 'Extremely polite staff. Securing a corporate office rental on University Road was handled flawlessly within just a couple of days. Their signature Peshawar hospitality stands out.',
    date: 'May 20, 2026'
  }
];
