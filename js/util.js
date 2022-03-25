const MAX_STRING_LENGTH = 140;

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

function stringLength (stringComment, maxLenght) {
  return stringComment.length > maxLenght;
}

stringLength('', MAX_STRING_LENGTH);

function checkHeshtah(currentValue) {
  const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;
  return re.test(currentValue);
}

function checkUniqueHeshtah (heshtah) {
  const n = heshtah.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
      if (heshtah[ i ] === heshtah[j]) {
        return false;
      }
    }
  }
  return true;
}

export {getRandomArrayElement, randomNumber, checkHeshtah, checkUniqueHeshtah};
