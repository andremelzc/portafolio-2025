// Función para scroll suave hacia contacto
export function scrollToContact() {
  const element = document.getElementById("contacto");
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function goToUrl(url: string) {
  window.open(url, "_blank");
}
