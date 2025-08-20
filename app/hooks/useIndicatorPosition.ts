import { useRef, useEffect, useState } from "react";

interface IndicatorStyle {
  left: number;
  width: number;
  opacity: number;
}

export const useIndicatorPosition = (
  activeSection: string | null,
  isExpanded?: boolean // Cambiar nombre para mayor claridad
) => {
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Calcular posición del indicador considerando la escala
  useEffect(() => {
    if (!activeSection || !linksRef.current[activeSection]) {
      setIndicatorStyle({ left: 0, width: 0, opacity: 0 });
      return;
    }

    const activeLink = linksRef.current[activeSection];
    const navElement = navRef.current;

    if (activeLink && navElement) {
      // Obtener la escala actual del nav
      const navStyle = window.getComputedStyle(navElement);
      const transform = navStyle.transform;
      
      let scale = 1;
      if (transform && transform !== 'none') {
        const matrix = transform.match(/matrix.*\((.+)\)/);
        if (matrix) {
          const values = matrix[1].split(', ');
          scale = parseFloat(values[0]); // Primer valor es scaleX
        }
      }

      // Calcular posiciones usando offsetLeft/offsetWidth (más preciso para elementos escalados)
      const left = activeLink.offsetLeft;
      const width = activeLink.offsetWidth;

      setIndicatorStyle({
        left: left,
        width: width,
        opacity: 1,
      });
    }
  }, [activeSection, isExpanded]); // Cambiar isScrolled por isExpanded

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