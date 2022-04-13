

const closeBigPicture = document.querySelector('.big-picture__cancel');

function openBigPicture () {
  const userPictures = document.querySelectorAll('.picture');
  for (const userPicture of userPictures) {
    userPicture.addEventListener('click', (evt) => {
      const currentElem = evt.currentTarget;
      document.querySelector('.big-picture').classList.remove('hidden');
      document.querySelector('.likes-count').textContent = currentElem.querySelector('p .picture__likes').textContent;
      document.querySelector('.comments-count').textContent = currentElem.querySelector('p .picture__comments').textContent;
      document.querySelector('.big-picture__img img').src = currentElem.querySelector('.picture__img').src;
    });
  }
}

closeBigPicture.addEventListener('click', () => {
  document.querySelector('.big-picture').classList.add('hidden');
});

/* Отрисовка списка комментариев

const similarListElement = document.querySelector('.social__comments');
const similarElemTemplate = document.querySelector('.social__comment');

const similarListFragment = document.createDocumentFragment();

similarComment.forEach((item) => genMassiveCom(item));

function genMassiveCom(item) {
  const elem = similarElemTemplate.cloneNode(true);
  elem.querySelector('.social__picture').src = item.avatar;
  elem.querySelector('.social__picture').alt = item.name;
  elem.querySelector('.social__text').textContent = item.message;
  similarListFragment.append(elem);
}

similarListElement.append(similarListFragment);
*/


export {openBigPicture};
