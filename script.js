const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const backgroundColor = document.getElementsByClassName('hero-nav')[0];
const hamburgerColor = document.getElementsByClassName('bar')[0];
const heroLogoColor = document.getElementsByClassName('hero-logo')[0];
const emailLetterCheck = document.querySelector('#span-upper-case');

const cardContainer = [
  {
    title: 'Leaderboard Ranking',
    SubTitle: ['MICROVERSE', 'Web Development', 2022],
    text: 'Leaderboard project lets you create an API endpoint with a POST request to an API with node.js, populate the created API endpoint with a post request through user interface form, and send a get request with refresh button to see the data stored in the API.',
    img: 'leaderboard.png',
    languages: ['html', 'css', 'js'],
    seeLive: 'https://mkaya13.github.io/leaderboard-project/dist/index.html',
    seeSource: 'https://github.com/mkaya13/leaderboard-project',
  },
  {
    title: 'SmartBuild',
    SubTitle: ['MICROVERSE', 'Web Development', 2022],
    text: 'SmartBuild conference website that includes information about event content, sections that the event offers and speakers that will be joining, for SmartBuild event.',
    img: 'SmartBuild.png',
    languages: ['html', 'css', 'js'],
    seeLive: 'https://mkaya13.github.io/SmartBuildConference/',
    seeSource: 'https://github.com/mkaya13/SmartBuildConference',
  },

  {
    title: 'Todo List',
    SubTitle: ['MICROVERSE', 'Web Development', 2022],
    text: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    img: 'ToDoList.png',
    languages: ['html', 'css', 'javascript', 'ruby on rails'],
    seeLive: 'https://mkaya13.github.io/todolist-with-webpack/dist/index.html',
    seeSource: 'https://github.com/mkaya13/todolist-with-webpack',
  },

  {
    title: 'Tonic',
    SubTitle: ['Canopy', 'Back End Dev', 2015],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    img: 'pro-3.svg',
    languages: ['html', 'css', 'javascript'],
    seeLive: '',
    seeSource: '',
  },
];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  toggleButton.classList.toggle('active');
  backgroundColor.classList.toggle('active');
  hamburgerColor.classList.toggle('active');
  heroLogoColor.classList.toggle('active');
});

document.querySelectorAll('.navbar-links').forEach((n) => {
  n.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    toggleButton.classList.remove('active');
    backgroundColor.classList.remove('active');
    hamburgerColor.classList.remove('active');
    heroLogoColor.classList.remove('active');
  });
});

let p;
let img;
let title;
let seeLive;
let seeSource;
let subTitle;
let text;
let tech;
let techUl;
let subTitleUl;
const container = document.querySelectorAll('.container');

for (let i = 0; i < cardContainer.length; i += 1) {
  p = container[i];

  title = document.createElement('h2');
  title.classList.add('project-content-2');
  title.textContent = cardContainer[i].title;
  title = title.outerHTML;

  img = cardContainer[i].img;
  seeLive = cardContainer[i].seeLive;
  seeSource = cardContainer[i].seeSource;

  text = document.createElement('p');
  text.classList.add('project-content-4');
  text.textContent = cardContainer[i].text;
  text = text.outerHTML;

  techUl = document.createElement('ul');
  techUl.classList.add('languages-layout');

  for (let j = 0; j < cardContainer[i].languages.length; j += 1) {
    tech = document.createElement('li');
    tech.classList.add('languages-list');
    tech.textContent = cardContainer[i].languages[j];
    techUl.appendChild(tech);
  }

  subTitleUl = document.createElement('ul');
  subTitleUl.classList.add('project-content-3');

  let counter = 0;
  let SubTitleCounter;

  for (let k = 0; k < cardContainer[i].SubTitle.length; k += 1) {
    subTitle = document.createElement('li');
    SubTitleCounter = document.createElement('img');
    SubTitleCounter.src = 'img/counter.svg';

    subTitle.appendChild(SubTitleCounter);
    subTitle.textContent = cardContainer[i].SubTitle[k];

    subTitleUl.style = 'margin-left:15px;';
    SubTitleCounter.style = 'padding-right:10px;';

    if (counter === 0) {
      subTitle.classList.add('title-element');
      subTitleUl.appendChild(subTitle);
      counter += 1;
    } else {
      subTitle.classList.add('list-element');
      subTitleUl.appendChild(SubTitleCounter);
      subTitleUl.appendChild(subTitle);
    }
  }

  p.innerHTML = `
      <button type="button" data-bs-toggle="modal" data-bs-target="#myModal-${i}">See Project</button>
      <div class="modal" style="display:none" id="myModal-${i}">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">   
            <div class="first-popup-content" style="padding:10px;">
              <div class="modal-header">
              ${title}
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              ${subTitleUl.outerHTML}
            </div>
            <div class="modal-header">
              <img class="img-popup" src="img/${img}" alt=""> 
            </div>
            <div class="modal-header">
              <div style="padding-left:12px;">
                ${text}
                ${techUl.outerHTML}
              </div>
            </div>
            <div class="modal-header" style="display:flex; justify-content:center; align-content:center" >
              <button class="button-class">
                <a href=${seeLive} target="_blank">
                  See Live <img style ="margin-bottom:3px; height:22px; width:22px;"src="img/live-icon.svg" alt="">
                </a>
              </button>
              <button class="button-class">
                <a href=${seeSource} target="_blank">
                  See Source <img style ="margin-bottom:3px; height:22px; width:22px;"src="img/github-icon.svg" alt="">
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
}

const form = document.querySelector('#contact-me');
const EMAIL_INVALID = 'Please enter your email without uppercase';
let checkUpperCase;

function validateEmail() {
  const emailRegex = /[A-Z]/g;
  const email = form.elements.user_email.value.trim();

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (event) => {
  checkUpperCase = validateEmail();

  if (checkUpperCase === true) {
    event.preventDefault();
    emailLetterCheck.style.display = 'block';
    emailLetterCheck.innerText = EMAIL_INVALID;
    emailLetterCheck.classList.toggle('active');
  }
});

// localStorage

const sessionObj = {
  fullName: '',
  email: '',
  textArea: '',
};

const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const textArea = document.querySelector('#msg');
let str;
const storedObj = localStorage.getItem('storedFormData');
const testValueObj = JSON.parse(storedObj);

if (storedObj !== null) {
  fullName.value = testValueObj.fullName;
  email.value = testValueObj.email;
  textArea.value = testValueObj.textArea;
}

function stringifier() {
  str = JSON.stringify(sessionObj);
  localStorage.setItem('storedFormData', str);
}

fullName.addEventListener('input', (event) => {
  sessionObj.fullName = event.target.value;
  stringifier();
});

email.addEventListener('input', (event) => {
  sessionObj.email = event.target.value;
  stringifier();
});
textArea.addEventListener('input', (event) => {
  sessionObj.textArea = event.target.value;
  stringifier();
});

// if (localStorage.test === undefined) {
//   localStorage.setItem('test', JSON.stringify(sessionObj));
// }
