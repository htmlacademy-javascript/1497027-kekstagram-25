
const userPictures = document.querySelector('.pictures');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const similarElemTemplate = document.querySelector('.social__comment');
const similarListElement = document.querySelector('.social__comments');
const btnRenderMoreComments = document.querySelector('.social__comments-loader');
let step = 0;
const count = 5;
let comments;

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
      const currentUserPhoto = value.find((item) => item.id === Number(currentElem.id));
      renderPhoto(currentUserPhoto);
      showComments();

      document.addEventListener('keydown', onPhotoEscKeydown);
    }
  });
}

function renderCommments (data) {
  const similarListFragment = document.createDocumentFragment();

  data.forEach((item) => genMassiveCom(item));

  function genMassiveCom(item) {
    const elem = similarElemTemplate.cloneNode(true);
    elem.querySelector('.social__picture').src = item.avatar;
    elem.querySelector('.social__picture').alt = item.name;
    elem.querySelector('.social__text').textContent = item.message;
    similarListFragment.append(elem);
  }

  similarListElement.append(similarListFragment);

  updateNumberComments();
}

function showComments () {
  similarListElement.innerHTML = '';

  addNewComment();

  btnRenderMoreComments.addEventListener('click', addNewComment);
}

function addNewComment () {
  renderCommments(comments.slice(step, step + count));
  step += 5;
}

function updateNumberComments () {
  const renderedComments = document.querySelectorAll('.social__comment');
  document.querySelector('.social__comment-count').textContent = `${renderedComments.length  } из ${  comments.length  } комментариев`;

  if (renderedComments.length === comments.length) {
    btnRenderMoreComments.classList.add('hidden');
  }
}

function renderPhoto (item) {
  document.querySelector('.social__caption').textContent = item.description;
  document.querySelector('.big-picture__img img').src = item.url;
  document.querySelector('.likes-count').textContent = item.likes;
  comments = item.comments.slice();
}

function closePhotoModal () {
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onPhotoEscKeydown);
  btnRenderMoreComments.removeEventListener('click', addNewComment);
  step = 0;
  btnRenderMoreComments.classList.remove('hidden');
}

closeBigPicture.addEventListener('click', () => {
  closePhotoModal();
});

export {openBigPicture};
