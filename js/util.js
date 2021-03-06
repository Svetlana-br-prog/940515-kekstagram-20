'use strict';

(function () {
  var KeyCodes = {
    ENTER: 13,
    ESC: 27
  };

  var DEBOUNCE_INTERVAL = 500;

  var debounce = function (fun) {
    var lastTimeout = null;

    return function () {
      var args = arguments;

      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }

      lastTimeout = window.setTimeout(function () {
        fun.apply(null, args);
      }, DEBOUNCE_INTERVAL);
    };
  };

  var shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  };

  var clamp = function (value, min, max) {
    return Math.max(min, Math.min(value, max));
  };

  var getFilteredArray = function (str, symbol) {
    return str.split(symbol)
      .filter(function (it) {
        return it !== '';
      });
  };

  window.util = {
    KeyCodes: KeyCodes,
    debounce: debounce,
    shuffleArray: shuffleArray,
    clamp: clamp,
    getFilteredArray: getFilteredArray
  };
})();

