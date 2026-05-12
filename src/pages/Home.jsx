import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { LoadingScreen } from "../components/LoadingScreen";
import { StarBackground } from "../components/Backgroud";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  // Show loader only if it hasn't played yet this browser session
  const [loading, setLoading] = useState(
    () => sessionStorage.getItem("mk_loaded") !== "1"
  );

  const handleComplete = () => {
    sessionStorage.setItem("mk_loaded", "1");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {loading && <LoadingScreen onComplete={handleComplete} />}

      {/* Portfolio — visible underneath, fades in once loader exits */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease 0.1s",
        }}
      >
        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};
