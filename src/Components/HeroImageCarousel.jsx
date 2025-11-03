import { useEffect, useRef, useState } from "react";

function HeroImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const numImages = images.length;

  const intervalRef = useRef(null);
  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const startTimer = () => {
    clearTimer();

    const newIntervalId = setInterval(() => {
      setActiveIndex((prevImage) => (prevImage + 1) % numImages);
    }, 3000);
    intervalRef.current = newIntervalId;
  };
  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  function setIndex(index) {
    setActiveIndex(index);
    startTimer();
  }

  return (
    <div className="relative">
      <ul className="grid grid-cols-[100vw_100vw_100vw_100vw] overflow-hidden rounded-3xl w-full h-full sm:max-h-[70vh] md:max-h-[80vh]">
        {images.map((image, i) => {
          return (
            <li
              className={`w-full -translate-x-[${
                activeIndex * 100
              }%] transition-all duration-600`}
              key={i}
            >
              <img
                className="h-full object-cover"
                src={image}
                alt="Tara Sakhi Studio's project image"
              />
            </li>
          );
        })}
      </ul>
      <div className="flex gap-2 absolute bottom-5 left-[50%] -translate-x-[50%]">
        {Array.from({ length: numImages }).map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              activeIndex === index ? "bg-zinc-50" : "bg-zinc-500"
            }`}
            onClick={() => setIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroImageCarousel;
