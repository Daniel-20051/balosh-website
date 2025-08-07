"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

const TrustedBy = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  const companies1 = [
    {
      name: "Lagos Free Zone",
      logo: (
        <Image
          src="/assets/lagos-free-zone.png"
          alt="Lagos Free Zone"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Atlantic Hall",
      logo: (
        <Image
          src="/assets/atlantic-hall.png"
          alt="Atlantic Hall"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Chicken Republic",
      logo: (
        <Image
          src="/assets/chicken-republic.png"
          alt="Chicken Republic"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Love World",
      logo: (
        <Image
          src="/assets/love-world.png"
          alt="Love World"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "EKEDC",
      logo: (
        <Image src="/assets/ekedc.png" alt="EKEDC" width={200} height={200} />
      ),
    },
    {
      name: "faan",
      logo: (
        <Image src="/assets/faan.png" alt="FAAN" width={200} height={200} />
      ),
    },
    {
      name: "FCMB",
      logo: (
        <Image src="/assets/fcmb.png" alt="FCMB" width={200} height={200} />
      ),
    },
    {
      name: "IKOYI CLUB",
      logo: (
        <Image
          src="/assets/ikoyi.png"
          alt="IKOYI CLUB"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "LASUTH",
      logo: (
        <Image src="/assets/lasuth.png" alt="LASUTH" width={200} height={200} />
      ),
    },
    {
      name: "POLO CLUB",
      logo: (
        <Image
          src="/assets/polo-club.png"
          alt="POLO CLUB"
          width={200}
          height={200}
        />
      ),
    },
  ];

  const companies2 = [
    {
      name: "LIVING FAITH CHURCH",
      logo: (
        <Image
          src="/assets/living-faith.png"
          alt="LIVING FAITH CHURCH"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Marriott",
      logo: (
        <Image
          src="/assets/marriott.png"
          alt="Marriott"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Nigerian Breweries",
      logo: (
        <Image
          src="/assets/nigerian-breweries.png"
          alt="Nigerian Breweries"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Providus Bank",
      logo: (
        <Image
          src="/assets/providus.png"
          alt="Providus Bank"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "Oniru Royal",
      logo: (
        <Image
          src="/assets/oniru-royal.png"
          alt="Oniru Royal"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "RCCG",
      logo: (
        <Image src="/assets/rccg.png" alt="RCCG" width={200} height={200} />
      ),
    },
    {
      name: "Schlumberger",
      logo: (
        <Image
          src="/assets/schlumberger.png"
          alt="Schlumberger"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "VGCPORA",
      logo: (
        <Image
          src="/assets/vgcpora.png"
          alt="VGCPORA"
          width={200}
          height={200}
        />
      ),
    },
    {
      name: "WINGS",
      logo: (
        <Image src="/assets/wings.png" alt="WINGS" width={200} height={200} />
      ),
    },
    {
      name: "Present House",
      logo: (
        <Image
          src="/assets/present-house.png"
          alt="Present House"
          width={200}
          height={200}
        />
      ),
    },
  ];

  // For seamless infinite scroll, duplicate the array once
  const seamlessCompanies1 = [...companies1, ...companies1];
  const seamlessCompanies2 = [...companies2, ...companies2];

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

        {/* First Carousel - Left */}
        <div className="relative overflow-hidden mb-8">
          <div
            ref={carouselRef1}
            className="flex items-center py-4 whitespace-nowrap"
            style={{
              animation: "scrollLeft 30s linear infinite",
              animationPlayState: isHovered1 ? "paused" : "running",
              width: "max-content",
            }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            {seamlessCompanies1.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Second Carousel - Right */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef2}
            className="flex items-center py-4 whitespace-nowrap"
            style={{
              animation: "scrollRight 30s linear infinite",
              animationPlayState: isHovered2 ? "paused" : "running",
              width: "max-content",
            }}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            {seamlessCompanies2.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes scrollRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TrustedBy;
