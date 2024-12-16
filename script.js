const carousel = document.getElementById("carousel");
const slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;
let slideWidth = slides[0].clientWidth;

// Actualizar el ancho de cada slide cuando la ventana se redimensiona
window.addEventListener("resize", () => {
    slideWidth = slides[0].clientWidth;
});

// Función para avanzar el carrusel
function advanceCarousel() {
    currentIndex++;
    // Solo permite avanzar hasta el penúltimo par de imágenes
    if (currentIndex > slides.length - 2) {
        currentIndex = 0; // Reiniciar el carrusel
    }
    const offset = -slideWidth * currentIndex;
    carousel.style.transform = `translateX(${offset}px)`;
}

// Configurar la vista del carrusel para mostrar 2 imágenes a la vez
function setCarouselWidth() {
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.overflow = "hidden"; // Evita que se vean las demás imágenes
    carousel.style.display = "flex"; // Asegura que los slides estén en fila
    carousel.style.transition = "transform 0.5s ease-in-out"; // Efecto de transición suave
}

// Ejecutar la función de configuración al iniciar
setCarouselWidth();

// Intervalo para avanzar el carrusel cada 2.5 segundos
setInterval(advanceCarousel, 2500);
