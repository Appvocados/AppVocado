function mostrarHeader() {
    document.write(`
        <header>
            <nav>
                <div id="appvocado">
                    <figure class="icon">
                        <a href="index.html">
                            <img src="img/avocado-1-icon.gif" title="Click para ir a página de inicio" alt="Inicio">
                        </a>
                    </figure>
                    <a id="AppVocado" href="index.html" class="titles"> AppVocado </a>              
                </div>

                <a id="AppVocado" href="index.html" class="titles">
                    <i class="fa-solid fa-chart-line fa-sm" style="color: #80ff00;"></i>
                </a>

                <div class="dropdown">
                <button class="dropbtn" onmouseover="showMenu()">
                        <i class="fa-solid fa-bars fa-2xl" style="color: #80ff00;"></i>
                    </button>
                    <div class="dropdown-content right-aligned full-width">
                        <!-- <a id="" class="link alert" href="#"><i class="fa-regular fa-user iconosBlack"></i>Ingresar</a> -->
                        <a id="" class="link" href="indexRegistroDeHuertos.html"><i class="fa-solid fa-file iconosBlack"></i></i>Guía para vender</a>
                        <a id="" class="link alert" href="#"><i class="fa-solid fa-newspaper iconosBlack"></i>Noticias</a>
                        <a id="" class="link alert" href="mihuerto.html"><i class="fa-solid fa-seedling iconosBlack"></i>Mi huerto</a>
                        <a id="" class="link alert" href="#"><i class="fa-solid fa-bug-slash iconosBlack"></i>Consejos para cultivos</a>
                        <!-- <a id="" class="link alert" href="#"><i class="fa-solid fa-user-xmark iconosBlack"></i>Salir</a> -->
                        
                        <a id="cerrar" class="hoverRed" href="#" onclick="hideMenu()"><i class="fa-solid fa-square-xmark iconosBlack "></i>Salir del menú</a>
                    </div>
                </div>
            </nav>
        </header>
    `);

        // Función para ocultar el menú al hacer clic en "Salir"
        document.write(`
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var salirLink = document.getElementById('salir');
                if (salirLink) {
                    salirLink.addEventListener('click', function() {
                        hideMenu();
                    });
                }
            });

            // Función para ocultar el menú
            function hideMenu() {
                var menu = document.querySelector('.dropdown-content');
                if (menu) {
                    menu.style.display = 'none';
                }
            }

            // Función para mostrar el menú al pasar el cursor sobre el botón
            function showMenu() {
                var menu = document.querySelector('.dropdown-content');
                if (menu) {
                    menu.style.display = 'block';
                }
            }

            // funcion de alertas para funciones que aun no estan
            // Obtener todos los elementos con la clase "alert"
            var elementosLinks = document.getElementsByClassName("alert");
            
            // Agregar un evento de clic a cada elemento con la clase "alert"
            for (var i = 0; i < elementosLinks.length; i++) {
                elementosLinks[i].addEventListener("click", function(event) {
                    event.preventDefault();
                    // Mostrar una alerta
                    alert("Estamos trabajando para mejorar el sitio, esta función no está disponible aún. Gracias por tu paciencia. \u{1F622} \u{1F6E0}");
                });
            }
            

        </script>
    `);
}
