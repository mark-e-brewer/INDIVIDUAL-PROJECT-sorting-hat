let log = console.log;

let refData = [
  {
    name: 'Harry Potter',
    house: 'Gryffindor',
    patronus: 'Stag'
  },
  {
    name: 'Servus Snape',
    house: 'Slytherin',
    patronus: 'silver doe'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    patronus: 'Tiger'
  },
  {
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
    patronus: 'Rabbit'
  },
]

const renderToDom = (selector,html) => {
  const selected = document.querySelector(selector);
  selected.innerHTML = html;
}
