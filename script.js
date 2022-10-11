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

document.querySelectorAll('.navbar-links').forEach(n => {
  n.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
    toggleButton.classList.remove('active');
    backgroundColor.classList.remove('active');
    hamburgerColor.classList.remove('active');
    heroLogoColor.classList.remove('active');
  });
});
