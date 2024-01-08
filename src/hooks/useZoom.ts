import { useState, useEffect } from "react";

const useResize = () => {
  const [zoom, setZoom] = useState<number>(100);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setZoom(Math.round(window.devicePixelRatio * 100));
    });
  }, []);

  return {
    zoom,
  };
};

export default useResize;
