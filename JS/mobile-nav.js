document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById('menu-btn');
  const body = document.body;
  const menu = document.querySelector('.menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

  menuBtn.addEventListener('change', function () {
    if (this.checked) {
      body.classList.add('menu-open');
      menu.style.transform = 'translateX(0)';
      mobileMenuOverlay.style.display = 'block';
    } else {
      body.classList.remove('menu-open');
      menu.style.transform = 'translateX(-100%)';
      mobileMenuOverlay.style.display = 'none';
    }
  });

  mobileMenuOverlay.addEventListener('click', () => {
    menuBtn.checked = false;
    body.classList.remove('menu-open');
    menu.style.transform = 'translateX(-100%)';
    mobileMenuOverlay.style.display = 'none';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      menuBtn.checked = false;
      body.classList.remove('menu-open');
      menu.style.transform = 'translateX(0)';
      mobileMenuOverlay.style.display = 'none';
    }
  });
});
