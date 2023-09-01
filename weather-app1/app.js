//https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=7abb9a0098b73369439dd73ccbfb3512

const apiKey = "7abb9a0098b73369439dd73ccbfb3512";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchButton = document.querySelector(".click");
const searchInput = document.querySelector(".card input");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);
  if (data.weather[0].main == "Clear") {
    document.querySelector(".weather img").src = "./images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather img").src = "./images/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather img").src = "./images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather img").src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather img").src = "./images/mist.png";
  }

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchButton.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
