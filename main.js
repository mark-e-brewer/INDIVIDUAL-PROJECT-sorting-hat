let log = console.log;

let refData = [
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



// formDiv.append(`<form id='form'>
// <input type="text" id="name" placeholder="Name" required class="formInput" />
// <button id="submit">Submit</button>
// </form>`)


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

studentCardsOnDom(refData);
