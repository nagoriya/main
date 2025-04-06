// OpenWeatherMap API key (replace with your own API key)
const API_KEY = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}";

// Form submit event listener
document.getElementById("weatherForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const city = document.getElementById("cityInput").value;
  getWeather(city);
});

// Function to fetch weather data
function getWeather(city) {
  // OpenWeatherMap API URL (using metric units for Celsius)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

// Function to display weather data on the page
function displayWeather(data) {
  const weatherResult = document.getElementById("weatherResult");
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  
  weatherResult.innerHTML = `
    <p><strong>City:</strong> ${name}</p>
    <p><strong>Temperature:</strong> ${temperature} &deg;C</p>
    <p><strong>Condition:</strong> ${description}</p>
  `;
}
