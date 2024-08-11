const apiKey = '81f8ab5c7d04267cd91e3fe539277424'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', () => {
  const location = document.getElementById('location').value;
  if (location) {
    getWeatherData(location);
  } else {
    alert('Please enter a location.');
  }
});

function getWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        displayWeatherData(data);
      } else {
        alert('Location not found.');
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function displayWeatherData(data) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity} %</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;
}
