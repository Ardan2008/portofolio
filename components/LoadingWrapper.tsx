"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["DEVELOPING", "CREATING", "RENDERING", "SYSTEM READY"];

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (index === words.length - 1) {
      const exitTimeout = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(exitTimeout);
    }
    const timeout = setTimeout(() => setIndex(index + 1), 1500);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <>
      <AnimatePresence mode="sync">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          >
            {/* Grainy Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Text Animation */}
            <div className="relative z-10 overflow-hidden h-12 flex flex-col items-center px-4 w-full text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={words[index]}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  // Penyesuaian: text size lebih kecil di mobile agar tracking 0.5em tidak overflow
                  className="text-white font-mono text-lg md:text-xl tracking-[0.3em] md:tracking-[0.5em] font-light uppercase"
                >
                  {words[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Bottom Info Section - Responsif */}
            <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 right-6 md:right-12 z-10 flex flex-col md:flex-row justify-between items-center md:items-end border-b border-gray-300/10 pb-4 gap-6 md:gap-0">
              <div className="space-y-1 text-center md:text-left">
                <p className="text-[10px] text-gray-300/40 font-mono tracking-tighter uppercase">Based in Indonesia</p>
                <p className="text-[10px] md:text-xs text-gray-300 font-mono font-medium tracking-widest">ARDAN™ — PORTFOLIO 2026</p>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-2">
                <div className="w-24 md:w-32 h-[1px] bg-gray-300/10 relative overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 bg-white shadow-[0_0_12px_#fff]"
                  />
                </div>
                <p className="text-[9px] md:text-[10px] text-gray-300/60 font-mono italic uppercase">Syncing_Data...</p>
              </div>
            </div>

            {/* Bulatan Dekoratif - Responsif */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                // Penyesuaian: Ukuran lingkaran mengikuti lebar layar di mobile (vw) dan tinggi di desktop (vh)
                className="w-[80vw] h-[80vw] md:w-[80vh] md:h-[80vh] border border-gray-300 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          y: isLoading ? 20 : 0 
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.8 
        }}
        style={{ pointerEvents: isLoading ? "none" : "auto" }}
      >
        {children}
      </motion.div>
    </>
  );
}