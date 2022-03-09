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

export {getRandomArrayElement, randomNumber};
