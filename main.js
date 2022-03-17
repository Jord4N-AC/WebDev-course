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


// Featured Teachers Section

const teachersData = [
    {
        image: 'images/professors/prof1.svg',
        name: 'Jhon Bleckler',
        degree: 'Professor at Hardvard School',
        description: 'Blenckler studies common-based peer production, and published his seminal book. The Wealth of Network in 2006.',
    },
    {
        image: 'images/professors/prof2.svg',
        name: 'Wilman Song',
        degree: '',
        description: 'Wilman Song bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was included into the inagural class of the Internet Society\'s (ISOC) Internet Hall of Fame.',
    },
    {
        image: 'images/professors/prof3.svg',
        name: 'Teah Wuang',
        degree: 'Director of Devweb Center and board member of CC France',
        description: 'Teah Wuang Director of Devweb Center and board member of CC France As the main venue for new media art production in France, She promotes cross-disciplinary and understanding among science technology, humanities and the arts.',
    },
    {
        image: 'images/professors/prof4.svg',
        name: 'Lida Chase',
        degree: 'President of Young Pirates of Asia',
        description: 'Asian integration, political democracy and participation of youth thruogh online as her major condem. Reada\'s report outlining potential changes to EU copyright law was approved by the Parlament in July.',
    },
    {        
        image: 'images/professors/prof5.svg',
        name: 'Lila Trevor',
        degree: 'Exceutive Director of Wikimedia Foundation',
        description: 'Lila es the executive Director of the Wikimedia foundation, the nonprofit organization that operates Wikipedia is freely available in 200 languages and used by nearly half a billion people around the world every month.',
    },
    {        
        image: 'images/professors/prof6.svg',
        name: 'Ryan Jhonson',
        degree: 'CEO of creative commons, ex COO of Mozilla Foundation',
        description: 'He has been leading open-source projects at the Mozilla Foundation such as the open source movement.',
    },
];