const API_KEY = "c115ede544db1255104443609ef7d159";
const COORDS = 'coords';
const weather = document.querySelector(".js-date");


function getwheather(lat,lon){
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
    return response.json();
  }).then(function (json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature} @ ${place}`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };

  saveCoords(coordsObj);
  getwheather(latitude,longitude);
}

function handleGeoError(){
  console.log("Can\'t access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getwheather(parseCoords.latitude, parseCoords.longitude)
  }
}

function init(){
 loadCoords();
}

init();
