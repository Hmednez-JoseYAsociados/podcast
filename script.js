// Obtener todos los enlaces del menú de navegación
const navLinks = document.querySelectorAll('nav ul li a');

// Agregar evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener el destino del enlace (el atributo "href")
    const target = document.querySelector(link.getAttribute('href'));

    // Desplazamiento suave hacia el destino
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  // Obtener la posición vertical del desplazamiento
  const scrollPosition = window.scrollY;

  // Cambiar el color de fondo del encabezado cuando se hace scroll
  if (scrollPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const messageInput = document.querySelector('#message');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Validar los campos (puedes agregar tus propias reglas de validación)
  if (name === '' || email === '' || message === '') {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Enviar el formulario si los campos son válidos
  contactForm.submit();
});

