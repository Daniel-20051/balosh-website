"use client";

import Badge from "@/components/ui/Badge";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const sectors = [
  {
    title: "Shopping Malls",
    description:
      "Advanced access control and crowd management systems for retail environments",
    image: "/assets/commercial.jpg",
    iconColor: "bg-orange-500",
    color: "bg-gradient-to-r from-[#F48125] to-[#FFB347]",
    insetColor: "bg-[#F48125]/10",
  },
  {
    title: "Residential Estates",
    description:
      "Smart gate automation and security systems for gated communities",
    image: "/assets/residential.jpg",
    iconColor: "bg-blue-500",
    color: "bg-gradient-to-r from-[#3B82F6] to-[#2563EB]",
    insetColor: "bg-[#3B82F6]/10",
  },
  {
    title: "Airports",
    description: "Comprehensive passenger flow and security management systems",
    image: "/assets/transport.webp",
    iconColor: "bg-green-500",
    color: "bg-gradient-to-r from-[#22C55E] to-[#16A34A]",
    insetColor: "bg-[#22C55E]/10",
  },
  {
    title: "Healthcare",
    description:
      "Secure access control and patient flow management solutions made to measure",
    image: "/assets/healthcare.jpg",
    iconColor: "bg-red-500",
    color: "bg-gradient-to-r from-[#EF4444] to-[#DC2626]",
    insetColor: "bg-[#EF4444]/10",
  },
  {
    title: "Event Centers",
    description: "Large-scale ticketing and crowd control for major events",
    image: "/assets/event-management.webp",
    iconColor: "bg-purple-500",
    color: "bg-gradient-to-r from-[#A855F7] to-[#9333EA]",
    insetColor: "bg-[#A855F7]/10",
  },
  {
    title: "Educational",
    description: "Student safety and campus access management systems",
    image: "/assets/education.jpg",
    iconColor: "bg-blue-600",
    color: "bg-gradient-to-r from-[#6366F1] to-[#4F46E5]",
    insetColor: "bg-[#6366F1]/10",
  },
  {
    title: "Government",
    description:
      "High-security access control for sensitive government facilities",
    image: "/assets/public-sector.jpg",
    iconColor: "bg-yellow-500",
    color: "bg-gradient-to-r from-[#EAB308] to-[#CA8A04]",
    insetColor: "bg-[#EAB308]/10",
  },
  {
    title: "Corporate",
    description:
      "Enterprise-grade security and automation for office buildings",
    image: "/assets/industrial.jpg",
    iconColor: "bg-teal-500",
    color: "bg-gradient-to-r from-[#14B8A6] to-[#0D9488]",
    insetColor: "bg-[#14B8A6]/10",
  },
];

const stats = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
    number: "500+",
    label: "Projects Delivered",
    color: "text-orange-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2h-2v2z" />
        <path d="M8 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm6 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 10.54 8H9c-.8 0-1.54.37-2.01 1L2.29 15.3c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2h-2v2z" />
      </svg>
    ),
    number: "150+",
    label: "Happy Clients",
    color: "text-orange-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    number: "8",
    label: "Industries Served",
    color: "text-orange-500",
  },
];

export default function TrustedSectors() {
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
      className="relative bg-[#F9FAFB] py-12 md:py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with Badge */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Industries We Serve Badge */}
          <Badge
            icon={
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
              </svg>
            }
            text="Industries We Serve"
          />

          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-8 font-bold text-black mb-3 md:mb-4">
            Trusted Across <span className="text-primary">Every Sector</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#525252] max-w-2xl mx-auto">
            From shopping centers to government facilities, our solutions power
            security and automation worldwide
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl transition-all duration-1000 ease-out delay-${
                (index + 1) * 100
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className={`absolute h-24 w-24 md:h-30 md:w-30 -right-8 -top-8 md:-right-12 md:-top-12 ${sector.insetColor} rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-sm`}
              ></div>
              <div className="group border-1 border-[#E5E5E5] bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                {/* Image */}
                <div className="relative h-32 md:h-40 w-full">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 768px) 384px, 100vw"
                  />
                </div>

                {/* Content */}
                <div className="py-6 md:py-8 px-6 md:px-9">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 text-center transition-colors duration-200">
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-[#525252] leading-relaxed text-center">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white max-w-2xl mx-auto rounded-2xl shadow-md p-4 border border-gray-100">
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-4">
                {/* Icon with light orange background */}
                <div className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <div className="text-orange-500">{stat.icon}</div>
                </div>

                <div>
                  {/* Number */}
                  <div className="text-xs md:text-sm lg:text-base font-bold mb-1">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-[#525252] text-xs md:text-sm font-medium">
                    {stat.label}
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
