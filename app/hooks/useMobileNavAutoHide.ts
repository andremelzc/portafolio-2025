"use client";
import { useState, useEffect, useRef } from "react";

interface UseMobileNavAutoHideOptions {
  hideDelay?: number; // Time in ms before auto-hiding
  scrollThreshold?: number; // Scroll distance before hiding/showing
}

export function useMobileNavAutoHide(options: UseMobileNavAutoHideOptions = {}) {
  const { hideDelay = 10000, scrollThreshold = 10 } = options; // 10 seconds default
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear existing timer
  const clearHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  // Start hide timer
  const startHideTimer = () => {
    clearHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, hideDelay);
  };

  // Show navbar and start timer
  const showAndStartTimer = () => {
    setIsVisible(true);
    startHideTimer();
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;
      
      // Only react to significant scroll changes
      if (Math.abs(scrollDifference) > scrollThreshold) {
        if (scrollDifference > 0) {
          // Scrolling down - hide immediately
          clearHideTimer();
          setIsVisible(false);
        } else {
          // Scrolling up - show and start timer
          showAndStartTimer();
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    // Initialize
    setLastScrollY(window.scrollY);
    startHideTimer();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearHideTimer();
    };
  }, [hideDelay, scrollThreshold, lastScrollY]);

  // Manual show/hide functions
  const show = () => {
    clearHideTimer();
    setIsVisible(true);
  };

  const hide = () => {
    clearHideTimer();
    setIsVisible(false);
  };

  return {
    isVisible,
    show,
    hide,
    showAndStartTimer,
  };
}
