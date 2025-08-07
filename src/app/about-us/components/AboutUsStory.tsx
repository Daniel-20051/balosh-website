"use client";

import React, { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";

export default function AboutUsStory() {
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
      className="relative bg-white py-12 md:py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8">
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
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                }
                text="Our Story"
                className="bg-orange-100 text-orange-600 border-orange-200"
              />
            </div>

            {/* Main Heading */}
            <h2
              className={`text-2xl md:text-5xl font-bold text-gray-900 transition-all duration-1000 ease-out delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-8"
              }`}
            >
              Two Decades of <span className="text-orange-500">Excellence</span>
            </h2>

            {/* Body Paragraphs */}
            <div className="space-y-4 md:space-y-6">
              <p
                className={`text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-1000 ease-out delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                }`}
              >
                Founded in 2005, Balosh Integrated Services emerged from a
                vision to revolutionize security technology in Nigeria. What
                started as a small team of passionate engineers has grown into
                the nation&apos;s leading access control company.
              </p>

              <p
                className={`text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-1000 ease-out delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-8"
                }`}
              >
                Our journey has been marked by continuous innovation, unwavering
                commitment to quality, and an unrelenting focus on customer
                satisfaction. We&apos;ve secured numerous high-profile contracts
                and built lasting partnerships with organizations across diverse
                industries.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`transition-all duration-1000 ease-out delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Image Container */}
              <div className="hidden md:block relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-green-50 relative">
                  {/* Placeholder for building interior image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                      </svg>
                      <p className="text-sm">Modern Building Interior</p>
                    </div>
                  </div>

                  {/* Glass panels effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-green-100/20"></div>

                  {/* Light fixtures */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full"></div>

                  {/* Vertical walls */}
                  <div className="absolute left-1/4 top-0 bottom-0 w-1 bg-white/40"></div>
                  <div className="absolute right-1/4 top-0 bottom-0 w-1 bg-white/40"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-100/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
