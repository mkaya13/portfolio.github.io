const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const backgroundColor = document.getElementsByClassName('hero-nav')[0];
const hamburgerColor = document.getElementsByClassName('bar')[0];
const heroLogoColor = document.getElementsByClassName('hero-logo')[0];

const cardContainer = [
  {
    title: 'Tonic',
    SubTitle: ['Back End Dev', 2016],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
  },
  {
    title: 'Tonic',
    SubTitle: ['Back End Dev', 2016],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
  },
  {
    title: 'Tonic',
    SubTitle: ['Back End Dev', 2016],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
  },
  {
    title: 'Tonic',
    SubTitle: ['Back End Dev', 2016],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque porro laborum voluptatum? In quibusdam reiciendis magnam eaque hic, distinctio, error unde quidem consequatur inventore veniam vel doloribus accusamus impedit',
    languages: ['Ruby on Rails', 'css', 'JavaScript'],
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

//Validation function

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#signup');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let nameValid = hasValue(form.elements['name'], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements['email'],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );
  if (nameValid && emailValid) {
    alert('Demo only. No form was posted.');
  }
});
