import CollabsSection from "../layout/home/CollabsSection";
import HeroSection from "../layout/home/HeroSection";
import ProjectSection from "../layout/home/ProjectSection";

function HomePage() {
  return (
    <main className="p-4 lg:px-12 lg:py-2">
      <HeroSection />
      <ProjectSection />
      <CollabsSection />
    </main>
  );
}

export default HomePage;
