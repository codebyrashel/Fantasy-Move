const heartButtons = document.querySelectorAll('.heart-button');

heartButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});


const menuIcon = document.getElementById('menuIcon');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
    mobileNav.classList.add('open');
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});