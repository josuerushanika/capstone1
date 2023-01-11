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


