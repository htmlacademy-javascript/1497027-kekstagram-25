const MAX_STRING_LENGTH = 140;

const description = [
  'Первый',
  'Второй',
  'Здесь могла быть ваша цитата о высоком и вечном.',
  'Напишите в комментарии свой совет, задавайте свои вопросы!',
  'Здесь могло бы быть больше комментариев',
  'Но я так и не придумал'
];

const randomMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

const names = [
  'Артемий', 'Виктория', 'Иван', 'Алиса', 'Марк', 'Владислав', 'Арина','Кирилл', 'Злата', 'Никита'];

function randomNumber(min, max) {
  if (min >= max) {
    return false;
  }
  const number = Math.random() * (max - min + 1) + min;
  return Math.floor(number);
}

randomNumber(0, 100);


function stringLength (stringComment, maxLenght) {
  return stringComment.length > maxLenght;
}

stringLength('', MAX_STRING_LENGTH);

function getRandomArrayElement(elements) {
  return elements[randomNumber(0, elements.length - 1)];
}

function createComment() {
  return {
    id: randomNumber(1, 6),
    message: getRandomArrayElement(randomMessage),
    avatar: `img/avatar-${  randomNumber(1, 6)  }.svg`,
    name: getRandomArrayElement(names)
  };
}

const similarComment = Array.from({length: 6}, createComment);

function createElement() {
  return {
    id: randomNumber(1, 25),
    url: `photos/${  randomNumber(1, 25)  }.jpg`,
    description: getRandomArrayElement(description),
    likes: randomNumber(15, 200),
    comments: getRandomArrayElement(similarComment)
  };
}

const similarElements = Array.from({length: 25}, createElement);
