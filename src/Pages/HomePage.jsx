import { useState, useEffect, useRef } from "react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import data from "../data/work.json";

function HomePage() {
  const slides = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const timerRef = useRef(null);
  const mainImageRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - mainImageRef.current.offsetLeft);
    setTranslateX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - mainImageRef.current.offsetLeft;
    const walk = x - startX;
    setTranslateX(walk);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 100) {
      goToPrevious();
    } else if (translateX < -100) {
      goToNext();
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setTranslateX(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = x - startX;
    setTranslateX(walk);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 100) {
      goToPrevious();
    } else if (translateX < -100) {
      goToNext();
    }
    setTranslateX(0);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden sm:mt-12">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Text Content - Left Side on desktop, Overlay on mobile */}
        <div className="md:w-1/3 absolute md:relative bottom-24 md:bottom-0 left-0 right-0 md:flex md:flex-col md:justify-center px-6 md:px-12 py-6 md:py-0 bg-gradient-to-t md:bg-gradient-to-r from-stone/95 via-stone/80 to-transparent md:from-stone/90 md:to-stone/50 z-10">
          <div className="text-white space-y-4">
            <h1 className="text-3xl md:text-3xl font-bold leading-tight">
              {slides[currentIndex].tagline}
            </h1>
            <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
              {slides[currentIndex].title}
            </p>
            <Link
              to={`work/${slides[currentIndex].id}`}
              className="inline-block px-6 md:px-8 py-2 md:py-3 bg-white text-stone font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm md:text-base text-zinc-900"
            >
              Explore More
            </Link>
          </div>
        </div>

        {/* Main Image Display - Right Side on desktop, Full screen on mobile */}
        <div
          ref={mainImageRef}
          className="w-full md:w-2/3 h-full relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="w-full h-full transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          >
            <img
              src={`../${slides[currentIndex].images[0]}`}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-stone/50 hover:bg-stone/70 text-white p-2 md:p-3 rounded-full transition-all z-20"
          >
            <CaretLeftIcon size={24} className="md:w-8 md:h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-stone/50 hover:bg-stone/70 text-white p-2 md:p-3 rounded-full transition-all z-20"
          >
            <CaretRightIcon size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
      </div>

      {/* Thumbnail Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-stone/80 py-2 md:py-4 px-3 md:px-6 z-20">
        <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto scrollbar-hide">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 md:ring-4 ring-white scale-105 md:scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={`../${slide.images[0]}`}
                alt={slide.title}
                className="w-20 h-12 md:w-32 md:h-20 object-cover rounded-md md:rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-stone/50 text-white px-3 md:px-4 py-1 md:py-2 rounded-full z-20 text-xs md:text-base">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
}

export default HomePage;
