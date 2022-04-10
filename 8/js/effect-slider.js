const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const userImg = document.querySelector('.img-upload__preview img');
const effectsBtn = document.querySelector('.effects');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

function removeAttrDis () {
  sliderElement.removeAttribute('disabled', true);
  sliderElement.style.display = 'block';
}

function updateSlider (minValue, maxValue, stepValue) {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: maxValue,
    step: stepValue,
  });
}

sliderElement.setAttribute('disabled', true);
sliderElement.style.display = 'none';

effectsBtn.addEventListener('change', (evt) => {
  const elemId = evt.target.id;
  switch (elemId) {
    case 'effect-chrome':
      userImg.className = 'effects__preview--chrome';
      removeAttrDis();
      updateSlider(0, 1, 0.1);
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `grayscale(${  valueElement.value})`;
      });
      break;
    case 'effect-sepia':
      userImg.className = 'effects__preview--sepia';
      removeAttrDis();
      updateSlider(0, 1, 0.1);
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `sepia(${  valueElement.value})`;
      });
      break;
    case 'effect-marvin':
      userImg.className = 'effects__preview--invert';
      removeAttrDis();
      updateSlider(0, 100, 1);
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `invert(${  valueElement.value}%)`;
      });
      break;
    case 'effect-phobos':
      userImg.className = 'effects__preview--blur';
      removeAttrDis();
      updateSlider(0, 3, 0.1);
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `blur(${  valueElement.value}px)`;
      });
      break;
    case 'effect-heat':
      userImg.className = 'effects__preview--brightness';
      removeAttrDis();
      updateSlider(1, 3, 0.1);
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `brightness(${  valueElement.value})`;
      });
      break;
    default:
      userImg.className = '';
      sliderElement.style.display = 'none';
      userImg.style.filter = null;
  }
});

export {userImg};
