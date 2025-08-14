import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import MarketsSection from "@/components/MarketsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import TrustedBy from "@/components/ui/TrustedBy";
import { getRecentBlogs } from "@/app/api";

export default async function Home() {
  // Fetch recent blogs for insights section
  let recentBlogs = [];
  try {
    const data = await getRecentBlogs(3);
    recentBlogs = data?.data?.blogs ?? [];
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    // Component will use fallback data
  }
  const solutions = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "Hardware Solutions",
      description:
        "Advanced access control systems, biometric readers, and smart card technologies for secure facility management.",
      features: [
        "Biometric Access Control",
        "Smart Card Systems",
        "RFID Technology",
      ],
      href: "/solutions/hardware",
      iconBgColor: "bg-orange-500",
      linkColor: "text-orange-500",
      hoverBorderColor: "border-orange-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Software Solutions",
      description:
        "Comprehensive management platforms, mobile applications, and cloud-based systems for seamless operations.",
      features: [
        "Management Platforms",
        "Mobile Applications",
        "Cloud Integration",
      ],
      href: "/solutions/software",
      iconBgColor: "bg-blue-500",
      linkColor: "text-blue-500",
      hoverBorderColor: "border-blue-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Integration Services",
      description:
        "Seamless system integration, API development, and custom solutions that connect all your security components.",
      features: ["System Integration", "API Development", "Custom Solutions"],
      href: "/solutions/integration",
      iconBgColor: "bg-green-500",
      linkColor: "text-green-500",
      hoverBorderColor: "border-green-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Maintenance & Support",
      description:
        "24/7 technical support, preventive maintenance, and system upgrades to ensure optimal performance.",
      features: ["24/7 Support", "Preventive Maintenance", "System Upgrades"],
      href: "/solutions/support",
      iconBgColor: "bg-purple-500",
      linkColor: "text-purple-500",
      hoverBorderColor: "border-purple-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Consulting Services",
      description:
        "Strategic planning, security assessments, and technology roadmaps to optimize your infrastructure investments.",
      features: [
        "Strategic Planning",
        "Security Assessment",
        "Technology Roadmap",
      ],
      href: "/solutions/consulting",
      iconBgColor: "bg-blue-500",
      linkColor: "text-blue-500",
      hoverBorderColor: "border-blue-200",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
      title: "Training & Certification",
      description:
        "Comprehensive training programs and certification courses for your team to maximize system utilization.",
      features: ["User Training", "Admin Certification", "Best Practices"],
      href: "/solutions/training",
      iconBgColor: "bg-red-500",
      linkColor: "text-red-500",
      hoverBorderColor: "border-red-200",
    },
  ];

  const markets = [
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "Airport Digital Transformation",
      description:
        "Modernized passenger experience and operational systems for a major international airport, boosting efficiency.",
      href: "/markets/airport",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "Smart Toll & Transport Hub",
      description:
        "Implemented an integrated toll and traffic management solution, reducing congestion and improving revenue collection.",
      href: "/markets/transport",
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
        </svg>
      ),
      title: "Retail Market Innovation",
      description:
        "Deployed a comprehensive digital payment and inventory system, enhancing customer experience and stock accuracy.",
      href: "/markets/retail",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TrustedBy />
      <SolutionsSection solutions={solutions} />
      <MarketsSection markets={markets} />
      <ImpactSection />
      <TestimonialsSection />
      <InsightsSection insights={recentBlogs} />
    </div>
  );
}
