import CareersHeader from "./components/CareersHeader";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationProcess from "./components/ApplicationProcess";
import LifeAtBalosh from "./components/LifeAtBalosh";
import TeamTestimonials from "./components/TeamTestimonials";

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen">
      <CareersHeader />
      <ApplicationForm />
      <ApplicationProcess />
      <LifeAtBalosh />
      <TeamTestimonials />
    </main>
  );
}
