import { X, Calendar, Clock, DollarSign, MapPin, CheckCircle, Ticket } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBooking: (booking: Booking) => void;
}

export default function BookingModal({ isOpen, onClose, onAddBooking }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [propertyType, setPropertyType] = useState('Houses');
  const [budgetRange, setBudgetRange] = useState('1 Crore to 3 Crore PKR');
  const [notes, setNotes] = useState('');
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !preferredDate) {
      alert('Please fill out your Name, Phone Number, and Preferred Date.');
      return;
    }

    const uniqueId = 'PPD-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking: Booking = {
      id: uniqueId,
      name,
      email: email || 'No Email Provided',
      phone,
      preferredDate,
      preferredTime: preferredTime || '02:00 PM',
      propertyType,
      budgetRange,
      additionalNotes: notes,
      submittedAt: new Date().toLocaleString()
    };

    onAddBooking(newBooking);
    setTicketNumber(uniqueId);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPreferredDate('');
    setPreferredTime('');
    setNotes('');
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans flex items-center justify-center p-4">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={handleResetAndClose}></div>

      {/* Modal Box */}
      <div 
        className="relative bg-navy-900 border border-gold-500/25 rounded-2xl w-full max-w-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(6,9,23,0.9)] animate-fade-in"
        id="booking-consultation-modal"
      >
        {/* Golden upper trim */}
        <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-700"></div>

        <button 
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg border border-gold-500/10 text-gray-400 hover:text-white bg-navy-950 transition-colors"
          aria-label="Close Booking Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-500 font-bold block mb-1">
                Luxury Real Estate MVP
              </span>
              <h2 className="text-2xl font-serif font-bold text-white tracking-wide">
                Schedule Property Consultation
              </h2>
              <p className="text-gray-400 text-xs mt-1">
                Establish secure communication with senior consultants of Peshawar's trusted agency.
              </p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Muhammad Shah"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                />
              </div>

              {/* Grid 1: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={13}
                    placeholder="e.g., 03435124244"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., custom@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Grid 2: Pref Type & Budgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Property Interest
                  </label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors cursor-pointer"
                  >
                    <option value="Residential Plots">Residential Plots</option>
                    <option value="Houses">Luxury Houses</option>
                    <option value="Commercial Properties">Commercial Properties</option>
                    <option value="Apartments">Luxury Apartments</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors cursor-pointer"
                  >
                    <option value="Under 50 Lakh PKR">Under 50 Lakh PKR</option>
                    <option value="50 Lakh to 1.5 Crore">50 Lakh to 1.5 Crore</option>
                    <option value="1.5 Crore to 4 Crore">1.5 Crore to 4 Crore</option>
                    <option value="4 Crore to 10 Crore">4 Crore to 10 Crore</option>
                    <option value="Above 10 Crore PKR">Above 10 Crore PKR</option>
                  </select>
                </div>
              </div>

              {/* Grid 3: Prefer Date & Prefer Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-500" />
                    Best Hours
                  </label>
                  <input
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Special Instructions / Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Investment Focus or Area Requirements (e.g. DHA, Hayatabad)
                </label>
                <textarea
                  placeholder="Information regarding layout preferences, corner plots or possession timelines..."
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#0B1528] rounded-xl border border-gold-500/15 py-2.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors"
                ></textarea>
              </div>
            </div>

            {/* Note about secure investment */}
            <div className="bg-navy-950 border border-gold-500/10 p-3 rounded-xl mt-4 text-[11px] text-gray-400">
              🔒 <span className="text-gold-400 font-semibold font-display">Tradition of Trust Priority:</span> Your information stays highly confidential and is not shared with any third-party real estate listings.
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full text-center bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold py-3.5 px-5 rounded-xl text-sm uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(197,168,90,0.2)] hover:scale-[1.01] cursor-pointer"
            >
              Submit Verified Booking
            </button>
          </form>
        ) : (
          /* Gold Ticket Receipt */
          <div className="p-8 text-center bg-[#0B1528]">
            <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-4 text-gold-500 animate-pulse">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="text-gold-500 text-xs font-mono tracking-widest uppercase font-bold block mb-1">
              Receipt Verified
            </span>
            <h3 className="text-xl font-serif text-white font-bold tracking-wide">
              Consultation Scheduled!
            </h3>
            <p className="text-gray-400 text-xs mt-2 max-w-sm mx-auto">
              Assalam-o-Alaikum, <span className="text-white font-semibold">{name}</span>. Your online booking has been processed successfully under Pekhawar Property Dealer system.
            </p>

            {/* Luxurious Ticket Receipt Layout */}
            <div className="my-6 border border-dashed border-gold-500/30 bg-navy-900 rounded-xl p-5 text-left relative overflow-hidden">
              <span className="absolute top-0 right-0 p-2 text-[9px] text-[#A3A3A3] font-mono border-l border-b border-gold-500/25 bg-navy-950">
                PPD SECURE PASS
              </span>
              <div className="flex gap-2.5 items-center text-gold-400 mb-3 font-mono text-xs">
                <Ticket className="w-4 h-4" />
                <span>CONFIRMATION ID:</span>
                <span className="text-white font-semibold select-all font-mono tracking-wider">{ticketNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-gray-500">CATEGORY</p>
                  <p className="text-white font-semibold">{propertyType}</p>
                </div>
                <div>
                  <p className="text-gray-500">EST. BUDGET</p>
                  <p className="text-white font-semibold">{budgetRange}</p>
                </div>
                <div>
                  <p className="text-gray-500">DATE SCHEDULED</p>
                  <p className="text-white font-semibold font-mono">{preferredDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">PREFFERED TIME</p>
                  <p className="text-white font-semibold font-mono">{preferredTime || '02:00 PM'}</p>
                </div>
              </div>
              <div className="border-t border-gold-500/10 mt-3 pt-3 flex gap-2 items-center text-[11px] text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-gold-500" />
                <span>Office: University Town, Peshawar</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-slate-400 leading-relaxed bg-[#060917] p-3 rounded-lg border border-gold-500/10">
                Our senior associate will review your query and initiate contacting you at <strong className="text-white">{phone}</strong> within 1 hour.
              </p>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => {
                    const message = encodeURIComponent(`Assalam-o-Alaikum! I just scheduled property consultation under Ticket ${ticketNumber}. Kindly allocate a senior consultant for me.`);
                    window.open(`https://wa.me/923435124244?text=${message}`, '_blank');
                  }}
                  className="bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-2"
                >
                  Confirm on WhatsApp
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="bg-navy-800 hover:bg-navy-700 text-gold-400 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all"
                >
                  Close Receipt
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
