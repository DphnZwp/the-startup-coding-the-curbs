// MOUSE ANIMATION

let container = document.querySelector('.mouse-animation');

document.body.addEventListener('mousemove', (e) =>{

  let x = (window.innerWidth / 2 - e.pageX) / 10;
  let y = (window.innerHeight / 2 - e.pageY) / 10;

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
});

// IMAGE ANIMATION

const option = document.querySelector('.option-one');
const toggle = document.querySelector('.toggle');
const two = document.querySelector('.option-two');
const toggleTwo = document.querySelector('.toggle-two');
const three = document.querySelector('.option-three');
const toggleThree = document.querySelector('.toggle-three');
const four = document.querySelector('.option-four');
const toggleFour = document.querySelector('.toggle-four');

toggle.addEventListener('click', () => {
    option.classList.toggle('option-move-down');
})

toggleTwo.addEventListener('click', () => {
  two.classList.toggle('option-two-move-down');
})

toggleThree.addEventListener('click', () => {
  three.classList.toggle('option-three-move-down');
})

toggleFour.addEventListener('click', () => {
  four.classList.toggle('option-four-move-down');
})