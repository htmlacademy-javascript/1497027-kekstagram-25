import { massive, similarComment } from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarElemTemplate = document.querySelector('#picture').content;

const similarListFragment = document.createDocumentFragment();

massive.forEach(genMassiveData);

function genMassiveData(photoItem) {
  const photoItemElement = similarElemTemplate.cloneNode(true);
  photoItemElement.querySelector('.picture__likes').textContent = photoItem.likes;
  photoItemElement.querySelector('.picture__img').src = photoItem.url;
  photoItemElement.querySelector('.picture__comments').textContent = similarComment.length;
  similarListElement.append(photoItemElement);
}

similarListElement.append(similarListFragment);
