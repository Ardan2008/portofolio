"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqData = [
  {
    question: "What is your primary tech stack?",
    answer:
      "I specialize in the Laravel ecosystem for robust backend development and MySQL for database management. On the frontend, I build modern, high-performance website using Next.js, TypeScript, and Tailwind CSS to ensure a seamless and interactive user experience.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes! I am always open to discussing new projects. Whether it's building a web application from scratch or maintaining existing Laravel systems, feel free to reach out.",
  },
  {
    question: "Do you focus on UI/UX design as well?",
    answer:
      "While my core strength lies in development, I have a strong eye for clean, modern aesthetics. I ensure that every line of code I write translates into a seamless and user-friendly experience.",
  },
  {
    question: "How do you handle project scalability?",
    answer:
      "I follow Clean Code principles and MVC architecture in Laravel to ensure the codebase remains maintainable. I also focus on database optimization and efficient query handling to support future growth.",
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <motion.div 
      layout 
      className={`border-b border-gray-100 last:border-none transition-colors duration-500 ${
        isOpen ? "bg-gray-50/40" : "bg-transparent"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full py-7 px-4 md:px-8 flex items-center justify-between text-left group outline-none"
      >
        <span
          className={`text-lg md:text-xl font-medium transition-all duration-500 ease-out ${
            isOpen ? "text-black translate-x-2" : "text-gray-600 group-hover:text-black group-hover:translate-x-1"
          }`}
        >
          {question}
        </span>

        {/* Tombol Plus/Minus */}
        <div
          className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full border transition-all duration-500 flex items-center justify-center 
            ${
              isOpen
                ? "bg-black border-black text-white rotate-180"
                : "bg-transparent border-gray-200 text-black group-hover:border-black"
            }`}
        >
          <div className="relative flex items-center justify-center">
            {/* Garis Horizontal */}
            <motion.div
              className="absolute h-[2px] w-4 bg-current rounded-full"
              initial={false}
            />
            {/* Garis Vertikal */}
            <motion.div
              className="absolute h-4 w-[2px] bg-current rounded-full"
              animate={{
                rotate: isOpen ? 90 : 0,
                opacity: isOpen ? 0 : 1, 
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1], 
                },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="pb-8 px-4 md:px-8 text-gray-500 text-lg leading-relaxed max-w-3xl">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Deskripsi FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase block mb-4">
              Common Queries
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black leading-tight mb-6">
              Any{" "}
              <span className="font-serif italic font-light text-gray-400">
                Questions?
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Here are some frequently asked questions about my workflow and
              technical expertise.
            </p>

            {/* Dekorasi kartu kecil */}
            <div className="hidden lg:block p-6 bg-[#fafafa] rounded-[2rem] border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  
                  {/* Titik Inti (Dot) */}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black shadow-[0_0_10px_rgba(0,0,0,0.3)]"></span>
                </div>
                
                <span className="text-xs font-bold uppercase tracking-widest text-black">
                  Live Support
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Can&apos;t find what you&apos;re looking for? Reach out via WhatsApp for a
                faster response.
              </p>
            </div>
          </motion.div>

          {/* Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm"
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
