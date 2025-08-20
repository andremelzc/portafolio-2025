import { useRef, useEffect, useState } from "react";

interface IndicatorStyle {
  left: number;
  width: number;
  opacity: number;
}

export const useIndicatorPosition = (activeSection: string | null) => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Calcular posición del indicador basado en el elemento real
  useEffect(() => {
    if (!activeSection || !linksRef.current[activeSection]) {
      setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
      return;
    }

    const activeLink = linksRef.current[activeSection];
    const navElement = navRef.current;

    if (activeLink && navElement) {
      const navRect = navElement.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      const left = linkRect.left - navRect.left;
      const width = linkRect.width;

      setIndicatorStyle({
        left: left,
        width: width,
        opacity: 1,
      });
    }
  }, [activeSection]);

  // Función helper para asignar refs
  const setLinkRef = (sectionId: string) => (el: HTMLAnchorElement | null) => {
    linksRef.current[sectionId] = el;
  };

  return {
    navRef,
    indicatorStyle,
    setLinkRef,
  };
};
