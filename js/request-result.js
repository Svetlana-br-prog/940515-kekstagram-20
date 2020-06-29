'use strict';

(function () {
  var messageErrorTemplate = document.querySelector('#error').content.cloneNode(true);

  var reloadElement = messageErrorTemplate.querySelector('.error__button');

  var messageSuccessTemplate = document.querySelector('#success').content.cloneNode(true);

  var linkElement = messageSuccessTemplate.querySelector('.success__button');

  var isReload = false;

  var displayError = function (isReloadPage) {
    isReload = isReloadPage;

    document.body.querySelector('main').appendChild(messageErrorTemplate);
    reloadElement.addEventListener('click', onReloadElementClick);
    document.addEventListener('keydown', onMessageErrorContainerEscPress);
  };

  var onReloadElementClick = function () {
    closeMessageError(isReload);
  };

  var onMessageErrorContainerEscPress = function (evt) {
    if (evt.keyCode !== window.util.KeyCodes.ENTER) {
      closeMessageError(isReload);
    }
  };

  var displaySuccess = function () {
    document.body.querySelector('main').appendChild(messageSuccessTemplate);

    linkElement.addEventListener('click', onLinkElementClick);

    document.addEventListener('keydown', onMessageSuccessContainerEscPress);
  };

  var onLinkElementClick = function () {
    closeMessageSuccess();
  };

  var onMessageSuccessContainerEscPress = function (evt) {
    if (evt.keyCode !== window.util.KeyCodes.ENTER) {
      closeMessageSuccess();
    }
  };

  var closeMessageSuccess = function () {
    linkElement.removeEventListener('click', onLinkElementClick);
    document.body.querySelector('main').removeChild(document.body.querySelector('main').querySelector('.success'));

    document.removeEventListener('keydown', onMessageSuccessContainerEscPress);
  };

  var closeMessageError = function (isReloadPage) {
    reloadElement.removeEventListener('click', onReloadElementClick);
    document.body.querySelector('main').removeChild(document.body.querySelector('main').querySelector('.error'));

    document.removeEventListener('keydown', onMessageErrorContainerEscPress);

    if (isReloadPage) {
      window.location.reload();
    }
  };

  window.requestResult = {
    displayError: displayError,
    displaySuccess: displaySuccess
  };
})();
