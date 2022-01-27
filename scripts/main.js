// NAVIGATION ACTIVE SCROLL
// https://stackoverflow.com/questions/52025615/vanilla-js-change-active-state-of-links-when-scrolling-refactoring

const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);

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
    toggle.classList.toggle('rotate')
});

toggleTwo.addEventListener('click', () => {
  two.classList.toggle('option-two-move-down');
  toggleTwo.classList.toggle('rotate')
});

toggleThree.addEventListener('click', () => {
  three.classList.toggle('option-three-move-down');
  toggleThree.classList.toggle('rotate')
});

toggleFour.addEventListener('click', () => {
  four.classList.toggle('option-four-move-down');
  toggleFour.classList.toggle('rotate')
});

// INFORMATION
const show = document.querySelector('.show');
const button = document.querySelector('.cta-gradient-information');
const showtwo = document.querySelector('.show-two');
const buttontwo = document.querySelector('.cta-gradient-information-two');

button.addEventListener('click', () => {
    show.style.display = "block";
    showtwo.style.display = "none";
});

buttontwo.addEventListener('click', () => {
    showtwo.style.display = "block";
    show.style.display = "none";
});

const showinfo = document.querySelector('.information-residents');
const buttoninfo = document.querySelector('.cta-gradient-info');
const showinfotwo = document.querySelector('.information-goals');
const buttoninfotwo = document.querySelector('.cta-gradient-info-two');

buttoninfo.addEventListener('click', () => {
    showinfo.style.display = "block";
    showinfotwo.style.display = "none";
});

buttoninfotwo.addEventListener('click', () => {
    showinfotwo.style.display = "block";
    showinfo.style.display = "none";
});