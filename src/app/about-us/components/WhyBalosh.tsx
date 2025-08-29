"use client";
import { useEffect, useRef, useState } from "react";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

type StatCard = {
  title: string;
  subtitle: string;
  body: string;
  icon: React.ReactNode;
};

const stats: StatCard[] = [
  {
    title: "Proven Track Record",
    subtitle: "17 years of experience",
    body: "Balosh has developed solutions for every unique environment, establishing a legacy of reliability and innovation.",
    icon: (
      <Image
        src="/assets/proven.svg"
        alt="Proven Track Record"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Largest Portfolio",
    subtitle: "80% Market Share",
    body: "You will find Balosh at most high‑profile locations, managing the largest car park portfolio in the region.",
    icon: (
      <Image
        src="/assets/largest.svg"
        alt="Largest Portfolio"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "250+ Workforce",
    subtitle: "Spread across 20 locations",
    body: "We have a dedicated workforce of over 250 staff, ensuring seamless operations and expert support everywhere.",
    icon: (
      <Image
        src="/assets/workforce.svg"
        alt="Workforce"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "100% Customer Satisfaction",
    subtitle: "We must be doing something right",
    body: "We are yet to lose a customer. Our focus on quality service and client relationships is unwavering.",
    icon: (
      <Image
        src="/assets/customer.svg"
        alt="Customer Satisfaction"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "90% Referrals",
    subtitle: "Our work speaks for us",
    body: "With no sales team, our performance and reputation drive exceptional word‑of‑mouth growth.",
    icon: (
      <Image
        src="/assets/referrals.svg"
        alt="Referrals"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "40M Passages/Year",
    subtitle: "60,000+ check‑ins daily",
    body: "Balosh technology handles immense traffic volumes reliably and efficiently, every single day.",
    icon: (
      <Image src="/assets/passages.svg" alt="Traffic" width={20} height={20} />
    ),
  },
];

export default function WhyBalosh() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );
    const el = ref.current;
    if (el) obs.observe(el);
    return () => {
      if (el) obs.unobserve(el);
    };
  }, []);

  return (
    <section ref={ref} className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Why Balosh?
          </h2>
          <p className="mx-auto mb-10  mt-3 max-w-3xl text-gray-600">
            Discover the core strengths that make us the undisputed leader in
            the industry. Our commitment to excellence is reflected in every
            aspect of our service.
          </p>
          <Badge
            text="Why Balosh?"
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm2.07-7.75l-.9.92A3.5 3.5 0 0013 13h-2v-.5c0-.83.34-1.63.93-2.22l1.24-1.26a1.75 1.75 0 10-2.96-1.23H8a3.75 3.75 0 116.07 2.95z" />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.title}
              className={`group rounded-2xl border-1 border-gray-200 bg-white p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-orange-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 1) * 60}ms` }}
            >
              <div className="flex flex-col items-start gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
                  {s.icon}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    {s.title}
                  </h3>
                  <p className="text-sm font-semibold text-orange-600 mt-1">
                    {s.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 mt-3">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
