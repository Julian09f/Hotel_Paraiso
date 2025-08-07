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
