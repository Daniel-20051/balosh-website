import HeroSection from "./components/HeroSection";
import SolutionsGrid from "./components/SolutionsGrid";
import TrustedSectors from "./components/TrustedSectors";
import ProjectHighlights from "./components/ProjectHighlights";
import ColorBackgroundSection from "./components/ColorBackgroundSection";

export default function SolutionsPage() {
  return (
    <main>
      <HeroSection />
      {/* Add more sections here as needed */}
      <section className="bg-[#FCFCFC] px-2 py-8 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Innovative, Reliable, and Integrated Systems
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-base lg:text-lg px-4">
          At Balosh, we deliver innovative, reliable, and integrated systems to
          manage movement, access, and safety in physical spaces—whether for
          buildings, events, or entire cities. Our solutions are designed to
          enhance security while streamlining operations across diverse
          environments.
        </p>
      </section>
      <SolutionsGrid />
      <TrustedSectors />
      <ProjectHighlights />
      <ColorBackgroundSection />
    </main>
  );
}
