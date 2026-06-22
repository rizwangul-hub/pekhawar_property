/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

// Pages
import HomePage from './components/pages/HomePage';
import PropertiesPage from './components/pages/PropertiesPage';
import PropertyDetailsPage from './components/pages/PropertyDetailsPage';
import ServicesPage from './components/pages/ServicesPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

import { Property, Inquiry, Booking } from './types';
import { PROPERTIES_DATA } from './data/properties';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);

  // Global search filters coordinates (shared from home components)
  const [searchFilters, setSearchFilters] = useState({
    type: 'all',
    category: 'all',
    location: 'all',
    minPrice: 'all',
    maxPrice: 'all'
  });

  // Local storage lists for registered leads & appointments
  const [allInquiries, setAllInquiries] = useState<Inquiry[]>([]);
  const [allBookings, setAllBookings] = useState<Booking[]>([]);

  // Load saved lists on mount
  useEffect(() => {
    try {
      const savedInqs = localStorage.getItem('pekhawar_inquiries');
      if (savedInqs) setAllInquiries(JSON.parse(savedInqs));

      const savedBks = localStorage.getItem('pekhawar_bookings');
      if (savedBks) setAllBookings(JSON.parse(savedBks));
    } catch (e) {
      console.warn("Could not load stored leads:", e);
    }
  }, []);

  // Handlers for adding inquiries & bookings
  const handleAddInquiry = (newInq: Inquiry) => {
    const updated = [newInq, ...allInquiries];
    setAllInquiries(updated);
    try {
      localStorage.setItem('pekhawar_inquiries', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddBooking = (newBk: Booking) => {
    const updated = [newBk, ...allBookings];
    setAllBookings(updated);
    try {
      localStorage.setItem('pekhawar_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Navigates directly from property list click to details
  const handleSelectProperty = (prop: Property) => {
    setSelectedProperty(prop);
    setCurrentTab('property-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the current active tab screen
  const renderPage = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomePage
            onSelectProperty={handleSelectProperty}
            setCurrentTab={setCurrentTab}
            setSearchFilters={setSearchFilters}
          />
        );
      case 'properties':
        return (
          <PropertiesPage
            onSelectProperty={handleSelectProperty}
            searchFilters={searchFilters}
            setSearchFilters={setSearchFilters}
          />
        );
      case 'property-details':
        return (
          <PropertyDetailsPage
            property={selectedProperty}
            onAddInquiry={handleAddInquiry}
            setCurrentTab={setCurrentTab}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onOpenBookingModal={() => setBookingModalOpen(true)}
            setCurrentTab={setCurrentTab}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage onAddInquiry={handleAddInquiry} />;
      default:
        return (
          <HomePage
            onSelectProperty={handleSelectProperty}
            setCurrentTab={setCurrentTab}
            setSearchFilters={setSearchFilters}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#060917] text-gray-100 flex flex-col justify-between selection:bg-gold-500 selection:text-navy-950 overflow-x-hidden">
      
      {/* 1. STICKY GLASSMORPHIC NAVBAR */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        onOpenBookingModal={() => setBookingModalOpen(true)}
      />

      {/* 2. CHOSEN LAYOUT SCREEN WITH ENTRY TRAILER */}
      <main className="flex-grow animate-fade-in">
        {renderPage()}
      </main>

      {/* 3. LUXURY EDITORIAL FOOTER */}
      <Footer
        setCurrentTab={setCurrentTab}
        onOpenBookingModal={() => setBookingModalOpen(true)}
      />

      {/* 4. SHINY FLOATING WHATSAPP & HOT HELPLINE ACTION */}
      <FloatingWhatsApp />

      {/* 5. SEAMLESS TRANSACTION TICKETING MODAL */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onAddBooking={handleAddBooking}
      />
    </div>
  );
}
