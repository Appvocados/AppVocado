// Obtener referencias a los elementos HTML
const mensajePrecio = document.getElementById('mensajePrecio');
const venderButton = document.getElementById('venderButton');
const dataForm = document.getElementById('dataForm');
const contratoModal = document.getElementById('contratoModal');
const aceptarBtn = document.getElementById('aceptarBtn'); // Asegúrate de tener una referencia al botón de aceptar
const mensajeVenta = document.getElementById('mensajeVenta');

// Agregar un evento de clic al botón "Vender"
venderButton.addEventListener('click', function() {
    // Ocultar el botón "Vender"
    venderButton.style.display = 'none';
    
    // Mostrar el formulario
    dataForm.style.display = 'block';
});

// Agregar un evento de envío al formulario
dataForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar el envío por defecto (puedes realizar la validación aquí)
    
    // Ocultar el formulario después de enviarlo
    dataForm.style.display = 'none';

    // Mostrar el modal de contrato
    contratoModal.style.display = 'block';
});

// Agregar un evento de clic al botón "Aceptar" en el modal de contrato
aceptarBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // Ocultar el modal de contrato
    contratoModal.style.display = 'none';

    // Ocultar mensaje de precio
    mensajePrecio.style.display = 'none';

    // Mostrar el mensaje de venta
    mensajeVenta.style.display = 'block';
});
