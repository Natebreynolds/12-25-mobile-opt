"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import HeroContent from "./HeroContent";
import SplineScene from "./SplineScene";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Optimize scroll performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Only render SplineScene when section is visible */}
        {isVisible && <SplineScene />}
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <HeroContent scrollProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}