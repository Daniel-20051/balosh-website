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
    <section className="relative w-full min-h-[280px] h-[350px] md:h-[600px] flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/solution-image.png"
          alt="Modern secure entrance"
          fill
          className="object-cover"
          priority
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
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-10 leading-tight">
          Custom-Built Solutions for
          <span className="text-primary font-bold">
            {" "}
            Secure &amp; Automated
          </span>{" "}
          Spaces
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#F5F5F5]/90 mb-4 md:mb-6 max-w-xl md:max-w-2xl mx-auto">
          From access control to fare automation, we tailor every solution to
          your operational needs.
        </p>
      </div>
    </section>
  );
}
