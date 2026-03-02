"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-6xl mx-auto px-6 pt-32 pb-20"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative"
        >
          {/* Badge Nama */}
          <motion.p
            className="text-gray-800 text-3xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Hello! I&#39;m Ardan.
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Junior Web Developer <br className="hidden md:block" />
            crafting clean code &{" "}
            <span className="text-gray-400 italic font-serif">
              scalable solutions
            </span>
          </motion.h1>

          {/* Deskripsi & CTA Container */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-12 gap-8">
            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I specialize in building scalable and high-performance websites
              using <span className="text-black font-semibold">Laravel</span> as
              my core framework. With a strong focus on clean architecture,
              maintainable code, and performance optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="/assets/CV_Ardan_Ramadhan_Putra_Hidayat.pdf"
                download="CV_Ardan_Ramadhan_Putra_Hidayat.pdf"
                className="group relative bg-black text-white px-8 py-5 rounded-full font-bold flex items-center justify-center gap-3 overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">Download CV</span>
                <FaDownload className="relative h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
