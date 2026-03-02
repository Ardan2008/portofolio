"use client";

import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  scrollToSection: (section: string) => void;
};

const message = encodeURIComponent(
  "Hallo, saya tertarik dengan portofolio Anda!"
);

const MobileMenu = ({
  isOpen,
  setIsOpen,
  scrollToSection,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40 bg-transparent" 
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mx-auto mt-4 w-[calc(100%-2rem)] p-4 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl z-50 md:hidden border border-gray-200"
          >
            <div className="flex flex-col space-y-2">
              {["Home", "About", "Projects", "FAQ"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setIsOpen(false);
                  }}
                  className="relative text-center text-sm text-gray-500 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:text-black active:scale-95"
                >
                  {item}
                </button>
              ))}

              <div className="pt-2">
                <a
                  href={`https://wa.me/6288217934130?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-black text-white text-sm text-center font-bold py-4 px-6 rounded-2xl hover:bg-gray-800 transition-all shadow-lg active:scale-95"
                >
                  Let&#39;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;