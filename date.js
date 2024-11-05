const reloj = document.getElementById('reloj');

function obtenerHoraYFechaActual() {
  const fechaActual = new Date();
  
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const mesNombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = mesNombre[fechaActual.getMonth()];
  const año = fechaActual.getFullYear();
  
  const hora = fechaActual.getHours().toString().padStart(2, '0');
  const minutos = fechaActual.getMinutes().toString().padStart(2, '0');
  const segundos = fechaActual.getSeconds().toString().padStart(2, '0');
  
  return `${diasSemana[fechaActual.getDay()]}, ${dia} de ${mes} de ${año} ${hora}:${minutos}:${segundos}`;
}

function actualizarReloj() {
  reloj.textContent = obtenerHoraYFechaActual();
}

actualizarReloj();
setInterval(actualizarReloj, 1000); // Actualiza cada segundo