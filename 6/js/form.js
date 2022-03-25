import {checkHeshtah, checkUniqueHeshtah} from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text',
});

function checkLengthHeshtah (value) {
  const newString = value.split(' ');
  if (newString.length <= 5) {
    return true;
  }
  return false;
}

function checkCorrectHeshtah (value) {
  const newString = value.split(' ');
  const currentHeshtag = newString.every(checkHeshtah);
  if (currentHeshtag === true) {
    return true;
  }
  return false;
}

function checkDoubleHeshtah (value) {
  const newString = value.split(' ');
  const double = checkUniqueHeshtah(newString);
  if (double === true) {
    return true;
  }
  return false;
}

pristine.addValidator(
  document.querySelector('.text__hashtags'),
  checkLengthHeshtah,
  'Нельзя указать больше пяти хэш-тегов'
);

pristine.addValidator(
  document.querySelector('.text__hashtags'),
  checkCorrectHeshtah,
  'Некорректный хештег'
);

pristine.addValidator(
  document.querySelector('.text__hashtags'),
  checkDoubleHeshtah,
  'Один и тот же хэш-тег не может быть использован дважды'
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
