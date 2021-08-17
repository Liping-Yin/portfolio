import React, { useEffect, useState } from "react";
import NavigationSmallScreen from "./NavigationSmallScreen";
import NavigationLargeScreen from "./NavigationLargeScreen";

export default function Navigation() {
  // threshold of screen
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize.width <= 992 ? (
        <NavigationSmallScreen />
      ) : (
        <NavigationLargeScreen />
      )}
    </>
  );
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}
