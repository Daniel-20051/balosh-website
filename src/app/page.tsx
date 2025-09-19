"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import MarketsSection from "@/components/MarketsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import TrustedBy from "@/components/ui/TrustedBy";
import SolutionPopup from "@/components/ui/SolutionPopup";
import { getRecentBlogs } from "@/app/api";

interface Solution {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  iconBgColor?: string;
  linkColor: string;
  hoverBorderColor: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface ApiBlogItem {
  _id: string;
  title: string;
  excerpt?: string;
  autoExcerpt?: string;
  featuredImage: string;
  category?: { name?: string } | null;
  readTime?: number;
  slug?: string;
}

export default function Home() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(
    null
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [recentBlogs, setRecentBlogs] = useState<ApiBlogItem[]>([]);

  const handleSolutionClick = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedSolution(null);
  };

  // Fetch recent blogs for insights section
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getRecentBlogs(3);
        setRecentBlogs(data?.data?.blogs ?? []);
      } catch (error) {
        console.error("Error fetching recent blogs:", error);
        // Component will use fallback data
      }
    };

    fetchBlogs();
  }, []);

  const solutions = [
    {
      imageSrc: "/assets/access-controll.jpg",
      imageAlt: "Access Control",
      title: "Access Control",
      description:
        "Advanced access control systems, biometric readers, RFID cards, barriers, and turnstiles for secure entry management across all facility types.",
      features: [
        "Biometric Access Control",
        "Smart Card Systems",
        "RFID Technology",
        "Barriers & Turnstiles",
      ],
      href: "/solutions/access-control",
      iconBgColor: "bg-orange-500",
      linkColor: "text-orange-500",
      hoverBorderColor: "border-orange-200",
    },
    {
      imageSrc: "/assets/car-park.jpg",
      imageAlt: "Car Parking",
      title: "Car Parking",
      description:
        "Automated parking access, ticketing systems, boom barriers, and intelligent vehicle management solutions for efficient car park operations.",
      features: [
        "Automated Parking Access",
        "Ticketing Systems",
        "Boom Barriers",
        "Vehicle Management",
      ],
      href: "/solutions/car-parking",
      iconBgColor: "bg-blue-500",
      linkColor: "text-blue-500",
      hoverBorderColor: "border-blue-200",
    },
    {
      imageSrc: "/assets/entrance-control.webp",
      imageAlt: "Entrance Control",
      title: "Entrance Control",
      description:
        "Sliding doors, swing gates, roller shutters, and retractable bollards for seamless and secure entrance management.",
      features: [
        "Sliding Doors",
        "Swing Gates",
        "Roller Shutters",
        "Retractable Bollards",
      ],
      href: "/solutions/entrance-control",
      iconBgColor: "bg-green-500",
      linkColor: "text-green-500",
      hoverBorderColor: "border-green-200",
    },
    {
      imageSrc: "/assets/event-management-2.webp",
      imageAlt: "Event Management",
      title: "Event Management",
      description:
        "Large-scale ticketing systems, crowd control solutions, and digital access management for major events and venues.",
      features: [
        "Digital Ticketing",
        "Crowd Control",
        "Access Management",
        "Event Analytics",
      ],
      href: "/solutions/event-management",
      iconBgColor: "bg-purple-500",
      linkColor: "text-purple-500",
      hoverBorderColor: "border-purple-200",
    },
    {
      imageSrc: "/assets/maintenance-service.png",
      imageAlt: "Maintenance Services",
      title: "Maintenance Services",
      description:
        "24/7 technical support, preventive maintenance, system upgrades, and ongoing optimization to ensure optimal performance.",
      features: [
        "24/7 Support",
        "Preventive Maintenance",
        "System Upgrades",
        "Performance Optimization",
      ],
      href: "/solutions/maintenance",
      iconBgColor: "bg-red-500",
      linkColor: "text-red-500",
      hoverBorderColor: "border-red-200",
    },
    {
      imageSrc: "/assets/toll-gate-management.jpg",
      imageAlt: "Toll Roads and Traffic Management",
      title: "Toll Roads and Traffic Management",
      description:
        "Automated toll collection systems, traffic flow management, and intelligent transportation solutions for modern infrastructure.",
      features: [
        "Automated Toll Collection",
        "Traffic Flow Management",
        "Intelligent Transportation",
        "Infrastructure Monitoring",
      ],
      href: "/solutions/toll-traffic",
      iconBgColor: "bg-indigo-500",
      linkColor: "text-indigo-500",
      hoverBorderColor: "border-indigo-200",
    },
  ];

  const markets = [
    {
      imageSrc: "/assets/commercial.jpg",
      imageAlt: "Commercial market",
      title: "Commercial",
      description:
        "Office buildings, corporate headquarters, and business complexes with integrated access control and security systems.",
    },
    {
      imageSrc: "/assets/industrial.jpg",
      imageAlt: "Industrial market",
      title: "Industrial",
      description:
        "Manufacturing facilities, warehouses, and industrial parks with robust security and access management solutions.",
    },
    {
      imageSrc: "/assets/public-sector.jpg",
      imageAlt: "Public sector",
      title: "Public Sector",
      description:
        "Government buildings, municipal facilities, and public institutions with secure access and visitor management.",
    },
    {
      imageSrc: "/assets/education.jpg",
      imageAlt: "Education",
      title: "Education",
      description:
        "Schools, universities, and educational institutions with smart campus security and student access systems.",
    },
    {
      imageSrc: "/assets/leisure.webp",
      imageAlt: "Leisure",
      title: "Leisure",
      description:
        "Hotels, resorts, and entertainment venues with guest access control and facility management systems.",
    },
    {
      imageSrc: "/assets/retail.avif",
      imageAlt: "Retail",
      title: "Retail",
      description:
        "Shopping centers, malls, and retail stores with integrated security and customer flow management.",
    },
    {
      imageSrc: "/assets/event-management.webp",
      imageAlt: "Events",
      title: "Events",
      description:
        "Concert venues, stadiums, and event spaces with crowd control and ticketing management systems.",
    },
    {
      imageSrc: "/assets/residential.jpg",
      imageAlt: "Residential",
      title: "Residential",
      description:
        "Apartment complexes, gated communities, and residential developments with smart home security solutions.",
    },
    {
      imageSrc: "/assets/transport.webp",
      imageAlt: "Transport",
      title: "Transport",
      description:
        "Airports, train stations, and transport hubs with passenger flow management and security systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustedBy />
      <SolutionsSection
        solutions={solutions}
        onSolutionClick={handleSolutionClick}
      />
      <MarketsSection markets={markets} />
      <ImpactSection />
      <TestimonialsSection />
      <InsightsSection insights={recentBlogs} />

      {/* Solution Popup Modal - Now using separate component */}
      <SolutionPopup
        solution={selectedSolution}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </div>
  );
}
