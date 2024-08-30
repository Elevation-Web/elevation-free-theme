/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/critical-assets/scripts/getFirstBlock.js":
/*!******************************************************!*\
  !*** ./src/critical-assets/scripts/getFirstBlock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getFirstsBlock = () => {
  const blocks = Array.from(document.querySelectorAll('[data-block-id]'));
  const firstTwoBlockIds = blocks.map(block => block.dataset.blockId).slice(0, 2);
  return firstTwoBlockIds;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFirstsBlock);

/***/ }),

/***/ "./src/critical-assets/scripts/loadAssetsCSSandJS.js":
/*!***********************************************************!*\
  !*** ./src/critical-assets/scripts/loadAssetsCSSandJS.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/critical-assets/scripts/utils.js");
 // Load CSS and JS files for each block

const loadAssetsCSSandJS = () => {
  // Path to assets folder
  const path = `${_utils__WEBPACK_IMPORTED_MODULE_0__.base}/build/assets`; // Load CSS file

  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCSS)(path); // Load JS file

  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addJS)(path, 'script');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAssetsCSSandJS);

/***/ }),

/***/ "./src/critical-assets/scripts/loadBlocksCSSandJS.js":
/*!***********************************************************!*\
  !*** ./src/critical-assets/scripts/loadBlocksCSSandJS.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/critical-assets/scripts/utils.js");
 // Load CSS and JS files for each block

const loadBlocksCSSandJS = (excludedBlocks, exclude = false) => {
  let uniqueBlocksIds = [];

  if (exclude) {
    if (excludedBlocks.length === 0) return;
    uniqueBlocksIds = excludedBlocks;
  } else {
    // Find all elements with the "block" class
    const blocks = Array.from(document.querySelectorAll('[data-block-id]')); // Get unique block IDs array

    uniqueBlocksIds = blocks.filter((block, index, self) => {
      const ids = self.map(elem => elem.dataset.blockId);
      return ids.indexOf(block.dataset.blockId) === index;
    }).map(block => block.dataset.blockId); // Remove excluded blocks

    uniqueBlocksIds = uniqueBlocksIds.filter(id => !excludedBlocks.includes(id));
  } // Loop through each block


  uniqueBlocksIds?.forEach(function (id) {
    const path = `${_utils__WEBPACK_IMPORTED_MODULE_0__.base}/build/blocks/${id}`; // Load CSS file

    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCSS)(path); // Load JS file

    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addJS)(path);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBlocksCSSandJS);

/***/ }),

/***/ "./src/critical-assets/scripts/utils.js":
/*!**********************************************!*\
  !*** ./src/critical-assets/scripts/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCSS: () => (/* binding */ addCSS),
/* harmony export */   addJS: () => (/* binding */ addJS),
/* harmony export */   base: () => (/* binding */ base),
/* harmony export */   blocksWithNoScript: () => (/* binding */ blocksWithNoScript)
/* harmony export */ });
// Function to add CSS file
const addCSS = path => {
  let css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = `${path}/style-index.css`;
  document.head.appendChild(css);
}; // Function to add JS file

const addJS = (path, name = 'index') => {
  let js = document.createElement('script');
  js.src = `${path}/${name}.js`;
  document.body.appendChild(js);
}; // Set the base path for the CSS and JS files

const base = `${window.location.origin}/wp-content/themes/elevation-framework`;
const blocksWithNoScript = ['accordion', 'buttons', 'callout', 'cards', 'column', 'columns', 'directory', 'directory-map', 'directory-post', 'feed-directory', 'feed-event', 'feed-post', 'image-carousel', 'related-posts', 'single-page-container', 'single-page-container-column', 'sponsors', 'statistics', 'team-bios', 'template-cards', 'template-contact-box', 'template-media-contacts', 'template-presskit', 'template-sponsors', 'testimonials', 'text-photo', 'timeline-horizontal', 'timeline-vertical', 'video'];

/***/ }),

/***/ "./src/critical-assets/scripts/waitForUserInteraction.js":
/*!***************************************************************!*\
  !*** ./src/critical-assets/scripts/waitForUserInteraction.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const waitForUserInteraction = cb => {
  var flag = true;

  const scriptInit = () => {
    if (flag) {
      flag = false;
      cb();
    }
  }; // Mouseover event


  document.querySelector('body').addEventListener('mouseover', scriptInit, {
    once: true
  }); // Keydown event

  window.addEventListener('keydown', scriptInit, {
    once: true
  }); // Scroll event

  window.addEventListener('scroll', scriptInit, {
    once: true
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (waitForUserInteraction);

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
/*!***************************************!*\
  !*** ./src/critical-assets/script.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_loadBlocksCSSandJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/loadBlocksCSSandJS */ "./src/critical-assets/scripts/loadBlocksCSSandJS.js");
/* harmony import */ var _scripts_loadAssetsCSSandJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loadAssetsCSSandJS */ "./src/critical-assets/scripts/loadAssetsCSSandJS.js");
/* harmony import */ var _scripts_waitForUserInteraction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/waitForUserInteraction */ "./src/critical-assets/scripts/waitForUserInteraction.js");
/* harmony import */ var _scripts_getFirstBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/getFirstBlock */ "./src/critical-assets/scripts/getFirstBlock.js");




const excludedBlocks = []; // Include the first block in the excludedBlocks array

const firstTwoBlockIds = (0,_scripts_getFirstBlock__WEBPACK_IMPORTED_MODULE_3__["default"])();

if (firstTwoBlockIds) {
  excludedBlocks.push(...firstTwoBlockIds);
} // Add more blocks to the excludedBlocks array if needed
// excludedBlocks.push('BLOCK_ID_1');


(0,_scripts_loadBlocksCSSandJS__WEBPACK_IMPORTED_MODULE_0__["default"])(excludedBlocks, true); // showBody();
// Wait for user interaction before loading CSS and JS files

(0,_scripts_waitForUserInteraction__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
  (0,_scripts_loadAssetsCSSandJS__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_scripts_loadBlocksCSSandJS__WEBPACK_IMPORTED_MODULE_0__["default"])(excludedBlocks);
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map