"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/common/Header";
import HeroSection from "./components/hero/HeroSection";
import Banner from "./components/Banner";
import ExpertFeedbackSection from "./components/ExpertFeedbackSection";
import TrendAnalysisSection from "./components/TrendAnalysisSection";
import CustomFeedbackSection from "./components/CustomFeedbackSection";
import ContributorSection from "./components/ContributorSection";
import BetaReviewSection from "./components/BetaReviewSection";
import Footer from "./components/Footer";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            const index = triggerRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
              console.log("activeIndex set to", index);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    triggerRefs.current.forEach((ref, idx) => {
      if (ref) {
        observer.observe(ref);
        console.log("Observing triggerRef", idx, ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getHeaderTheme = () => (activeIndex === 0 ? "dark" : "light");

  return (
    <>
      <div className="absolute top-0 left-0 w-screen z-50">
        <Header theme={getHeaderTheme()} />
      </div>

      <div className="h-screen w-screen overflow-y-auto snap-y snap-mandatory relative overflow-x-hidden">
        <div className="h-screen snap-start">
          <div
            ref={(el) => {
              triggerRefs.current[0] = el;
            }}
            className="absolute top-0 h-screen w-full -z-10"
          />
          <HeroSection />
        </div>

        <div className="min-h-screen bg-white text-black snap-start relative">
          <div
            ref={(el) => {
              triggerRefs.current[1] = el;
            }}
            className="absolute top-[500px] h-[1px] w-full"
          />
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
