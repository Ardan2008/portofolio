"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/navbar/logo";
import DesktopMenu from "@/components/navbar/dekstopMenu";
import MobileMenu from "@/components/navbar/mobileMenu";
import { useLenis } from "lenis/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        duration: 1.2,
        easing: (x) => 1 - Math.pow(1 - x, 3),
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav
        className={`sticky top-4 z-100 flex justify-between items-center rounded-full py-4 px-6 max-w-6xl mx-auto transition-all duration-300 ${
            isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white/5 backdrop-blur-sm"
        }`}
        >
        <Logo />
        <DesktopMenu scrollToSection={scrollToSection} />
        <button
            className="md:hidden w-10 h-10 flex items-center justify-center border border-black p-2 text-gray-800 rounded-full focus:outline-none hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
        >
            {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrollToSection={scrollToSection}
        />
        </nav>
    </div>
  );
};

export default Navbar;