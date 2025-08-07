"use client";

import Badge from "@/components/ui/Badge";
import React, { useEffect, useRef, useState } from "react";

export default function CoreCompetencies() {
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

  const competencies = [
    {
      title: "Security Systems",
      description:
        "Advanced access control, biometric systems, and integrated security solutions",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zM12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      ),
      color: "bg-orange-500",
    },
    {
      title: "Hardware Integration",
      description:
        "Cutting-edge hardware deployment and seamless system integration",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9zM7 6h10v13H7V6zm2 2v9h2V8H9zm4 0v9h2V8h-2z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: "Software Development",
      description:
        "Custom software solutions for access control and security management",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      title: "Cloud Services",
      description:
        "Managed cloud infrastructure for secure and scalable access control",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Main Title */}
          <h2
            className={`text-2xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Core <span className="text-orange-500">Competencies</span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Areas where we excel and deliver exceptional value
          </p>

          {/* Call-to-Action Button */}
          <div
            className={`transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          ></div>
          <Badge
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
            text="What We Do Best"
          />
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-1000 ease-out delay-${
                (index + 1) * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 md:w-16 md:h-16 ${competency.color} rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6`}
              >
                <div className="text-white">{competency.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                {competency.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {competency.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
