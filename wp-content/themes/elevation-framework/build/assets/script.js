/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scripts/common/common.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/common/common.js ***!
  \*********************************************/
/***/ (() => {

var topMenu = document.querySelector('.header__top-menu');
const hideTopMenuFromAccesibility = () => {
  if (topMenu) {
    topMenu.style.visibility = 'hidden';
  }
};
const showTopMenuInAccesibility = () => {
  if (topMenu) {
    topMenu.style.visibility = 'visible';
  }
};
var body = document.body;
const addClassToBody = () => {
  if (window.scrollY) {
    body.classList.add('fixed');
    hideTopMenuFromAccesibility();
  } else {
    body.classList.remove('fixed');
    showTopMenuInAccesibility();
  }
};
addClassToBody();
const addClassToBodyOnScroll = () => {
  document.addEventListener('scroll', () => {
    addClassToBody();
  }, {
    passive: true
  });
};
addClassToBodyOnScroll();

/***/ }),

/***/ "./src/assets/scripts/layout/gtranslate.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/layout/gtranslate.js ***!
  \*************************************************/
/***/ (() => {

var selector = document.querySelector('.gt_selector');
if (selector) {
  // Function to approximate the width of an option
  function getOptionWidth(option) {
    var length = option.textContent.length;
    return length * 7;
  }

  // Function to set the width of the selector
  function setSelectorWidth() {
    var selected_option = selector.options[selector.selectedIndex];
    var option_width = getOptionWidth(selected_option);
    selector.style.width = option_width + 55 + 'px';
  }

  // Set the width of the selector when the page loads
  setSelectorWidth();

  // Set the width of the selector when an option is changed
  selector.addEventListener('change', setSelectorWidth);
}

/***/ }),

/***/ "./src/assets/scripts/layout/menu.js":
/*!*******************************************!*\
  !*** ./src/assets/scripts/layout/menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _critical_assets_scripts_handleResize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../critical-assets/scripts/handleResize */ "./src/critical-assets/scripts/handleResize.js");

var breakpoint = 992;
const menuRegularInit = () => {
  const menu = document.querySelector('.nav.menu');
  const menuItems = document.querySelectorAll('.nav.menu li.menu-item-has-children');
  if (!menu || !menuItems.length) return;

  // close all menus
  const closeAllMenus = () => {
    menuItems.forEach(item => toggleMenu(item, false));
  };

  // Function to close sibling menu items (without affecting ancestors)
  const closeSiblingMenus = menuItem => {
    const parent = menuItem.parentElement;
    if (!parent) return;
    [...parent.children].forEach(sibling => {
      if (sibling !== menuItem && sibling.classList.contains('open')) {
        sibling.classList.remove('open');
        const anchor = sibling.querySelector('a');
        const button = sibling.querySelector('button');
        if (anchor) anchor.setAttribute('aria-expanded', 'false');
        if (button) button.setAttribute('aria-expanded', 'false');
      }
    });
  };

  // Function to toggle a menu item
  const toggleMenu = (menuItem, isOpen) => {
    const anchor = menuItem.querySelector('a');
    const button = menuItem.querySelector('button');
    if (isOpen) {
      closeSiblingMenus(menuItem); // Close only sibling menus
      menuItem.classList.add('open');
      if (anchor) anchor.setAttribute('aria-expanded', 'true');
      if (button) button.setAttribute('aria-expanded', 'true');
    } else {
      menuItem.classList.remove('open');
      if (anchor) anchor.setAttribute('aria-expanded', 'false');
      if (button) button.setAttribute('aria-expanded', 'false');
    }
  };

  // Loop through all menu items
  menuItems.forEach(menuItem => {
    const button = menuItem.querySelector('button');
    let timer;
    if (!button) return;

    // Button click handler
    const buttonHanlder = event => {
      event.preventDefault();
      const isOpen = menuItem.classList.contains('open');
      toggleMenu(menuItem, !isOpen);
    };

    // Mouseover and mouseout for hover behavior

    const meniItemMouseOverHandler = () => {
      closeSiblingMenus(menuItem); // Close siblings but keep ancestors open
      toggleMenu(menuItem, true);
      clearTimeout(timer);
    };
    const menuItemMouseOutHandler = () => {
      timer = setTimeout(() => {
        toggleMenu(menuItem, false);
      }, 1000);
    };
    button.removeEventListener('click', buttonHanlder);
    button.addEventListener('click', buttonHanlder);
    (0,_critical_assets_scripts_handleResize__WEBPACK_IMPORTED_MODULE_0__.handleResize)(breakpoint, () => {
      menuItem.removeEventListener('mouseover', meniItemMouseOverHandler);
      menuItem.removeEventListener('mouseout', menuItemMouseOutHandler);
    }, () => {
      closeAllMenus();
      menuItem.removeEventListener('mouseover', meniItemMouseOverHandler);
      menuItem.addEventListener('mouseover', meniItemMouseOverHandler);
      menuItem.removeEventListener('mouseout', menuItemMouseOutHandler);
      menuItem.addEventListener('mouseout', menuItemMouseOutHandler);
    });
  });

  // Close all menus when focus leaves the entire navigation
  const menuFocusOutHandler = event => {
    if (!menu.contains(event.relatedTarget)) {
      menuItems.forEach(item => toggleMenu(item, false));
    }
  };
  (0,_critical_assets_scripts_handleResize__WEBPACK_IMPORTED_MODULE_0__.handleResize)(breakpoint, () => {
    menu.removeEventListener('focusout', menuFocusOutHandler);
  }, () => {
    menu.removeEventListener('focusout', menuFocusOutHandler);
    menu.addEventListener('focusout', menuFocusOutHandler);
  });
};
menuRegularInit();
const responsiveMenuInit = () => {
  const menu = document.querySelector('.header__nav');
  const menuToggle = document.querySelector('.header__toggle-menu');
  const menuList = document.querySelector('.nav.menu');
  if (!menu || !menuToggle || !menuList) return;
  const menuToggleClickHandler = () => {
    const isOpen = menuList.classList.contains('open');
    menuList.classList.toggle('open', !isOpen);
    menuToggle.setAttribute('aria-expanded', !isOpen);
  };

  // close menu function
  const closeMenuOnDocument = event => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  };
  const closeMenu = () => {
    menuList.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  (0,_critical_assets_scripts_handleResize__WEBPACK_IMPORTED_MODULE_0__.handleResize)(breakpoint, () => {
    // Toggle the main menu
    menuToggle.removeEventListener('click', menuToggleClickHandler);
    menuToggle.addEventListener('click', menuToggleClickHandler);

    // Close menu when clicking outside
    document.removeEventListener('click', closeMenuOnDocument);
    document.addEventListener('click', closeMenuOnDocument);
  }, () => {
    closeMenu();
    menuToggle.removeEventListener('click', menuToggleClickHandler);
    document.removeEventListener('click', closeMenuOnDocument);
  });
};
responsiveMenuInit();

/***/ }),

/***/ "./src/assets/scripts/layout/paid-membership-pro.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/layout/paid-membership-pro.js ***!
  \**********************************************************/
/***/ (() => {

if (document.body.classList.contains('page-template-portal')) {
  function redirectToChangePassword() {
    window.location.href = '/?view=change-password';
  }
  document.querySelector('.pmpro_btn-submit[value="Change Password"]').addEventListener('click', function () {
    redirectToChangePassword();
  });
}

/***/ }),

/***/ "./src/assets/scripts/layout/video-modal.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/layout/video-modal.js ***!
  \**************************************************/
/***/ (() => {

var jQ = jQuery.noConflict();

/*
 *	 This move the modals to before </body>
 */
const moveModals = document.querySelectorAll('.block__video .modal');
if (moveModals) {
  moveModals.forEach(moveModal => {
    document.querySelector('body').append(moveModal);
  });
}

/*
 * To Reemplaze with Javascript Native
 */

jQ(document).ready(function () {
  jQ('button.video.mp4').click(function () {
    var theModal = jQ(this).data('bs-target'),
      videoSRC = jQ(this).attr('data-video'),
      videoSRCauto = videoSRC;
    jQ(theModal).find('video').css('display', 'block');
    jQ(theModal).find('iframe').css('display', 'none');
    jQ(theModal + ' video source').attr('src', videoSRCauto);
    setTimeout(function () {
      jQ(theModal + ' video').get(0).load();
      jQ(theModal + ' video').get(0).play();
    }, 500);
    jQ(theModal + ' button.close').click(function () {
      jQ(theModal + ' video source').attr('src', videoSRC);
      jQ(theModal + ' video').get(0).pause();
    });
  });
  jQ('button.video.youtube').click(function () {
    var theModal1 = jQ(this).data('bs-target'),
      videoSRC1 = jQ(this).attr('data-video'),
      videoSRCauto1 = videoSRC1 + '?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1';
    jQ(theModal1).find('video').css('display', 'none');
    jQ(theModal1).find('iframe').css('display', 'block');
    jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
    jQ(theModal1 + ' button.close, .modal').click(function () {
      jQ(theModal1 + ' iframe').attr('src', videoSRC1);
    });
  });
  jQ('button.video.vimeo').click(function () {
    var theModal1 = jQ(this).data('bs-target'),
      videoSRC1 = jQ(this).attr('data-video'),
      videoSRCauto1 = videoSRC1 + '?autoplay=1&loop=1&autopause=0';
    jQ(theModal1).find('video').css('display', 'none');
    jQ(theModal1).find('iframe').css('display', 'block');
    jQ(theModal1 + ' iframe').attr('src', videoSRCauto1);
    jQ(theModal1 + ' button.close, .modal').click(function () {
      jQ(theModal1 + ' iframe').attr('src', videoSRC1);
    });
  });
  jQ(document).on('keydown', function (event) {
    if (event.key == 'Escape') {
      jQ('.embed-responsive-item').attr('src', '');
    }
  });
  jQ('.modal[role="dialog"]').on('hidden.bs.modal', function (e) {
    jQ('.embed-responsive-item').attr('src', '');
  });
});

/***/ }),

/***/ "./src/assets/scripts/layout/wysiwyg.js":
/*!**********************************************!*\
  !*** ./src/assets/scripts/layout/wysiwyg.js ***!
  \**********************************************/
/***/ (() => {

/*
 * Important Text Wrap out class
 */
var elements1 = document.querySelectorAll('.site-main p .important-text');
for (var i = 0; i < elements1.length; i++) {
  var parentElement = elements1[i].parentNode;
  parentElement.classList.add('main-important-text');
}
var elements2 = document.querySelectorAll('.site-main ul li .important-text');
for (var j = 0; j < elements2.length; j++) {
  var grandParentElement = elements2[j].parentNode.parentNode;
  grandParentElement.classList.add('main-important-text');
}

/***/ }),

/***/ "./src/critical-assets/scripts/handleResize.js":
/*!*****************************************************!*\
  !*** ./src/critical-assets/scripts/handleResize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleResize: () => (/* binding */ handleResize)
/* harmony export */ });
/**
 *
 * @param {string} breakpoint
 * @param {function} cbUp
 * @param {function} cbDown
 */

const handleResize = (breakpoint, cbDown, cbUp) => {
  const resizeHanlder = () => {
    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    if (mediaQuery.matches) {
      cbUp();
    } else {
      cbDown();
    }
  };
  window.addEventListener('resize', resizeHanlder);
  resizeHanlder();
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/assets/script.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scripts_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/scripts/common/common.js */ "./src/assets/scripts/common/common.js");
/* harmony import */ var _assets_scripts_common_common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_common_common_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_layout_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/layout/menu.js */ "./src/assets/scripts/layout/menu.js");
/* harmony import */ var _scripts_layout_wysiwyg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/layout/wysiwyg.js */ "./src/assets/scripts/layout/wysiwyg.js");
/* harmony import */ var _scripts_layout_wysiwyg_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_wysiwyg_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_layout_video_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/layout/video-modal.js */ "./src/assets/scripts/layout/video-modal.js");
/* harmony import */ var _scripts_layout_video_modal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_video_modal_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_layout_gtranslate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/layout/gtranslate.js */ "./src/assets/scripts/layout/gtranslate.js");
/* harmony import */ var _scripts_layout_gtranslate_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_gtranslate_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_layout_paid_membership_pro_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/layout/paid-membership-pro.js */ "./src/assets/scripts/layout/paid-membership-pro.js");
/* harmony import */ var _scripts_layout_paid_membership_pro_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_paid_membership_pro_js__WEBPACK_IMPORTED_MODULE_5__);

// import './scripts/layout/mega-menu.js';





// import './scripts/layout/empty-links.js';
})();

/******/ })()
;
//# sourceMappingURL=script.js.map