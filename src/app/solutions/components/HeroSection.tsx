"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );
    const ref = sectionRef.current;
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, []);

  return (
    <section className="relative w-full min-h-[320px] h-[420px] md:h-[600px] flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/solutions-hero.jpg"
          alt="Modern secure entrance"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Content */}
      <div
        ref={sectionRef}
        className={`relative z-10 w-full max-w-3xl md:max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10 leading-tight">
          Custom-Built Solutions for
          <span className="text-primary font-bold">
            {" "}
            Secure &amp; Automated
          </span>{" "}
          Spaces
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#F5F5F5]/90 mb-6 max-w-xl md:max-w-2xl mx-auto">
          From access control to fare automation, we tailor every solution to
          your operational needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
          <button className="w-full sm:w-auto bg-primary text-[#E5E7EB] cursor-pointer font-semibold px-8 py-4 rounded-md shadow hover:bg-primary/90 transition-colors text-base">
            Get Started Today
          </button>
          <button className="w-full sm:w-auto border border-white text-white cursor-pointer font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-colors text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
