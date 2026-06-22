import { Shield, Sparkles, Goal, Compass, Eye, Heart, HelpCircle, Award, Users, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Trust',
      desc: 'Our absolute foundation element. We maintain zero asymmetric margins, present verified registries, and guarantee absolute reliability on cash or bank transfers.',
      icon: <Shield className="w-5 h-5 text-gold-500" />
    },
    {
      title: 'Transparency',
      desc: 'All agreements, ownership parameters, possession timelines, and legal document states are discussed in plain words before entering any downpayment protocols.',
      icon: <Goal className="w-5 h-5 text-gold-500" />
    },
    {
      title: 'Professionalism',
      desc: 'Indigenous Peshawar experts who manage layout logistics, coordinate with municipal registry officials, and guard client investments professionally.',
      icon: <Award className="w-5 h-5 text-gold-500" />
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Rooted in traditional hospitality. We walk you through every micro-step of holding plots, and we remain helper resources long after key handovers are finalized.',
      icon: <Heart className="w-5 h-5 text-gold-500" />
    }
  ];

  return (
    <div className="bg-navy-950 font-sans text-gray-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block mb-1">
            Legacy & Heritage
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
            About Pekhawar Property Dealer
          </h1>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-3"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Establishing secure investment blueprints in Peshawar with a dedication to absolute transparency and client growth.
          </p>
        </div>

        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left: Interactive Content */}
          <div className="lg:col-span-7 text-left flex flex-col gap-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[10px] font-mono uppercase text-gold-300 font-semibold tracking-wider">ESTABLISHED BROKERAGE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
              Helping You Make Informed & <br />
              <span className="gold-gradient-text">Profitable Real Estate Decisions</span>
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2">
              Pekhawar Property Dealer is a premier real estate consultancy built around custom customer requirements. Operating directly out of University Road, University Town, Peshawar. The agency maintains a solid presence representing returning expatriates, domestic builders, and private investors.
            </p>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              We understand that purchasing residential plots or starting high-margin commercials is a major decision of effort and wealth. Because of this, we inspect real estate allocations on land coordinates personally, bringing legal ease and verified registries to every customer deal.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="flex gap-2.5 items-start text-xs text-gray-400 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Deep native familiarity with all sectors in DHA Peshawar, Hayatabad, and Regi.</span>
              </div>
              <div className="flex gap-2.5 items-start text-xs text-gray-400 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>Assisting overseas clients safely through digital plot walkthroughs and paperwork escrow.</span>
              </div>
            </div>
          </div>

          {/* Right: Modern Collage Design mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/15 bg-navy-900 shadow-2xl p-6 sm:p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl"></div>
              
              <h3 className="font-serif font-bold text-lg text-white mb-4 tracking-wide text-left">Peshawari Real Estate Pillars</h3>
              
              <ul className="space-y-4 text-left text-xs font-mono">
                <li className="flex items-center justify-between border-b border-gold-500/5 pb-3">
                  <span className="text-gray-400">Headquarters location</span>
                  <span className="text-white font-semibold text-right">University Road, Town</span>
                </li>
                <li className="flex items-center justify-between border-b border-gold-500/5 pb-3">
                  <span className="text-gray-400">Active Service Area</span>
                  <span className="text-white font-semibold text-right">Khyber Pakhtunkhwa</span>
                </li>
                <li className="flex items-center justify-between border-b border-gold-500/5 pb-3">
                  <span className="text-gray-400">Registries check</span>
                  <span className="text-emerald-400 font-bold text-right">✓ SECURE & DIRECT</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span className="text-gray-400">Primary Contact Desk</span>
                  <span className="text-gold-500 font-bold select-all text-right">0345-9587887</span>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-gold-500/10 text-left text-xs text-gray-400 italic">
                "We carry a legacy centered on traditional hospitality and absolute transaction safety."
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
          {/* Mission */}
          <div className="bg-[#101C38] border border-gold-500/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
              Our Sovereign Mission
            </h3>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              To deliver transparent, trustworthy, and profitable real estate services that empower individuals to realize their property goals while securing their financial future. Keep Peshawar capital deployments clean, efficient, and direct.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#101C38] border border-gold-500/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
              Our Ultimate Vision
            </h3>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              To become the most trusted and customer-focused real estate agency in Peshawar, KP, and eventually Pakistan. Pioneering secure digital verifications to assist returning overseas citizens remote-buy properties with piece of mind.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block mb-1">
            Foundation Pillars
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2 tracking-wide text-center">
            Our Sovereign Core Values
          </h3>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-2 mb-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-navy-900 border border-gold-500/5 p-6 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-base font-serif font-bold text-white mb-2 tracking-wider uppercase font-display">{value.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
