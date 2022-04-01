const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const userImg = document.querySelector('.img-upload__preview img');
const effectBtn = document.getElementsByName('effect');

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

sliderElement.setAttribute('disabled', true);
sliderElement.style.display = 'none';

for (let i = 0; i < effectBtn.length; i++) {
  effectBtn[i].addEventListener('change', () =>{
    if (effectBtn[0].checked) {
      sliderElement.setAttribute('disabled', true);
      sliderElement.style.display = 'none';
    } else {
      sliderElement.style.display = null;
    }
    if (effectBtn[1].checked) {
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `grayscale(${  valueElement.value})`;
      });
      userImg.classList.add('effects__preview--chrome');
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else {
      userImg.classList.remove('effects__preview--chrome');
    }
    if (effectBtn[2].checked) {
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `sepia(${  valueElement.value})`;
      });
      userImg.classList.add('effects__preview--sepia');
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
    } else {
      userImg.classList.remove('effects__preview--sepia');
    }
    if (effectBtn[3].checked) {
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `invert(${  valueElement.value}%)`;
      });
      userImg.classList.add('effects__preview--invert');
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      });
    } else {
      userImg.classList.remove('effects__preview--invert');
    }
    if (effectBtn[4].checked) {
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `blur(${  valueElement.value}px)`;
      });
      userImg.classList.add('effects__preview--blur');
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    } else {
      userImg.classList.remove('effects__preview--blur');
    }
    if (effectBtn[5].checked) {
      sliderElement.noUiSlider.on('update', () => {
        userImg.style.filter = `brightness(${  valueElement.value})`;
      });
      userImg.classList.add('effects__preview--brightness');
      sliderElement.removeAttribute('disabled');
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });
    } else {
      userImg.classList.remove('effects__preview--brightness');
    }
  });
}

export {userImg};
