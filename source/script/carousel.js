let i=1;
for (let galleryItem of document.querySelectorAll('.gallery__item')) {
  galleryItem.style.position = 'relative';
  galleryItem.insertAdjacentHTML('beforeend', <span style="position:absolute; left:0;top:0">${i}</span>);
  i++
}

let width = 234;
let count = 1;

let list = document.querySelector('.gallery__list');
let listElems = document.querySelector('.gallery__item');

let position = 0;

document.querySelector('.gallery__button_left').onclick = function() {
  position += width * count;
}

document.querySelector('.gallery__button_right').onclick = function() {
  position -= width * count;
}
