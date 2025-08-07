"use client";

import Badge from "@/components/ui/Badge";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Dangote Refinery Commissioning",
    description:
      "Successfully deployed comprehensive ticketing and access control systems for the historic Dangote Refinery commissioning event, managing thousands of VIP attendees and dignitaries.",
    image: "https://picsum.photos/400/250?random=10",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
      </svg>
    ),
    iconColor: "bg-orange-500",
    detailIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2h-2v2z" />
        <path d="M8 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm6 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 10.54 8H9c-.8 0-1.54.37-2.01 1L2.29 15.3c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-2h-2v2z" />
      </svg>
    ),
    detailText: "5,000+ Attendees",
    href: "#",
  },
  {
    title: "Davido's Timeless Concert",
    description:
      "Managed complete access control infrastructure for one of Africa's biggest concerts, ensuring secure and efficient entry for over 50,000 music fans at the iconic venue.",
    image: "https://picsum.photos/400/250?random=11",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
    iconColor: "bg-purple-500",
    detailIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
    detailText: "50,000+ Tickets",
    href: "#",
  },
  {
    title: "Lagos Premium Estates",
    description:
      "Transformed security infrastructure across 10+ premium gated communities in Lagos, implementing smart gate automation and resident access management systems.",
    image: "https://picsum.photos/400/250?random=12",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    iconColor: "bg-green-500",
    detailIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z" />
      </svg>
    ),
    detailText: "10+ Communities",
    href: "#",
  },
];

export default function ProjectHighlights() {
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
      className="relative bg-white py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Client Success Stories Badge */}
          <Badge
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
            text="Client Success Stories"
          />

          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-8 font-bold text-black mb-3 md:mb-4">
            Project <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#525252] max-w-2xl mx-auto mb-3 md:mb-4">
            Discover how we&apos;ve transformed operations for leading
            organizations across Nigeria
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
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
              <div className="group bg-white rounded-2xl border-1 border-[#E5E5E5] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Icon Badge */}
                  <div
                    className={`absolute top-4 right-4 w-8 h-8 ${project.iconColor} rounded-lg flex items-center justify-center`}
                  >
                    <div className="text-white">{project.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4">
                    {project.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <div className="text-gray-500">{project.detailIcon}</div>
                    <span className="text-gray-600 text-xs md:text-sm font-medium">
                      {project.detailText}
                    </span>
                  </div>

                  {/* Call to Action */}
                  <a
                    href={project.href}
                    className="inline-flex items-center text-primary font-semibold text-xs md:text-sm hover:underline transition-colors duration-200"
                  >
                    View Details &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
