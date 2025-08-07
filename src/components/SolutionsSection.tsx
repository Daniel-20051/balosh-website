"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import SolutionCard from "./ui/SolutionCard";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  iconBgColor: string;
  linkColor: string;
  hoverBorderColor: string;
}

interface SolutionsSectionProps {
  solutions: Solution[];
}

export default function SolutionsSection({ solutions }: SolutionsSectionProps) {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionHeader
            badgeIcon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.973 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            }
            badgeText="Our Solutions"
            title="Comprehensive"
            titleHighlight="Technology"
            description="From access control to smart infrastructure, we deliver cutting-edge solutions tailored to your industry needs"
          />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {solutions.map((solution, index) => (
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
              <SolutionCard
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                href={solution.href}
                iconBgColor={solution.iconBgColor}
                linkColor={solution.linkColor}
                hoverBorderColor={solution.hoverBorderColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
