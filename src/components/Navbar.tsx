import { Building2, Menu, X, PhoneCall, Gift, CheckSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

export default function Navbar({ currentTab, setCurrentTab, onOpenBookingModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 font-sans ${
          isScrolled
            ? 'bg-navy-950/95 border-b border-gold-500/20 py-3 shadow-[0_4px_30px_rgba(6,9,23,0.3)] backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
        id="luxury-navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-11 h-11 rounded-lg border border-gold-500/30 flex items-center justify-center bg-navy-800/80 group-hover:border-gold-500/70 transition-all duration-300 relative overflow-hidden shadow-[0_0_15px_rgba(197,168,90,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="font-serif font-bold text-lg text-gold-400 select-none tracking-tight">PPD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold tracking-wide text-lg text-white group-hover:text-gold-400 transition-colors duration-300">
                  PEKHAWAR
                </span>
                <span className="font-mono text-[9px] text-gold-500/85 uppercase tracking-[0.25em] -mt-1 font-semibold">
                  Property Dealer
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 uppercase cursor-pointer hover:text-gold-400 relative py-1.5 ${
                    currentTab === item.id || (item.id === 'properties' && currentTab === 'property-details')
                      ? 'text-gold-400'
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {/* Underline for active state */}
                  {(currentTab === item.id || (item.id === 'properties' && currentTab === 'property-details')) && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Actions for Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:03459587887"
                className="flex items-center gap-2 text-xs font-mono font-medium tracking-tight text-white/90 bg-navy-800 hover:bg-navy-700/80 border border-gold-500/20 rounded-full py-1.5 px-3.5 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gold-500" />
                <span>0345-9587887</span>
              </a>
              <button
                onClick={onOpenBookingModal}
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 text-xs font-semibold tracking-wide uppercase py-2 px-5 rounded-lg shadow-[0_4px_14px_rgba(197,168,90,0.25)] hover:shadow-[0_4px_20px_rgba(197,168,90,0.35)] transition-all cursor-pointer hover:scale-[1.02]"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="tel:0345-9587887"
                className="p-2 border border-gold-500/20 bg-navy-800/80 rounded-full text-gold-400"
                aria-label="Call Pekhawar Agent"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 border border-gold-500/20 bg-navy-800/80 rounded-lg text-white hover:text-gold-400 transition-colors"
                aria-label="Open Navigation List"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Back Drop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-xs w-full bg-[#101C38] border-l border-gold-500/20 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gold-500/10 pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded border border-gold-500/20 flex items-center justify-center bg-navy-800">
                    <span className="font-serif font-bold text-xs text-gold-400">PPD</span>
                  </div>
                  <span className="font-serif font-bold tracking-wide text-white text-md">PEKHAWAR</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg border border-gold-500/10 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base font-medium tracking-wide py-2.5 px-3 rounded-lg border transition-all ${
                      currentTab === item.id || (item.id === 'properties' && currentTab === 'property-details')
                        ? 'text-gold-400 border-gold-500/20 bg-navy-800/80'
                        : 'text-gray-300 border-transparent hover:bg-navy-800/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Contacts & Booking inside Drawer */}
            <div className="border-t border-gold-500/10 pt-6 mt-8">
              <p className="text-gray-500 text-xs uppercase tracking-[0.15em] font-semibold mb-3">Traditional Trust</p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:03459587887"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                  <span>Primary: 0345-9587887</span>
                </a>
                <a
                  href="tel:03435124244"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-gold-400 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-gold-500"></span>
                  <span>Secondary: 0343-5124244</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="mt-4 w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
