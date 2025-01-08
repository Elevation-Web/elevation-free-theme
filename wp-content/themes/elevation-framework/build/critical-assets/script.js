<<<<<<< HEAD
(()=>{"use strict";const e=e=>{let t=document.createElement("link");t.rel="stylesheet",t.href=`${e}/style-index.css`,document.head.appendChild(t)},t=(e,t="index")=>{let i=document.createElement("script");i.src=`${e}/${t}.js`,document.body.appendChild(i)},i=`${window.location.origin}/wp-content/themes/elevation-framework`,o=(o=[],r=!1,n=[],a)=>{let c=[];const m=Array.from(document.querySelectorAll('[data-block-js="true"]')).map((e=>e.dataset.blockId)),l=Array.from(document.querySelectorAll("[data-block-id]")).map((e=>e.dataset.blockId));if(n.length>0){const e=n.filter((e=>l.includes(e)));c=Array.from(new Set([...e,...o]))}else if(r){if(0===o.length)return;c=o}else c=Array.from(document.querySelectorAll("[data-block-id]")).filter(((e,t,i)=>i.map((e=>e.dataset.blockId)).indexOf(e.dataset.blockId)===t)).map((e=>e.dataset.blockId)),c=c.filter((e=>!o.includes(e)));a.length>0&&(c=c.filter((e=>!a.includes(e)))),c?.forEach((function(o){const r=`${i}/build/blocks/${o}`;e(r),m.includes(o)&&t(r,"view")}))},r=["interior-components/spacer","interior-components/swiper","interior-components/group"],n=["interior-components/group"],a=((e=[])=>Array.from(document.querySelectorAll("[data-block-id]")).map((e=>e.dataset.blockId)).filter((t=>!e.includes(t))).slice(0,2))(r);a&&r.push(...a),(()=>{const e=(i=[".accordion-item__item p",".banner-full-img img",".video-full-screen-pop-up img",".accordion-item__item img",".accordion-item__item .cta",".team-bios-with-pop-up .title",".team-bios-with-pop-up img",".team-bios-with-pop-up p",".team-bios-with-pop-up .cta",".no-animate *",".no-animate",".logos-descriptions-item img",".logos-carousel-item img",".testimonial-carousel-item__image img",".testimonial-single-item__image img",".timeline-vertical-item *",".timeline-horizontal-item img"],["#primary p","#primary img","#primary .cta","#primary li","#primary h1","#primary h2","#primary h3","#primary h4","#primary h5","#primary h6",".fade-in-bottom",".timeline-vertical-item"].map((e=>`${e}${i.map((e=>`:not(${e})`)).join("")}`)).join(",\n")),t=document.querySelectorAll(e);var i;t.forEach((e=>{e.classList.add("fade-in-bottom")}));const o={root:null,rootMargin:"0px",threshold:.1};if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const i=e.target;i.classList.add("animate"),t.unobserve(i)}}))}),o);t.forEach((t=>{e.observe(t)}))}})(),o(r,!0,["interior-components/swiper"],n),(e=>{var t=!0;const i=()=>{t&&(t=!1,e())};document.querySelector("body").addEventListener("mouseover",i,{once:!0}),window.addEventListener("keydown",i,{once:!0}),window.addEventListener("scroll",i,{once:!0})})((()=>{(()=>{const o=`${i}/build/assets`;e(o),t(o,"script")})(),o(r,!1,[],n)}))})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/utils/resize.js":
/*!************************************!*\
  !*** ./src/blocks/utils/resize.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeResize: () => (/* binding */ observeResize)
/* harmony export */ });
// Debounce function to delay the execution of the callback
function debounce(callback, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
} // Function to observe resize event with debounce


function observeResize(callback) {
  window.addEventListener('resize', debounce(callback, 1000));
}

/***/ }),

/***/ "./src/critical-assets/scripts/getFirstBlock.js":
/*!******************************************************!*\
  !*** ./src/critical-assets/scripts/getFirstBlock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getFirstsBlock = (firstBlocks = []) => {
  const blocks = Array.from(document.querySelectorAll('[data-block-id]')); // Collect all block IDs

  const blockIds = blocks.map(block => block.dataset.blockId); // Filter out the block IDs that are in the `firstBlocks` array

  const uniqueBlockIds = blockIds.filter(id => !firstBlocks.includes(id)); // Get the first 2 unique block IDs

  const firstTwoBlockIds = uniqueBlockIds.slice(0, 2);
  console.log('firstTwoBlockIds', firstTwoBlockIds);
  return firstTwoBlockIds;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFirstsBlock);

/***/ }),

/***/ "./src/critical-assets/scripts/global-animations.js":
/*!**********************************************************!*\
  !*** ./src/critical-assets/scripts/global-animations.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalAnimations: () => (/* binding */ globalAnimations)
/* harmony export */ });
/* harmony import */ var _blocks_utils_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/utils/resize */ "./src/blocks/utils/resize.js");

const globalAnimations = () => {
  const baseSelectors = ['#primary p', '#primary img', '#primary .cta', '#primary li', '#primary h1', '#primary h2', '#primary h3', '#primary h4', '#primary h5', '#primary h6', '.fade-in-bottom'];
  const exclusionSelectors = ['.accordion-item__item p', '.banner-full-img img', '.video-full-screen-pop-up img', '.accordion-item__item img', '.accordion-item__item .cta', '.team-bios-with-pop-up .title', '.team-bios-with-pop-up img', '.team-bios-with-pop-up p', '.team-bios-with-pop-up .cta', '.no-animate *', '.no-animate', '.logos-descriptions-item img', '.logos-carousel-item img', '.testimonial-carousel-item__image img'];

  function combineSelectors(base, exclusions) {
    return base.map(baseSelector => {
      const exclusionString = exclusions.map(exclusion => `:not(${exclusion})`).join('');
      return `${baseSelector}${exclusionString}`;
    }).join(',\n');
  }

  const selectors = combineSelectors(baseSelectors, exclusionSelectors);
  const elements = document.querySelectorAll(selectors);
  elements.forEach(element => {
    element.classList.add('fade-in-bottom');
  });
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
          const element = entry.target; // Add the fade-in from bottom animation class

          element.classList.add('animate'); // Stop observing once the animation starts

          observer.unobserve(element);
        }
      });
    }, observerOptions);
    elements.forEach(element => {
      observer.observe(element);
    });
  }
};

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

const loadBlocksCSSandJS = (firstsBlocks = [], exclude = false, addIfExist = [], excludedBlocks) => {
  let uniqueBlocksIds = [];
  const blocksWithJs = Array.from(document.querySelectorAll('[data-block-js="true"]'));
  const blocksWithJsArray = blocksWithJs.map(block => block.dataset.blockId); // Get all block IDs present in the DOM

  const blocksInDOM = Array.from(document.querySelectorAll('[data-block-id]')).map(block => block.dataset.blockId);

  if (addIfExist.length > 0) {
    // Filter addIfExist to only include IDs present in the DOM
    const validAddIfExist = addIfExist.filter(id => blocksInDOM.includes(id)); // Combine validAddIfExist and firstsBlocks (ensure no duplicates)

    uniqueBlocksIds = Array.from(new Set([...validAddIfExist, ...firstsBlocks]));
    console.log('uniqueBlocksIds', uniqueBlocksIds);
  } else if (exclude) {
    if (firstsBlocks.length === 0) return;
    uniqueBlocksIds = firstsBlocks;
  } else {
    // Find all elements with the "block-id" data attribute
    const blocks = Array.from(document.querySelectorAll('[data-block-id]')); // Get unique block IDs array

    uniqueBlocksIds = blocks.filter((block, index, self) => {
      const ids = self.map(elem => elem.dataset.blockId);
      return ids.indexOf(block.dataset.blockId) === index;
    }).map(block => block.dataset.blockId); // Remove excluded blocks

    uniqueBlocksIds = uniqueBlocksIds.filter(id => !firstsBlocks.includes(id));
  } // exclude blocks


  if (excludedBlocks.length > 0) {
    uniqueBlocksIds = uniqueBlocksIds.filter(id => !excludedBlocks.includes(id));
  } // Loop through each block


  uniqueBlocksIds?.forEach(function (id) {
    const path = `${_utils__WEBPACK_IMPORTED_MODULE_0__.base}/build/blocks/${id}`; // Load CSS file

    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addCSS)(path);

    if (blocksWithJsArray.includes(id)) {
      // Load JS file
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addJS)(path, 'view');
    }
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
/* harmony import */ var _scripts_global_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/global-animations */ "./src/critical-assets/scripts/global-animations.js");





const firstBlocks = ['interior-components/spacer', 'interior-components/swiper', 'interior-components/group']; // set to only add if exist

const addIfExist = ['interior-components/swiper']; // set to exclude

const excludedBlocks = ['interior-components/group']; // Include the first block in the firstBlocks array

const firstTwoBlockIds = (0,_scripts_getFirstBlock__WEBPACK_IMPORTED_MODULE_3__["default"])(firstBlocks);

if (firstTwoBlockIds) {
  firstBlocks.push(...firstTwoBlockIds);
}

(0,_scripts_global_animations__WEBPACK_IMPORTED_MODULE_4__.globalAnimations)(); // Add more blocks to the firstBlocks array if needed
// firstBlocks.push('BLOCK_ID_1');

(0,_scripts_loadBlocksCSSandJS__WEBPACK_IMPORTED_MODULE_0__["default"])(firstBlocks, true, addIfExist, excludedBlocks); // showBody();
// Wait for user interaction before loading CSS and JS files

(0,_scripts_waitForUserInteraction__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
  (0,_scripts_loadAssetsCSSandJS__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_scripts_loadBlocksCSSandJS__WEBPACK_IMPORTED_MODULE_0__["default"])(firstBlocks, false, [], excludedBlocks);
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map
>>>>>>> 8c92ec8 (init : team bios option 1)
