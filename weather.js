const CORDS = 'cords';
const API_KEY = "aca54fa7d11fb4dcb0deb4c6aced1f5d";
const weather = document.querySelector(".js-weather");

function getwheather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}$appid=${API_KEY}&units=metric`).then(function(response){
    return response.json();
  }).then(function(json){
    const temp = json.main.temp;
    const place = json.name;
    weather.innerText = `${temp} @ ${place}`;
  });
}

function saveCoodrs(coordsObj){
  localStorage.setItem(CORDS,JSON.stringify(coordsObj));
}

function geoSucessHandler(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoodrs(coordsObj);
  getwheather(latitude,longitude);
}

function geoErrorHandler(){
  console.log("Can\'t access localtion");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(geoSucessHandler,geoErrorHandler);
}

function loadCoords(){
   const loadedCoords = localStorage.getItem(CORDS);
   if (loadedCoords === null) {
     askForCoords();
   } else {
     const parseCoords = JSON.parse(loadedCoords);
     getwheather(parseCoords.latitude,parseCoords.longitude);
   }
}

function init(){
  loadCoords();
}

init();
