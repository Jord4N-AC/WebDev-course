// Mobile Menu Funcionality
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
  if (event.key === 'Escape' || window.innerWidth > 767) {
    hideMenu();
  }
}

menuIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);
body.addEventListener('keydown', closeMenu);
window.addEventListener('resize', closeMenu);

links.forEach((link) => {
  link.addEventListener('click', hideMenu);
});

// Build Featured Section
const content = {
  images: [
    'images/professors/prof1.svg', 'images/professors/prof2.svg',
    'images/professors/prof3.svg', 'images/professors/prof4.svg',
    'images/professors/prof5.svg', 'images/professors/prof6.svg',
  ],
  name: [
    'Jhon Bleckler', 'Wilman Song', 'Teah Wuang',
    'Lida Chase', 'Lila  Trevor', 'Ryan Jhonson',
  ],
  feature: [
    'Professor at Hardvard School',
    '',
    'Director of Devweb Center of and board member of CC France',
    'President of Young Pirates of Asia',
    'Exceutive Director of Wikimedia Foundation',
    'CEO of creative commons, ex COO if Mozilla Foundation',
  ],
  description: [
    'Blenckler studies common-based peer production, and published his seminal book. The Wealth of Network in 2006.',
    'Wilman Song brong the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was included into the inagural class of the Internet  Society\'s (ISOC) Internet Hall of Fame.',
    'As the main venue for new media art production in France, She promotes cross-disciplinary disciplinary and understanding among science technology, humanities and the arts.',
    'Asian integration, political democdacy and participation of youth thruogh online as her major condem. Reada\'s report outlinin potential changes to EU copyright lwas was approved by the Paralment in July.',
    'Lila es the executive Director of the Wikimedia foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 200 languages and used by nearly half a billion people around the world every month.',
    'He has been leading open-source projects at the Mozilla Foundation such as the open sorce movement.',
  ],
};

function createCard() {
  const cardContainer = document.querySelector('#featured-teachers');
  const header = `
        <div class="teach-header">
            <h2>Featured Teachers</h2>
            <div class="divider1"></div>
        </div>
    `;
  const btn = `
        <button id="btn-more" class="uppercase">more<span>&#62;</span></button>
    `;

  for (let i = content.images.length - 1; i >= 0; i -= 1) {
    const card = `
        <div class="prof prof${i + 1}">
            <div class="img">
                <img src="${content.images[i]}" alt="Teacher ${i + 1}">
            </div>
            <div class="details">
                <h3>${content.name[i]}</h3>
                <em>${content.feature[i]}</em>
                <div class="divider2"></div>
                <p>${content.description[i]}</p>
            </div>
        </div>
        `;

    cardContainer.insertAdjacentHTML('afterbegin', card);
  }

  cardContainer.insertAdjacentHTML('afterbegin', header);
  cardContainer.insertAdjacentHTML('beforeend', btn);
}
createCard();

// More Button Functionality
const moreBtn = document.querySelector('#btn-more');
const spanBtn = document.querySelector('#btn-more span');
const card3 = document.querySelector('.prof3');
const card4 = document.querySelector('.prof4');
const card5 = document.querySelector('.prof5');
const card6 = document.querySelector('.prof6');

function showCards() {
  card3.classList.toggle('hide');
  card4.classList.toggle('hide');
  card5.classList.toggle('hide');
  card6.classList.toggle('hide');

  if (moreBtn.textContent === 'more>') {
    moreBtn.textContent = 'less';
    moreBtn.appendChild(spanBtn);
    spanBtn.style.transform = 'rotate(-90deg)';
  } else {
    moreBtn.textContent = 'more';
    moreBtn.appendChild(spanBtn);
    spanBtn.style.transform = 'rotate(90deg)';
  }
}

moreBtn.addEventListener('click', showCards);