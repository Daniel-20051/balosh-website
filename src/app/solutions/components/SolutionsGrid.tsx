"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const solutions = [
  {
    title: "Access Control Systems",
    description:
      "Biometrics, RFID cards, barriers, and turnstiles for secure entry management across all facility types.",
    image: "https://picsum.photos/400/300?random=1",
    badge: "AC",
    badgeColor: "bg-orange-500",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    href: "#",
  },
  {
    title: "Automated Entrances",
    description:
      "Sliding doors, swing gates, roller shutters, and retractable bollards for seamless access control.",
    image: "https://picsum.photos/400/300?random=2",
    badge: "AE",
    badgeColor: "bg-blue-400",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    href: "#",
  },
  {
    title: "Car Park Management",
    description:
      "Automated parking access, ticketing systems, and boom barriers for efficient vehicle management made to measure.",
    image: "https://picsum.photos/400/300?random=3",
    badge: "CP",
    badgeColor: "bg-green-500",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      </svg>
    ),
    href: "#",
  },
  {
    title: "Automatic Fare Collection",
    description:
      "Digital ticketing and access systems for high-traffic events and transport infrastructure made to measure.",
    image: "https://picsum.photos/400/300?random=4",
    badge: "AF",
    badgeColor: "bg-purple-500",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
    href: "#",
  },
  {
    title: "Traffic & Toll Management",
    description:
      "Vehicle barriers, road-side toll collection, and traffic control solutions for urban infrastructure.",
    image: "https://picsum.photos/400/300?random=5",
    badge: "TT",
    badgeColor: "bg-red-500",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.22.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z" />
      </svg>
    ),
    href: "#",
  },
  {
    title: "Security Equipment Supply",
    description:
      "CCTV, walk-through metal detectors, safety signage, and turnstiles for comprehensive security.",
    image: "https://picsum.photos/400/300?random=6",
    badge: "SE",
    badgeColor: "bg-blue-600",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zM12 11.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    href: "#",
  },
  {
    title: "Turnkey Project Delivery",
    description:
      "Complete end-to-end service including design, installation, testing, and maintenance of all deployed infrastructure. Our comprehensive approach ensures seamless integration and optimal performance across all systems.",
    image: "https://picsum.photos/600/300?random=7",
    badge: "TP",
    badgeColor: "bg-orange-500",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    href: "#",
    featured: true,
  },
];

export default function SolutionsGrid() {
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
        threshold: 0.15,
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
      className="relative bg-white px-4 py-10 md:px-10 md:py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your specific
            industry and operational requirements
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.slice(0, 6).map((solution, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out delay-${
                (index + 1) * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="group bg-white border-1 border-[#E5E7EB] rounded-xl w-full overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden w-full">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={400}
                    height={300}
                  />
                  {/* Badge */}
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 ${solution.badgeColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {solution.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Turnkey Project Delivery Card */}
        {solutions
          .filter((s) => s.featured)
          .map((solution, index) => (
            <div
              key={solution.title}
              className={`mt-12 transition-all duration-1000 ease-out delay-${
                (index + 7) * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="group bg-[#FBF8F4] border-1 border-primary/20 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-center">
                  {/* Image Container */}
                  <div className="relative h-56 sm:h-64 lg:h-full overflow-hidden w-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={400}
                      height={300}
                    />
                    {/* Badge */}
                    <div
                      className={`absolute top-4 right-4 w-8 h-8 ${solution.badgeColor} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {solution.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col px-4 sm:px-8 gap-4 py-8 sm:py-12 lg:py-20 lg:col-span-2 w-full">
                    <div className="flex mb-4">
                      <div className="w-15 h-15 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <svg
                          className="w-8 h-8 text-orange-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-5 text-7 text-gray-900 transition-colors duration-200">
                        {solution.title}
                      </h3>
                      <p className="text-[#525252] text-2 mb-6 leading-relaxed text-lg">
                        {solution.description}
                      </p>
                      <a
                        href={solution.href}
                        className="inline-flex items-center text-primary font-semibold text-lg hover:underline transition-colors duration-200"
                      >
                        Learn More &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
