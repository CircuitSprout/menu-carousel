import './style.css';


document.getElementById('left-arrow').onclick = function() {
  document.getElementById('carousel').scrollBy({ left: -150, behavior: 'smooth' });
};
document.getElementById('right-arrow').onclick = function() {
  document.getElementById('carousel').scrollBy({ left: 150, behavior: 'smooth' });
};


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

