const MAX_STRING_LENGTH = 140;

function randomNumber(min, max) {
  if (min >= max) {
    return false;
  }
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}

randomNumber(0, 100);


function stringLength (stringComment, maxLenght) {
  const string = stringComment.length;
  return string > maxLenght;
}

stringLength('', MAX_STRING_LENGTH);
