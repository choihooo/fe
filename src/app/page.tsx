"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Header from "@/components/common/Header";
import Banner from "./components/Banner";
import ExpertFeedbackSection from "./components/ExpertFeedbackSection";
import TrendAnalysisSection from "./components/TrendAnalysisSection";
import CustomFeedbackSection from "./components/CustomFeedbackSection";
import ContributorSection from "./components/ContributorSection";
import BetaReviewSection from "./components/BetaReviewSection";
import Footer from "./components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canScrollDownRef = useRef(false);
  const canScrollUpRef = useRef(false);
  const scrollLockRef = useRef(false);

  const getHeaderTheme = () => (activeIndex === 0 ? "dark" : "light");

  const lockScrollTemporarily = () => {
    scrollLockRef.current = true;
    setTimeout(() => {
      scrollLockRef.current = false;
    }, 800);
  };

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (scrollLockRef.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const secondSection = sectionRefs.current[1];

      if (!secondSection) return;

      if (activeIndex === 0 && direction === 1) {
        e.preventDefault();

        if (!canScrollDownRef.current) {
          canScrollDownRef.current = true;
          return;
        }

        secondSection.scrollIntoView({ behavior: "smooth" });
        lockScrollTemporarily();

        setTimeout(() => {
          setActiveIndex(1);
        }, 600);

        canScrollDownRef.current = false;
        return;
      }

      if (activeIndex === 1 && direction === -1) {
        const scrollTop = secondSection.scrollTop;

        if (scrollTop <= 0) {
          e.preventDefault();

          if (!canScrollUpRef.current) {
            canScrollUpRef.current = true;
            return;
          }

          sectionRefs.current[0]?.scrollIntoView({ behavior: "smooth" });
          lockScrollTemporarily();
          setActiveIndex(0);
          canScrollUpRef.current = false;
          return;
        }
      }

      if (direction === 1) canScrollUpRef.current = false;
      if (direction === -1) canScrollDownRef.current = false;
    },
    [activeIndex]
  );

  useEffect(() => {
    const container = sectionsRef.current;
    if (!container) return;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <>
      <div className="absolute top-0 left-0 w-full z-50">
        <Header theme={getHeaderTheme()} />
      </div>

      <div ref={sectionsRef} className="h-screen overflow-y-auto">
        <div
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="h-screen w-full flex items-center justify-center bg-black text-white pt-[80px]"
        >
          <h1 className="text-4xl font-bold">🔥 풀페이지 Hero Section</h1>
        </div>

        <div
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="min-h-[2000px] max-h-screen overflow-y-auto bg-white text-black"
        >
          <Banner />
          <ExpertFeedbackSection />
          <TrendAnalysisSection />
          <CustomFeedbackSection />
          <ContributorSection />
          <BetaReviewSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
