"use client";

import React from "react";
import useReveal from "@/app/our-people/components/useReveal";

export default function MessageBody() {
  const { ref, isVisible } = useReveal();
  const paragraphs = [
    "As we look ahead to our 20th anniversary next July, this year marks a significant moment for Balosh Integrated Services! Our journey has been made possible by two vital pillars: our incredible customers and our committed employees.",
    "We are immensely grateful for the trust our customers place in us. Their confidence – reflected in their continued business, referrals, and partnership – drives us to exceed expectations every day. Our dedicated employees embody this spirit of excellence, delivering services with remarkable quality and efficiency. Their unwavering commitment fills us with excitement for the bright future ahead.",
    "In the past year, I have been particularly proud of our company’s resilience. Together, we have navigated unprecedented challenges and successfully expanded our range of solutions to address evolving needs. Our major projects not only showcase our capabilities but also highlight our dedication to innovation and service excellence.",
    "As we approach our 20th anniversary, I want to extend my heartfelt gratitude to our employees, customers, and partners. Together, we are building a brighter future, and I am confident that Balosh Integrated Services will continue to thrive as we provide solutions that truly make a difference.",
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
