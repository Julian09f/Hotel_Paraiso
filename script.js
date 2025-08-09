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

