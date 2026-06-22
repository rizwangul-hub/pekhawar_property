import { Search, Shield, Award, Users, Star, Phone, CheckCircle, ArrowUpRight, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { Property, Testimonial } from '../../types';
import { PROPERTIES_DATA, TESTIMONIALS_DATA } from '../../data/properties';
import { useState, FormEvent } from 'react';

interface HomePageProps {
  onSelectProperty: (property: Property) => void;
  setCurrentTab: (tab: string) => void;
  setSearchFilters: (filters: {
    type: string;
    category: string;
    location: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function HomePage({ onSelectProperty, setCurrentTab, setSearchFilters }: HomePageProps) {
  // Local quick search states
  const [searchType, setSearchType] = useState('Buy');
  const [searchCategory, setSearchCategory] = useState('all');
  const [searchLocation, setSearchLocation] = useState('all');

  const featuredProperties = PROPERTIES_DATA.filter(p => p.featured);

  const handleQuickSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearchFilters({
      type: searchType,
      category: searchCategory,
      location: searchLocation,
      minPrice: 'all',
      maxPrice: 'all'
    });
    setCurrentTab('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryQuickLink = (catName: string) => {
    setSearchFilters({
      type: 'all',
      category: catName,
      location: 'all',
      minPrice: 'all',
      maxPrice: 'all'
    });
    setCurrentTab('properties');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const launchWhatsApp = (msg: string) => {
    window.open(`https://wa.me/923435124244?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="font-sans text-gray-300">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-navy-950">
        {/* Full-width Luxury Property Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
            alt="Pekhawar Property Dealer Luxury Background"
            className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none transform scale-[1.01]"
          />
          {/* Deep royal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-navy-950"></div>
          {/* Subtle gold radial shimmer */}
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#060917] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/35">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 rotate-12 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-gold-300 font-bold">
                A Tradition of Trust — Peshawar, KP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
              Find Your Dream <br />
              <span className="gold-gradient-text">Property in Peshawar</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              Trusted Real Estate Experts for buying premier plots, gorgeous architectural houses, commercial showrooms, and profitable investment consultancies across Peshawar's most elite developments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2 w-full sm:w-auto">
              <a
                href="tel:03459587887"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 px-7 rounded-xl text-sm uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(197,168,90,0.3)] hover:scale-[1.01]"
              >
                Call Primary: 0345-9587887
              </a>
              <button
                onClick={() => launchWhatsApp("Assalam-o-Alaikum! I want to inquire about properties with Pekhawar Property Dealer.")}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3.5 px-7 rounded-xl text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(37,211,102,0.2)]"
              >
                <svg className="w-5.0 h-5.0 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.012-5.091-2.854-6.936-1.841-1.84-4.29-2.853-6.918-2.853-5.441 0-9.866 4.413-9.87 9.832-.001 1.777.464 3.513 1.348 5.044l-.986 3.606 3.692-.968zm11.39-7.584c-.31-.155-1.838-.908-2.126-1.01-.288-.105-.497-.155-.706.155-.21.314-.81.1.81-1.22.42-.418.105-.31-.156-.465-.262-.155-1.043-.384-1.986-1.226-.733-.655-1.229-1.464-1.373-1.719-.143-.255-.015-.393.111-.518.115-.112.263-.31.394-.465.131-.155.176-.265.263-.44.088-.175.044-.33-.021-.464-.067-.135-.5-.1.498-1.206-.484.095-.21-.314-.497-.333-.707-.02-.952.127-.131.623-1.44.864-1.83 1.306-1.83 2.508 0 .863.31 1.696.536 2.005.226.31 2.399 3.662 5.811 5.136.812.35 1.446.56 1.94.717.815.26 1.558.224 2.146.136.654-.1 1.838-.75 2.1-1.472.261-.72.261-1.34.183-1.472-.078-.13-.288-.207-.597-.362z" />
                </svg>
                <span>WhatsApp Expert</span>
              </button>
            </div>
          </div>

          {/* Right Hero Quick Search Card */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-card border border-gold-500/20 rounded-2xl p-6 sm:p-8 shadow-[0_20px_40px_rgba(6,9,23,0.7)]">
              <span className="text-gold-500 text-[10px] font-mono tracking-widest uppercase font-bold block mb-1">
                EXPRESS DISCOVERY
              </span>
              <h3 className="text-lg sm:text-xl font-serif text-white font-bold mb-5 tracking-wide">
                Search Properties Instantly
              </h3>

              <form onSubmit={handleQuickSearch} className="space-y-4">
                {/* Buy Rent selector */}
                <div className="grid grid-cols-2 gap-2 bg-[#060917]/80 rounded-lg p-1 border border-gold-500/10">
                  <button
                    type="button"
                    onClick={() => setSearchType('Buy')}
                    className={`py-2 px-4 rounded-md text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                      searchType === 'Buy'
                        ? 'bg-gold-500 text-navy-950 font-bold shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    FOR BUY / SALE
                  </button>
                  <button
                    type="button"
                    onClick={() => setSearchType('Rent')}
                    className={`py-2 px-4 rounded-md text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                      searchType === 'Rent'
                        ? 'bg-gold-500 text-navy-950 font-bold shadow'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    FOR RENT
                  </button>
                </div>

                {/* Property Type Dropdown */}
                <div>
                  <label className="block text-xs text-gray-400 font-semibold mb-1.5 uppercase tracking-wider">
                    Select Category
                  </label>
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
                  >
                    <option value="all">Any Category (Plots, Homes, Commercial)</option>
                    <option value="Residential Plots">Residential Plots</option>
                    <option value="Houses">Luxury Houses</option>
                    <option value="Commercial Properties">Commercial Properties</option>
                    <option value="Apartments">Apartments</option>
                  </select>
                </div>

                {/* Location Select Dropdown */}
                <div>
                  <label className="block text-xs text-gray-400 font-semibold mb-1.5 uppercase tracking-wider">
                    Select Location Area
                  </label>
                  <select
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
                  >
                    <option value="all">All Prime Areas (DHA, Hayatabad, Town)</option>
                    <option value="University Town">University Town</option>
                    <option value="Hayatabad">Hayatabad</option>
                    <option value="DHA Peshawar">DHA Peshawar</option>
                    <option value="Regi Model Town">Regi Model Town</option>
                    <option value="Warsak Road">Warsak Road</option>
                    <option value="Ring Road">Ring Road</option>
                  </select>
                </div>

                {/* Submit search trigger */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3 px-5 rounded-xl text-xs uppercase tracking-widest transition-all mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Search Peshawar Database</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-[#0B1226] border-y border-gold-500/15 py-12 px-4 shadow-inner relative">
        <div className="absolute inset-0 bg-radial-at-t from-gold-500/5 via-transparent to-transparent opacity-70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="flex flex-col gap-1 inline-block">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold gold-gradient-text block">
                100+
              </span>
              <span className="text-xs sm:text-xs font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                Properties Available
              </span>
            </div>
            <div className="flex flex-col gap-1 inline-block">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold gold-gradient-text block">
                50+
              </span>
              <span className="text-xs sm:text-xs font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                Happy Clients
              </span>
            </div>
            <div className="flex flex-col gap-1 inline-block">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold gold-gradient-text block">
                5-Star
              </span>
              <span className="text-xs sm:text-xs font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                Satisfaction Rated
              </span>
            </div>
            <div className="flex flex-col gap-1 inline-block">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold gold-gradient-text block">
                25+ Years
              </span>
              <span className="text-xs sm:text-xs font-mono uppercase tracking-[0.15em] text-gray-400 font-semibold">
                Trusted Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="py-20 px-4 bg-navy-950" id="editorial-services">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold">
            Unrivaled Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide mt-2">
            Peshawar Real Estate Services
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-4 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-lg select-none">B</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-3">Buy Property</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Search premium residential houses, designer villas, and designated plots across Peshawar. Receive clear title documents, safe transfer support, and zero unfair pricing.
                </p>
              </div>
              <button 
                onClick={() => handleCategoryQuickLink('Houses')}
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 group/btn"
              >
                <span>Browse Houses for Sale</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>

            {/* Service 2 */}
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-lg select-none">S</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-3">Sell Property</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Ready to sell your commercial plaza, plot or luxury house in Peshawar with high rewards? Tap into our extensive, elite investor circles to sell with complete security and speed.
                </p>
              </div>
              <button 
                onClick={() => setCurrentTab('contact')}
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 group/btn"
              >
                <span>List Your Asset With Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>

            {/* Service 3 */}
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-lg select-none">R</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-3">Rent Property</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Secure high-end residences in University Town or modern executive apartment flats on Warsak Heights. Transparent legal tenancy contracts suited for families and businesses.
                </p>
              </div>
              <button 
                onClick={() => handleCategoryQuickLink('Apartments')}
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 group/btn"
              >
                <span>View Luxury Rentals</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>

            {/* Service 4 */}
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-left flex flex-col justify-between md:col-span-1">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-lg select-none">I</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-3">Property Investment Advisory</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Position capital on high-growth commercial sectors in Ring Road, safe corporate plots in DHA Peshawar, or lucrative plots in Regi Model Town for short and long-term yields.
                </p>
              </div>
              <button 
                onClick={() => setCurrentTab('services')}
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 group/btn"
              >
                <span>Advisory Details</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>

            {/* Service 5 */}
            <div className="glass-card p-8 rounded-2xl glass-card-hover text-left flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-lg select-none">O</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-3">Online Property Booking Assistance</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  In today's digital age, we facilitate seamless property exploration and verification process online. Book digital walkthroughs, coordinate video verification on plots, and lock safe priority consultancy seats remotely.
                </p>
              </div>
              <button 
                onClick={() => setCurrentTab('services')}
                className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 group/btn"
              >
                <span>Read Booking Process</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROPERTIES GRID */}
      <section className="py-20 px-4 bg-[#0B1226]/60 border-t border-navy-800" id="featured-listings">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
                Signature Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide mt-1">
                Featured Elite Properties
              </h2>
              <div className="w-16 h-[2px] bg-gold-500 mt-3 md:mx-0 mx-auto"></div>
            </div>
            
            <button
              onClick={() => {
                setSearchFilters({ type: 'all', category: 'all', location: 'all', minPrice: 'all', maxPrice: 'all' });
                setCurrentTab('properties');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 border border-gold-500/20 hover:border-gold-500/75 text-gold-400 text-xs font-mono py-2.5 px-5 rounded-xl transition-all hover:bg-navy-800"
            >
              <span>Explore All 100+ Listings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-[#101C38] border border-gold-500/10 rounded-2xl overflow-hidden shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => {
                  onSelectProperty(prop);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Status Banner */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-navy-950/85 backdrop-blur-md border border-gold-500/30 text-gold-400 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded">
                      {prop.category}
                    </span>
                    <span className="bg-gold-500 text-navy-950 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded">
                      FOR {prop.type === 'Buy' ? 'SALE' : 'RENT'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-[#060917]/80 backdrop-blur-sm border border-gold-500/15 py-1 px-3 rounded text-xs font-mono text-white">
                    📍 {prop.location}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-xs text-gold-400 font-mono tracking-wider font-semibold">
                      {prop.area}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-white tracking-wide mt-1 group-hover:text-gold-400 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Bed Bath details if applicable */}
                  {(prop.bedrooms || prop.bathrooms) && (
                    <div className="flex items-center gap-4 mt-4 border-y border-gold-500/5 py-2.5 text-xs text-slate-300">
                      {prop.bedrooms && (
                        <span>🛌 <strong>{prop.bedrooms}</strong> Beds</span>
                      )}
                      {prop.bathrooms && (
                        <span>🛁 <strong>{prop.bathrooms}</strong> Baths</span>
                      )}
                      <span className="text-gray-500">|</span>
                      <span>📐 <strong>{prop.area}</strong></span>
                    </div>
                  )}

                  {/* Lower Footer */}
                  <div className="flex items-center justify-between mt-5 pt-2">
                    <div>
                      <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block">Est. Market Value</span>
                      <strong className="text-lg text-white font-mono tracking-tight font-bold gold-gradient-text">{prop.priceLabel}</strong>
                    </div>
                    
                    <span className="text-xs font-semibold text-gold-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-20 px-4 bg-[#060917] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block">
              Integrity & Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              A Tradition of Trust
            </h2>
            <div className="w-16 h-[2px] bg-gold-500"></div>
            <p className="text-gray-400 text-sm leading-relaxed mt-2 text-left">
              Pekhawar Property Dealer serves as the benchmark of secure real estate in Peshawar. Over the decades, we transitioned capital safely, bringing clear documentation and local market know-how to high-value transactions.
            </p>
            <div className="bg-navy-900 border border-gold-500/10 p-4 rounded-xl mt-4 w-full text-left">
              <span className="text-xs text-gold-400 font-bold uppercase tracking-wider flex items-center gap-2 mb-1.5 font-display">
                <CheckCircle className="w-4 h-4 text-gold-500" />
                100% REGISTRY INTEGRITY GUARANTEE
              </span>
              <p className="text-gray-400 text-xs">
                We handle the critical checks directly with registry departments manually. No fake holdings, no complex third-party interference.
              </p>
            </div>
          </div>

          {/* Right Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-navy-900 border border-gold-500/5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white tracking-wide">Verified Property Listings</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Every commercial shop outline, residential plot boundary, or flat coordinate shown on our catalog is manually audited on ground zero before publication.
              </p>
            </div>

            <div className="p-6 bg-navy-900 border border-gold-500/5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white tracking-wide">Peshawar Market Experts</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our team consists of indigenous residents with native, unparalleled knowledge of upcoming developments (like DHA Peshawar sectors layout and Hayatabad extensions).
              </p>
            </div>

            <div className="p-6 bg-navy-900 border border-gold-500/5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white tracking-wide">Overseas Secure Investment</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                We safely assist overseas citizens returning to Peshawar or Khyber Pakhtunkhwa with remote secure payment and power of attorney verification schemes.
              </p>
            </div>

            <div className="p-6 bg-navy-900 border border-gold-500/5 rounded-2xl flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-serif font-bold text-white tracking-wide">Professional Assistance</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our support doesn't stop after the purchase. We guide your design plans, secure structural approvals, and represent you properly at transfer desks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-20 px-4 bg-navy-950 border-t border-navy-900" id="trust-testimonials">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold">
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide mt-2">
            What Our Patrons Say
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-4 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((test) => (
              <div
                key={test.id}
                className="bg-navy-900 border border-gold-500/10 p-8 rounded-2xl text-left flex flex-col justify-between hover:border-gold-500/30 transition-all shadow-md relative"
              >
                {/* Gold Quote Icon */}
                <span className="absolute bottom-6 right-6 font-serif text-6xl text-gold-500/10 font-bold select-none">“</span>
                
                <div>
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm italic leading-relaxed mb-6 font-sans">
                    "{test.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-gold-500/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center font-bold text-gold-400 text-sm">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide">{test.name}</h4>
                    <p className="text-gray-500 text-[11px] font-mono mt-0.5">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
