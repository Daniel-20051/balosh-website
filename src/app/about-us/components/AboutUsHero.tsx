"use client";

import React, { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";

export default function AboutUsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20 py-10 md:py-16 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <Badge
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            }
            text="About Balosh"
            className="mb-6"
          />

          {/* Main Heading */}
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Pioneering <span className="text-orange-500">Innovation</span>
          </h1>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl md:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            For nearly two decades, Balosh has been at the forefront of access
            control and security technology in Nigeria, transforming how
            businesses secure and manage their facilities with cutting-edge
            solutions.
          </p>

          {/* Call to Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center transition-all duration-1000 ease-out delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
}
