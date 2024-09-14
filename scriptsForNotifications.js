// Funciones para obtener parámetros de la URL
function getYmid() {
    try {
        return new URL(location.href).searchParams.get('ymid');
    } catch (e) {
        console.warn(e);
    }
    return null;
}

function getVar() {
    try {
        return new URL(location.href).searchParams.get('var');
    } catch (e) {
        console.warn(e);
    }
    return null;
}

// Opciones de configuración para notificaciones y publicidad
self.options = {
    "domain": "bigrourg.net",
    "resubscribeOnInstall": true,
    "zoneId": 8061906,
    "ymid": getYmid(),
    "var": getVar()
};

// Variable para controlar el intervalo de notificaciones
let notificationInterval = null;
let notificationPaused = false; // Variable para pausar y reanudar notificaciones

// Función para abrir tres ventanas de publicidad
function openAds(url) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            window.open(url, '_blank');
        }, i * 500); // Mostrar tres ventanas de publicidad con un pequeño retraso entre ellas
    }
}

// Manejo de eventos click en elementos con publicidad
function handleClick(event) {
    event.preventDefault(); // Prevenir comportamiento por defecto
    const url = event.target.getAttribute('data-ad-url');
    if (url) {
        openAds(url);
    }
}

// Función para actualizar el tamaño de la notificación
function updateNotificationSize(size) {
    const notification = document.getElementById('notification');
    notification.classList.remove('small', 'medium', 'large');
    
    if (size <= 220) {
        notification.classList.add('small');
    } else if (size <= 250) {
        notification.classList.add('medium');
    } else {
        notification.classList.add('large');
    }
}

// Función para mostrar la notificación
function showNotification(content, type, shouldVibrate = false, adUrl = null) {
    if (notificationPaused) return; // Si está pausada, no mostrar notificaciones

    const notification = document.getElementById('notification');
    notification.querySelector('.content').innerHTML = content;
    notification.className = `notification show ${type}`;
    
    // Añadir el evento de clic para abrir publicidad si se proporciona una URL
    notification.onclick = () => {
        if (adUrl) {
            openAds(adUrl); // Abrir la publicidad al hacer clic
        }
    };
    
    // Añadir evento al botón de cerrar para detener las notificaciones por 10 segundos
    notification.querySelector('.closeBtn').onclick = (event) => {
        event.stopPropagation(); // Evitar que el clic en el botón de cerrar también active el onclick del contenedor
        hideNotification(); // Ocultar la notificación
        pauseNotifications(); // Pausar las notificaciones durante 10 segundos
    };

    // Animación de vibración si es necesario
    if (shouldVibrate) {
        notification.classList.add('vibrate');
        setTimeout(() => {
            notification.classList.remove('vibrate');
        }, 500); // Duración de la animación de vibración
    }

}

// Función para ocultar la notificación
function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}

// Función para pausar las notificaciones por 10 segundos
function pauseNotifications() {
    notificationPaused = true; // Pausar notificaciones
    clearInterval(notificationInterval); // Detener el intervalo de notificaciones

    setTimeout(() => {
        notificationPaused = false; // Reanudar notificaciones después de 10 segundos
        startNotificationCycle(); // Reiniciar el ciclo de notificaciones
    }, 3000); // Pausa de 10 segundos
}

// Función para iniciar las notificaciones periódicas
function startNotificationCycle() {
    const messages = [
        { content: '<a href="#" data-ad-url="//grairsauz.net/4/8061913">Visita nuestro sitio</a>', type: 'success', vibrate: true, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<h5 data-ad-url="//grairsauz.net/4/8061914" style="cursor: pointer;">Oferta especial</h5><p>¡No te lo pierdas!</p>', type: 'info', vibrate: false, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<img src="path/to/image.jpg" alt="Imagen Anuncios" style="cursor: pointer;"><a href="https://midgerelativelyhoax.com/k65ptt8jsv?key=e50b0feb3642cf1cfd11d3b3bcb6cab7"><p>Chat gratis</p></a>', type: 'error', vibrate: true, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<a href="#" data-ad-url="//grairsauz.net/4/8061913">Actualización disponible</a>', type: 'info', vibrate: false, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<h5 data-ad-url="//grairsauz.net/4/8061913" style="cursor: pointer;">¡Nuevo seguidor!</h5><p>Da Click</p>', type: 'warning', vibrate: true, adUrl: '//grairsauz.net/4/8061913' }
    ];

    let index = 0;
    notificationInterval = setInterval(() => {
        const { content, type, vibrate, adUrl } = messages[index];
        showNotification(content, type, vibrate, adUrl);
        index = (index + 1) % messages.length;
    }, 7000); // Mostrar una notificación cada 10 segundos para incluir los 7 segundos de duración de cada una
}

// Añadir evento de clic a todos los elementos con `data-ad-url`
document.querySelectorAll('[data-ad-url]').forEach(element => {
    element.addEventListener('click', handleClick);
});

// Iniciar las notificaciones al cargar la página
window.onload = startNotificationCycle;
