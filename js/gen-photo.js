const similarListElement = document.querySelector('.pictures');
const similarElemTemplate = document.querySelector('#picture').content;

const similarListFragment = document.createDocumentFragment();

function renderSimilarList(massive) {
  massive.forEach((photoItem) => genMassiveData(photoItem));

  function genMassiveData(photoItem) {
    const photoItemElement = similarElemTemplate.cloneNode(true);
    photoItemElement.querySelector('.picture__likes').textContent = photoItem.likes;
    photoItemElement.querySelector('.picture__img').src = photoItem.url;
    photoItemElement.querySelector('.picture__comments').textContent = photoItem.comments.length;
    similarListFragment.append(photoItemElement);
  }

  similarListElement.append(similarListFragment);
}

export{renderSimilarList};
