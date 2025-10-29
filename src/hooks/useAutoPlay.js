import { useEffect, useRef } from "react";

const useAutoPlay = (totalItems, onNext, interval = 1000) => {
  const autoPlayRef = useRef(null);

  const reset = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      onNext();
    }, interval);
  };

  useEffect(() => {
    reset();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [totalItems, interval]);

  return { reset };
};

export default useAutoPlay;
