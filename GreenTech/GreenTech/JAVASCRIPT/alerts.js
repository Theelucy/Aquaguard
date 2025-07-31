const apiKey = '571b9d0df0f1c1dffc0118a390046f2a';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=-29.7465&lon=30.3971&appid=${apiKey}&units=metric`;

// Function to fetch weather data and display notifications
function checkNotifications() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp; // Temperature in Celsius
      const weatherDescription = data.weather[0].description;

      // Determine season based on temperature or weather condition
      let season = determineSeason(temp, weatherDescription);
      displayNotification(season);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Function to determine the current season
function determineSeason(temp, weatherDescription) {
  if (temp >= 25) {
    return 'summer';
  } else if (temp <= 10) {
    return 'winter';
  } else if (weatherDescription.includes('rain')) {
    return 'autumn';
  } else {
    return 'spring';
  }
}

// Function to display notifications for the current season
function displayNotification(season) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  seasons.forEach(seasonName => {
    const element = document.getElementById(`${seasonName}-todo`);
    if (element) {
      if (seasonName === season) {
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    }
  });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', checkNotifications);
