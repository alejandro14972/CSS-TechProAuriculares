// script.js

// Función que se ejecuta cuando el tamaño de la pantalla cambia
function handleScreenSizeChange() {
    // Obtener la etiqueta
    const miEtiqueta = document.querySelector('.eliminar');
    const contenidoHeader = document.querySelector('.contenido-header');

    // Verificar si la pantalla es lo suficientemente grande
    if (miEtiqueta) {
        if (window.innerWidth >= 768) { // Puedes ajustar este valor según tus necesidades
            miEtiqueta.remove();
        } else {
            if (contenidoHeader) {
                // Añadir la etiqueta después del div con la clase contenido-header
                contenidoHeader.appendChild(miEtiqueta);
            } else {
                console.error("No se encontró el elemento '.contenido-header'");
            }
        }
    }
}

// Registrar el evento de cambio de tamaño de pantalla
window.addEventListener('resize', handleScreenSizeChange);

// Ejecutar la función al cargar la página para manejar el estado inicial
document.addEventListener('DOMContentLoaded', handleScreenSizeChange);
