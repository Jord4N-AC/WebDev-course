const body = document.querySelector('body');
const section1 = document.querySelector('#main-section');
const mobileMenu = document.querySelector('#mobile-menu-container');
const menuLinks = document.querySelectorAll('#mobile-menu-logo, .mobile-link, .alone-link-mobile');
const closeIcon = document.querySelector('#close-icon');
const menuBtn = document.querySelector('#menu-icon');




function display() {
    menuBtn.style.visibility = 'hidden';
    section1.style.filter = 'blur(4px)';
    mobileMenu.style.transform = 'translateY(0%)';
    body.style.overflow = 'hidden';
}

function disapear() {
    menuBtn.style.visibility = 'visible';
    section1.style.filter = 'none';
    mobileMenu.style.transform = 'translateY(-100%)';
    body.style.overflow = 'initial';
}

function disapearEcsResize(event) {
    if(
        event.key === 'Escape'
        || innerWidth > 767
    ) {
        disapear();
    }
}

closeIcon.addEventListener('click', disapear);
menuBtn.addEventListener('click', display);
window.addEventListener('keyup', disapearEcsResize);
window.addEventListener('resize', disapearEcsResize);

menuLinks.forEach(link => {
    link.addEventListener('click', disapear);
});