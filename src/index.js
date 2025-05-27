import './style.css';

const slides = document.querySelectorAll('.slide');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const dotsContainer = document.querySelector('.carousel-dots');
let currentIndex = 0;
let autoSlideInterval;


slides.forEach((_, idx) => {
  const dot = document.createElement('div');
  dot.classList.add('carousel-dot');
  if (idx === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(idx));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.carousel-dot');

function updateCarousel() {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentIndex);
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

function goToSlide(idx) {
  currentIndex = idx;
  updateCarousel();
  resetAutoSlide();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
  resetAutoSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
  resetAutoSlide();
}

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

function autoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlide();
}

// Initialize
updateCarousel();
autoSlide();

document.querySelectorAll('.dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.dropbtn');
  const menu = dropdown.querySelector('.dropdown-content');
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    
    document.querySelectorAll('.dropdown-content').forEach(dc => {
      if (dc !== menu) dc.style.display = 'none';
    });
    
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});


document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-content').forEach(dc => dc.style.display = 'none');
});

