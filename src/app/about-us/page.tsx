import React from "react";
import AboutUsHero from "./components/AboutUsHero";
import AboutUsStory from "./components/AboutUsStory";
// import HowWeWork from "./components/HowWeWork";
import VisionMission from "./components/VisionMission";
import CoreValues from "./components/CoreValues";
import CoreCompetencies from "./components/CoreCompetencies";
import WhyBalosh from "./components/WhyBalosh";
import OurJourney from "./components/OurJourney";
import SolutionsShowcase from "./components/SolutionsShowcase";
import MeetTheTeam from "./components/MeetTheTeam";

const page = () => {
  return (
    <div>
      <AboutUsHero />
      <AboutUsStory />
      <CoreValues />
      <WhyBalosh />
      {/* <HowWeWork /> */}
      <VisionMission />
      <CoreCompetencies />
      {/* <OurJourney /> */}
      <SolutionsShowcase />
      {/* <MeetTheTeam /> */}
    </div>
  );
};

export default page;
