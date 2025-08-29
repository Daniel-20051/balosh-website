"use client";

import { useEffect, useRef, useState } from "react";

export default function CoreValuesHome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => {
      if (ref) observer.unobserve(ref);
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
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
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
      color: "orange",
    },
    {
      title: "Consistency",
      bullets: [
        "It is the quality of achieving a level of performance which does not vary greatly over time.",
        "Never settle for less.",
        "Practice more.",
        "Be diligent.",
        "Be proactive.",
      ],
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7.5h16M4 12h16M4 16.5h16"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
          />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Customer Service",
      bullets: [
        "It is the provision of service to customers before, during, and after a purchase.",
        "My customer, my priority.",
        "Excellent Service.",
      ],
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
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
      color: "green",
    },
  ];

  const colorToBg: Record<string, string> = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-12 md:py-20 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
            Core Values
          </span>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mt-4">
            Balosh Core Values
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 ${
                    colorToBg[value.color]
                  } text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
                {value.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span
                      className={`mt-1 w-2 h-2 rounded-full ${
                        colorToBg[value.color]
                      }`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
