import { useState } from "react";

import useImagePreloader from "../hooks/useImagePreloader";
import useAutoPlay from "../hooks/useAutoPlay";
import HeroDisplay from "./HeroDisplay";
import ProjectInfo from "./ProjectInfo";
import Carousel from "./Carousel";
import LoadingScreen from "./LoadingScreen";

import carouselImg1 from "../assets/images/image-1.jpg";
import carouselImg2 from "../assets/images/image-2.jpg";
import carouselImg3 from "../assets/images/image-3.jpg";
import carouselImg4 from "../assets/images/image-4.jpg";
import carouselImg5 from "../assets/images/image-5.jpg";
import carouselImg6 from "../assets/images/image-6.jpg";
import carouselImg7 from "../assets/images/image-7.jpg";

const ArchitecturalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
    {
      id: 1,
      description: "I was hearing colors.",
      image: carouselImg1,
      title: "SAX Jazz Restaurant & Lounge",
    },

    {
      id: 2,
      description: "Red Manera",
      image: carouselImg2,
      title: "Skybar Nightclub & Bar Rooftop",
    },
    {
      id: 3,
      description: "I dreamt I was having a dream.",
      image: carouselImg3,
      title: "O1NE Nightclub & Venue",
    },
    {
      id: 4,
      description: "Lost in transition",
      image: carouselImg4,
      title: "urban chair",
    },
    {
      id: 7,
      description: "ZAMÃN, Sculpting Time",
      image: carouselImg7,
      title: "Watch Stands",
    },
    {
      id: 5,
      description: "IL CONVITO DI VETRO",
      image: carouselImg5,
      title: "Murano Tableware Collection",
    },
    {
      id: 6,
      description: "Reconciled fragments",
      image: carouselImg6,
      title: "Coffee-table",
    },
  ];

  const imageUrls = projects.map((p) => p.image);
  const imagesLoaded = useImagePreloader(imageUrls);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const { reset: resetAutoPlay } = useAutoPlay(
    projects.length,
    handleNext,
    4000
  );

  const handleIndexChange = (index) => {
    setActiveIndex(index);
    resetAutoPlay();
  };

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroDisplay project={projects[activeIndex]} />
        <ProjectInfo project={projects[activeIndex]} />
        <Carousel
          projects={projects}
          activeIndex={activeIndex}
          onIndexChange={handleIndexChange}
        />
      </div>
    </div>
  );
};

export default ArchitecturalCarousel;
