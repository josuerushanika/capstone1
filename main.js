// mobile menu popup
const popup = document.querySelector('.popup');
const list = document.querySelector('.second-header .list');
const hamburger = document.querySelector('.hamburger');

function menuPopup() {
  popup.classList.toggle('menu');

  if (popup.contains(list)) {
    popup.removeChild(list);
  } else {
    popup.appendChild(list);
  }
}
hamburger.addEventListener('click', menuPopup);
popup.addEventListener('click', menuPopup);

// programs object list

const programs = [
  {
    image: 'images/intro.png',
    heading: 'Introduction',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!',
  },

  {
    image: 'images/cryptography.png',
    heading: 'Cryptography',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!',
  },

  {
    image: 'images/smartContract.png',
    heading: 'Smart Contracts',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!',
  },

  {
    image: 'images/coding.jpeg',
    heading: 'Blockchain Development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!',
  },

  {
    image: 'images/web-3.0.webp',
    heading: 'Web 3.0',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quia ut, eveniet possimus nam facilis quae dolores aut eum inventore nemo minus assumenda!',
  },
];