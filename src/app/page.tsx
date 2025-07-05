"use client";

import { useState } from "react";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import Header from "@/components/common/Header";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <FullpageContainer
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
    >
      <FullpageSection>
        <section className="h-screen w-full flex flex-col bg-gray-900 dark:bg-black">
          <Header theme="dark" />
        </section>
      </FullpageSection>

      <FullpageSection>
        <section className="h-full w-full flex flex-col bg-white">
          <Header theme="light" />
          <div className="flex-1 flex flex-col items-center justify-center py-[600px]">
            <div className="max-w-4xl mx-auto px-8">
             예시
            </div>
          </div>
        </section>
      </FullpageSection>
    </FullpageContainer>
  );
}
