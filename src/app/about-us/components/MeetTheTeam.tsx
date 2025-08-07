"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MeetTheTeam() {
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

  const teamMembers = [
    {
      name: "John Mitchell",
      title: "Chief Executive Officer",
      description:
        "20+ years leading technology transformations at Fortune 500 companies.",
      image: (
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 via-pink-400 to-purple-400 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
          JM
        </div>
      ),
    },
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      description:
        "Former Google engineer with expertise in AI and cloud architecture.",
      image: (
        <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
          SC
        </div>
      ),
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Operating Officer",
      description:
        "Operations expert focused on scaling global teams and processes.",
      image: (
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
          MR
        </div>
      ),
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
          <h2
            className={`text-2xl md:text-5xl font-bold text-gray-900 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Meet the <span className="text-orange-500">Team</span>
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-[linear-gradient(to_right,_#FFFFFF_0%,_#F9FAFB_100%)] border-1 border-[#E5E7EB]  p-6 md:p-8 rounded-2xl hover:shadow-xl transition-all ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-4 md:mb-6">
                {member.image}
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-orange-500 text-sm md:text-base font-medium mb-3 md:mb-4">
                {member.title}
              </p>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
