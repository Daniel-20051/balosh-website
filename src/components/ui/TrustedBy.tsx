"use client";
import React, { useState, useEffect, useRef } from "react";

const TrustedBy = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const companies = [
    {
      name: "FCMB",
      logo: (
        <div className="bg-purple-600 text-white px-4 py-2 rounded flex items-center justify-center font-bold text-lg">
          <div className="flex flex-col">
            <div className="bg-yellow-400 h-1 w-full mb-1"></div>
            <span>FCMB</span>
            <div className="bg-yellow-400 h-1 w-full mt-1"></div>
          </div>
        </div>
      ),
    },
    {
      name: "IKOYI CLUB 1938",
      logo: (
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800 mb-1">IKOYI</div>
          <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-1 flex items-center justify-center">
            <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
          </div>
          <div className="text-xs text-gray-600">CLUB 1938</div>
        </div>
      ),
    },
    {
      name: "Lagos Free Zone",
      logo: (
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 mb-1">LFZ</div>
          <div className="text-sm text-gray-700">Lagos Free Zone</div>
        </div>
      ),
    },
    {
      name: "LABUTH",
      logo: (
        <div className="w-16 h-16 bg-green-600 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
          LABUTH
        </div>
      ),
    },
    {
      name: "LAGOS POLO CLUB",
      logo: (
        <div className="w-16 h-16 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-center">
          <div className="text-xs">
            <div className="font-bold">LAGOS</div>
            <div className="font-bold">POLO CLUB</div>
            <div className="text-xs">SINCE 1904</div>
          </div>
        </div>
      ),
    },
    {
      name: "LIVING FAITH CHURCH",
      logo: (
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <div className="w-6 h-6 bg-red-500 rounded-full mr-1"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
          <div className="text-sm font-bold text-red-600">
            LIVING FAITH CHURCH
          </div>
        </div>
      ),
    },
    {
      name: "Marriott",
      logo: (
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600 italic">Marriott</div>
          <div className="text-xs text-red-600">HOTELS • RESORTS • SUITES</div>
        </div>
      ),
    },
  ];

  // Duplicate companies for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-10 overflow-hidden">
      <div className="mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trusted by Leading <span className="text-orange-500">Companies</span>
        </h2>

        {/* Descriptive Text */}
        <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto">
          Join hundreds of organizations worldwide who trust Balosh for their
          technology solutions.
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-8 items-center py-4"
            style={{
              animation: "scroll 30s linear infinite",
              animationPlayState: isHovered ? "paused" : "running",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${companies.length * 12}rem);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TrustedBy;
