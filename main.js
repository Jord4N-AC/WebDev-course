const body = document.querySelector('body');
const section1 = document.querySelector('#section1');
const menuContent = document.querySelector('#mobile-menu');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close');
const links = document.querySelectorAll('#mobile-menu .nav-links li');

function showMenu() {
    menuContent.style.display = 'block';
    menuIcon.style.display = 'none';
    body.style.overflow = 'hidden';
    section1.style.filter = 'blur(3px)';
}

function hideMenu() {
    menuContent.style.display = 'none';
    menuIcon.style.display = 'initial';
    body.style.overflow = 'initial';
    section1.style.filter = 'blur(0)';
}

function closeMenu(event) {
    if(event.key === "Escape" || window.innerWidth > 767) {
        hideMenu();
    }
}

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);
body.addEventListener('keydown', closeMenu);
window.addEventListener('resize', closeMenu);

links.forEach((link) => {
    link.addEventListener('click', hideMenu);
}    
);
