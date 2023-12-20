// Obtener referencias a los elementos HTML
const mensajePrecio = document.getElementById('mensajePrecio');
const sendButton = document.getElementById('sendButton');
const dataForm = document.getElementById('dataForm');
const contratoModal = document.getElementById('contratoModal');
const aaceptarBtton = document.getElementById('aceptarBtton'); // Asegúrate de tener una referencia al botón de aceptar
const mensajeVentaProd = document.getElementById('mensajeVentaProd');
const iconWhatsapp = document.getElementById('iconWhatsapp')

// Agregar un evento de clic al botón "Vender"
sendButton.addEventListener('click', function() {

    // Mostrar el modal de contrato
    contratoModal.style.display = 'block';

    // Aplicar filtro de desenfoque al formulario
    dataForm.style.filter = 'blur(2px)'; /* Ajusta el valor según sea necesario */

    // Ocultar el elemento con id "iconWhatsapp"
    iconWhatsapp.style.display = 'none';
});




// Agregar un evento de clic al botón "Aceptar" en el modal de contrato
aceptarBtton.addEventListener('click', function(e) {
    e.preventDefault();

    // Ocultar el botón "Vender"
    dataForm.style.display = 'none';

    // Ocultar el modal de contrato
    contratoModal.style.display = 'none';

    // Mostrar el mensaje de venta
    mensajeVentaProd.style.display = 'block';
});
