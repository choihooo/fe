import { useEffect, useState, useCallback } from "react";

const MOBILE_BREAKPOINT = 1024;
const DEBOUNCE_DELAY = 150;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkIsMobile = useCallback(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const userAgent = navigator.userAgent;
    const isMobileUserAgent =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const isTouchDevice = "ontouchstart" in window;
    const isSmallScreen = window.innerWidth <= MOBILE_BREAKPOINT;

    return isMobileUserAgent || (isTouchDevice && isSmallScreen);
  }, []);

  useEffect(() => {
    setIsMobile(checkIsMobile());

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(checkIsMobile());
      }, DEBOUNCE_DELAY);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkIsMobile]);

  return isMobile;
};
