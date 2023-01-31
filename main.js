let log = console.log;

let refData = [
  {
    name: 'Harry Potter',
    house: 'Gryffindor'
  },
  {
    name: 'Servus Snape',
    house: 'Slytherin'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff'
  },
  {
    name: 'Luna Lovegood',
    house: 'Ravenclaw'
  },
]

const renderToDom = (selector,html) => {
  const selected = document.querySelector(selector);
  selected.innerHTML = html;
}

const showFormBtn = document.querySelector('.getSorted')
let form = document.querySelector('form');
showFormBtn.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'block'
  } else {
    form.style.display = 'none'
  }
});

// const startApp = () => {

// }
