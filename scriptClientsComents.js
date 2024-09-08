// Seleccionar los elementos del DOM
const sellButton = document.getElementById('sell-button');
const buyButton = document.getElementById('buy-button');
const initialButtons = document.getElementById('initial-buttons');
const secondaryButtons = document.getElementById('secondary-buttons');
const producerButton = document.getElementById('producer-button');
const packerButton = document.getElementById('packer-button');
const producerForm = document.getElementById('producer-form');
const packerForm = document.getElementById('packer-form');
const confirmationMessage = document.getElementById('confirmation-message');

// Función para ocultar los botones iniciales y mostrar los secundarios
function toggleSecondaryButtons() {
    initialButtons.classList.add('hidden');
    secondaryButtons.classList.remove('hidden');
}

// Función para mostrar el formulario de productor
function showProducerForm() {
    secondaryButtons.classList.add('hidden');
    producerForm.classList.remove('hidden');
}

// Función para mostrar el formulario de empacadora
function showPackerForm() {
    secondaryButtons.classList.add('hidden');
    packerForm.classList.remove('hidden');
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
    event.preventDefault(); // Evitar el envío real del formulario
    producerForm.classList.add('hidden');
    packerForm.classList.add('hidden');
    confirmationMessage.classList.remove('hidden');
}

// Añadir eventos de clic a los botones
sellButton.addEventListener('click', toggleSecondaryButtons);
buyButton.addEventListener('click', toggleSecondaryButtons);
producerButton.addEventListener('click', showProducerForm);
packerButton.addEventListener('click', showPackerForm);

// Añadir eventos de envío de formulario
producerForm.addEventListener('submit', handleFormSubmit);
packerForm.addEventListener('submit', handleFormSubmit);


// Obtener el modal
const modal = document.getElementById("termsModal");

// Obtener los botones que abren el modal
const openModalBtns = document.querySelectorAll(".openModalBtn");

// Obtener el <span> que cierra el modal
const span = document.getElementsByClassName("close")[0];

// Obtener el botón de aceptar
const acceptBtn = document.getElementById("acceptBtn");

// Añadir evento de clic a cada botón para abrir el modal
openModalBtns.forEach(btn => {
    btn.onclick = function () {
        modal.style.display = "block";
    }
});

// Cuando el usuario haga clic en <span> (x), cerrar el modal
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en el botón de aceptar, cerrar el modal
acceptBtn.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
