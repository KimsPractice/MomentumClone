const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function clickHandler(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener('click',clickHandler);
}
init();
