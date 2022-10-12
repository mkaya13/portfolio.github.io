const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const backgroundColor = document.getElementsByClassName('hero-nav')[0];
const hamburgerColor = document.getElementsByClassName('bar')[0];
const heroLogoColor = document.getElementsByClassName('hero-logo')[0];

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