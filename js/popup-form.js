const elemTemplateSuccses = document.querySelector('#success').content;
const elemTemplateError = document.querySelector('#error').content;
const body = document.querySelector('body');

function onErrorEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalError();
  }
}

function onSuccessEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModalSuccses();
  }
}

function succesLoad () {
  const modalElem = elemTemplateSuccses.cloneNode(true);
  body.append(modalElem);
  const closeModalBtn = document.querySelector('.success__button');
  closeModalBtn.addEventListener('click', () => {
    closeModalSuccses();
  });

  document.addEventListener('keydown', onSuccessEscKeydown);
}

function closeModalSuccses() {
  document.querySelector('.success').remove(body);

  document.removeEventListener('keydown', onSuccessEscKeydown);
}

function errorLoad () {
  const modalElem = elemTemplateError.cloneNode(true);
  body.append(modalElem);
  const closeErrorBtn = document.querySelector('.error__button');
  closeErrorBtn.addEventListener('click', () => {
    closeModalError();
  });

  document.addEventListener('keydown', onErrorEscKeydown);
}

function closeModalError() {
  document.querySelector('.error').remove(body);

  document.removeEventListener('keydown', onErrorEscKeydown);
}

export{succesLoad, errorLoad};
