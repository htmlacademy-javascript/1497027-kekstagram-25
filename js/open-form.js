import {userImg, sliderElement} from './effect-slider.js';
import {btnSizeElem} from './set-scale-img.js';

const closeForm = document.querySelector('.img-upload__cancel');
const openForm= document.querySelector('.img-upload__input');
const commentField = document.querySelector('.text__description');
const defaultCheckbox = document.querySelector('#effect-none');

function onFormEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (evt.target.closest('.text__description') || evt.target.closest('.text__hashtags')) {
      return false;
    }
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
  commentField.value = '';

  document.removeEventListener('keydown', onFormEscKeydown);
}


function returnDefaultSetPh () {
  userImg.style.transform = 'scale(1)';
  userImg.style.filter = '';
  userImg.className = '';
  sliderElement.style.display = 'none';
  btnSizeElem.value = '100%';
  defaultCheckbox.checked = true;
}

openForm.addEventListener('change', () => {
  openUserModal();
});

closeForm.addEventListener('click', () => {
  closeUserModal();
});

export{closeUserModal};
