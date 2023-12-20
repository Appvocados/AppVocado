// Obtener todos los elementos con la clase "link"
var elementosLinks = document.getElementsByClassName("alert");

// Agregar un evento de clic a cada elemento con la clase "link"
for (var i = 0; i < elementosLinks.length; i++) {
    elementosLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        // Mostrar una alerta
        alert("Estamos trabajando para mejorar el sitio, esta función no está disponible aún. Gracias por tu paciencia. \u{1F622} \u{1F6E0}");
    });
}
