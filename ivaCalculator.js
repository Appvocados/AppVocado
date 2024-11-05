function calcularIva() {
    const monto = parseFloat(document.getElementById('monto').value);
    const iva = 16; // IVA en México
    const montoIva = monto * (iva / 100);
    const montoTotal = monto + montoIva;
  
    document.getElementById('iva').innerHTML = `IVA (16%): $${montoIva.toFixed(2)}`;
    document.getElementById('total').innerHTML = `Monto total: $${montoTotal.toFixed(2)}`;
  }

      // funcion para ver y ocultar calcular Iva

    function mostrarDivIva() {
        var divOculto = document.getElementsByClassName("divOcultoIva");
        var boton = document.getElementsByClassName("botonIva");
        
        divOcultoIva.style.display = "block"; // Muestra el div
        botonIva.style.display = "none"; // Oculta el botón
        
        setTimeout(function() {
          ocultarDiv();
        }, 3000); // Oculta el div después de 3 segundos
      }