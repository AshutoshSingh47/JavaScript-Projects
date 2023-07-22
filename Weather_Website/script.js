const API_KEY = "863242cfb2b1d357e6093d9a4df19a4b";
const url = "https://api.openweathermap.org/data/2.5/weather";

window.addEventListener("load", () => getWeatherData("Gorakhpur"));

document.querySelector(".search-button").addEventListener("click", () => {
  const city = document.getElementById("search-text").value;
  document.getElementById("search-text").value = "";
  getWeatherData(city);
});

async function getWeatherData(city) {
  const res = await fetch(`${url}?q=${city}&units=metric&appid=${API_KEY}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    setTimeout(() => {
      document.querySelector(".error").style.display = "none";
    }, 2000);
  }
  const data = await res.json();
  fillDataInCard(data);
}

function fillDataInCard(data) {
  const temp = document.querySelector(".temp");
  const city = document.querySelector(".city");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const weather_icon = document.querySelector(".weather-icon");

  let icon = data.weather[0].icon;
  weather_icon.src = "https://openweathermap.org/img/wn/" + `${icon}@2x.png`;

  city.innerHTML = data["name"];
  temp.innerHTML = Math.round(data["main"]["temp"]) + " °C";
  humidity.innerHTML = data["main"]["humidity"] + "%";
  wind.innerHTML = data["wind"]["speed"] + "km/h";
}
