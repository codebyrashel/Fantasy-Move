const heartButtons = document.querySelectorAll('.heart-button');

heartButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});