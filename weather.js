// Reemplaza 'TU_CLAVE_API' con la clave API que obtuviste de OpenWeatherMap
const apiKey = ' http://api.weatherbit.io/v2.0/current';
const latitude = 33.44;
const longitude = -94.04;

// URL de la API de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${apiKey}`;

// Función para obtener y mostrar la información del clima
async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Verifica si la propiedad 'current' está definida en la respuesta
        if (data.current) {
            const currentTemperature = data.current.temp;
            const currentWeatherDescription = data.current.weather[0].description;

            // Información adicional
            const sunrise = new Date(data.current.sunrise * 1000);
            const sunset = new Date(data.current.sunset * 1000);

            // Actualiza el contenido del div con la información del clima actual
            document.getElementById('weather-widget').innerHTML = `
                <h2>Condiciones Actuales</h2>
                <p>Temperatura Actual: ${currentTemperature}°C</p>
                <p>Descripción del Tiempo: ${currentWeatherDescription}</p>
                <p>Amanecer: ${sunrise.toLocaleTimeString()}</p>
                <p>Atardecer: ${sunset.toLocaleTimeString()}</p>
            `;
        } else {
            console.error('La propiedad "current" no está definida en la respuesta:', data);
        }
    } catch (error) {
        console.error('Error al obtener datos del clima:', error);
    }
}

// Llama a la función para obtener y mostrar el clima al cargar la página
window.onload = getWeather;
