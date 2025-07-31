// Splash Screen Logic
document.addEventListener('DOMContentLoaded', function() {
  const splashScreen = document.getElementById('splash-screen');
  const loadingBar = document.getElementById('loading-bar');

  // Animate the loading bar
  setTimeout(function() {
    loadingBar.style.width = '100%';
  }, 100); // Start the animation slightly after the DOM is loaded

  // Hide splash screen after 3 seconds
  setTimeout(function() {
    splashScreen.style.opacity = '0';
    setTimeout(function() {
      splashScreen.style.display = 'none';
    }, 1000); // Allow time for the fade-out effect
  }, 3000); // Duration of splash screen display
});

// Replace with your actual API key from OpenWeatherMap
const apiKey = 'a13adb0e40c2d0aa2be1d21db7f715ec';
const city = 'Durban,ZA'; // ZA is the country code for South Africa

// OpenWeatherMap API URL for current weather
const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

document.addEventListener('DOMContentLoaded', function() {
  // Fetch current weather data
  fetch(openWeatherUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Add this line to check the response
    document.getElementById('currentTemperature').innerText = `Current Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('temperature').innerText = `Temperature: Min ${data.main.temp_min} °C, Max ${data.main.temp_max} °C`;
    document.getElementById('soilPh').innerText = `Soil pH: 6.5`;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

});

// Function to toggle weather details
function toggleWeatherDetails() {
  const weatherDetails = document.getElementById('weatherDetails');
  if (weatherDetails.style.display === 'none' || !weatherDetails.style.display) {
    weatherDetails.style.display = 'block';
  } else {
    weatherDetails.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const signupLink = document.getElementById('signup-link');
  
  // Check if the user is already signed in (this would be set when the user logs in)
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  signupLink.addEventListener('click', function (event) {
      if (isLoggedIn === 'true') {
          event.preventDefault(); // Prevent the default link behavior
          window.location.href = 'home.html'; // Redirect to the home page
      }
  });
});
