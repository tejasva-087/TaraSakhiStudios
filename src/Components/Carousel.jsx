import { useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import ProgressIndicators from "./ProgressIndicators";

const Carousel = ({ projects, activeIndex, onIndexChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = (index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemWidth = carousel.offsetWidth * 0.35;
    const gap = 24;
    const targetScroll = index * (itemWidth + gap);

    carousel.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    onIndexChange(index);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="absolute bottom-8  z-10 px-4">
      <div
        ref={carouselRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, index) => (
          <CarouselItem
            key={project.id}
            project={project}
            index={index}
            activeIndex={activeIndex}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>

      <ProgressIndicators
        total={projects.length}
        activeIndex={activeIndex}
        onSelect={scrollToIndex}
      />
    </div>
  );
};

export default Carousel;
