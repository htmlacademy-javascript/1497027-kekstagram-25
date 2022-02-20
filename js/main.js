const MAX_STRING_LENGTH = 140;
const stringComment = '';

function randomNumber(min, max) {
  if (min >= max) {
    return false;
  }
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}

randomNumber(0, 100);


function stringLength () {
  const string = stringComment.length;
  if (string > MAX_STRING_LENGTH) {
    return false;
  }
  return true;
}

stringLength(stringComment, MAX_STRING_LENGTH);
