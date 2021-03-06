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
  mobileMenu.style.display = 'initial';
  body.style.overflow = 'hidden';
}

function disapear() {
  menuBtn.style.visibility = 'visible';
  section1.style.filter = 'none';
  mobileMenu.style.transform = 'translateY(-100%)';
  mobileMenu.style.display = 'none';
  body.style.overflow = 'initial';
}

function disapearEcsResize(event) {
  if (
    event.key === 'Escape'
        || window.innerWidth > 767
  ) {
    disapear();
  }
}

closeIcon.addEventListener('click', disapear);
menuBtn.addEventListener('click', display);
window.addEventListener('keyup', disapearEcsResize);
window.addEventListener('resize', disapearEcsResize);

menuLinks.forEach((link) => {
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

function createTeacherSection() {
  const teacherSection = document.querySelector('#featured-teachers');
  const header = `
    <header id="teachers-header-group">
        <h2 id="teachers-header">Featured Teachers</h2>
        <div class="orange-divider"></div>
    </header>`;

  const cardContainer = `
    <div id="teachers-info">
    </div>`;

  const button = `
    <a id="more-btn" class="upper-case mobile" href="#more-btn">more<i id="angle-down-icon" class="fas fa-angle-down"></i></a>`;

  teacherSection.insertAdjacentHTML('afterbegin', button);
  teacherSection.insertAdjacentHTML('afterbegin', cardContainer);
  teacherSection.insertAdjacentHTML('afterbegin', header);

  const container = document.querySelector('#teachers-info');

  for (let i = teachersData.length - 1; i >= 0; i -= 1) {
    const teacherCard = `
        <div id="teacher-${i + 1}" class="teacher">
            <div class="teacher-img-container">
                <img class="teacher-photo" src="${teachersData[i].image}" alt="Professor ${i + 1} photo">
            </div>
            <div class="teacher-info">
                <h3 class="teacher-name">${teachersData[i].name}</h3>
                <h2 class="teacher-degree">${teachersData[i].degree}</h2>
                <div class="dark-divider"></div>
                <p class="teacher-description p-format">${teachersData[i].description}</p>
            </div>
        </div>`;

    container.insertAdjacentHTML('afterbegin', teacherCard);
  }
}

createTeacherSection();
// window.addEventListener('load', createTeacherSection);

// More Button
const moreBtn = document.querySelector('#more-btn');
const cardsToHide = document.querySelectorAll('#teacher-3, #teacher-4, #teacher-5, #teacher-6');
const btnIcon = document.querySelector('#angle-down-icon');

function moreLessCards() {
  cardsToHide.forEach((card) => {
    if (card.style.display === 'flex') {
      card.style.display = 'none';
      moreBtn.innerHTML = 'more';
      btnIcon.style.transform = 'rotate(0deg)';
      moreBtn.appendChild(btnIcon);
    } else {
      card.style.display = 'flex';
      moreBtn.innerHTML = 'less';
      btnIcon.style.transform = 'rotate(180deg)';
      moreBtn.appendChild(btnIcon);
    }
  });
}

function moreCardsResize() {
  if (window.innerWidth > 767) {
    cardsToHide.forEach((card) => {
      card.style.display = 'flex';
      moreBtn.innerHTML = 'less';
      btnIcon.style.transform = 'rotate(180deg)';
      moreBtn.appendChild(btnIcon);
    });
  }
}

moreBtn.addEventListener('click', moreLessCards);
window.addEventListener('resize', moreCardsResize);
