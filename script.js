
// Ejecuta todo cuando el DOM base esté listo
document.addEventListener("DOMContentLoaded", () => {
  // 1) Cargar HEADER y FOOTER primero
Promise.all([
    fetch("header.html").then(res => res.text()),
    fetch("footer.html").then(res => res.text())
])
.then(([headerHTML, footerHTML]) => {
    // Insertar HTML
    const headerContainer = document.getElementById("header");
    const footerContainer = document.getElementById("footer");
    if (headerContainer) headerContainer.innerHTML = headerHTML;
    if (footerContainer) footerContainer.innerHTML = footerHTML;

    // 2) Ahora que el header existe, enganchar eventos del header
    const botonReserva = document.querySelector(".btn-reserva");
    if (botonReserva) {
    botonReserva.addEventListener("click", () => {
        window.location.href = "reservas.html";
    });
    }

    const botonSobreNosotros = document.querySelector(".btn-sobre-nosotros");
    if (botonSobreNosotros) {
    botonSobreNosotros.addEventListener("click", () => {
        window.location.href = "sobre-nosotros.html";
    });
    }

    // Menú hamburguesa
    const menuIcon = document.querySelector(".menu-icon");
    const menuDesplegable = document.querySelector(".menu-desplegable");

    if (menuIcon && menuDesplegable) {
      // Abrir/cerrar
    menuIcon.addEventListener("click", (e) => {
        e.stopPropagation(); // que no cierre inmediatamente por el listener global
        menuDesplegable.classList.toggle("show");
    });

      // Cerrar si se hace clic fuera
    document.addEventListener("click", (e) => {
        if (!menuDesplegable.contains(e.target) && !menuIcon.contains(e.target)) {
        menuDesplegable.classList.remove("show");
        }
    });
    }
})
.catch(err => console.error("Error cargando header/footer:", err));

  // 3) Eventos específicos de páginas (lo que no depende del header)
  // Botones de reservar dentro de #habitaciones (si existe esa sección en la página actual)
const botonesReservaSeccion = document.querySelectorAll("#habitaciones button");
botonesReservaSeccion.forEach((boton) => {
    boton.addEventListener("click", () => {
    window.location.href = "reservas.html";
    });
});

// Cambiar imagen principal desde miniaturas (función única)
document.querySelectorAll('.img-thumbnail').forEach(img => {
  img.addEventListener('click', function() {
    const targetId = this.dataset.target; // lee el id de la imagen principal
    const imagenPrincipal = document.getElementById(targetId);
    imagenPrincipal.src = this.src; // reemplaza la imagen
  });
});


});



