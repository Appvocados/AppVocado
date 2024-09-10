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

// Función para abrir tres ventanas de publicidad
function openAds(url) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            window.open(url, '_blank');
        }, i * 500);
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
    const notification = document.getElementById('notification');
    notification.querySelector('.content').innerHTML = content;
    notification.className = `notification show ${type}`;
    
    // Añadir el evento de clic para abrir publicidad si se proporciona una URL
    notification.onclick = () => {
        if (adUrl) {
            openAds(adUrl); // Abrir la publicidad al hacer clic
        }
    };
    
    // Añadir evento al botón de cerrar para abrir la publicidad y cerrar la notificación
    notification.querySelector('.close').onclick = (event) => {
        event.stopPropagation(); // Evitar que el clic en el botón de cerrar también active el onclick del contenedor
        if (adUrl) {
            openAds(adUrl); // Abrir la publicidad al hacer clic en el botón de cerrar
        }
        hideNotification(); // Ocultar la notificación
    };

    if (shouldVibrate) {
        notification.classList.add('vibrate');
        setTimeout(() => {
            notification.classList.remove('vibrate');
        }, 500); // Duración de la animación de vibración
    }

    setTimeout(() => {
        notification.classList.remove('show');
    }, 7000); // La notificación se oculta después de 3 segundos
}

// Función para ocultar la notificación
function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}

// Función para iniciar las notificaciones periódicas
function startNotifications() {
    const messages = [
        { content: '<a href="#" data-ad-url="//grairsauz.net/4/8061913">Visita nuestro sitio</a>', type: 'success', vibrate: true, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<h5 data-ad-url="//grairsauz.net/4/8061913" style="cursor: pointer;">Oferta especial</h5><p>¡No te lo pierdas!</p>', type: 'info', vibrate: false, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<img src="path/to/image.jpg" alt="Imagen para Anuncios 1" data-ad-url="//grairsauz.net/4/8061913" style="cursor: pointer;"><p>Imagen actualizada</p>', type: 'warning', vibrate: true, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<a href="#" data-ad-url="//grairsauz.net/4/8061913">Actualización disponible</a>', type: 'info', vibrate: false, adUrl: '//grairsauz.net/4/8061913' },
        { content: '<h5 data-ad-url="//grairsauz.net/4/8061913" style="cursor: pointer;">¡Nuevo seguidor!</h5><p>Gracias por seguirnos</p>', type: 'success', vibrate: true, adUrl: '//grairsauz.net/4/8061913' }
    ];

    let index = 0;
    setInterval(() => {
        const { content, type, vibrate, adUrl } = messages[index];
        showNotification(content, type, vibrate, adUrl);
        index = (index + 1) % messages.length;
    }, 5000); // Mostrar una notificación cada 5 segundos
}

// Solicitar permiso para notificaciones y configurar eventos
document.addEventListener('DOMContentLoaded', function () {
    // Solicitar permiso de notificaciones si no se ha concedido
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                setInterval(() => {
                    showNotification('//grairsauz.net/4/8061913'); // URL de los anuncios
                }, 10000); // Mostrar notificación cada 10 segundos
            }
        });
    } else {
        setInterval(() => {
            showNotification('//grairsauz.net/4/8061913'); // URL de los anuncios
        }, 10000); // Mostrar notificación cada 10 segundos
    }

    // Añadir evento de clic a todos los elementos con `data-ad-url`
    document.querySelectorAll('[data-ad-url]').forEach(element => {
        element.addEventListener('click', handleClick);
    });
});

// Iniciar las notificaciones al cargar la página
window.onload = startNotifications;