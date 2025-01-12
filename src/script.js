const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
