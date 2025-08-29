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

  const values = [
    {
      title: "Integrity",
      bullets: [
        "It is the quality of being honest and having strong moral principles.",
        "Doing things right.",
        "Reliable.",
        "Making conscious effort.",
        "Dependable.",
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.37988 12.0001L10.7899 14.4201L15.6199 9.58008"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.23988 6.20008C4.23988 5.14008 5.10988 4.27008 6.16988 4.27008H7.89988C8.29988 4.27008 8.85988 4.06008 9.15988 3.81008L10.7399 2.46008C11.4399 1.87008 12.5699 1.87008 13.2499 2.46008L14.8299 3.81008C15.1299 4.06008 15.6999 4.27008 16.0999 4.27008H17.7999C18.8599 4.27008 19.7299 5.14008 19.7299 6.20008V7.90008C19.7299 8.30008 19.9399 8.86008 20.1899 9.16008L21.5399 10.7401C22.1299 11.4401 22.1299 12.5701 21.5399 13.2501L20.1899 14.8301C19.9399 15.1301 19.7299 15.6901 19.7299 16.0901V17.7901C19.7299 18.8501 18.8599 19.7201 17.7999 19.7201H16.0999C15.6999 19.7201 15.1399 19.9301 14.8399 20.1801L13.2599 21.5301C12.5599 22.1201 11.4299 22.1201 10.7499 21.5301L9.16988 20.1801C8.86988 19.9301 8.29988 19.7201 7.90988 19.7201H6.16988C5.10988 19.7201 4.23988 18.8501 4.23988 17.7901V16.0801C4.23988 15.6901 4.03988 15.1201 3.78988 14.8301L2.43988 13.2401C1.85988 12.5501 1.85988 11.4301 2.43988 10.7401L2.99988 10.0801"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      color: "bg-orange-500",
    },
    {
      title: "Consistency",
      bullets: [
        "It is the quality of achieving a level of performance which does not vary greatly in quality over time.",
        "Never settle for less.",
        "Practice more.",
        "Be diligent.",
        "Be proactive.",
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7.5h16M4 12h16M4 16.5h16"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      title: "Customer Service",
      bullets: [
        "It is the provision of service to customers before, during, and after a purchase. The perception of success of such interactions is dependent on employees.",
        "My customer, my priority",
        "Excellent Service",
      ],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 12a5 5 0 100-10 5 5 0 000 10z"
            stroke="currentColor"
            strokeWidth={1.7}
          />
          <path
            d="M4.5 20.118a7.5 7.5 0 0115 0A17.95 17.95 0 0112 21.75c-2.7 0-5.24-.586-7.5-1.632z"
            stroke="currentColor"
            strokeWidth={1.7}
          />
        </svg>
      ),
      color: "bg-green-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-12 md:py-20 overflow-hidden"
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
            Core <span className="text-orange-500">Values</span>
          </h2>

          {/* Subtitle */}
          <p
            className={`text-base md:text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-200 ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-[linear-gradient(to_right,_#FFFFFF_0%,_#F9FAFB_100%)] border-1 border-[#E5E7EB]  p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all duration-300  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-600">
                {value.bullets.map((b: string) => (
                  <li key={b} className="flex gap-2 items-start">
                    <span
                      className={`mt-2 w-2 h-2 rounded-full ${value.color}`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
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
