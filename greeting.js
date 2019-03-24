const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');
const LS_USER = "user";
const show = "show";

function saveName(text){
  localStorage.setItem(LS_USER, text);
}

function submitHandler(event){
  event.preventDefault();
  const nameValue = input.value;
  paintGreeting(nameValue);
  saveName(nameValue);
}


function askForName(){
  form.classList.add(show);
  form.addEventListener('submit',submitHandler)
}


function paintGreeting(text){
  form.classList.remove(show);
  greeting.classList.add(show);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const userName = localStorage.getItem(LS_USER);
  if (userName === null) {
    askForName();
  } else {
    paintGreeting(userName);
  }
}

function init(){
 loadName();
}

init();
