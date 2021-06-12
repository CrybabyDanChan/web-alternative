window.addEventListener('load', () => {
  const menu = document.querySelector('.menu');
  const menuToggle = menu.querySelector('.menu__toggle');

  menuToggle.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.toggle('menu_active');
  });
});
