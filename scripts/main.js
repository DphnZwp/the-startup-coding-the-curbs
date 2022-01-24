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

// MOUSE ANIMATION

let container = document.querySelector('.mouse-animation');

document.body.addEventListener('mousemove', (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 30;
  let y = (window.innerHeight / 2 - e.pageY) / 180;

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
});

// TABS
const show = document.querySelector('.show');
const button = document.querySelector('.cta-blue-information');
const showtwo = document.querySelector('.show-two');
const buttontwo = document.querySelector('.cta-blue-information-two');

button.addEventListener('click', () => {
    show.style.display = "block";
    showtwo.style.display = "none";
})

buttontwo.addEventListener('click', () => {
    showtwo.style.display = "block";
    show.style.display = "none";
})

// MOUSE ANIMATION FOR IMAGINE

let container = document.querySelector('.flex-item-left');

document.body.addEventListener('mousemove', (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 30;
  let y = (window.innerHeight / 2 - e.pageY) / 30;

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
});