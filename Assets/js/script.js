
/* MENU TOGGLE */
document.getElementById('mobile-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu-mobile').classList.toggle('active');
  
    const icon = document.querySelector('.menu-toggle i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
  
  