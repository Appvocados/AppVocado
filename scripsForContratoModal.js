
  function mostrarContrato() {
    var modal = document.getElementById('contratoModal');
    modal.style.display = 'block';
    
    // Crear el contenido del contrato dinámicamente
    var contenidoContrato = document.getElementById('contenidoContrato');
    contenidoContrato.innerHTML = `
       <h2>Contrato de Compra-Venta de Aguacates</h2>
            <p><strong>Partes Contratantes:</strong></p>
            <p>AppVocado, en adelante "El Comprador".</p>
            <p><p id="contratoSeccionUltimoPrecio">, en adelante "El Productor".</p>
            <p><strong>Fecha del Contrato:</strong> [Fecha]</p>

            <h2>1. Objeto del Contrato</h2>
            <p>El Productor acuerda vender y el Comprador acuerda comprar aguacates de acuerdo con las siguientes especificaciones:</p>

            <h3>2. Cantidad y Especificaciones:</h3>
            <p><strong>2.1. Cantidad:</strong> El Productor se compromete a entregar al Comprador la cantidad de aguacates estipulada en cada pedido de compra. Las cantidades exactas se especificarán en cada pedido.</p>
            <p><strong>2.2. Calidad:</strong> Los aguacates deben cumplir con las siguientes especificaciones de calidad:
            <ul>
                <li>Tamaño mínimo [Especificar tamaño].</li>
                <li>Grado de madurez: [Especificar grado de madurez].</li>
                <li>Ausencia de defectos visibles.</li>
                <li>Empaque adecuado para el transporte.</li>
            </ul>
            </p>

            <h3>3. Precio y Condiciones de Pago:</h3>
            <p><strong>3.1. Precio:</strong> <p id="contratoSeccionUltimoPrecio"></p> El precio de los aguacates se acuerda entre las partes y se especifica en cada pedido de compra. Los precios pueden variar según la temporada y la calidad de los aguacates.</p>
            <p><strong>3.2. Condiciones de Pago:</strong> El Comprador pagará al Productor de acuerdo con las condiciones acordadas en cada pedido. Además, el Comprador se compromete a pagar a Appvocado una comisión de $1.00 (Un peso m/n) por cada kilogramo de aguacates vendido a las empresas exportadoras a través de los servicios de intermediación de Appvocado.</p>

            <h3>4. Entrega y Plazos:</h3>
            <p><strong>4.1. Lugar de Entrega:</strong> Las partes acuerdan que la entrega de los aguacates se realizará en [Lugar de Entrega].</p>
            <p><strong>4.2. Plazos de Entrega:</strong> Las fechas de entrega se acuerdan en cada pedido de compra y se especificarán en el mismo. El Productor se compromete a realizar entregas puntuales.</p>

            <h3>5. Documentación y Certificados:</h3>
            <p>El Productor proporcionará al Comprador y a Appvocado la documentación necesaria, incluyendo certificados de calidad, permisos de exportación y otros documentos requeridos por la legislación vigente.</p>

            <h3>6. Inspección y Aceptación:</h3>
            <p>El Comprador tendrá derecho a inspeccionar los aguacates antes de su aceptación. Si los aguacates no cumplen con las especificaciones acordadas, el Comprador podrá rechazarlos.</p>

            <h3>7. Garantía de Calidad:</h3>
            <p>El Productor garantiza que los aguacates cumplen con las especificaciones de calidad acordadas y se compromete a reemplazar o reembolsar los productos que no cumplan con estas especificaciones.</p>

            <h3>8. Resolución de Disputas:</h3>
            <p>Cualquier disputa que surja en virtud de este contrato se resolverá mediante negociación de buena fe entre las partes. Si no se llega a un acuerdo, la disputa se someterá a la jurisdicción de los tribunales de Morelia Michoacán de conformidad con las leyes de México.</p>

            <h3>9. Confidencialidad:</h3>
            <p>Las partes acuerdan mantener la confidencialidad de la información comercial y financiera compartida en virtud de este contrato.</p>

            <h3>10. Estabilidad de Precios:</h3>
            <p>Las partes reconocen que los precios de los aguacates publicados en la plataforma de Appvocado pueden experimentar fluctuaciones y variaciones en cualquier momento. Sin embargo, las partes acuerdan que el precio de venta establecido en este contrato es firme y no estará sujeto a cambios debido a las fluctuaciones en la plataforma de Appvocado.</p>
            <p>El precio acordado en este contrato se mantendrá constante a menos que ambas partes acuerden por escrito una modificación de los términos de precio.</p>

            <p><strong>Ambas partes, El Comprador, El Productor y Appvocado, reconocen y aceptan los términos y condiciones de este contrato mediante su firma a continuación:</strong></p>

            <p>Firma de El Comprador: [Firma]</p>
            <p>Nombre de El Comprador: [Nombre]</p>
            <p>Firma de El Productor: [Firma]</p>
            <p>Nombre de El Productor: [Nombre]</p>
            <p>Firma de Appvocado: [Firma]</p>
            <p>Nombre de Appvocado: [Nombre]</p>

            <!-- Checkbox y botones de aceptar y descargar -->
        <label id="labelAcuerdoCheckbox"><strong>
            <input type="checkbox" id="acuerdoCheckbox">
            <i class="fa-solid fa-file-signature fa-xl" style="color: #005eff;"></i>
            Estoy de acuerdo con los términos.</strong>
            </label> 

      <!-- ... (resto del contenido) ... -->
    `;
  }

  function cerrarContrato() {
    var modal = document.getElementById('contratoModal');
    modal.style.display = 'none';
    iconWhatsapp.style.display = 'block';
    dataForm.style.filter = 'none'; // Restaurar el formulario a su estado normal (quitar el desenfoque)

    
  }

  function aceptarContrato() {
    var acuerdoCheckbox = document.getElementById('acuerdoCheckbox');

    // Verificar si el checkbox está marcado
    if (acuerdoCheckbox.checked) {
      // Puedes realizar acciones adicionales aquí, por ejemplo, enviar datos al servidor, etc.
      alert('Has firmado y aceptado el contrato');
      cerrarContrato(); // Cerrar el modal después de aceptar
    } else {
      alert('Por favor, acepta los términos del contrato.');
    }
  }

  function descargarContrato() {
    var acuerdoCheckbox = document.getElementById('acuerdoCheckbox');

    // Verificar si el checkbox está marcado antes de generar el PDF
    if (acuerdoCheckbox.checked) {
      var modalContent = document.querySelector('.modal-content');

      // Opciones para la generación del PDF
      var options = {
        margin: 10,
        filename: 'contrato.pdf',
        image: { type: 'jpeg', quality: 0.09 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      // Generar el PDF y descargar
      html2pdf().from(modalContent).set(options).outputPdf().then(function(pdf) {
        var blob = new Blob([pdf], { type: 'application/pdf' });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'contrato.pdf';
        link.click();
      });
    } else {
      alert('Por favor, acepta los términos del contrato antes de descargar el PDF.');
    }
  }

  // Cierra el modal si se hace clic fuera de él
  window.onclick = function(event) {
    var modal = document.getElementById('contratoModal');
    if (event.target == modal) {
      modal.style.display = 'none';
      
    }
  }
