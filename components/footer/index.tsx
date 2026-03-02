"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa6";
import { useLenis } from "lenis/react";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.5 });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black border-t border-white/5 pt-16 md:pt-20 pb-10 px-6 text-white overflow-hidden">
      {/* Teks Background "DEVELOPER" - Responsif */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[25vw] md:text-[20vw] font-black uppercase tracking-tighter leading-none ml-[-5%] md:ml-0">
          Developer
        </h1>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Branding & Email */}
          <div className="max-w-sm w-full">
            <h2 className="text-2xl font-black tracking-tighter mb-4 italic uppercase">
              Ardan.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-medium text-sm md:text-base">
              I build digital products with purpose — combining clean code,
              scalable architecture, and thoughtful design to create impactful
              web experiences that drive real results. Let’s create something
              meaningful together.
            </p>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
                Get in touch
              </h4>
              <a
                href="mailto:ramadhanardan69@email.com"
                className="text-base md:text-lg font-semibold hover:text-gray-400 transition-colors flex items-center gap-2 group break-all md:break-normal"
              >
                ramadhanardan69@gmail.com
                <span className="hidden md:block w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-10"></span>
              </a>
            </div>

            <div className="flex items-center">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                Open for Collaboration
              </span>
            </div>
          </div>

          {/* Address, Navigation & Socials */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-16 w-full md:w-auto">
            {/* Kolom Address */}
            <div className="col-span-1">
              <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">
                Address
              </h4>
              <address className="not-italic text-xs md:text-sm font-semibold text-gray-300 leading-relaxed">
                Pasuruan, East Java
                <br />
                Indonesia
              </address>
            </div>

            {/* Kolom Navigation */}
            <div className="col-span-1">
              <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">
                Navigation
              </h4>
              <ul className="space-y-4 font-semibold text-xs md:text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => lenis?.scrollTo("#home")}
                    className="hover:text-white transition-colors uppercase md:capitalize"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => lenis?.scrollTo("#about")}
                    className="hover:text-white transition-colors uppercase md:capitalize"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => lenis?.scrollTo("#project")}
                    className="hover:text-white transition-colors uppercase md:capitalize"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => lenis?.scrollTo("#faq")}
                    className="hover:text-white transition-colors uppercase md:capitalize"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Kolom Connect */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600 mb-6">
                Connect
              </h4>
              <div className="flex gap-4 md:gap-3 flex-wrap">
                {[
                  {
                    icon: <FaLinkedin size={18} />,
                    href: "https://linkedin.com/in/ardan-ramadhan-5a12a537b",
                  },
                  {
                    icon: <FaGithub size={18} />,
                    href: "https://github.com/Ardan2008",
                  },
                  {
                    icon: <FaInstagram size={18} />,
                    href: "https://instagram.com/xrdsn404",
                  },
                  {
                    icon: <FaDiscord size={18} />,
                    href: "https://discord.com/users/ardan07457",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-[10px] md:text-sm font-medium mb-1 md:mb-0">
              © {currentYear} Ardan.
            </p>
            <span className="text-white/40 italic text-[10px] md:text-xs block md:inline">
              Crafted with passion & precision.
            </span>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            <div className="p-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
              <FaArrowUp size={14} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
