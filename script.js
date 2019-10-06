const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreboard = document.querySelector('.score');
let previousHole;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.round(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === previousHole) {
    return randomHole(holes);
  }
  previousHole = hole;
  return hole;
}
