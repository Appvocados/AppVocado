// Obtener el tipo de cambio
const urlApi = 'https://api.exchangerate-api.com/v4/latest/USD';

fetch(urlApi)
  .then(respuesta => respuesta.json())
  .then(data => {
    const precioDolarValor = data.rates.MXN;
    document.getElementById('precioDolar').innerText = `1 Dollar USD = ${precioDolarValor} MXN`;
    return precioDolarValor;
  })
  .then(precioDolarValor => {
    // Función para convertir dólares a pesos mexicanos
    const convertirDolaresAPesos = (cantidad) => {
      const resultado = cantidad * precioDolarValor;
      return resultado.toFixed(2);
    };

    // Función para convertir pesos mexicanos a dólares
    const convertirPesosADolares = (cantidad) => {
      const resultado = cantidad / precioDolarValor;
      return resultado.toFixed(2);
    };

    // Función para realizar la conversión según la selección del usuario
    const realizarConversion = () => {
      const cantidad = parseFloat(document.getElementById('inputCantidad').value);
      const monedaSeleccionada = document.getElementById('selectMoneda').value;

      if (monedaSeleccionada === 'dolares-pesos') {
        document.getElementById('resultadoConversion').innerText = `${cantidad} USD = ${convertirDolaresAPesos(cantidad)} MXN`;
      } else if (monedaSeleccionada === 'pesos-dolares') {
        document.getElementById('resultadoConversion').innerText = `${cantidad} MXN = ${convertirPesosADolares(cantidad)} USD`;
      }
    };

    // Agregar evento de cambio al select de moneda
    document.getElementById('selectMoneda').addEventListener('change', realizarConversion);

    // Agregar evento de cambio al input de cantidad
    document.getElementById('inputCantidad').addEventListener('input', realizarConversion);
  })
  .catch(error => console.error('Error:', error));




    // funcion para ver y ocultar calcular dolar

    function mostrarDiv1() {
      var divOculto = document.getElementsByClassName("divOculto1")[0];
      var boton = document.getElementsByClassName("boton1")[0];
      
      divOculto1.style.display = "block"; // Muestra el div
      boton1.style.display = "none"; // Oculta el botón
      
      setTimeout(function() {
        ocultarDiv();
      }, 3000); // Oculta el div después de 3 segundos
    }
