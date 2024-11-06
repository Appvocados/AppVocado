// Obtenemos el botón y el contenido oculto
const botonMostrar = document.getElementById('showGrafics');
const contenidoOculto = document.getElementById('hiddhenGrafics');

// Agregamos un evento de clic al botón
botonMostrar.addEventListener('click', () => {
  // Si el contenido está oculto, lo mostramos
  if (contenidoOculto.style.display === 'none') {
    contenidoOculto.style.display = 'block';
    botonMostrar.textContent = 'Ocultar Graficas';
  } 
  // Si el contenido está visible, lo ocultamos
  else {
    contenidoOculto.style.display = 'none';
    botonMostrar.textContent = 'Mostrar todas las Graficas';
  }
});