
function scrollAbajo() {
  // Obtén la posición actual de desplazamiento vertical
  var scrollActual = window.scrollY || document.documentElement.scrollTop;

  // Define la nueva posición de desplazamiento (puedes ajustar la cantidad según sea necesario)
  var nuevaPosicion = scrollActual + 790;

  // Realiza el scroll suave hacia abajo
  window.scrollTo({
    top: nuevaPosicion,
    behavior: 'smooth'
  });
}
