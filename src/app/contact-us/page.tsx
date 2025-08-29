import React from "react";
import ContactHero from "./components/ContactHero";
import ContactDetails from "./components/ContactDetails";
import LocationSection from "./components/LocationSection";

const page = () => {
  return (
    <main className="bg-white min-h-screen">
      <ContactHero />
      <ContactDetails />
      <LocationSection />
    </main>
  );
};

export default page;
