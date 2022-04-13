import {renderSimilarList} from './gen-photo.js';
import {showAlertServerOff} from './util.js';
import {openBigPicture} from './big-picture.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((userPhotosServer) => {
    renderSimilarList(userPhotosServer);
    openBigPicture(userPhotosServer);
  })
  .catch(() => {
    showAlertServerOff('Сервер временно недоступен');
  });


function sendData (onSuccess, onFail, body)  {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export {sendData};
