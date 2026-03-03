"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
    codeLink:
      "https://github.com/Ardan2008/Healthyroll-Dashboard-Management-System",
    description:
      "A comprehensive dashboard for managing products with real-time analytics and inventory tracking.",
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
    description:
      "A sports facility reservation platform featuring real-time availability calendars.",
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
    description:
      "A responsive coffee shop website built with modern UI design.",
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
    description:
      "Specialized maintenance dashboard for laboratory equipment tracking.",
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

// --- Sub-Component: Project Card ---
const ProjectCard = memo(
  ({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) => {
    const sizeClasses = {
      large: "md:col-span-2 md:row-span-2 h-[350px] md:h-[550px]",
      medium: "md:col-span-1 md:row-span-2 h-[350px] md:h-[550px]",
      small: "md:col-span-1 md:row-span-1 h-[260px]",
    };

    return (
      <div
        className={`relative group rounded-2xl overflow-hidden bg-zinc-900 ${sizeClasses[project.size]}`}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={project.id <= 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
          <span className="text-[10px] font-bold tracking-widest uppercase mb-2 text-zinc-300">
            {project.category}
          </span>
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-black tracking-tighter leading-none uppercase text-xl md:text-2xl">
              {project.title}
            </h3>
            <button
              onClick={() => onOpen(project)}
              className="shrink-0 bg-white text-black px-4 py-2 rounded-full text-[10px] font-black uppercase md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    );
  },
);
ProjectCard.displayName = "ProjectCard";

export default function BentoProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsPreviewOpen(false);
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      selectedProject || isPreviewOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, isPreviewOpen]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative mb-20 py-10">
          {/* Background Text  */}
          <span className="absolute -top-4 left-0 text-[8rem] md:text-[12rem] font-black text-zinc-50 select-none leading-none z-0">
            WORKS
          </span>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-[2px] bg-black" />
                <span className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-500">
                  Portfolio
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black leading-[0.8] uppercase">
                Selected <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px black" }}
                >
                  Projects.
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-min">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal Detail - Ukuran Dioptimasi (Tidak Memanjang) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={handleClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
              >
                <button
                  type="button"
                  aria-label="close"
                  onClick={handleClose}
                  className="absolute top-4 right-4 z-50 p-2 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors"
                >
                  <X size={18} className="text-black" />
                </button>

                {/* Bagian Gambar */}
                <div className="relative w-full md:w-1/2 h-56 md:h-auto bg-zinc-100 overflow-hidden group">
                  <Image
                    src={selectedProject.imageSrc}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    onClick={() => setIsPreviewOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <div className="bg-white p-3 rounded-full text-black shadow-lg">
                      <FaEye size={18} />
                    </div>
                  </div>
                </div>

                {/* Bagian Teks: Lebih kompak */}
                <div className="w-full md:w-1/2 p-7 md:p-10 flex flex-col justify-center bg-white overflow-y-auto">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase mb-4 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-8 leading-relaxed line-clamp-4 md:line-clamp-none">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-col gap-2.5">
                    {selectedProject.hasLivePreview && (
                      <Link
                        href={selectedProject.link}
                        target="_blank"
                        className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all"
                      >
                        Live Preview <ExternalLink size={14} />
                      </Link>
                    )}
                    <Link
                      href={selectedProject.codeLink || "#"}
                      target="_blank"
                      className="flex items-center justify-center gap-2 border border-zinc-200 text-black py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-all"
                    >
                      <Code2 size={15} /> Source Code
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Preview Image Modal */}
        <AnimatePresence>
          {isPreviewOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
            >
              <div className="relative w-full h-full max-w-4xl">
                <Image
                  src={selectedProject.imageSrc}
                  alt="Full Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-16">
          <Link
            href="https://github.com/Ardan2008"
            target="_blank"
            className="group flex items-center gap-4 border-b-2 border-black pb-1"
          >
            <span className="text-sm font-black uppercase tracking-widest text-black">
              View all projects
            </span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
