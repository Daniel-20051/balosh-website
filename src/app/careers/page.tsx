import CareersHeader from "./components/CareersHeader";
import JobSearch from "./components/JobSearch";
import OpenPositions from "./components/OpenPositions";
import ApplicationProcess from "./components/ApplicationProcess";
import LifeAtBalosh from "./components/LifeAtBalosh";
import TeamTestimonials from "./components/TeamTestimonials";

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <CareersHeader />
      <JobSearch />
      <OpenPositions />
      <ApplicationProcess />
      <LifeAtBalosh />
      <TeamTestimonials />
    </main>
  );
}
