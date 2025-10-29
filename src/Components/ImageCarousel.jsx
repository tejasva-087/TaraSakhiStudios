import { useEffect, useRef, useState } from "react";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

function ImageCarousel({ images, imagesAlt }) {
  const [activeImage, setActiveImage] = useState(0);
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
      setActiveImage((prevImage) => (prevImage + 1) % numImages);
    }, 3000);
    intervalRef.current = newIntervalId;
  };
  useEffect(() => {
    startTimer();

    return () => clearTimer();
  }, []);

  // HANDLERS
  function handleImageClick(index) {
    setActiveImage(index);
    startTimer();
  }
  function setActiveImageIndex(direction) {
    setActiveImage((prevImage) => {
      if (direction === "next") {
        return (prevImage + 1) % numImages;
      } else if (direction === "prev") {
        return (prevImage - 1 + numImages) % numImages;
      }
      return prevImage;
    });
    startTimer();
  }

  return (
    <section className="p-4">
      {/* MAIN IMAGE CONTAINER */}
      <div className="relative mb-4 border border-stone-700 rounded-md overflow-hidden">
        <img
          src={`../${images[activeImage]}`}
          alt={imagesAlt.title}
          className="w-full h-auto object-contain rounded-md"
        />
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl bg-stone-950/40 text-stone-50 px-2 py-6 hidden md:block"
          onClick={() => setActiveImageIndex("prev")}
        >
          <CaretLeftIcon weight="bold" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl bg-stone-950/40 text-stone-50 px-2 py-6 hidden md:block"
          onClick={() => setActiveImageIndex("next")}
        >
          <CaretRightIcon weight="bold" />
        </button>
      </div>

      {/* IMAGES CONTAINER */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mb-4">
        {images.map((imgSrc, index) => {
          return (
            <img
              src={`../${imgSrc}`}
              alt={`${imagesAlt}'s image`}
              key={index}
              className={`${
                index === activeImage ? "border-2 border-stone-500" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ImageCarousel;
