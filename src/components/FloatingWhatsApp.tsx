import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show visual ping after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Assalam-o-Alaikum Pekhawar Property Dealer, I am interested in property opportunities in Peshawar. Please share some available listings.");
    window.open(`https://wa.me/923435124244?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-[#101C38] border border-gold-500/30 text-white rounded-2xl p-4 shadow-2xl max-w-xs text-sm border-l-4 border-l-gold-500"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xs font-semibold px-1"
            >
              ×
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
              <span className="font-semibold text-gold-400">Pekhawar Online Support</span>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Assalam-o-Alaikum! Looking for plots, houses or smart investment consultancy in Peshawar? Let's discuss on WhatsApp.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="mt-2.5 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-medium py-1.5 px-3 rounded-lg text-xs flex items-center justify-center gap-2 transition-all transition-duration-300 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.012-5.091-2.854-6.936-1.841-1.84-4.29-2.853-6.918-2.853-5.441 0-9.866 4.413-9.87 9.832-.001 1.777.464 3.513 1.348 5.044l-.986 3.606 3.692-.968zm11.39-7.584c-.31-.155-1.838-.908-2.126-1.01-.288-.105-.497-.155-.706.155-.21.314-.81.1.81-1.22.42-.418.105-.31-.156-.465-.262-.155-1.043-.384-1.986-1.226-.733-.655-1.229-1.464-1.373-1.719-.143-.255-.015-.393.111-.518.115-.112.263-.31.394-.465.131-.155.176-.265.263-.44.088-.175.044-.33-.021-.464-.067-.135-.5-.1.498-1.206-.484.095-.21-.314-.497-.333-.707-.02-.952.127-.131.623-1.44.864-1.83 1.306-1.83 2.508 0 .863.31 1.696.536 2.005.226.31 2.399 3.662 5.811 5.136.812.35 1.446.56 1.94.717.815.26 1.558.224 2.146.136.654-.1 1.838-.75 2.1-1.472.261-.72.261-1.34.183-1.472-.078-.13-.288-.207-.597-.362z" />
              </svg>
              Chat on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <a
          href="tel:03459587887"
          className="bg-gold-500 hover:bg-gold-600 text-navy-950 p-3.5 rounded-full shadow-2xl transition-all duration-300 md:flex items-center justify-center border border-gold-300/30 hover:scale-105 active:scale-95 group relative"
          title="Call Now (0345-9587887)"
        >
          <Phone className="w-5.5 h-5.5 animate-pulse" />
          <span className="absolute right-14 bg-navy-900 text-gold-300 border border-gold-500/30 text-xs font-semibold py-1 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:inline">
            Call Primary: 0345-9587887
          </span>
        </a>

        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20ba56] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 relative group"
          id="whatsapp-floating-btn"
          aria-label="Contact Pekhawar Real Estate on WhatsApp"
        >
          <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.012-5.091-2.854-6.936-1.841-1.84-4.29-2.853-6.918-2.853-5.441 0-9.866 4.413-9.87 9.832-.001 1.777.464 3.513 1.348 5.044l-.986 3.606 3.692-.968zm11.39-7.584c-.31-.155-1.838-.908-2.126-1.01-.288-.105-.497-.155-.706.155-.21.314-.81.1.81-1.22.42-.418.105-.31-.156-.465-.262-.155-1.043-.384-1.986-1.226-.733-.655-1.229-1.464-1.373-1.719-.143-.255-.015-.393.111-.518.115-.112.263-.31.394-.465.131-.155.176-.265.263-.44.088-.175.044-.33-.021-.464-.067-.135-.5-.1.498-1.206-.484.095-.21-.314-.497-.333-.707-.02-.952.127-.131.623-1.44.864-1.83 1.306-1.83 2.508 0 .863.31 1.696.536 2.005.226.31 2.399 3.662 5.811 5.136.812.35 1.446.56 1.94.717.815.26 1.558.224 2.146.136.654-.1 1.838-.75 2.1-1.472.261-.72.261-1.34.183-1.472-.078-.13-.288-.207-.597-.362z" />
          </svg>
          <span className="absolute right-14 bg-navy-900 text-gold-300 border border-gold-500/30 text-xs font-semibold py-1 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:inline">
            WhatsApp Pekhawar Support
          </span>
        </button>
      </div>
    </div>
  );
}
