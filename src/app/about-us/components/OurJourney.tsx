"use client";

import React, { useEffect, useRef, useState } from "react";

export default function OurJourney() {
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

  const milestones = [
    {
      year: "2005",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize security technology in Nigeria",
    },
    {
      year: "2010",
      title: "First Major Client",
      description:
        "Secured partnership with leading financial institution, establishing credibility",
    },
    {
      year: "2015",
      title: "Technology Innovation",
      description:
        "Launched advanced biometric access control systems across multiple industries",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Pioneered cloud-based security solutions and AI-powered access management",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Our <span className="text-orange-500">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center transition-all duration-1000 ease-out delay-${
                  (index + 1) * 200
                } ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    {/* Year */}
                    <div className="text-orange-500 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
