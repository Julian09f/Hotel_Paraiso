// Selecciona todos los botones de "Reservar" en la página
const botonesReserva = document.querySelectorAll("#habitaciones button");

// Recorre todos los botones encontrados
botonesReserva.forEach((boton) => {
    // Agrega un evento que se ejecuta al hacer clic
    boton.addEventListener("click", () => {
        // Redirige al usuario a la página de reservas
        window.location.href = "reservas.html";
    });
});

// Botón "Reservar Ahora"
const botonReserva = document.querySelector(".btn-reserva");

botonReserva.addEventListener("click", () => {
    // Redirige a la página de reservas
    window.location.href = "reservas.html";
});

// Botón "Sobre Nosotros"
const botonsobrenosotros = document.querySelector(".btn-sobre-nosotros");

if (botonsobrenosotros) {  // Solo si el botón existe
    botonsobrenosotros.addEventListener("click", () => {
        // Redirige a la página de sobre nosotros
        window.location.href = "sobre-nosotros.html";
    });
}

window.cambiarImagen = function(miniatura) {
    const imagenPrincipal = document.getElementById("imagenprincipal");
    imagenPrincipal.src = miniatura.src;
}

window.cambiarImagen2 = function(miniatura2) {
    const imagenPrincipal2 = document.getElementById("imagenprincipal2");
    imagenPrincipal2.src = miniatura2.src;
}

window.cambiarImagen3 = function(miniatura3) {
    const imagenPrincipal3 = document.getElementById("imagenprincipal3");
    imagenPrincipal3.src = miniatura3.src;
}