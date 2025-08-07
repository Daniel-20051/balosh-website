"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface ImpactCardProps {
  number: number;
  label: string;
  suffix?: string;
}

function ImpactCard({ number, label, suffix = "+" }: ImpactCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const animateCount = useCallback(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  }, [number]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, animateCount]);

  useEffect(() => {
    animateCount();
  }, [animateCount]);

  return (
    <div
      ref={cardRef}
      className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 group"
    >
      <div className="text-4xl md:text-6xl font-bold text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
        {count.toLocaleString()}
        <span className="text-orange-300">{suffix}</span>
      </div>
      <p className="text-white/80 text-base md:text-lg font-medium">{label}</p>
    </div>
  );
}

export default function ImpactSection() {
  const impactData = [
    {
      number: 500,
      label: "Projects Completed",
    },
    {
      number: 150,
      label: "Clients Served",
    },
    {
      number: 1000,
      label: "Installations",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#dd7723] to-[#e59e3e] py-8 md:py-10 overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Our Impact
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Delivering exceptional results and building lasting partnerships
            across industries
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {impactData.map((item, index) => (
            <ImpactCard key={index} number={item.number} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
