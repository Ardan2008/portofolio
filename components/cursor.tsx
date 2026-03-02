"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;

      const isText = [
        "H1",
        "H2",
        "H3",
        "H4",
        "P",
        "A",
        "SPAN",
        "ADDRESS",
        "BUTTON",
        "IMG",
      ].includes(target.tagName);
      const hasAboutText = target.closest(".cursor-expand"); 

      const isInsideNavbar = target.closest("nav");

      if ((isText || hasAboutText) && !isInsideNavbar) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[50] bg-white mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? 90 : 20,
        height: isHovered ? 90 : 20,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 30,
        mass: 0.8,
      }}
    />
  );
};

export default Cursor;
