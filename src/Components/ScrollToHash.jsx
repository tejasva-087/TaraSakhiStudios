import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Check if we have a hash in the URL (e.g., '#contact-us')
    if (location.hash) {
      // Get the ID without the '#'
      const id = location.hash.substring(1);

      // Use requestAnimationFrame for better timing and smoother visual updates
      requestAnimationFrame(() => {
        // 2. Find the element after the next paint
        const targetElement = document.getElementById(id);

        if (targetElement) {
          // 3. Scroll smoothly to the element
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
