function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "3f07c8b6f5a7e4d56325b6e73b6c7bd9";  // example key
 // 🔴 Replace with your actual OpenWeather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("result").innerHTML = "City not found!";
      } else {
        document.getElementById("result").innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
        `;
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}


