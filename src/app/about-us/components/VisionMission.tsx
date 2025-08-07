"use client";

import React, { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";

export default function VisionMission() {
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
        threshold: 0.25,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#212529] py-10 overflow-hidden"
    >
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large blurred circle - top right */}
        <div className="absolute -top-40 -left-30 w-96 h-96 bg-orange-500/5 rounded-full "></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <Badge
              icon={
                <svg className="w-4 h-4" fill="#f48125" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              }
              text="Corporate Philosophy"
              background="secondary"
            />
          </div>

          {/* Main Title */}
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mt-6 mb-4 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Our <span className="text-orange-500">Vision</span>
          </h2>

          {/* Orange underline */}
          <div
            className={`w-24 h-1 bg-orange-500 mx-auto transition-all duration-1000 ease-out delay-400 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        {/* Main Content Area - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Boxes */}
          <div className="space-y-8">
            {/* Vision Card */}
            <div
              className={`bg-[#1F2937]/70 rounded-2xl p-8 border-1 border-[#374151] transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Our Vision
                  </h3>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    To be the premier provider of integrated security solutions
                    across Africa, creating secure environments that empower
                    businesses and communities while ensuring a brighter, safer
                    future for all stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className={`bg-[#1F2937]/70 rounded-2xl p-8 border-1 border-[#374151] transition-all duration-1000 ease-out delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Our Mission
                  </h3>
                  <p className="text-[#9CA3AF] leading-relaxed">
                    To deliver world-class access control solutions through
                    innovation, integrity, and customer-centricity, while
                    maintaining our position as Nigeria's most trusted security
                    technology partner.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Abstract Graphic */}
          <div
            className={`transition-all duration-1000 ease-out delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full h-96">
              {/* Abstract Geometric Graphic */}
              <div className="relative w-full h-full">
                {/* Base layer - dark grey background */}
                <div className="absolute inset-0 bg-gray-800 rounded-2xl"></div>

                {/* Ribbon-like shapes */}
                <div className="absolute top-8 left-8 w-32 h-24 bg-gray-700 rounded-lg transform rotate-12"></div>
                <div className="absolute top-16 left-20 w-28 h-20 bg-gray-600 rounded-lg transform -rotate-6"></div>

                {/* Orange prominent fold */}
                <div className="absolute top-12 left-12 w-20 h-16 bg-orange-500 rounded-lg transform rotate-45 shadow-lg"></div>

                {/* Light blue/grey elements */}
                <div className="absolute top-24 left-32 w-24 h-18 bg-blue-400/30 rounded-lg transform rotate-12"></div>
                <div className="absolute top-32 left-16 w-20 h-14 bg-gray-500 rounded-lg transform -rotate-12"></div>

                {/* Additional overlapping shapes */}
                <div className="absolute top-40 left-8 w-16 h-12 bg-gray-600 rounded-lg transform rotate-6"></div>
                <div className="absolute top-48 left-28 w-20 h-16 bg-gray-700 rounded-lg transform -rotate-8"></div>

                {/* Sharp angular elements */}
                <div className="absolute top-20 left-40 w-12 h-12 bg-orange-400 transform rotate-45"></div>
                <div className="absolute top-36 left-44 w-8 h-8 bg-blue-300/40 transform -rotate-45"></div>

                {/* Depth layers */}
                <div className="absolute top-8 left-48 w-16 h-20 bg-gray-800 rounded-lg transform rotate-15"></div>
                <div className="absolute top-16 left-52 w-12 h-16 bg-gray-700 rounded-lg transform -rotate-10"></div>

                {/* Subtle highlights */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                <div className="absolute top-12 left-36 w-4 h-4 bg-white/20 rounded-full"></div>
                <div className="absolute top-28 left-8 w-3 h-3 bg-white/15 rounded-full"></div>

                {/* Connecting lines for dynamism */}
                <div className="absolute top-16 left-16 w-20 h-0.5 bg-orange-400/60 transform rotate-45"></div>
                <div className="absolute top-24 left-24 w-16 h-0.5 bg-blue-400/40 transform -rotate-30"></div>
                <div className="absolute top-32 left-12 w-12 h-0.5 bg-gray-400/50 transform rotate-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
