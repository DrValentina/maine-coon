window.addEventListener('load', function () {
  const buttonLeft = document.querySelector('.gallery__button_left');
  const buttonRight = document.querySelector('.gallery__button_right');
  const galleryList = document.querySelector('.gallery__list');
  let galleryItem = document.querySelectorAll('.gallery__item');

  let counter = 0;

  buttonRight.addEventListener('click', function() {
    const stepSize  = galleryItem[0].clientWidth;
    if(counter >= galleryItem.length-1) {
      counter = -1;
    };
    galleryList.classList.add('gallery-transform-animation');
    counter++;
    galleryList.style.transform = 'translateX(' + `${-stepSize * counter}` + 'px)';
  });

  buttonLeft.addEventListener('click', function() {
    if(counter <= 0) {
      counter = galleryItem.length;
    };
    galleryList.classList.add('gallery-transform-animation');
    counter--;
    galleryList.style.transform = 'translateX(' + `${-stepSize * counter}` + 'px)';
  });
});
