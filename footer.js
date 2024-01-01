document.addEventListener("DOMContentLoaded", function () {
    // Creamos el elemento footer
    const footer = document.createElement("footer");
    footer.innerHTML = `

        <div class="footer-links">
            <a class="link linkWhite" href="AboutUs.html#aboutUs">Acerca de Nosotros</a>
            <a class="link linkWhite" href="AboutUs.html#terms">Términos de Servicio</a>
            <a class="link linkWhite" href="AboutUs.html#contact">Contacto</a> <br>
            <a class="link linkWhite" href="AboutUs.html#privacy">Política de Privacidad</a>
            <a class="link linkWhite" href="AboutUs.html#questions">Preguntas Frecuentes</a>
        </div>
        <div class="social-media">
            <a href="https://www.facebook.com/people/App-Vocado/pfbid0qbDsy2BWJ8mnhpKeVusKxLuHNpxZ7MmvVguiwMbJ4qChtVf9rbRqdMuiDVgi6XfHl/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook fa-2xl"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-x-twitter fa-2xl"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram fa-2xl"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer">AppVocado.Org 2024</a>
        </div>
  
    `;

    // Agregamos el footer al final del cuerpo de la página
    const footerContainer = document.getElementById("footer-container");
    footerContainer.appendChild(footer);
});


