const submitButton = document.querySelector('.img-upload__submit');

function randomNumber(min, max) {
  if (min >= max) {
    return false;
  }
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}

randomNumber(0, 100);

function getRandomArrayElement(elements) {
  return elements[randomNumber(0, elements.length - 1)];
}

function checkHeshtah(currentValue) {
  const regularExpression = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
  return regularExpression.test(currentValue);
}

function checkUniqueHeshtah (heshtah) {
  const heshLength = heshtah.length;
  for (let i = 0; i < heshLength-1; i++) {
    for (let j = i+1; j < heshLength; j++) {
      if (heshtah[ i ] === heshtah[j]) {
        return false;
      }
    }
  }
  return true;
}

function showAlertServerOff(message)  {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '35px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'inherrit';

  alertContainer.textContent = message;

  document.body.append(alertContainer);
}

function blockSubmitButton () {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
}

function unblockSubmitButton () {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
}

export {getRandomArrayElement, randomNumber, checkHeshtah, checkUniqueHeshtah, showAlertServerOff, blockSubmitButton, unblockSubmitButton};
