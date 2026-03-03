"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Dipakai khusus untuk modal
import { X, ExternalLink, Code2 } from "lucide-react";

// --- Types ---
type Project = {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  size: "large" | "medium" | "small";
  link: string;
  codeLink?: string;
  description: string;
  hasLivePreview: boolean;
};

// --- Data Projects ---
const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Management",
    category: "Fullstack",
    imageSrc: "/assets/project/Healthyroll.png",
    size: "large",
    link: "#",
    codeLink: "https://github.com/Ardan2008/Healthyroll-Dashboard-Management-System",
    description: "A comprehensive dashboard for managing products with real-time analytics and inventory tracking.",
    hasLivePreview: false,
  },
  {
    id: 2,
    title: "Boe-sportspace-booking",
    category: "Fullstack",
    imageSrc: "/assets/project/Boe-sportspace-booking.png", 
    size: "medium",
    link: "#",
    codeLink: "https://github.com/Ardan2008/boe-sportspace-booking",
    description: "A sports facility reservation platform featuring real-time availability calendars.",
    hasLivePreview: false,
  },
  {
    id: 3,
    title: "Yoo Coffee",
    category: "Frontend",
    imageSrc: "/assets/project/YooCoffee.png",
    size: "small",
    link: "https://ardan2008.github.io/YooCoffee/",
    codeLink: "https://github.com/Ardan2008/YooCoffee",
    description: "A responsive coffee shop website built with modern UI design.",
    hasLivePreview: true,
  },
  {
    id: 4,
    title: "XrdCrypto",
    category: "Frontend",
    imageSrc: "/assets/project/XrdCrypto.png",
    size: "small",
    link: "https://xrd-crypto.vercel.app/",
    codeLink: "https://github.com/Ardan2008/XrdCrypto",
    description: "A modern Web3-focused landing page for crypto insights.",
    hasLivePreview: true,
  },
  {
    id: 5,
    title: "Flowpay",
    category: "Frontend",
    imageSrc: "/assets/project/Flowpay.png",
    size: "medium",
    link: "https://flowpay-sg8m.vercel.app/",
    codeLink: "https://github.com/Ardan2008/Flowpay",
    description: "Specialized maintenance dashboard for laboratory equipment tracking.",
    hasLivePreview: true,
  },
  {
    id: 6,
    title: "Vexlo",
    category: "Frontend",
    imageSrc: "/assets/project/Vexlo.png",
    size: "small",
    link: "https://ardan2008.github.io/vexlo-landing-page/",
    codeLink: "https://github.com/Ardan2008/vexlo-landing-page/tree/main",
    description: "A high-performance digital agency landing page.",
    hasLivePreview: true,
  },
  {
    id: 7,
    title: "Novara",
    category: "Frontend",
    imageSrc: "/assets/project/Novara.png",
    size: "small",
    link: "https://ardan2008.github.io/Novara/",
    codeLink: "https://github.com/Ardan2008/Novara",
    description: "High-fidelity mobile UI kit: clean layout, fluid navigation.",
    hasLivePreview: true,
  },
];

// --- Sub-Component: Project Card (Tanpa Animasi Motion agar Ringan) ---
const ProjectCard = memo(({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) => {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]",
    medium: "md:col-span-1 md:row-span-2 h-[400px] md:h-[600px]",
    small: "md:col-span-1 md:row-span-1 h-[280px]",
  };

  return (
    <div className={`relative group rounded-3xl overflow-hidden bg-zinc-900 ${sizeClasses[project.size]}`}>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={project.id <= 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
            {project.category}
          </span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-[70%]">
            <h3 className={`font-black tracking-tighter leading-none uppercase ${project.size === "large" ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}>
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => onOpen(project)}
            className="flex items-center justify-center bg-white text-black px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 hover:bg-zinc-200 active:scale-95"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

// --- Main Component ---
export default function BentoProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleOpenModal = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleClose = useCallback(() => {
    setIsPreviewOpen(false);
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (selectedProject || isPreviewOpen) ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject, isPreviewOpen]);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-zinc-300" />
            <span className="text-zinc-400 text-xs font-black uppercase tracking-widest">Selected Work</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.85] uppercase">
            Crafting <br /> <span className="text-zinc-200 italic font-serif lowercase">Projects.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={handleOpenModal} />
          ))}
        </div>

        {/* Modal Detail Project DENGAN ANIMASI */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose} 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              />

              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button
                  type="button"
                  aria-label="close"
                  onClick={handleClose}
                  className="absolute top-6 right-6 z-50 p-3 bg-zinc-900 text-white rounded-full hover:scale-110 transition-transform"
                >
                  <X size={20} />
                </button>

                <div className="relative w-full md:w-3/5 h-64 md:h-auto bg-zinc-100 overflow-hidden group">
                  <Image
                    src={selectedProject.imageSrc}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    sizes="60vw"
                  />
                  <div 
                    onClick={() => setIsPreviewOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <div className="bg-white p-4 rounded-full text-black shadow-xl"><FaEye size={24} /></div>
                  </div>
                </div>

                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white overflow-y-auto">
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400 mb-4 block"
                  >
                    {selectedProject.category}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-black tracking-tighter text-black uppercase mb-6 leading-none"
                  >
                    {selectedProject.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-zinc-600 text-sm mb-10 leading-relaxed"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-3"
                  >
                    {selectedProject.hasLivePreview && (
                      <Link href={selectedProject.link} target="_blank" className="flex items-center justify-center gap-3 bg-black text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                        Live Preview <ExternalLink size={14} />
                      </Link>
                    )}
                    <Link href={selectedProject.codeLink || "#"} target="_blank" className="flex items-center justify-center gap-3 border border-zinc-200 text-black py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-zinc-50 transition-colors">
                      <Code2 size={16} /> View Code
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Full Image Preview DENGAN ANIMASI */}
        <AnimatePresence>
          {isPreviewOpen && selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)} 
              className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black/95 p-4"
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full h-full max-w-6xl"
              >
                <Image src={selectedProject.imageSrc} alt="Full Preview" fill className="object-contain" />
              </motion.div>
              <p className="text-zinc-500 text-[10px] mt-6 tracking-[0.3em] uppercase">Click anywhere to close</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-20">
          <Link href="https://github.com/Ardan2008" target="_blank" className="group flex items-center gap-6">
            <div className="relative">
              <span className="text-sm md:text-lg font-black uppercase tracking-[0.3em] text-black">View all projects</span>
              <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-black" />
            </div>
            <div className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
              <FaArrowRight className="group-hover:rotate-[-45deg] transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}