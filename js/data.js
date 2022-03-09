import {getRandomArrayElement, randomNumber} from './util.js';

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

const similarComment = [];

const massive = [];

let numberAtComment = 0;

let numberAtElement = 0;

function createComment() {
  return {
    id: numberAtComment,
    avatar: `img/avatar-${  numberAtComment  }.svg`,
    message: getRandomArrayElement(randomMessage),
    name: getRandomArrayElement(names)
  };
}

for (let i = 0; i < 6; i++) {
  numberAtComment += 1;
  similarComment.push(createComment());
}

function createElement() {
  return {
    id: numberAtElement,
    url: `photos/${  numberAtElement  }.jpg`,
    description: getRandomArrayElement(description),
    likes: randomNumber(15, 200),
    comments: getRandomArrayElement(similarComment)
  };
}

for (let i = 0; i < 25; i++) {
  numberAtElement += 1;
  massive.push(createElement());
}
