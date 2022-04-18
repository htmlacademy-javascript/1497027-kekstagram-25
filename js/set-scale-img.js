import {userImg} from './effect-slider.js';

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const btnPlus = document.querySelector('.scale__control--bigger');
const btnMinus = document.querySelector('.scale__control--smaller');
const btnSizeElem = document.querySelector('.scale__control--value');

btnMinus.addEventListener('click', () => {
  if (parseInt(btnSizeElem.value, 10) > MIN_SCALE) {
    btnSizeElem.value = `${parseInt(btnSizeElem.value, 10) - STEP_SCALE}%`;
    userImg.style.transform = `scale(${  btnSizeElem.value})`;
  }
});

btnPlus.addEventListener('click', () => {
  if (parseInt(btnSizeElem.value, 10) < MAX_SCALE) {
    btnSizeElem.value = `${parseInt(btnSizeElem.value, 10) + STEP_SCALE}%`;
    userImg.style.transform = `scale(${  btnSizeElem.value})`;
  }
});

export {btnSizeElem};
