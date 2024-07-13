function displayApiCity(response){
    const tempValue=document.getElementById("tempValue");
    tempValue.textContent=(Math.floor(response.data.temperature.current))
    const cityInput=document.getElementById("cityInput")
    cityInput.textContent=response.data.city;
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