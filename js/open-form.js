import {userImg, sliderElement} from './effect-slider.js';

const closeForm = document.querySelector('.img-upload__cancel');
const openForm= document.querySelector('.img-upload__input');

function onFormEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
}

function openUserModal () {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  document.addEventListener('keydown', onFormEscKeydown);
}

function closeUserModal () {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.text__hashtags').value = '';
  returnDefaultSetPh();
  openForm.value = '';

  document.removeEventListener('keydown', onFormEscKeydown);
}


function returnDefaultSetPh () {
  userImg.style.transform = 'scale(1)';
  userImg.style.filter = '';
  userImg.className = '';
  sliderElement.style.display = 'none';
}

openForm.addEventListener('change', () => {
  openUserModal();
});

closeForm.addEventListener('click', () => {
  closeUserModal();
});

export{closeUserModal};
