"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroCarouselProps {
  sections: { id: number; content: React.ReactNode }[];
}

export default function HeroCarousel({ sections }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sections.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sections.length]);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-screen min-h-[400px] w-full overflow-hidden">
      {sections.map((section, idx) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: activeIndex === idx ? 1 : 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          {section.content}
        </motion.div>
      ))}

      {sections.length > 1 && (
        <div
          className={
            `z-20 flex gap-3 ` +
            `sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:flex-col sm:right-[120px] ` +
            `absolute bottom-8 left-1/2 -translate-x-1/2 flex-row sm:bottom-auto sm:left-auto sm:translate-x-0`
          }
        >
          {sections.map((s, idx) => (
            <motion.button
              key={s.id}
              onClick={() => handleIndicatorClick(idx)}
              className={
                `transition-all rounded-full ` +
                `w-[7px] h-[7px] ` +
                (activeIndex === idx ? "bg-white" : "bg-gray-600")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
