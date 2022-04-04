import {userImg} from './effect-slider.js';

const STEP_SCALE = 25;
const btnPlus = document.querySelector('.scale__control--bigger');
const btnMinus = document.querySelector('.scale__control--smaller');
const btnSizeElem = document.querySelector('.scale__control--value');

btnMinus.addEventListener('click', () => {
  if (parseInt(btnSizeElem.value, 10) > 25) {
    btnSizeElem.value = `${parseInt(btnSizeElem.value, 10) - STEP_SCALE}%`;
    userImg.style.transform = `scale(${  btnSizeElem.value})`;
  }
});

btnPlus.addEventListener('click', () => {
  if (parseInt(btnSizeElem.value, 10) < 100) {
    btnSizeElem.value = `${parseInt(btnSizeElem.value, 10) + STEP_SCALE}%`;
    userImg.style.transform = `scale(${  btnSizeElem.value})`;
  }
});
