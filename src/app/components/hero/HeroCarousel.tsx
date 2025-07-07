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
    <div className="relative h-screen w-full overflow-hidden">
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
        <div className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 right-[120px]">
          {sections.map((s, idx) => (
            <motion.button
              key={s.id}
              onClick={() => handleIndicatorClick(idx)}
              className={`w-[7px] h-[7px] rounded-full transition-all ${
                activeIndex === idx ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
