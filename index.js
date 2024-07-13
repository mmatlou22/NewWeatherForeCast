
function displayNewCurrent(event){
 event.preventDefault();
 
 const searchInput=document.getElementById("searchInput");
 const cityInput = document.getElementById("cityInput");
 cityInput.textContent=searchInput.value
}

const searchContainer=document.querySelector("#searchContainer")
searchContainer.addEventListener("submit" ,displayNewCurrent)