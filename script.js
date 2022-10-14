const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const backgroundColor = document.getElementsByClassName('hero-nav')[0];
const hamburgerColor = document.getElementsByClassName('bar')[0];
const heroLogoColor = document.getElementsByClassName('hero-logo')[0];
const emailLetterCheck = document.querySelector('#span-upper-case');

const cardContainer = [
  {
    title: 'Facebook 360',
    SubTitle: ['FACEBOOK', 'Full Stack Dev', 2015],
    text: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'css', 'js'],
  },

  {
    title: 'Uber Navigation',
    SubTitle: ['UBER', 'Lead Developer', 2018],
    text: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'css', 'javascript', 'ruby on rails'],
  },

  {
    title: 'Tonic',
    SubTitle: ['Canopy', 'Back End Dev', 2015],
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },

  {
    title: 'Multi-Post Stories',
    SubTitle: ['FACEBOOK', 'Full Stack Dev', 2015],
    text: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javascript', 'ruby on rails'],
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
let title;
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

  text = document.createElement('p');
  text.classList.add('project-content-4');
  text.textContent = cardContainer[i].text;
  text = text.outerHTML;

  // Add Languages

  techUl = document.createElement('ul');
  techUl.classList.add('languages-layout');

  for (let j = 0; j < cardContainer[i].languages.length; j += 1) {
    tech = document.createElement('li');
    tech.classList.add('languages-list');
    tech.textContent = cardContainer[i].languages[j];
    techUl.appendChild(tech);
  }

  // Add SubTitle

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
              <img class="img-popup" src="img/pro-${i + 1}.svg" alt=""> 
            </div>
            <div class="modal-header">
              <div style="padding-left:12px;">
                ${text}
                ${techUl.outerHTML}
              </div>
            </div>
            <div class="modal-header" style="display:flex; justify-content:center; align-content:center" >
              <button class="button-class">
                <a href="https://github.com/" target="_blank">
                  See Live <img style ="margin-bottom:3px; height:22px; width:22px;"src="img/live-icon.svg" alt="">
                </a>
              </button>
              <button class="button-class">
                <a href="https://github.com/" target="_blank">
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
