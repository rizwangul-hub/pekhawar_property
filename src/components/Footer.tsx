import { Mail, Phone, MapPin, Calendar, Compass, Star, FileText, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onOpenBookingModal: () => void;
}

export default function Footer({ setCurrentTab, onOpenBookingModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081021] border-t border-gold-500/15 font-sans relative overflow-hidden text-gray-300">
      {/* Decorative Gold Radial Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gold-500/35 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-gold-500/30 flex items-center justify-center bg-navy-950">
                <span className="font-serif font-bold text-base text-gold-400">PPD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold tracking-wide text-white text-md">PEKHAWAR</span>
                <span className="font-mono text-[8px] text-gold-500 uppercase tracking-[0.2em] -mt-1 font-semibold">
                  Property Dealer
                </span>
              </div>
            </div>
            
            <p className="font-serif italic text-gold-300/80 text-sm mt-2">
              "A Tradition of Trust"
            </p>
            
            <p className="text-gray-400 text-xs leading-relaxed mt-2">
              Pekhawar Property Dealer is a premier real estate consultancy serving domestic & overseas clients in Peshawar. We specialize in secure investments and beautiful residences with absolute transparency.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <span className="inline-flex items-center justify-center p-1.5 rounded bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500 mr-1" />
                5-Star Rated Dealer
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-[0.15em] font-display border-b border-gold-500/10 pb-2 mb-5">
              Refined Navigation
            </h3>
            <ul className="space-y-3.5 text-xs">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-gold-400 flex items-center gap-2 transition-colors cursor-pointer group"
                >
                  <Compass className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-400" />
                  <span>Brokerage Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('properties')}
                  className="hover:text-gold-400 flex items-center gap-2 transition-colors cursor-pointer group"
                >
                  <Compass className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-400" />
                  <span>Peshawar Listings Catalog</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-gold-400 flex items-center gap-2 transition-colors cursor-pointer group"
                >
                  <Compass className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-400" />
                  <span>Real Estate Advisory</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-gold-400 flex items-center gap-2 transition-colors cursor-pointer group"
                >
                  <Compass className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-400" />
                  <span>Our Heritage & Values</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-gold-400 flex items-center gap-2 transition-colors cursor-pointer group"
                >
                  <Compass className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-400" />
                  <span>Connect with Experts</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-[0.15em] font-display border-b border-gold-500/10 pb-2 mb-5">
              Direct Contact
            </h3>
            <ul className="space-y-4 text-xs font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  University Road, University Town, Peshawar, Khyber Pakhtunkhwa, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:03459587887" className="hover:text-gold-400 transition-colors">
                    0345-9587887
                  </a>
                  <a href="tel:03435124244" className="hover:text-gold-400 transition-colors mt-0.5">
                    0343-5124244
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-gold-500 shrink-0" />
                <a href="mailto:info@pekhawarproperties.com" className="hover:text-gold-400 transition-colors">
                  info@pekhawarproperties.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 mt-1.5 animate-pulse shrink-0"></span>
                <span className="text-[11px] text-gray-400 leading-relaxed">
                  Support active over WhatsApp (+92 343 5124244)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours & Trust */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-[0.15em] font-display border-b border-gold-500/10 pb-2 mb-5">
                Office Hours
              </h3>
              <ul className="space-y-3.5 text-xs font-mono">
                <li className="flex justify-between border-b border-navy-800 pb-2">
                  <span className="text-gray-400">Monday - Saturday</span>
                  <span className="text-gold-400">09:00 AM - 08:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-red-400 font-sans italic text-right">Closed (By Appointment Only)</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-navy-950/80 border border-gold-500/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span className="text-[11px] font-semibold text-gold-400 font-display">NOC VERIFIED AGENCY</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                All listed commercial assets & plots undergo critical legal checkup before presentation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="font-mono text-[11px]">
            &copy; {currentYear} <span className="text-gold-400">Pekhawar Property Dealer</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 font-display">
            <button onClick={() => handleLinkClick('about')} className="hover:text-gold-400 transition-colors">About</button>
            <button onClick={() => handleLinkClick('services')} className="hover:text-gold-400 transition-colors">Services</button>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-gold-400 transition-colors">Location</button>
            <button onClick={onOpenBookingModal} className="text-gold-400 font-semibold hover:underline">Verify Agency Registrations</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
