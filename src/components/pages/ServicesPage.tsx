import { CheckCircle2, Phone, Sparkles, Building, ArrowUpRight, Search, Shield, Percent, Scale, ClipboardCheck } from 'lucide-react';

interface ServicesPageProps {
  onOpenBookingModal: () => void;
  setCurrentTab: (tab: string) => void;
}

export default function ServicesPage({ onOpenBookingModal, setCurrentTab }: ServicesPageProps) {
  
  const servicesList = [
    {
      id: 'buy',
      title: 'Property Buying Assistance',
      icon: <Building className="w-6 h-6 text-gold-500" />,
      tagline: 'Secure, Title-Cleared Acquisitions',
      desc: 'We assist you in selecting and buying prime homes, luxury villas, and files or commercial shops across Peshawar. Our expert team inspects property documents, checks registry tables manually, and coordinates direct negotiations with sellers to avoid hidden agent percentages.',
      benefits: ['100% Verified Physical Demarcation', 'Direct Seller Meeting Protocols', 'All Registry Papers Audited', 'No Double-Dealer Margins']
    },
    {
      id: 'sell',
      title: 'Instant Property Selling & Marketing',
      icon: <Percent className="w-6 h-6 text-gold-500" />,
      tagline: 'Premium Market Visibility',
      desc: 'Looking to sell your asset in Hayatabad, DHA, or Regi Model Town? We handle premium video presentations and list your assets among certified local and overseas investor networks. Enjoy rapid sales with complete trust and legal transparency.',
      benefits: ['Luxurious Custom Presentation Shots', 'Access to Elite Overseas Investors', 'Full Documentation Review beforehand', 'Fast Transfer Assistance']
    },
    {
      id: 'rent',
      title: 'Corporate & Residential Rentals',
      icon: <Search className="w-6 h-6 text-gold-500" />,
      tagline: 'High-Demand Premium Tenancy',
      desc: 'Find executive flats, high-security family duplexes in University Town, or corporate offices along University Road. We verify security situations and drafts secure agreements according to Khyber Pakhtunkhwa rental laws.',
      benefits: ['Premium High-Security Sectors', 'Legally sound tenancy agreements', 'Immediate utility checkups done', 'Family-ideal quiet sectors preferred']
    },
    {
      id: 'advisory',
      title: 'Property Investment Consultancy',
      icon: <Shield className="w-6 h-6 text-gold-500" />,
      tagline: 'Data-Driven High-Yield Advisory',
      desc: 'Avoid volatile schemes. We layout long-term property investment strategies across upcoming DHA Peshawar sectors, high-yield commercial plazas on Ring Road, or secure plots in Regi Model Town. Build generational wealth with certified guidance.',
      benefits: ['5-Year Capitalization Projections', 'NOC & Regulation Checks', 'High Rental-Yield Assets catalog', 'Safe entry and exit planning']
    },
    {
      id: 'analysis',
      title: 'Comprehensive Peshawar Market Analysis',
      icon: <Scale className="w-6 h-6 text-gold-500" />,
      tagline: 'Accurate Valuation Diagnostics',
      desc: 'Unsure of current market demands or the actual pricing of a plot sector? Receive professional, onground valuation diagnostics backed by historic transaction databases and municipal updates. Speak with Haji Gul Khan directly for clear guidance.',
      benefits: ['No Hype Realistic Appraisals', 'Comparative Market Analysis', 'Municipal Development Insights', 'Over-the-phone Quick Estimates']
    },
    {
      id: 'booking',
      title: 'Online Verification & Remote Booking',
      icon: <ClipboardCheck className="w-6 h-6 text-gold-500" />,
      tagline: 'Designed for Overseas Patrons',
      desc: 'For Peshawar natives residing in the UK, Gulf, or USA. We facilitate remote digital walkthroughs of plots, coordinate live video verifications at municipal registry desks, and manage power of attorney files securely.',
      benefits: ['Live Facetime/WhatsApp Video Walkthroughs', 'Remote Power of Attorney guidelines', 'Secure Bank-to-Bank Escrow facilitation', 'Full Municipal Registry verification reports']
    }
  ];

  return (
    <div className="bg-navy-950 font-sans text-gray-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block mb-1">
            Real Estate Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
            Elite Property Services in Peshawar
          </h1>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-3"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Discover how Pekhawar Property Dealer handles real estate transitions with a classic tradition of trust and transparency on University Road.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesList.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#101C38] border border-gold-500/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md group"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-start justify-between border-b border-gold-500/5 pb-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <span className="text-[9px] font-mono text-gold-500/80 uppercase tracking-widest bg-gold-400/5 py-1 px-2.5 rounded font-bold">
                    PREMIUM SERVICE
                  </span>
                </div>

                <span className="text-gold-400 text-[11px] font-mono uppercase tracking-wider font-semibold block mb-1">
                  {srv.tagline}
                </span>

                <h3 className="text-lg font-serif font-bold text-white tracking-wide mb-3 group-hover:text-gold-400 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-xs leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              {/* Bullet checklist */}
              <div>
                <ul className="space-y-2 mb-6 border-t border-gold-500/5 pt-4 text-xs font-sans text-gray-300">
                  {srv.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (srv.id === 'buy' || srv.id === 'rent') {
                      setCurrentTab('properties');
                    } else {
                      onOpenBookingModal();
                    }
                  }}
                  className="w-full text-center bg-[#13223C] hover:bg-navy-800 text-gold-400 text-xs font-mono py-2.5 px-4 rounded-xl border border-gold-500/15 hover:border-gold-500/40 transition-all uppercase tracking-wider"
                >
                  {srv.id === 'buy' || srv.id === 'rent' ? 'Browse Catalog' : 'Consult with Expert'} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Big Premium CTA Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gold-500/20 bg-navy-900 p-8 sm:p-12 text-left">
          {/* Subtle BG Image */}
          <div className="absolute inset-0 z-0 opacity-15">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Background decoration" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 max-w-4xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/35 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold-400 rotate-12" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gold-300 font-bold">
                  EASY MULTIPHASE VERIFICATION
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                Secure Your Capital Under Our <br />
                <span className="gold-gradient-text">Signature Consultation Framework</span>
              </h2>
              
              <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed max-w-2xl">
                Ready to find high-growth plots or safe luxury houses? Open our interactive session booking portal. Schedule direct coordinates with senior advisory desks of Pekhawar Property Dealer.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenBookingModal}
                className="w-full sm:w-auto text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(197,168,90,0.3)] cursor-pointer"
              >
                Book Online Consultation
              </button>
              
              <a
                href="tel:03459587887"
                className="w-full sm:w-auto text-center bg-[#101C38] hover:bg-[#1C3053] text-gray-300 text-xs font-semibold py-3.5 px-6 rounded-xl border border-gold-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>Call: 0345-9587887</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
