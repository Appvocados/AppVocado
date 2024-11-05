    // Deshabilitar selección y copia
    document.body.addEventListener('contextmenu', event => event.preventDefault());
    document.body.addEventListener('selectstart', event => event.preventDefault());
    document.body.addEventListener('copy', event => event.preventDefault());
    
    // Deshabilitar copia y pegar
    document.body.addEventListener('copy', event => {
      event.clipboardData.setData('text', '');
      event.preventDefault();
    });
    
    document.body.addEventListener('paste', event => {
      event.preventDefault();
    });
    
    // Proteger imágenes
    const images = document.querySelectorAll('img');
    images.forEach(image => {
      image.addEventListener('contextmenu', event => event.preventDefault());
      image.addEventListener('dragstart', event => event.preventDefault());
    });
    
    // Evitar logs en consola
    const originalConsoleLog = console.log;
    console.log = function(...args) {
      // Reemplaza los logs con una función vacía
      // o agrega tu propia lógica para manejar los logs
    };
    
    // Proteger contra inspectores de elementos
    const originalElement = document.createElement('div');
    originalElement.addEventListener('mouseover', function() {
      // Evita que se muestren los atributos en el inspector
      this.removeAttribute('style');
    });
    
    // Evitar depuración
    function noDebug() {
      debugger;
    }