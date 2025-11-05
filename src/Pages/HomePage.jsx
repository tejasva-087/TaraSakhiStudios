import Footer from "../components/Footer";
import AboutSection from "../layout/home/AboutSection";
import CollabsSection from "../layout/home/CollabsSection";
import ContactSection from "../layout/home/ContactSection";
import HeroSection from "../layout/home/HeroSection";
import ProjectSection from "../layout/home/ProjectSection";

function HomePage() {
  return (
    <main className="p-4 lg:px-12 lg:py-2">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <CollabsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HomePage;
