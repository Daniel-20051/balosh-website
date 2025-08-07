"use client";

import React, { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";

export default function CoreValues() {
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

  const values = [
    {
      title: "Integrity",
      description:
        "We conduct our business with unwavering honesty and transparency, building lasting trust with our clients and partners through ethical practices.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.12 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.12-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.76-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5c.83 0 1.5.67 1.5 1.5S8.33 10 7.5 10 6 9.33 6 8.5 6.67 7 7.5 7zm9 0c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
        </svg>
      ),
      color: "bg-orange-500",
    },
    {
      title: "Customer-Centricity",
      description:
        "Our customers are our priority. We view relationships as partnerships, actively seeking feedback to tailor solutions and ensure complete satisfaction.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.9c-.39.52-.61 1.15-.61 1.8V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7h4z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: "Innovation & Agility",
      description:
        "We embrace proactive innovation, continuously adapting strategies to meet evolving market needs and technological advancements.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      title: "Excellence",
      description:
        "We pursue excellence in every interaction, delivering high-quality products and services that exceed expectations consistently.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      title: "Employee Empowerment",
      description:
        "We believe our employees are our greatest asset. By investing in professional development, we create a motivated and engaged workforce.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: "Community Engagement",
      description:
        "We recognize our responsibility to give back to communities we serve, striving to make positive impact through innovative solutions.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
      color: "bg-red-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Main Title */}
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Core <span className="text-orange-500">Values</span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            The fundamental beliefs that guide our operations and shape our
            culture.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-[linear-gradient(to_right,_#FFFFFF_0%,_#F9FAFB_100%)] border-1 border-[#E5E7EB]  p-8 rounded-2xl hover:shadow-xl transition-all duration-300  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <div className="text-white">{value.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Badge */}
        <div
          className={`text-center transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Badge
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zM12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
            }
            text="Committed to Building a Safer Tomorrow"
          />
        </div>
      </div>
    </section>
  );
}
