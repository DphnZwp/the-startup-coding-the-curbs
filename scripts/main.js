// MOUSE ANIMATION

let container = document.querySelector('.flex-item-left');

document.body.addEventListener('mousemove', (e) =>{

  let x = (window.innerWidth / 2 - e.pageX) / 55;
  let y = (window.innerHeight / 2 - e.pageY) / 55;

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;
});

const option = document.querySelector('.option');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    option.classList.toggle('option-move-down');
})

const two = document.querySelector('.option-two');
const toggleTwo = document.querySelector('.toggle-two');

toggleTwo.addEventListener('click', () => {
  two.classList.toggle('two');
})