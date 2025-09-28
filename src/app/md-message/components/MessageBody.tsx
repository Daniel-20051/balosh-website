"use client";

import React from "react";
import useReveal from "@/app/our-people/components/useReveal";

export default function MessageBody() {
  const { ref, isVisible } = useReveal();
  const paragraphs = [
    "It is my honor to welcome you to Balosh Integrated Services Limited.",
    "At Balosh, we believe control and accessibility should never be complicated because we understand that reliable systems form the foundation of trust and growth.",
    "As the trusted specialist in access control and integrated solutions, our commitment is to deliver innovative, dependable, and scalable systems that safeguard not only people and assets, but also the integrity of the organizations we serve.",
    "We don't just install systems; we build relationships based on trust. Every solution we provide is tailored to our clients' needs, because we understand that no two needs are the same. Our promise is to keep delivering solutions that are modern, efficient, and affordable, without compromising on quality.",
    "Thank you for trusting Balosh to be part of your journey. Together, we can create smarter, safer spaces for everyone.",
    "Think Balosh, think: Smart. Secure. Seamless.",
  ];

  return (
    <section ref={ref} className="relative pt-0 pb-0 md:pb-2">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6 md:space-y-7">
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={`${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              } transition-all duration-700 [transition-delay:var(--delay)] text-gray-700 md:text-lg leading-8`}
              style={{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "--delay": `${idx * 80}ms`,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
