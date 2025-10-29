import { useEffect, useState } from "react";

const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, [imageUrls]);

  return imagesLoaded;
};

export default useImagePreloader;
