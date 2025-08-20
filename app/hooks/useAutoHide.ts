"use client";
import { useState, useEffect } from "react";

export function useAutoHide(hideDelay = 3000) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;

    const resetHideTimer = () => {
      clearTimeout(hideTimer);
      setIsVisible(true);
      hideTimer = setTimeout(() => setIsVisible(false), hideDelay);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        resetHideTimer();
      }

      setLastScrollY(currentScrollY);
    };

    resetHideTimer();

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, hideDelay]);

  return isVisible;
}
