import { useState, useEffect, useRef } from 'react';

interface NavbarShrinkOptions {
  threshold?: number;
  debounceMs?: number;
}

export function useNavbarShrink(options: NavbarShrinkOptions = {}) {
  const { threshold = 50, debounceMs = 10 } = options;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const newIsScrolled = scrollPosition > threshold;
        
        if (newIsScrolled !== isScrolled) {
          setIsScrolled(newIsScrolled);
        }
      }, debounceMs);
    };

    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [threshold, debounceMs, isScrolled]);

  // Handlers para hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // El navbar está "expandido" si no hay scroll O si hay hover
  const isExpanded = !isScrolled || isHovered;

  const getContainerClasses = () => ({
    position: isExpanded ? 'top-12' : 'top-6',
    transition: 'transition-all duration-700 ease-out',
  });

  const getNavClasses = () => ({
    scale: isExpanded ? 'scale-100' : 'scale-95',
    shadow: isExpanded 
      ? 'shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
      : 'shadow-[0_4px_20px_rgba(0,0,0,0.4)]',
    transition: 'transition-all duration-700 ease-out',
  });

  const getBackgroundOpacity = () => ({
    primary: isExpanded ? '0.25' : '0.4',
    secondary: isExpanded ? '0.1' : '0.2', 
    tertiary: isExpanded ? '0.05' : '0.1',
    radial: isExpanded ? '0.2' : '0.3',
  });

  const getGlowOpacity = () => isExpanded ? '40' : '50';

  const getListPadding = () => isExpanded ? 'px-4 py-3' : 'px-3.5 py-2.5';

  return {
    isScrolled,
    isHovered,
    isExpanded, // Nuevo estado combinado
    navbarRef,
    handleMouseEnter,
    handleMouseLeave,
    getContainerClasses,
    getNavClasses,
    getBackgroundOpacity,
    getGlowOpacity,
    getListPadding,
  };
}