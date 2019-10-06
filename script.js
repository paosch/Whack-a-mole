const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
let score = 0;
let previousHole;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === previousHole){
    return randomHole(holes);
  }
  previousHole = hole;
  return hole;
}

function popUp() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) popUp();
  }, time);
}

function startGame(){
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popUp();
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function whack(e) {
  score ++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach( mole => {
  mole.addEventListener('click', whack);
})
