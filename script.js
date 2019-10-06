const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreboard = document.querySelector('.score');

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
