import { useState, useEffect } from 'react';
import { Property } from '../../types';
import { PROPERTIES_DATA, PESHAWAR_AREAS } from '../../data/properties';
import { Search, Filter, X, SlidersHorizontal, ArrowRight, Grid, LayoutGrid, CheckSquare } from 'lucide-react';

interface PropertiesPageProps {
  onSelectProperty: (property: Property) => void;
  searchFilters: {
    type: string;
    category: string;
    location: string;
    minPrice: string;
    maxPrice: string;
  };
  setSearchFilters: (filters: {
    type: string;
    category: string;
    location: string;
    minPrice: string;
    maxPrice: string;
  }) => void;
}

export default function PropertiesPage({ onSelectProperty, searchFilters, setSearchFilters }: PropertiesPageProps) {
  // Local filter states representing the active selection
  const [dealType, setDealType] = useState(searchFilters.type); // 'all' | 'Buy' | 'Rent'
  const [selectedCategory, setSelectedCategory] = useState(searchFilters.category); // 'all' | category names
  const [selectedArea, setSelectedArea] = useState(searchFilters.location); // 'all' | area names
  const [priceRange, setPriceRange] = useState('all'); // custom price buckets
  const [sizeFilter, setSizeFilter] = useState('all'); // 'all' | '5 Marla' | '10 Marla' | '1 Kanal'
  const [searchQuery, setSearchQuery] = useState('');

  // Sync with global hero search changes if they occur
  useEffect(() => {
    setDealType(searchFilters.type);
    setSelectedCategory(searchFilters.category);
    setSelectedArea(searchFilters.location);
  }, [searchFilters]);

  // Handle clearing all filters
  const handleClearFilters = () => {
    setDealType('all');
    setSelectedCategory('all');
    setSelectedArea('all');
    setPriceRange('all');
    setSizeFilter('all');
    setSearchQuery('');
    setSearchFilters({ type: 'all', category: 'all', location: 'all', minPrice: 'all', maxPrice: 'all' });
  };

  // Filter the properties list
  const filteredProperties = PROPERTIES_DATA.filter((prop) => {
    // Deal Type Filter
    if (dealType !== 'all' && prop.type !== dealType) return false;

    // Category Filter
    if (selectedCategory !== 'all' && prop.category !== selectedCategory) return false;

    // Location Filter
    if (selectedArea !== 'all' && prop.location !== selectedArea) return false;

    // Size Filter
    if (sizeFilter !== 'all' && !prop.area.toLowerCase().includes(sizeFilter.toLowerCase())) return false;

    // Search Query Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesTitle = prop.title.toLowerCase().includes(q);
      const matchesDesc = prop.description.toLowerCase().includes(q);
      const matchesFeat = prop.features.some(f => f.toLowerCase().includes(q));
      if (!matchesTitle && !matchesDesc && !matchesFeat) return false;
    }

    // Price brackets in PKR
    if (priceRange !== 'all') {
      const price = prop.price;
      if (priceRange === 'under-1cr') {
        if (price >= 10000000) return false;
      } else if (priceRange === '1cr-3cr') {
        if (price < 10000000 || price > 30000000) return false;
      } else if (priceRange === '3cr-6cr') {
        if (price < 30000000 || price > 60000000) return false;
      } else if (priceRange === 'above-6cr') {
        if (price < 60000000) return false;
      } else if (priceRange === 'rent-under-1lakh') {
        if (prop.type !== 'Rent' || price > 100000) return false;
      }
    }

    return true;
  });

  return (
    <div className="bg-navy-950 font-sans text-gray-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block mb-1">
            Verified Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
            Peshawar Real Estate Catalog
          </h1>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-3"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Browse our comprehensive selection of secure commercial plots, custom modern duplexes, and residential land plots.
          </p>
        </div>

        {/* Filter & Search Bar Panel */}
        <div className="bg-[#101C38] border border-gold-500/15 rounded-2xl p-6 mb-8 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-gold-400 font-display text-sm font-semibold border-b border-gold-500/10 pb-3">
            <SlidersHorizontal className="w-4 h-4 text-gold-500" />
            <span>CRITICAL TRANSITIONS & FILTERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search DHA, garden, corner..."
                className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-2.5 pl-10 pr-4 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500/50"
              />
            </div>

            {/* Buy / Rent Toggle */}
            <div>
              <select
                value={dealType}
                onChange={(e) => setDealType(e.target.value)}
                className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
              >
                <option value="all">Any Deal Type (Buy & Rent)</option>
                <option value="Buy">For Purchase/Sale</option>
                <option value="Rent">For Rent</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
              >
                <option value="all">All Property Categories</option>
                <option value="Residential Plots">Residential Plots</option>
                <option value="Houses">Luxury Houses</option>
                <option value="Commercial Properties">Commercial Properties</option>
                <option value="Apartments">Apartments</option>
              </select>
            </div>

            {/* Location Dropdown */}
            <div>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
              >
                <option value="all">All Sectors/Locations</option>
                {PESHAWAR_AREAS.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            {/* Price brackets */}
            <div>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-2.5 px-3 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
              >
                <option value="all">Any Price Constraint</option>
                <option value="under-1cr">Under 1 Crore PKR</option>
                <option value="1cr-3cr">1.0 Crore to 3.0 Crore PKR</option>
                <option value="3cr-6cr">3.0 Crore to 6.0 Crore PKR</option>
                <option value="above-6cr">Above 6.0 Crore PKR</option>
                <option value="rent-under-1lakh">Rent: Under 1 Lakh PKR</option>
              </select>
            </div>
          </div>

          {/* Lower Filter Strip: Size select + Reset buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-3.5 border-t border-gold-500/5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-gray-500 font-mono uppercase tracking-wider">Select Size Filter:</span>
              <div className="flex gap-1.5">
                {['all', '5 Marla', '10 Marla', '1 Kanal'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSizeFilter(size)}
                    className={`text-[11px] font-medium tracking-wide uppercase py-1.5 px-3.5 rounded-lg border transition-all ${
                      sizeFilter === size
                        ? 'bg-gold-500/10 border-gold-500 text-gold-400 font-bold'
                        : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-navy-800'
                    }`}
                  >
                    {size === 'all' ? 'All Sizes' : size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleClearFilters}
              className="text-xs text-red-400 hover:text-red-300 font-semibold flex items-center gap-1.5 focus:outline-none py-1.5 px-3 bg-red-500/5 rounded-lg border border-red-500/10 hover:border-red-500/25"
            >
              <X className="w-4 h-4" />
              <span>Clear Search Criteria</span>
            </button>
          </div>
        </div>

        {/* Search feedback counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-gray-400 border-b border-navy-900 pb-3 font-mono">
          <p>
            Showing <strong className="text-gold-400">{filteredProperties.length}</strong> verified assets matching criteria out of <strong className="text-white">{PROPERTIES_DATA.length}</strong> total listings.
          </p>
          <p className="hidden sm:block">📍 University Road Peshawar Base</p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-[#101C38] border border-gold-500/10 rounded-2xl overflow-hidden shadow-xl hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => onSelectProperty(prop)}
              >
                {/* Image Area */}
                <div className="relative h-56 overflow-hidden bg-navy-950">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md border border-gold-500/30 text-gold-400 text-[10px] font-mono tracking-widest uppercase font-bold px-3 py-1 rounded">
                    {prop.category}
                  </span>
                  {/* Deal state overlay */}
                  <span className="absolute top-4 right-4 bg-gold-500 text-navy-950 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded shadow">
                    FOR {prop.type === 'Buy' ? 'SALE' : 'RENT'}
                  </span>
                  
                  <div className="absolute bottom-4 left-4 bg-[#060917]/80 backdrop-blur-sm border border-gold-500/15 py-1 px-3 rounded text-xs font-mono text-white">
                    📍 {prop.location}
                  </div>
                </div>

                {/* Listing Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-xs text-gold-400 font-mono uppercase font-bold tracking-widest">
                      {prop.area}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide mt-1 group-hover:text-gold-400 transition-colors line-clamp-1">
                      {prop.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>

                  {/* Bedroom specification section */}
                  {(prop.bedrooms || prop.bathrooms) && (
                    <div className="flex items-center gap-4 mt-4 border-y border-gold-500/5 py-2 text-xs text-slate-300">
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

                  <div className="flex items-center justify-between mt-5 pt-2">
                    <div>
                      <span className="text-gray-500 text-[10px] font-mono uppercase block">Demand / Price</span>
                      <strong className="text-base sm:text-lg text-white font-mono tracking-tight font-bold gold-gradient-text">
                        {prop.priceLabel}
                      </strong>
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
        ) : (
          /* Empty / No Results State */
          <div className="text-center py-24 bg-[#101C38] rounded-2xl border border-gold-500/10 p-8 max-w-xl mx-auto">
            <span className="text-4xl text-gold-500 block mb-3">🔍</span>
            <h3 className="text-xl font-serif text-white font-bold tracking-wide">No Properties Found</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 leading-relaxed">
              We couldn't find listings matching your specific parameters. Let our agents research Peshawar markets manually to coordinate exclusive raw listings for your target budget.
            </p>
            <div className="flex gap-3 justify-center mt-6">
              <button
                onClick={handleClearFilters}
                className="bg-navy-800 hover:bg-navy-700 text-gold-400 text-xs font-semibold py-2.5 px-5 rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all font-mono"
              >
                Reset All Filters
              </button>
              <a
                href="tel:03459587887"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 text-xs font-bold py-2.5 px-5 rounded-xl transition-all font-mono"
              >
                Call Haji Gul: 0345-9587887
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
