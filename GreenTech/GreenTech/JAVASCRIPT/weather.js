const apiKey = 'a13adb0e40c2d0aa2be1d21db7f715ec';

// Function to get current weather based on user's latitude and longitude
function getWeather(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
      document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity} %`;
      document.getElementById('windSpeed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
      document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
    })
    .catch(error => {
      document.getElementById('error').innerText = 'Error fetching weather data. Please try again later.';
      console.error('Error:', error);
    });
}

// Function to get user's current location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById('location').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
      getWeather(lat, lon);
    }, () => {
      document.getElementById('error').innerText = 'Unable to retrieve your location.';
    });
  } else {
    document.getElementById('error').innerText = 'Geolocation is not supported by your browser.';
  }
}

// Add event listener for refresh button
document.getElementById('refresh').addEventListener('click', getLocation);

// Call the getLocation function when the page loads
document.addEventListener('DOMContentLoaded', getLocation);
