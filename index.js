function displayApiCity(response){
    const tempValue=document.getElementById("tempValue");
    const cityInput = document.getElementById("cityInput");
    const tempDescription=document.getElementById('tempDescription')
    const tempHumidity=document.getElementById("tempHumidity");
    const tempWind=document.getElementById("tempWind");
    let  cityTime=document.getElementById("cityTime");
    let date = new Date(response.data.time * 1000);
    let iconImage=document.getElementById("iconImage");

    
    console.log(response)
    tempValue.textContent=(Math.floor(response.data.temperature.current));
   cityInput.textContent=response.data.city;
    tempDescription.textContent=response.data.condition.description;
    tempHumidity.textContent=`${response.data.temperature.humidity}%`;
    tempWind.textContent=`${response.data.wind.speed}km/h`;
    cityTime.textContent=displayDate(date)
    iconImage.innerHTML =`<img src="${response.data.condition.icon_url}" class="tempIcon" id="tempIcon">`;
}
function displayDate(date){
    let hours=date.getHours()
    let minutes=date.getMinutes()
   

    if(minutes <10){
    
        minutes=`0${minutes}`
    }
    
    
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day=days[date.getDay()]
    let timeString = `${day} ${hours}:${minutes}`;
  console.log(timeString)
    return timeString
}

function apiCity(city){
 let apiKey="0cb149e913a89ff1dbc6ab7o6ft5fdf4";
 let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
 axios.get(apiUrl).then(displayApiCity);
}


function displayNewCurrent(event){
 event.preventDefault();
 
 const searchInput=document.getElementById("searchInput");

 apiCity(searchInput.value)

}

const searchContainer=document.querySelector("#searchContainer")
searchContainer.addEventListener("submit" ,displayNewCurrent)