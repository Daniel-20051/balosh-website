"use client";

import React from "react";
import OurJourney from "./components/OurJourney";
import MeetTheTeamGrid from "./components/MeetTheTeamGrid";

export default function OurPeoplePage() {
  return (
    <main className="bg-white">
      <OurJourney />
      <MeetTheTeamGrid />
    </main>
  );
}
