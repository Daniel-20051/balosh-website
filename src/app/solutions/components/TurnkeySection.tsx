"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TurnkeySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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
      className="relative bg-[#FBF8F4] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Left Column - Image */}
          <div className="relative">
            <Image
              src="https://picsum.photos/600/400?random=10"
              alt="Turnkey Project Delivery - Team collaboration"
              className="w-full h-auto rounded-lg shadow-lg"
              width={600}
              height={400}
              loading="lazy"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 p-8">
            {/* Gear Icon */}
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
              <div className="relative">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <svg
                  className="w-6 h-6 text-orange-400 absolute -top-1 -right-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Turnkey Project Delivery
            </h2>

            {/* Paragraph */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Complete end-to-end service including design, installation,
              testing, and maintenance of all deployed infrastructure. Our
              comprehensive approach ensures seamless integration and optimal
              performance across all systems.
            </p>

            {/* Call to Action */}
            <a
              href="#"
              className="inline-flex items-center text-primary font-semibold text-lg hover:underline transition-colors duration-200"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
