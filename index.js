function cityApiResponse(response) {
  console.log(response);
  const tempValue = document.getElementById("tempValue");
  const tempHumidity = document.getElementById("tempHumidity");
  const tempWind = document.getElementById("tempWind");
  const tempDescription = document.getElementById("tempDescription");
  let cityTime = document.getElementById("cityTime");
  let date = new Date(response.data.time * 1000);
  let iconImage = document.getElementById("iconImage");
  console.log(response);

  tempValue.textContent = Math.floor(response.data.temperature.current);
  tempHumidity.textContent = `${response.data.temperature.humidity}%`;
  tempWind.textContent = `${response.data.wind.speed}km/h`;
  tempDescription.textContent = response.data.condition.description;
  cityTime.textContent = updatedTime(date);
  iconImage.innerHTML = `<img src="${response.data.condition.icon_url}" class="tempIcon" id="tempIcon"/>`;
  console.log(iconImage);
}
function updatedTime(date) {
  let hour = date.getHours();
  let minutues = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let timeString = `${day} ${hour}:${minutues}`;
  return timeString;
}

function applyApiContent(city) {
  let apiKey = `0cb149e913a89ff1dbc6ab7o6ft5fdf4`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(cityApiResponse);
}

function displayCity(event) {
  event.preventDefault();

  const searchInput = document.getElementById("searchInput");
  const cityInput = document.getElementById("cityInput");
  cityInput.textContent = searchInput.value;
  applyApiContent(searchInput.value);
}

const searchContainer = document.getElementById("searchContainer");
searchContainer.addEventListener("submit", displayCity);
