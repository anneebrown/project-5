//fetch functions
//api request URL https://randomuser.me/api/?results=12

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    //.then(data => console.log(data.results[0].email))
    .then(data => {
        for (let i = 0; i < data.results.length; i++ ) {
        createCardDiv(data.results[i].picture.medium, data.results[i].name.first, data.results[i].name.last, data.results[i].email, data.results[i].location.city, data.results[i].location.state)
        }
    })
    .then(cards => {document.querySelector('.card').addEventListener('click', createModal)})
    // .then(modalWindow => {
    //     let xBtn = document.getElementById('modal-close-btn');
    //         console.log(xBtn);
    //         xBtn.addEventListener('click', (e) => {
    //            modalContainer.style.display = 'none';
    //         });

    // })
    
    //.then(items => JSON.parse(items))

//helper functions to create HTML

//search markup
//helper functions need to be refactored later, like with a setattribute and a createelements function

//creates the search container
const searchContainer = document.querySelector('.search-container')
const formObject = document.createElement('FORM');
searchContainer.appendChild(formObject);
formObject.setAttribute('action', '#');
formObject.setAttribute('method', 'get');
const inputOne = document.createElement('INPUT');
const inputTwo = document.createElement('INPUT');
formObject.appendChild(inputOne);
formObject.appendChild(inputTwo);
inputOne.setAttribute('type', 'search');
inputOne.setAttribute('id', 'search-input');
inputOne.setAttribute('class', 'search-input');
inputOne.setAttribute('placeholder', 'Search...');

inputTwo.setAttribute('type', 'submit');
//used a different way of referring to the magnifying glass character, found here: https://www.fileformat.info/info/unicode/char/1f50d/index.htm
inputTwo.setAttribute('value', '\uD83D\uDD0D');
//inputTwo.setAttribute('value', '&#x1F50D;');
inputTwo.setAttribute('id', 'search-submit');
inputTwo.setAttribute('class', 'search-submit');



function createCardDiv(url, firstName, lastName, email, city, state) {
  const cardDiv =  document.createElement('div');
  cardDiv.setAttribute('class', 'card');
  const galleryDiv = document.querySelector('.gallery');
  galleryDiv.appendChild(cardDiv);
  const imgContainer = document.createElement('div');
  imgContainer.setAttribute('class', 'card-img-container');
  cardDiv.appendChild(imgContainer);
  const imageDiv = document.createElement('img');
  cardDiv.appendChild(imageDiv);
  imageDiv.setAttribute('class', 'card-img');
  //this is where the data from the API needs to be passed in later for the picture, 
  //needs to be changed to a variable that is passed to the function
  //profile picture needs to be 90x90 
  imageDiv.setAttribute('src', `${url}`);
  imageDiv.setAttribute('alt', 'profile picture');

  const cardInfoDiv = document.createElement('div');
  cardDiv.appendChild(cardInfoDiv);
  cardInfoDiv.setAttribute('class', 'card-info-container');

  let h3 = document.createElement('h3');
  cardInfoDiv.appendChild(h3);
  h3.setAttribute('id', 'name');
  h3.setAttribute('class', 'card-name cap');
  //textContent needs to be dynamically inserted later
  h3.textContent = `${firstName} ${lastName}`;

  let paragraphOne = document.createElement('p');
  cardInfoDiv.appendChild(paragraphOne);
  paragraphOne.setAttribute('class', 'card-text');
  //textContent needs to be dynamically inserted later
  paragraphOne.textContent = `${email}`;

  let paragraphTwo = document.createElement('p');
  cardInfoDiv.appendChild(paragraphTwo);
  h3.setAttribute('class', 'card-text cap');
  //textContent needs to be dynamically inserted later
  paragraphTwo.textContent = `${city}, ${state}`;
};

//placeholder function call for testing
//createCardDiv();


function createModal() {
    //child of body
    const modalDiv = document.createElement('div');
    document.body.appendChild(modalDiv);
    modalDiv.setAttribute('class', 'modal-container');

    const modalDivTwo = document.createElement('div');
    modalDivTwo.setAttribute('class', 'modal');
    modalDiv.appendChild(modalDivTwo);

    const closeBtn = document.createElement('button')
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('id', 'modal-close-btn');
    closeBtn.setAttribute('class', 'modal-close-btn');
    modalDivTwo.appendChild(closeBtn);
    const strongTag = document.createElement('strong')
    closeBtn.appendChild(strongTag);
    strongTag.textContent = 'X';

    const infoContainer = document.createElement('div');
    infoContainer.setAttribute('class', 'modal-info-container');
    modalDiv.appendChild(infoContainer);

    //everything else needs to be appended to infoContainer
    const img = document.createElement('img');
    infoContainer.appendChild(img);
    img.setAttribute('class', 'modal-img');
    //needs the url from the api
    img.setAttribute('src', 'https://placehold.it/125x125');
    img.setAttribute('alt', 'profile picture');

    //h3
    const nameH3 = document.createElement('h3');
    infoContainer.appendChild(nameH3);
    nameH3.setAttribute('id', 'name');
    nameH3.setAttribute('class', 'modal-name cap');
    nameH3.textContent = 'name';
 
    const emailP = document.createElement('p');
    infoContainer.appendChild(emailP);
    emailP.setAttribute('class', 'modal-text');
    emailP.textContent = 'email';

    const cityP = document.createElement('p');
    infoContainer.appendChild(cityP);
    cityP.setAttribute('class', 'modal-text cap');
    cityP.textContent = 'city';

    infoContainer.appendChild(document.createElement('hr'));

    const phoneP = document.createElement('p');
    infoContainer.appendChild(phoneP);
    phoneP.setAttribute('class', 'modal-text');
    phoneP.textContent = 'phone number';

    const addressP = document.createElement('p');
    infoContainer.appendChild(addressP);
    addressP.setAttribute('class', 'modal-text');
    addressP.textContent = 'address';

    const birthdayP = document.createElement('p');
    infoContainer.appendChild(birthdayP);
    birthdayP.setAttribute('class', 'modal-text');
    birthdayP.textContent = 'Birthday: birthday';


}


//modal windows: 
/* 
    

// IMPORTANT: Below is only for exceeds tasks 
<div class="modal-btn-container">
    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    <button type="button" id="modal-next" class="modal-next btn">Next</button>
</div>
</div> */

//event listeners

//event listener on div with class card so a click anywhere on a card opens a modal window
//-> event listener calls the modal window helper function


//event listener for close button -> reverses the modal functions or: set style.display to  none
// let modalContainer = document.querySelector('.modal-container');
//
//event listener for previous and next buttons