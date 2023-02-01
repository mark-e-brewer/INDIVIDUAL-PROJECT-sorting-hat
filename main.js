let log = console.log;

const refData = [
  {
    name: 'Harry Potter',
    house: 'Gryffindor',
    houseColor: 'red'
  },
  {
    name: 'Servus Snape',
    house: 'Slytherin',
    houseColor: 'green'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff',
    houseColor: 'yellow'
  },
  {
    name: 'Luna Lovegood',
    house: 'Ravenclaw',
    houseColor: 'blue'
  },
]

const renderToDom = (selector, htmlToRender) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = htmlToRender
};

const showFormBtn = document.querySelector('.getSorted')
showFormBtn.addEventListener('click', () => {
  const formDiv = document.querySelector('#form-div');
  formDiv.style.display = 'grid'
});

const studentCardsOnDom = (arr) => {
  let domString = "";
for (const student of refData) {
  domString +=   `<div class="card" style="width: 18rem;" id="student-card-id">
  <div class="card-header" style="background-color:${student.houseColor};">
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" id="list-name">${student.name}</li>
    <li class="list-group-item" id="list-house">${student.house}</li>
    <li class="list-group-item" id="list-button">
      <button class="expellButton">EXPELL</button>
    </li>
  </ul>
</div>`;
}
renderToDom('#student-cards-div',domString)
}

let houseArr = ['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'];
let houseColorsObj = {
  'Gryffindor': 'red',
  'Hufflepuff': 'yellow',
  'Slytherin': 'green',
  'Ravenclaw': 'blue'
}

const addStudent = (event) => {
  event.preventDefault();
  const name = document.querySelector('#name');
  const houseRandomNum = Math.floor(Math.random() * 4);
  const house = houseArr[houseRandomNum];

    const newStudent = {
      name: name.value,
      house: house,
      houseColor: (houseColorsObj[house])
    };
    refData.push(newStudent);
    studentCardsOnDom(refData);
}

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', addStudent)

const allBtn = document.querySelector('#all-btn');
const gBtn = document.querySelector('#gr-btn');
const hBtn = document.querySelector('#hu-btn');
const rBtn = document.querySelector('#ra-btn');
const sBTn = document.querySelector('#sl-btn');
const vBtn = document.querySelector('#vo-btn')






const startApp = () => {
  studentCardsOnDom(refData)
}
startApp();
