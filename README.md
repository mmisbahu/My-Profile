# Weather Forecast Web App

A responsive, modern weather forecast application that displays current weather conditions and a 5-day forecast for any city in the world.

## Features

✅ **Real-time Weather Data** - Current temperature, humidity, wind speed, pressure, and "feels like" temperature
✅ **5-Day Forecast** - Daily weather predictions with high/low temperatures
✅ **Search by City** - Find weather for any city worldwide using the search bar
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
✅ **Weather Icons & Emojis** - Visual representation of weather conditions
✅ **Error Handling** - User-friendly error messages for invalid cities
✅ **No API Key Required** - Uses free Open-Meteo API

## How to Use

1. Open `index.html` in a web browser
2. The app loads with weather for London by default
3. Enter any city name in the search bar and press Enter or click Search
4. View current weather conditions and the 5-day forecast

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Responsive styling with gradients and animations
- **JavaScript (Vanilla)** - No dependencies, pure JavaScript
- **Open-Meteo API** - Free weather data API (no authentication required)

## API Used

**Open-Meteo** - Free weather API
- Geocoding API: https://geocoding-api.open-meteo.com/v1/search
- Weather API: https://api.open-meteo.com/v1/forecast

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # JavaScript logic and API calls
└── README.md       # This file
```

## Features Included

### Current Weather Display
- City name and location
- Current temperature
- Weather condition (description)
- Feels-like temperature
- Humidity percentage
- Wind speed
- Atmospheric pressure

### 5-Day Forecast
- Date for each day
- High and low temperatures
- Weather condition
- Weather emoji icons

### User Interface
- Gradient purple theme
- Hover effects on forecast cards
- Responsive grid layout
- Search functionality with autocomplete support
- Error message display

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Weather data is fetched in real-time from the Open-Meteo API
- No API key is required (free service)
- The app uses the browser's timezone for displaying times
- Default city is set to London on page load

## Example Usage

```
1. Open index.html in browser
2. Type "Paris" in the search bar
3. Weather for Paris displays immediately
4. View current conditions and 5-day forecast
```

## Performance

- Fast loading times with minimal dependencies
- Efficient API calls
- Responsive design optimized for all devices
- No external frameworks or libraries required

Enjoy your weather app! 🌤️
