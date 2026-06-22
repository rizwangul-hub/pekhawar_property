export interface Property {
  id: string;
  title: string;
  category: 'Residential Plots' | 'Houses' | 'Commercial Properties' | 'Apartments';
  type: 'Buy' | 'Rent';
  price: number; // in PKR or Lakhs/Crores
  priceLabel: string; // e.g. "3.5 Crore", "1.2 Crore", "45 Lakh"
  location: string; // e.g. "Phase 1, DHA Peshawar", "Sector F3, Hayatabad"
  address: string;
  area: string; // e.g. "1 Kanal", "10 Marla", "5 Marla"
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    whatsapp: string;
    image: string;
  };
  featured: boolean;
  status: 'Available' | 'Sold' | 'Reserved';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Inquiry {
  id: string;
  propertyId?: string;
  propertyName?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  submittedAt: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  propertyType: string;
  budgetRange: string;
  additionalNotes?: string;
  submittedAt: string;
}
