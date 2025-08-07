"use client";

import React, { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function HowWeWork() {
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

  const processSteps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "Comprehensive analysis of your current systems and security requirements to identify optimal solutions.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Custom solution architecture tailored to your specific needs, ensuring seamless integration with existing infrastructure.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: "bg-purple-500",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "Professional installation and configuration by certified technicians, ensuring optimal performance and security.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      color: "bg-orange-500",
    },
    {
      number: "04",
      title: "Support",
      description:
        "Ongoing maintenance, training, and 24/7 technical support to ensure long-term success and system reliability.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
        </svg>
      ),
      color: "bg-green-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <Badge
              icon={
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              }
              text="Our Process"
              className="bg-orange-100 text-orange-600 border-orange-200"
            />
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-4 transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            How We <span className="text-orange-500">Work</span>
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Our proven methodology ensures exceptional results through
            structured phases and dedicated expertise.
          </p>
        </div>

        {/* Main Content Block - Image and Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Image */}
          <div
            className={`transition-all duration-1000 ease-out delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
                {/* Placeholder for workers around kiosk */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      {/* Workers */}
                      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm">Workers inspecting kiosk</p>
                  </div>
                </div>

                {/* Kiosk representation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Principles */}
          <div className="space-y-8">
            {/* Vision & Excellence */}
            <div
              className={`transition-all duration-1000 ease-out delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Vision & Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We operate with a clear vision and strong commitment to
                    performance. Our pursuit of excellence drives every aspect
                    of our work, delivering high-quality products and services
                    tailored to customer needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Health & Safety */}
            <div
              className={`transition-all duration-1000 ease-out delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Health & Safety
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Safety is fundamental to our operations. We cultivate
                    rigorous attention to detail and meticulous planning,
                    integrating these values into every project for guaranteed
                    successful outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
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
              <div className="bg-[linear-gradient(to_right,_#FFFFFF_0%,_#F9FAFB_100%)] border-1 border-[#E5E7EB] rounded-2xl py-10 px-8 h-full  hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <div className="text-white">{step.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment & Partnership Section */}
        <div className="text-center bg-[linear-gradient(to_right,_#FFFFFF_0%,_#F9FAFB_100%)]  border-1 border-[#E5E7EB] rounded-2xl py-10 px-8   hover:shadow-xl transition-shadow duration-300">
          <h3
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ease-out delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Commitment & Partnership
          </h3>

          <p
            className={`text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out delay-1400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            Our commitment extends beyond delivery. We recognize the importance
            of your valuable assets and take full responsibility for your
            investments. We treat your risks and reputation as our own,
            fostering accountability in all endeavors.
          </p>

          <div
            className={`transition-all duration-1000 ease-out delay-1600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
            }`}
          >
            <Badge
              icon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              }
              text="Building Long-term Partnerships"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
