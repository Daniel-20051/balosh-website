"use client";

import React from "react";
import OurJourney from "./components/OurJourney";
import AboutSection from "@/components/AboutSection";
import MeetTheTeamGrid from "./components/MeetTheTeamGrid";

export default function OurPeoplePage() {
  return (
    <main className="bg-white">
      <OurJourney />
      <AboutSection />
    </main>
  );
}
