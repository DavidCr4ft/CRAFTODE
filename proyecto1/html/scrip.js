// Seleccionamos el botón y la lista
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

// Evento para abrir/cerrar el menú
toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});