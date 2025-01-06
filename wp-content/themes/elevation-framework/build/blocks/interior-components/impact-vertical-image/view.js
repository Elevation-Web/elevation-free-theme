/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/utils/animateNumbers.js":
/*!********************************************!*\
  !*** ./src/blocks/utils/animateNumbers.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateNumbers: () => (/* binding */ animateNumbers)
/* harmony export */ });
const animateNumbers = selector => {
  const elements = document.querySelectorAll(selector);
  const observerOptions = {
    root: null,
    // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible

  }; // Check if the user has "Reduce Motion" enabled

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const text = element.innerText;
          const targetNumber = parseFloat(text.replace(/[^0-9.]/g, ''));
          const prefix = text.match(/^[^\d]+/)?.[0] || '';
          const suffix = text.match(/[^\d]+$/)?.[0] || '';
          animateNumber(element, targetNumber, prefix, suffix);
          observer.unobserve(element); // Stop observing once the animation starts
        }
      });
    }, observerOptions);
    elements.forEach(element => {
      observer.observe(element);
    });
  }

  function animateNumber(element, target, prefix, suffix) {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / target));
    const startTime = new Date().getTime();
    const endTime = startTime + duration;

    function run() {
      const now = new Date().getTime();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(target - remaining * target);
      const removeComma = element.classList.contains('numscrolleryears');
      element.innerText = formatNumber(value, prefix, suffix, removeComma);

      if (value < target) {
        requestAnimationFrame(run);
      }
    }

    requestAnimationFrame(run);
  }

  function formatNumber(number, prefix, suffix, removeComma = false) {
    let formattedNumber = number.toLocaleString();

    if (removeComma) {
      formattedNumber = formattedNumber.replace(/,/g, '');
    }

    return `${prefix}${formattedNumber}${suffix}`;
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************************************************!*\
  !*** ./src/blocks/interior-components/impact-vertical-image/view.js ***!
  \**********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_animateNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/animateNumbers */ "./src/blocks/utils/animateNumbers.js");

(0,_utils_animateNumbers__WEBPACK_IMPORTED_MODULE_0__.animateNumbers)('.impact-vertical-image-item__value-value');
})();

/******/ })()
;
//# sourceMappingURL=view.js.map