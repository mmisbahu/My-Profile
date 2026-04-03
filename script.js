// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(savedTheme);
updateThemeIcon();

function updateThemeIcon() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Toggle light mode');
    } else {
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', newTheme);
    
    updateThemeIcon();
});

// Weather App JavaScript
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const errorMessage = document.getElementById('errorMessage');

// Weather data elements
const cityName = document.getElementById('cityName');
const currentDate = document.getElementById('currentDate');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const forecastContainer = document.getElementById('forecastContainer');
const weatherIcon = document.getElementById('weatherIcon');

// Weather icon mapping
const weatherIconMap = {
    'Clear sky': 'https://www.open-meteo.com/images/weather_icons/clear.svg',
    'Partly cloudy': 'https://www.open-meteo.com/images/weather_icons/cloudy.svg',
    'Overcast': 'https://www.open-meteo.com/images/weather_icons/overcast.svg',
    'Drizzle': 'https://www.open-meteo.com/images/weather_icons/rain.svg',
    'Rain': 'https://www.open-meteo.com/images/weather_icons/rain.svg',
    'Snow': 'https://www.open-meteo.com/images/weather_icons/snow.svg'
};

// WMO Weather code interpretation
function getWeatherDescription(code, isDay) {
    const descriptions = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };
    return descriptions[code] || 'Unknown';
}

function getWeatherIcon(code) {
    if (code === 0 || code === 1) return '☀️';
    if (code === 2) return '⛅';
    if (code === 3 || code === 45 || code === 48) return '☁️';
    if (code >= 51 && code <= 67) return '🌧️';
    if (code >= 71 && code <= 86) return '❄️';
    if (code >= 80 && code <= 82) return '🌦️';
    if (code >= 85 && code <= 86) return '🌨️';
    if (code >= 95) return '⛈️';
    return '🌡️';
}

// Geocode city name to get coordinates
async function geocodeCity(city) {
    try {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('City not found');
        }

        const result = data.results[0];
        return {
            latitude: result.latitude,
            longitude: result.longitude,
            name: result.name,
            country: result.country,
            admin1: result.admin1 || ''
        };
    } catch (error) {
        throw new Error('Could not find city: ' + error.message);
    }
}

// Fetch weather data
async function fetchWeather(latitude, longitude, cityInfo) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        );
        const data = await response.json();

        // Update current weather
        const current = data.current;
        const daily = data.daily;

        const locationText = cityInfo.admin1 
            ? `${cityInfo.name}, ${cityInfo.admin1}, ${cityInfo.country}`
            : `${cityInfo.name}, ${cityInfo.country}`;
        
        cityName.textContent = cityInfo.name;
        currentDate.textContent = `${locationText} • ${new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`;
        
        temperature.textContent = `${Math.round(current.temperature_2m)}°`;
        const desc = getWeatherDescription(current.weather_code, true);
        description.textContent = desc;
        feelsLike.textContent = `${Math.round(current.apparent_temperature)}°`;
        humidity.textContent = `${current.relative_humidity_2m}%`;
        windSpeed.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
        pressure.textContent = `${Math.round(current.pressure_msl)} hPa`;

        // Set weather icon emoji
        weatherIcon.textContent = getWeatherIcon(current.weather_code);
        weatherIcon.style.fontSize = '80px';

        // Update 5-day forecast
        updateForecast(daily);

        hideError();
    } catch (error) {
        showError(error.message);
    }
}

function updateForecast(daily) {
    forecastContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const date = new Date(daily.time[i]);
        const weatherCode = daily.weather_code[i];
        const maxTemp = daily.temperature_2m_max[i];
        const minTemp = daily.temperature_2m_min[i];
        const description = getWeatherDescription(weatherCode, true);

        const card = document.createElement('div');
        card.className = 'forecast-card';
        card.innerHTML = `
            <div class="date">${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
            <div class="icon" style="font-size: 40px; line-height: 60px;">
                ${getWeatherIcon(weatherCode)}
            </div>
            <div class="temp-range">
                <div class="high-temp">${Math.round(maxTemp)}°</div>
                <div class="low-temp">${Math.round(minTemp)}°</div>
            </div>
            <div class="description">${description}</div>
        `;
        forecastContainer.appendChild(card);
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

function hideError() {
    errorMessage.classList.remove('show');
}

// Search handler
async function searchWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        const cityInfo = await geocodeCity(city);
        await fetchWeather(cityInfo.latitude, cityInfo.longitude, cityInfo);
    } catch (error) {
        showError(error.message);
    }
}

// Event listeners
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

// Load default city on page load
window.addEventListener('load', () => {
    cityInput.value = 'London';
    searchWeather();
});
