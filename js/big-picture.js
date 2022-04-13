
const userPictures = document.querySelector('.pictures');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const similarElemTemplate = document.querySelector('.social__comment');
const similarListElement = document.querySelector('.social__comments');

function onPhotoEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhotoModal();
  }
}

function openBigPicture (value) {
  userPictures.addEventListener('click', (evt) => {
    const currentElem = evt.target.closest('.picture');
    if (currentElem) {
      document.querySelector('.big-picture').classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      document.querySelector('.comments-loader').classList.add('hidden');
      document.querySelector('.social__comment-count').classList.add('hidden');
      const currentUserPhoto = value.find((item) => item.id === Number(currentElem.id));
      renderPhoto(currentUserPhoto);
      renderComments(currentUserPhoto.comments);

      document.addEventListener('keydown', onPhotoEscKeydown);
    }

  });
}

function renderComments (massiveComments) {
  const similarListFragment = document.createDocumentFragment();

  massiveComments.forEach((item) => genMassiveCom(item));

  function genMassiveCom(item) {
    const elem = similarElemTemplate.cloneNode(true);
    elem.querySelector('.social__picture').src = item.avatar;
    elem.querySelector('.social__picture').alt = item.name;
    elem.querySelector('.social__text').textContent = item.message;
    similarListFragment.append(elem);
  }

  similarListElement.innerHTML = '';
  similarListElement.append(similarListFragment);
}

function renderPhoto (item) {
  document.querySelector('.social__caption').textContent = item.description;
  document.querySelector('.big-picture__img img').src = item.url;
  document.querySelector('.likes-count').textContent = item.likes;
  document.querySelector('.comments-count').textContent = item.comments.length;
}

function closePhotoModal () {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');

  document.removeEventListener('keydown', onPhotoEscKeydown);
}

closeBigPicture.addEventListener('click', () => {
  closePhotoModal();
});

export {openBigPicture};
