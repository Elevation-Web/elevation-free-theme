/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************************************************!*\
  !*** ./src/blocks/interior-components/impact-content-boxes-with-icons/view.js ***!
  \********************************************************************************/
/*
 * To Reemplaze with Javascript Native
 */
function myOrientResizeFunction() {
  var sectionImpact = document.querySelector('.counter');

  if (sectionImpact) {
    var dTop = sectionImpact.getBoundingClientRect().top + window.scrollY;
    var once = 0;
    window.addEventListener('scroll', function () {
      if (window.scrollY > dTop - 500) {
        if (once === 0) {
          document.querySelectorAll('.numscroller').forEach(function (element) {
            var targetNum = parseInt(element.getAttribute('data-num'));
            animateCounter(element, targetNum, 0);
          });
          document.querySelectorAll('.numscrollerdec').forEach(function (element) {
            var targetNum = parseFloat(element.getAttribute('data-num')).toFixed(1);
            animateCounter(element, targetNum, 1);
          });
          document.querySelectorAll('.numscrolleryears').forEach(function (element) {
            var targetNum = parseInt(element.textContent);
            animateCounter(element, targetNum, 'full');
          });
          once = 1;
        }
      } else {
        once = 0;
      }
    });
  }
}

function animateCounter(element, targetNum, decimalPlaces = false) {
  var start = 0;
  var duration = 3000;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var current = Math.min(progress / duration, 1) * targetNum;

    if (decimalPlaces != 'full') {
      element.textContent = current.toFixed(decimalPlaces).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
      element.textContent = current.toFixed(decimalPlaces);
    }

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

myOrientResizeFunction();
/******/ })()
;
//# sourceMappingURL=view.js.map