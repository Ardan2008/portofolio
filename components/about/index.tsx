import { motion, Variants } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import Image from "next/image";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase block mb-4">
            Introduction
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-none">
            Junior Web <br />
            <span className="text-gray-300 italic font-serif font-light">
              Developer.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 relative group aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-2"
          >
            <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
              <Image
                src="/assets/ard.jpg"
                alt="Ardan Profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-center group hover:border-gray-200 transition-colors duration-500"
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-black tracking-[-0.04em] leading-[1.1]">
              Building a <br />
              <span className="relative inline-block mt-2">
                <span className="font-serif italic font-light text-gray-400 md:text-6xl tracking-normal">
                  Solid
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-1 left-0 w-full h-[1px] bg-gray-200 origin-left"
                />
              </span>{" "}
              Foundation.
            </h3>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed">
              <p>
                I&apos;m <span className="text-black font-medium">Ardan</span>, a
                Junior Web Developer based in Pasuruan. I started my digital
                journey with one clear goal: to write code that isn&apos;t just
                functional, but also meaningful and efficient.
              </p>
              <p>
                My current focus is mastering the{" "}
                <span className="text-black font-medium underline decoration-gray-200 underline-offset-4">
                  Laravel ecosystem
                </span>{" "}
                to build robust backends, while ensuring pixel-perfect
                interfaces with{" "}
                <span className="text-black font-medium">Tailwind CSS</span>. I
                am a problem-solving enthusiast, always eager to embrace new
                technologies and modern best practices.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm"
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center md:text-left">
              Tech Stack I Use
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "Next.js",
                "Figma",
                "Laravel",
                "MySQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-semibold text-black hover:border-gray-400 transition-colors flex items-center"
                >
                  <div className="flex items-center">
                    <span className="relative flex h-2 w-2 mr-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative inline-flex rounded-full h-2 w-2 bg-black shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                      />
                    </span>
                  </div>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 bg-white border border-gray-100 rounded-[2.5rem] p-8 text-black flex flex-col justify-between group overflow-hidden relative shadow-sm hover:border-gray-200 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex justify-between items-start">
              {/* Teks */}
              <div className="flex-1">
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-4 font-bold">
                  Education
                </p>
                <div className="space-y-2">
                  <p className="text-xl leading-snug font-bold text-black">
                    SMK Negeri 1 Purwosari
                  </p>
                  <p className="text-lg leading-snug font-medium text-gray-600">
                    Software Engineering <br />
                    <span className="text-gray-400 font-serif italic font-light">
                      Studied.
                    </span>
                  </p>
                </div>
              </div>

              {/* Logo Sekolah */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 ml-4">
                <Image
                  src="/assets/skansa.png"
                  alt="Logo SMK Negeri 1 Purwosari"
                  fill
                  className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>

            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
              <span className="text-xs text-gray-400 font-mono italic">
                Batch 2024 — Present
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black"></div>
              </div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-12 bg-white border border-gray-100 rounded-[2.5rem] p-6 md:p-12 shadow-sm hover:border-gray-200 transition-all duration-500 overflow-hidden"
          >
            <div
              className="w-full overflow-x-auto touch-pan-x cursor-grab active:cursor-grabbing select-none md:flex md:justify-center"
              style={{
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    .overflow-x-auto::-webkit-scrollbar {
                      display: none;
                    }

                    .overflow-x-auto text,
                    .overflow-x-auto span,
                    .overflow-x-auto div,
                    .overflow-x-auto article,
                    .overflow-x-auto p,
                    .react-github-calendar__meta,
                    .react-github-calendar__meta span {
                      fill: #000000 !important;
                      color: #000000 !important;
                      opacity: 1 !important;
                      font-weight: 600 !important;
                    }
                  `,
                }}
              />

              <div className="min-w-max md:min-w-0 py-2 pr-12 md:pr-0">
                <GitHubCalendar
                  username="Ardan2008"
                  blockSize={13}
                  blockMargin={5}
                  fontSize={14}
                  showWeekdayLabels={true}
                  colorScheme="light"
                  theme={{
                    light: [
                      "#E5E7EB",
                      "#9be9a8",
                      "#40c463",
                      "#30a14e",
                      "#216e39",
                    ],
                    dark: [
                      "#39d353",
                      "#26a641",
                      "#006d32",
                      "#0e4429",
                      "#161b22",
                    ].reverse(),
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
