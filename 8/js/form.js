import {checkHeshtah, checkUniqueHeshtah, blockSubmitButton, unblockSubmitButton} from './util.js';
import {closeUserModal} from './open-form.js';
import {sendData} from './server-data.js';
import {succesLoad, errorLoad} from './popup-form.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text',
});

function checkLengthHeshtah (value) {
  const newString = value.split(' ');
  return newString.length <= 5;
}

function checkCorrectHeshtah (value) {
  const newString = value.split(' ');
  const currentHeshtag = newString.every(checkHeshtah);
  if (currentHeshtag === true || value.length === 0) {
    return true;
  }
  return false;
}

function checkDoubleHeshtah (value) {
  const lowerCaseValue = value.toLowerCase();
  const newString = lowerCaseValue.split(' ');
  const double = checkUniqueHeshtah(newString);
  return double === true;
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

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData (
      () => {
        unblockSubmitButton();
        closeUserModal();
        succesLoad();
      },
      () => {
        unblockSubmitButton();
        closeUserModal();
        errorLoad();
      },
      new FormData(evt.target),
    );
  }
});
