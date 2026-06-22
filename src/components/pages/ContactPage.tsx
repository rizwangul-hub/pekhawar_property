import { MapPin, Phone, MessageSquare, Clock, Globe, Send, ShieldCheck, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Inquiry } from '../../types';

interface ContactPageProps {
  onAddInquiry: (inquiry: Inquiry) => void;
}

export default function ContactPage({ onAddInquiry }: ContactPageProps) {
  // Local form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Consultation Inquiry');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) {
      alert('Please fill in your Name, Phone Number, and Message fields.');
      return;
    }

    const uniqueId = 'PPD-MSG-' + Math.floor(100000 + Math.random() * 900000);
    const newInquiry: Inquiry = {
      id: uniqueId,
      name,
      email: email || 'No Email Provided',
      phone,
      message: `[Subject: ${subject}] ${message}`,
      submittedAt: new Date().toLocaleString()
    };

    onAddInquiry(newInquiry);
    setTicketId(uniqueId);
    setSuccess(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('General Consultation Inquiry');
    setMessage('');
    setSuccess(false);
  };

  // Google Maps URL focused on University Road, University Town, Peshawar, Pakistan
  const mapUrl = "https://maps.google.com/maps?q=University%20Road,%20University%20Town,%20Peshawar,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="bg-navy-950 font-sans text-gray-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Title */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-500 font-bold block mb-1">
            Establish Contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
            Connect with Our Advisory Desks
          </h1>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-3"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Visit our corporate office on University Road or connect with our senior agents directly on phone. We are ready to secure your Peshawar real estate deals.
          </p>
        </div>

        {/* Major Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Block (5 cols): Office coordinates details */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* Headquarters Card */}
            <div className="bg-[#101C38] border border-gold-500/15 p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
              <span className="text-gold-500 text-[10px] font-mono tracking-widest uppercase font-bold block">
                MAIN HEADQUARTERS
              </span>
              
              <div className="flex gap-3.5 items-start">
                <MapPin className="w-5.5 h-5.5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">Pekhawar Office Location</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                    University Road, University Town, Peshawar, Khyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </div>

              <div className="border-t border-gold-500/10 pt-4 flex gap-3.5 items-start">
                <Clock className="w-5.5 h-5.5 text-gold-500 shrink-0" />
                <div>
                  <h4 className="font-serif font-semibold text-white text-sm">Business Operations Hours</h4>
                  <p className="text-gray-400 text-xs mt-1">
                    Monday - Saturday: <strong className="text-white">09:00 AM - 08:00 PM</strong>
                  </p>
                  <p className="text-gray-500 text-[11px] font-sans mt-0.5">
                    Sunday: Closed (Available for emergency bookings only)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-[#101C38] border border-gold-500/15 p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
              <span className="text-gold-500 text-[10px] font-mono tracking-widest uppercase font-bold block">
                TELECOMMUNICATION desk
              </span>

              {/* Primary phone */}
              <div className="flex items-center justify-between border-b border-gold-500/5 pb-3">
                <div className="flex gap-3 items-center">
                  <Phone className="w-4.5 h-4.5 text-gold-500" />
                  <div>
                    <p className="text-gray-400 text-xs">Primary Call Desk</p>
                    <p className="text-white font-mono text-xs sm:text-sm font-semibold select-all">0345-9587887</p>
                  </div>
                </div>
                <a
                  href="tel:03459587887"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all uppercase tracking-wider"
                >
                  Call Now
                </a>
              </div>

              {/* Secondary phone */}
              <div className="flex items-center justify-between border-b border-gold-500/5 pb-3">
                <div className="flex gap-3 items-center">
                  <Phone className="w-4.5 h-4.5 text-gold-500" />
                  <div>
                    <p className="text-gray-400 text-xs">Secondary Support</p>
                    <p className="text-white font-mono text-xs sm:text-sm font-semibold select-all">0343-5124244</p>
                  </div>
                </div>
                <a
                  href="tel:03435124244"
                  className="bg-gold-500/10 border border-gold-500/35 hover:bg-navy-800 text-gold-400 font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all uppercase tracking-wider"
                >
                  Call Desk
                </a>
              </div>

              {/* WhatsApp direct */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <MessageSquare className="w-4.5 h-4.5 text-[#25D366]" />
                  <div>
                    <p className="text-gray-400 text-xs">WhatsApp Helpline (24/7)</p>
                    <p className="text-white font-mono text-xs sm:text-sm font-semibold select-all">+92 343 5124244</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const message = encodeURIComponent("Assalam-o-Alaikum Pekhawar Property Dealer, I want to discuss a real estate deal in Peshawar. Please share some inputs.");
                    window.open(`https://wa.me/923435124244?text=${message}`, '_blank');
                  }}
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white font-bold px-3 py-1.5 rounded-lg text-[10px] transition-all uppercase tracking-wider"
                >
                  Chat WA
                </button>
              </div>
            </div>

            {/* Email card */}
            <div className="bg-[#101C38] border border-gold-500/11 p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4.5 h-4.5 text-gold-500" />
                <div>
                  <p className="text-gray-400 text-xs">Administrative Email</p>
                  <a href="mailto:info@pekhawarproperties.com" className="text-white text-xs font-semibold hover:underline">
                    info@pekhawarproperties.com
                  </a>
                </div>
              </div>
              <span className="text-[10px] font-mono text-gray-500">Fast Response</span>
            </div>

          </div>

          {/* Right Block (7 cols): Contact Form */}
          <div className="lg:col-span-7 w-full text-left">
            <div className="bg-[#101C38] border border-gold-500/15 p-6 sm:p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-serif font-bold text-white tracking-wide mb-2">
                Send a Secure Message
              </h3>
              <p className="text-gray-400 text-xs mb-6">
                Fill in your coordinates and our representative will call you directly to set up onground visits.
              </p>

              {!success ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Haji Muhammad Shah"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 03435124244"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. shah@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Subject / Real Estate Requirement
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 cursor-pointer"
                    >
                      <option value="General Consultation Inquiry">General Consultation Inquiry</option>
                      <option value="Buy Residential/Commercial Plot">Buy Residential/Commercial Plot</option>
                      <option value="Buy Luxury House / Villa">Buy Luxury House / Villa</option>
                      <option value="List My Property for Sale">List My Property for Sale</option>
                      <option value="Search Apartments / Rent options">Search Apartments / Rent options</option>
                      <option value="Join Investor Circles Advisory">Join Investor Circles Advisory</option>
                    </select>
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Detailed Message / Requirements *
                    </label>
                    <textarea
                      required
                      placeholder="Please outline the sector area of interest, estimated budget range, corner configuration, etc..."
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#060917] border border-gold-500/15 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="bg-navy-950 p-3.5 rounded-xl border border-gold-500/5 flex items-center gap-2 text-xs text-gray-400">
                    <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0" />
                    <span>Your direct correspondence is encrypted and guarded manually. No spam, ever.</span>
                  </div>

                  {/* Submit Card */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all shadow-[0_4px_15px_rgba(197,168,90,0.2)] mt-2 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Certified Message</span>
                  </button>
                </form>
              ) : (
                /* Success Receipt */
                <div className="text-center py-10 bg-[#060917] rounded-xl p-6 border border-gold-500/30">
                  <span className="text-4xl text-gold-400 block mb-3">🎉</span>
                  <blockquote className="text-gold-500 text-xs font-mono tracking-widest uppercase font-bold block mb-1">
                    TRANSMISSION SUCCESS
                  </blockquote>
                  <h4 className="text-xl font-serif font-bold text-white tracking-wide">
                    Message Logged!
                  </h4>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    Assalam-o-Alaikum, <span className="text-white font-semibold">{name}</span>. Your correspondence under Pekhawar Property Dealer system is locked and certified.
                  </p>

                  <div className="bg-navy-900 border border-gold-500/10 p-4 rounded-lg my-6 text-left text-xs font-mono">
                    <span className="text-gray-500 text-[10px] uppercase font-bold">MESSAGE RECORD ID:</span>
                    <p className="text-white font-bold tracking-wider text-sm sm:text-base select-all mt-0.5">{ticketId}</p>
                    <p className="text-[10px] text-gray-400 mt-2 font-display">📍 University Road, Area Office</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs text-slate-400 bg-navy-950 p-3 rounded-lg border border-gold-500/5 leading-relaxed">
                      Our front associate will review the details and reach you on <strong className="text-white">{phone}</strong> within 1 hour to verify credentials.
                    </p>

                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={handleResetForm}
                        className="bg-[#101C38] border border-gold-500/20 text-gold-400 text-xs font-semibold py-2 px-4 rounded-xl hover:bg-navy-800 transition-all font-mono"
                      >
                        Write New Message
                      </button>
                      <button
                        onClick={() => {
                          const messageText = encodeURIComponent(`Assalam-o-Alaikum! I just logged a query with Pekhawar Property Dealer, reference ID: ${ticketId}`);
                          window.open(`https://wa.me/923435124244?text=${messageText}`, '_blank');
                        }}
                        className="bg-[#25D366] text-white text-xs font-semibold py-2 px-4 rounded-xl hover:bg-[#20ba56] transition-all font-mono flex items-center gap-1.5"
                      >
                        Confirm WA
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Embedded Map Section Card */}
        <div className="bg-[#101C38] border border-gold-500/15 p-6 sm:p-8 rounded-2xl text-left">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gold-500/10 pb-4 mb-6">
            <div>
              <h3 className="font-serif font-bold text-white text-lg sm:text-xl">Interactive Road Map coordinates</h3>
              <p className="text-gray-400 text-xs mt-1">Visit our physical headquarters in the heart of University Town Peshawar.</p>
            </div>
            <a
              href="https://maps.google.com/?q=University%20Road,%20University%20Town,%20Peshawar"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gold-400 font-bold hover:underline font-mono"
            >
              Open Large Map View ↗
            </a>
          </div>

          <div className="h-[350px] w-full rounded-xl overflow-hidden border border-gold-500/10 bg-navy-950 relative shadow-inner">
            <iframe
              title="Pekhawar Property Principal Location Map Frame"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              id="pekhawar-principal-location-map"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
