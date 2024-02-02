let container = document.querySelector(".container");
let search = document.querySelector(".search-box button");
let weatherBox = document.querySelector(".weather-box");
let weatherDetails = document.querySelector(".weatherdetails");

search.addEventListener("click", () => {
  const city = document.querySelector(".search-box input").value;
  console.log(city);
  if (city == "") return;

  fetch(`https://www.prevision-meteo.ch/services/json/${city}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.current_condition.tmp);
      let { current_condition } = data;
      let temperature = document.querySelector(".weather-box .temperature");
      let vitesseVent = document.querySelector(".weather-details .info-wind");
      let humidite = document.querySelector(".weather-details .info-humidity");
      let conditionMeteo = document.querySelector(".weather-box .description");
      let image = document.querySelector(".weather-box img");

      temperature.innerHTML = `${current_condition.tmp}<span>C°</span>`;
      vitesseVent.innerHTML = `${current_condition.wnd_spd}<span>Km/h</span>`;
      humidite.innerHTML = `${current_condition.humidity}<span>%</span>`;
      conditionMeteo.innerHTML = current_condition.condition;
      image.src = current_condition.icon_big;
    });
});
