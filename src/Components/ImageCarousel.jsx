import { useEffect, useRef, useState } from "react";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

function ImageCarousel({ images, imagesAlt, title, tagline }) {
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
    <section className="p-4 lg:grid grid-cols-[1fr_0.5fr] gap-4">
      {/* MAIN IMAGE CONTAINER */}
      <div className="relative mb-4 rounded-3xl overflow-hidden">
        <img
          src={images[activeImage]}
          alt={imagesAlt.title}
          className="w-full h-auto max-h-[80vh] object-cover rounded-md"
        />
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl bg-zinc-950/40 text-zinc-50 px-2 py-6 hidden md:block"
          onClick={() => setActiveImageIndex("prev")}
        >
          <CaretLeftIcon weight="bold" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl bg-zinc-950/40 text-zinc-50 px-2 py-6 hidden md:block"
          onClick={() => setActiveImageIndex("next")}
        >
          <CaretRightIcon weight="bold" />
        </button>
      </div>

      {/* IMAGES CONTAINER */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-3xl font-normal uppercase">
            {tagline}
          </h2>
          <p className="text-zinc-400">{title}</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 mb-4 h-fit gap-2">
          {images.map((imgSrc, index) => {
            return (
              <img
                src={imgSrc}
                alt={`${imagesAlt}'s image`}
                key={index}
                className={`rounded-lg ${
                  index === activeImage ? "border-2 border-zinc-50" : ""
                }`}
                onClick={() => handleImageClick(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;
