// === MENU BURGER ===
const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  // Animation du burger
  burger.classList.toggle('rotate');
});

// === SCROLL REVEAL ===
const sections = document.querySelectorAll('section');

const revealSection = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('fade-in-section');
    }
  });
};

window.addEventListener('scroll', revealSection);

// Initial call
revealSection();

// === MENU ACTIVE ON SCROLL ===
const navLinks = document.querySelectorAll('.navbar a');

const setActiveLink = () => {
  let index = sections.length;

  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
};

window.addEventListener('scroll', setActiveLink);