const body = document.querySelector('body');

const img_Num = "";

function imageHandler(){
  console.log("finish loading");
}

function pauntImage(imgNum){
  const image = new Image();
  image.src = `images/${imgNum}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image)

  // image.addEventListener('loadend', imageHandler);
}

function genRandom(){
  const num = Math.floor((Math.random()*5)+1);
  return num;
}

function init() {
  const radNum = genRandom();
  pauntImage(radNum)
}

init();
