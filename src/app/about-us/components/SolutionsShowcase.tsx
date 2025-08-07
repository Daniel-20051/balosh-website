"use client";

import React, { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";

export default function SolutionsShowcase() {
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

  const solutions = [
    {
      badgeIcon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zM12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      ),
      badgeText: "Solutions",
      title: "Access Control Solutions",
      description:
        "Our access control solutions are designed to enhance security, improve operational efficiency, and deliver exceptional value to our clients.",
    },
    {
      badgeIcon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      badgeText: "Industries",
      title: "Industrial Solutions",
      description:
        "Our industrial solutions are tailored to meet the unique security needs of various industries, including manufacturing, logistics, and healthcare.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out delay-${
                (index + 1) * 200
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <div className="mb-6">
                <Badge icon={solution.badgeIcon} text={solution.badgeText} />
              </div>

              {/* Heading */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
