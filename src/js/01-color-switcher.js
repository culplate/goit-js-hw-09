const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId; // variable to store interval id

startBtn.addEventListener('click', startFoo);
stopBtn.addEventListener('click', stopFoo);

function startFoo() {
    randomBgColor();
    timerId = setInterval(randomBgColor, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopFoo() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function randomBgColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
