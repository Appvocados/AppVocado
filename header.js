// header.js
function mostrarHeader() {
    document.write(`
        <header>
            <nav>
                <div id="appvocado">
                    <figure class="icon">
                        <a href="index.html">
                        <img src="avocado-1-icon.gif" title="Click para ir a página de inicio" alt="Inicio">
                        </a>
                    </figure>
                    <a id="AppVocado" href="index.html" class="titles"> AppVocado </a>              
                </div>
                
                <!-- 
                <form class="buscador">
                    <input id="src" type="text" placeholder="Buscar fecha o noticia">
                    <input id="reset" type="reset" value="X">   	
                    <input id="buscar" type="submit" value="Buscar">
                </form>
                 -->

                <!--
                <a id="" class="link" href="Sell Form.html">Entrar</a>
                -->
    
                <a id="AppVocado" href="index.html" class="titles">
                <i class="fa-solid fa-chart-line fa-sm" style="color: #80ff00;"></i></a>

                <!-- Menú desplegable con el ícono FontAwesome -->
<div class="dropdown">
    <button class="dropbtn">
        <i class="fa-solid fa-bars fa-2xl" style="color: #80ff00;"></i>
    </button>
    <div class="dropdown-content right-aligned full-width">
        <a id="" class="link alert" href="#"><i class="fa-regular fa-user iconosBlack"></i>Ingresar</a>
        <a id="" class="link" href="indexRegistroDeHuertos.html"><i class="fa-solid fa-file iconosBlack"></i></i>Guía para veder</a>
        <a id="" class="link alert" href="mihuerto.html"><i class="fa-solid fa-seedling iconosBlack"></i>Mi huerto</a>
        <a id="" class="link alert" href="#"><i class="fa-solid fa-bug-slash iconosBlack"></i>Consejos para cultivos</a>
        <a id="" class="link alert" href="#"><i class="fa-solid fa-user-xmark iconosBlack"></i>Salir</a>



        </a>

        <!-- 
        <a href="showData.html">clientes</a>
        <a href="FormDataGrafic.html">Actualizar precios</a>
        <a href="visualizargraficos.html">Ver gráficas</a>
        -->
    </div>
</div>

         </div>

            </nav>
        </header>
    `);
}
