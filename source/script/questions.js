window.addEventListener('load', function () {
  let question = document.querySelectorAll('.questions__container');
  let button = document.querySelectorAll('.question__button');
  let answer = document.querySelectorAll('.questions-container__answer');

  for(let i = 0; i < question.length; i++) {
    button[i].addEventListener('click', function() {
      this.classList.toggle('active');
      answer[i].classList.toggle('visually-hidden');

    });
  };
});
