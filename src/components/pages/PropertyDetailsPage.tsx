import { useState, FormEvent } from 'react';
import { Property, Inquiry } from '../../types';
import { PROPERTIES_DATA } from '../../data/properties';
import { MapPin, Phone, MessageSquare, Heart, Share2, ShieldCheck, Mail, Send, CheckSquare, Sparkles } from 'lucide-react';

interface PropertyDetailsPageProps {
  property: Property | null;
  onAddInquiry: (inquiry: Inquiry) => void;
  setCurrentTab: (tab: string) => void;
}

export default function PropertyDetailsPage({ property, onAddInquiry, setCurrentTab }: PropertyDetailsPageProps) {
  // Safe Fallback to first property if null
  const selectedProp = property || PROPERTIES_DATA[0];

  // Gallery Active Image
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Inquiry form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Assalam-o-Alaikum, I am highly interested in "${selectedProp.title}" located in ${selectedProp.location}. Please share complete details regarding total demand, layout plans, and possession timeline.`);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please fill out your Name and Phone Number.');
      return;
    }

    const uniqueCode = 'INQ-' + Math.floor(100000 + Math.random() * 900000);
    const newInquiry: Inquiry = {
      id: uniqueCode,
      propertyId: selectedProp.id,
      propertyName: selectedProp.title,
      name,
      email: email || 'No Email Provided',
      phone,
      message,
      submittedAt: new Date().toLocaleString()
    };

    onAddInquiry(newInquiry);
    setInquiryCode(uniqueCode);
    setIsSubmitted(true);
  };

  const handleWhatsAppContact = () => {
    const formattedMsg = encodeURIComponent(`Assalam-o-Alaikum! I am interested in property "${selectedProp.title}" listed for ${selectedProp.priceLabel}. Please share further steps.`);
    window.open(`https://wa.me/923435124244?text=${formattedMsg}`, '_blank');
  };

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(selectedProp.address || selectedProp.location + ', Peshawar')}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-navy-950 font-sans text-gray-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link Button */}
        <button
          onClick={() => {
            setCurrentTab('properties');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors uppercase tracking-wider"
        >
          ← Back to Peshawar Listings
        </button>

        {/* 1. Header Area with Title & Price banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-gold-500/10 pb-6 mb-8">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold-500 text-navy-950 text-[10px] font-mono uppercase font-bold px-3 py-1 rounded">
                {selectedProp.category}
              </span>
              <span className="bg-navy-900 border border-gold-500/20 text-white text-[10px] font-mono uppercase font-bold px-3 py-1 rounded">
                FOR {selectedProp.type === 'Buy' ? 'SALE' : 'RENT'}
              </span>
              <span className="text-emerald-400 text-xs font-mono font-bold flex items-center gap-1 ml-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {selectedProp.status}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              {selectedProp.title}
            </h1>
            
            <p className="flex items-center gap-1.5 text-xs text-gray-400 mt-2 font-display">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              <span>{selectedProp.address}</span>
            </p>
          </div>

          <div className="bg-navy-900 border border-gold-500/15 p-4 rounded-2xl text-left lg:text-right shrink-0 min-w-[220px]">
            <span className="text-gray-500 text-[10px] font-mono uppercase block">Total Asking Price / Demand</span>
            <strong className="text-2xl sm:text-3xl text-white font-mono font-bold gold-gradient-text">
              {selectedProp.priceLabel}
            </strong>
            <p className="text-[10px] text-gray-400 mt-1 font-sans">
              * Rates are custom-verified directly with property registers
            </p>
          </div>
        </div>

        {/* 2. Main Grid: Gallery & Left Details Columns vs Right Inquiry Card Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (8 cols): Gallery + description + features */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            
            {/* Gallery Section */}
            <div className="flex flex-col gap-4">
              {/* Primary large visual display */}
              <div className="h-[320px] sm:h-[450px] w-full rounded-2xl overflow-hidden border border-gold-500/10 bg-navy-900 relative">
                <img
                  src={selectedProp.images[activeImageIndex] || selectedProp.images[0]}
                  alt="Primary Property Presentation"
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Thumbnails Row */}
              {selectedProp.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1.5">
                  {selectedProp.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`h-16 w-24 sm:h-20 sm:w-32 rounded-lg overflow-hidden border shrink-0 transition-opacity ${
                        activeImageIndex === i
                          ? 'border-gold-500 opacity-100 ring-1 ring-gold-500/50'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Property thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs highlights bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-navy-900 border border-gold-500/10 rounded-2xl p-5 text-center">
              <div>
                <span className="text-gray-500 text-[10px] font-mono uppercase block">Total Area</span>
                <strong className="text-base text-gold-400 font-bold font-display">{selectedProp.area}</strong>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-mono uppercase block">Property Type</span>
                <strong className="text-base text-gold-400 font-bold font-display">{selectedProp.category}</strong>
              </div>
              {selectedProp.bedrooms ? (
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase block">Total Bedrooms</span>
                  <strong className="text-base text-gold-400 font-bold font-display">{selectedProp.bedrooms} Master Beds</strong>
                </div>
              ) : (
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase block">Zoning Status</span>
                  <strong className="text-base text-gold-400 font-bold font-display">Commercial Ready</strong>
                </div>
              )}
              {selectedProp.bathrooms ? (
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase block">Bathrooms</span>
                  <strong className="text-base text-gold-400 font-bold font-display">{selectedProp.bathrooms} attached</strong>
                </div>
              ) : (
                <div>
                  <span className="text-gray-500 text-[10px] font-mono uppercase block">Possession Status</span>
                  <strong className="text-base text-gold-400 font-bold font-display">Instant Transfer</strong>
                </div>
              )}
            </div>

            {/* Complete Description */}
            <div className="bg-navy-900 border border-gold-500/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-serif font-bold text-white mb-4 tracking-wide border-b border-gold-500/15 pb-2.5">
                Executive Overview & Description
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                {selectedProp.description}
              </p>
            </div>

            {/* Amenities & Features Checklists */}
            <div className="bg-navy-900 border border-gold-500/5 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-serif font-bold text-white mb-4 tracking-wide border-b border-gold-500/15 pb-2.5">
                Premier Features & Structural Amenities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {selectedProp.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckSquare className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Integration Container */}
            <div className="bg-navy-900 border border-gold-500/5 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4 border-b border-gold-500/10 pb-2.5">
                <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                  Urban Location & Neighbourhood
                </h3>
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-wider">
                  📍 UNIVERSITY ROAD BASE
                </span>
              </div>
              
              <p className="text-[11px] sm:text-xs text-gray-400 mb-4 leading-relaxed">
                This asset holds a key geographical advantage inside Peshawar, safe from legal encroachments and located directly within premium security patrol grids. Below is the active regional overview frame:
              </p>

              {/* Map Iframe */}
              <div className="h-72 w-full rounded-xl overflow-hidden border border-gold-500/10 relative">
                <iframe
                  title="Peshawar Property Location Map Overview"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  id="property-location-map-frame"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Agent info, Contact direct triggers, inquiry form */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full text-left">
            
            {/* Agent Contact Card */}
            <div className="bg-navy-900 border border-gold-500/15 rounded-2xl p-6 shadow-md">
              <span className="text-gold-500 text-[9px] font-mono tracking-widest uppercase font-bold block mb-1">
                ASSIGNED CONSULTANT
              </span>
              
              <div className="flex items-center gap-4 mb-5 border-b border-gold-500/5 pb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-gold-500/15 bg-navy-950 shrink-0">
                  <img src={selectedProp.agent.image} alt={selectedProp.agent.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-white tracking-wide">{selectedProp.agent.name}</h4>
                  <p className="text-gray-400 text-xs font-mono">Senior Partner Associate</p>
                  <p className="text-[11px] text-gold-500 font-mono mt-0.5">PPD Registered Agent</p>
                </div>
              </div>

              {/* Quick call buttons */}
              <div className="space-y-3">
                <a
                  href={`tel:${selectedProp.agent.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full bg-[#101C38] hover:bg-navy-800 border border-gold-500/20 hover:border-gold-500/60 text-gold-400 font-bold py-3 px-4 rounded-xl text-xs sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all transition-duration-300"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>Call: {selectedProp.agent.phone}</span>
                </a>

                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all transition-duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-navy-900 border border-gold-500/15 rounded-2xl p-6 shadow-md relative">
              <span className="absolute top-4 right-4 p-1 rounded-full bg-gold-400/5 text-gold-400">
                <ShieldCheck className="w-4 h-4" />
              </span>

              <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2 tracking-wide">
                Direct Asset Inquiry
              </h3>
              <p className="text-gray-400 text-xs mb-5">
                Leave your coordinates and we'll schedule video tours or physically verify papers together.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Malik Afridi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2 px-3 text-white text-xs sm:text-xs focus:outline-none focus:border-gold-500/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 03459587887"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2 px-3 text-white text-xs sm:text-xs focus:outline-none focus:border-gold-500/50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. malik@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2 px-3 text-white text-xs sm:text-xs focus:outline-none focus:border-gold-500/50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2 px-3 text-white text-xs sm:text-xs focus:outline-none focus:border-gold-500/50 leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-widest transition-all shadow-[0_4px_10px_rgba(197,168,90,0.15)] flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Secure Inquiry</span>
                  </button>
                </form>
              ) : (
                /* Success receipt */
                <div className="text-center py-6 bg-[#060917] rounded-xl p-4 border border-gold-500/30">
                  <span className="text-3xl text-gold-400 block mb-2">🎉</span>
                  <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">Inquiry Active!</h4>
                  <p className="text-gray-400 text-[11px] mt-1.5 leading-relaxed">
                    Assalam-o-Alaikum, <span className="text-white font-semibold">{name}</span>. Your inquiry for other detailed assets has been registered.
                  </p>
                  
                  <div className="bg-navy-900 border border-gold-500/10 p-3 rounded-lg my-4 text-left text-xs">
                    <p className="text-gray-500 font-mono text-[9px]">CONFIRMATION ID</p>
                    <p className="text-white font-mono font-bold tracking-wider text-sm select-all">{inquiryCode}</p>
                    <p className="text-[10px] text-gray-400 mt-2 font-display">📍 University Road Registry Cell</p>
                  </div>

                  <p className="text-[11px] text-slate-500 mt-2">
                    Our lead desk associate will contact you on <strong className="text-white">{phone}</strong> shortly.
                  </p>

                  <div className="flex gap-2 justify-center mt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-navy-800 text-gold-400 font-bold px-3 py-1.5 rounded-lg text-[10px]"
                    >
                      New Inquiry
                    </button>
                    <button
                      onClick={handleWhatsAppContact}
                      className="bg-[#25D366] text-white font-bold px-3 py-1.5 rounded-lg text-[10px] flex items-center gap-1"
                    >
                      Confirm WA
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
