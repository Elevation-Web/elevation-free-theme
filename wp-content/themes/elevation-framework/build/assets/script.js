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
  } // Function to set the width of the selector


  function setSelectorWidth() {
    var selected_option = selector.options[selector.selectedIndex];
    var option_width = getOptionWidth(selected_option);
    selector.style.width = option_width + 55 + 'px';
  } // Set the width of the selector when the page loads


  setSelectorWidth(); // Set the width of the selector when an option is changed

  selector.addEventListener('change', setSelectorWidth);
}

/***/ }),

/***/ "./src/assets/scripts/layout/mega-menu.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/layout/mega-menu.js ***!
  \************************************************/
/***/ (() => {

var jQ = jQuery.noConflict();
jQ(document).ready(function () {
  function myOrientResizeFunction() {
    if (jQ(window).width() >= 1199.99) {
      jQ('.header.header.mega-menu-active #NavDropdown ul.nav > li a.nav-link').unbind('focus');
      jQ('header.header.mega-menu-active #NavDropdown ul.nav > li a.nav-link').on('focus', function () {
        const navId = jQ(this).parent().attr('id');
        jQ('.mega-menu').stop(true, true).slideUp('fast', function () {
          jQ('#mega-' + navId).stop(true, true).slideDown();
        });
        jQ(this).unbind('keydown');
        jQ(this).on('keydown', function (e) {
          if (e.code === 'ArrowLeft') {
            jQ(this).parent().prev().find('a').focus();
          }

          if (e.code === 'ArrowRight') {
            jQ(this).parent().next().find('a').focus();
          }

          if (e.code === 'ArrowDown') {
            jQ('#mega-' + navId + ' a').first().focus();
          }
        });
        jQ('#mega-' + navId + ' a').unbind('keydown');
        jQ('#mega-' + navId + ' a').on('keydown', function (e) {
          e.preventDefault();

          if (jQ(this).parent().hasClass('mega-menu__info--bottom')) {
            if (e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'Tab' && !e.shiftKey) {
              const ctaInImage = jQ(this).closest('.mega-menu__row').find('.box-aside a').first();

              if (ctaInImage.length > 0) {
                ctaInImage.focus();
              } else {
                const mainItem = jQ('#' + navId);

                if (mainItem.length > 0) {
                  mainItem.next().find('a').first().focus();
                } else {
                  jQ('.site-main a').first().focus();
                }
              }
            } else if (e.code === 'ArrowUp' || e.code === 'ArrowLeft' || e.code === 'Tab' && e.shiftKey) {
              jQ(this).parent().prev().find('a').focus();
            }
          } else if (jQ(this).parent().hasClass('block__buttons')) {
            if (e.code === 'ArrowUp' || e.code === 'ArrowLeft' || e.code === 'Tab' && e.shiftKey) {
              jQ(this).closest('.mega-menu__row').find('.mega-menu__info--bottom a').first().focus();
            } else if (e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'Tab' && !e.shiftKey) {
              const mainItem = jQ('#' + navId);
              const megaMenuItems = jQ('#menu-main-menu > li');
              const lastItem = megaMenuItems[megaMenuItems.length - 1];

              if (mainItem[0] === lastItem) {
                const bannerItem = jQ('.interior-banner a');
                const mainSiteItem = jQ('.site-main a');

                if (bannerItem.length > 0) {
                  bannerItem.first().focus();
                } else if (mainSiteItem.length > 0) {
                  mainSiteItem.first().focus();
                }

                jQ('.mega-menu').slideUp('fast');
              } else {
                mainItem.next().find('a').first().focus();
              }
            }
          } else if (jQ(this).parent().is(':last-child') && (e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'Tab' && !e.shiftKey)) {
            jQ(this).parent().parent().next().find('a').first().focus();
          } else if (jQ(this).parent().is(':first-child') && (e.code === 'ArrowUp' || e.code === 'ArrowLeft' || e.code === 'Tab' && e.shiftKey)) {
            let navId = jQ(this).closest('.mega-menu').attr('id');
            navId = navId.replace('mega-', '');
            jQ('#' + navId).find('a').first().focus();
          } else {
            if (e.code === 'ArrowUp' || e.code === 'ArrowLeft' || e.code === 'Tab' && e.shiftKey) {
              if (jQ(this).parent().hasClass('sub-nav-header')) {
                jQ(this).next().find('a').first().focus();
              } else {
                jQ(this).parent().prev().find('a').first().focus();
              }
            }

            if (e.code === 'ArrowDown' || e.code === 'ArrowRight' || e.code === 'Tab' && !e.shiftKey) {
              if (jQ(this).parent().hasClass('sub-nav-header')) {
                jQ(this).parent().prev().find('a:last-child').focus();
              } else {
                jQ(this).parent().next().find('a').first().focus();
              }
            }
          }
        });
      });
      jQ('#NavDropdown ul.navbar-nav > li.dropdown > a').removeAttr('data-bs-toggle aria-haspopup aria-expanded');
      var timer;
      jQ('header.header.mega-menu-active #NavDropdown ul.navbar-nav > li.dropdown > a').on('mouseenter', function () {
        var that = this;
        var id = jQ(this).parent().attr('id');
        clearTimeout(timer);
        timer = setTimeout(function () {
          jQ('.mega-menu').stop(true, false).slideUp('fast').removeClass('active');
          jQ('#mega-' + id).stop(true, false).slideDown('slow').addClass('active');
          jQ('header.header.mega-menu-active').append('<span class="closeMenu"></span>');
          setTimeout(function () {
            jQ('.closeMenu').on('mouseenter', function () {
              jQ('.mega-menu').stop(true, false).slideUp('fast').removeClass('active');
              jQ('.closeMenu').remove();
            });
          }, 200);
          jQ(document).on('mouseleave', function () {
            jQ('.mega-menu').stop(true, false).slideUp('fast').removeClass('active');
          });
        }, 400);
      }).on('mouseleave', function () {
        clearTimeout(timer);
      });
      jQ(document).on('mouseleave', '.mega-menu', function (e) {
        if (!jQ(e.relatedTarget).closest('.mega-menu').length) {
          jQ('.mega-menu').stop(true, false).slideUp('fast').removeClass('active');
        }
      });
    } else if (jQ(window).width() <= 1199.98) {
      jQ('.dropdown-btn').remove();
      var itemBtn = '<button  class="dropdown-toggle dropdown-btn"></button>';
      jQ('header .nav .dropdown > a').after(itemBtn);
      jQ('.dropdown-btn').unbind();
      jQ('.dropdown, .dropdown-menu').unbind();
      jQ('.dropdown-btn, .dropdown-toggle .dropdown-btn').click(function () {
        jQ(this).find('.fas').toggleClass('open');
        jQ(this).next().slideToggle('open');
      });
      jQ('.nav .dropdown .dropdown-menu').css('display', 'none');
      jQ('.dropdown, .dropdown-menu .dropdown').unbind();
      jQ('.dropdown-toggle.dropdown-btn').click(function (event) {
        event.preventDefault();
        var id = jQ(this).parent().attr('id');
        jQ('.mega-menu').removeClass('active');
        jQ('#mega-' + id).addClass('active');
      });
      jQ('.mega-menu__back').click(function () {
        jQ('.mega-menu').removeClass('active');
      });
      jQ('.mega-menu__close, .mega-menu__back').click(function () {
        jQ('.mega-menu').removeClass('active');
      });
    }
  }

  myOrientResizeFunction();
  var jQsidenav = jQ('.header__section #NavDropdown'),
      jQtoggler = jQ('.header__section .navbar-toggler');
  jQtoggler.click(function () {
    jQtoggler.toggleClass('active');
    jQ('.header__section .navbar-brand').toggleClass('active');
    jQ('.header__section .header__mobile').toggleClass('active');
    jQsidenav.toggleClass('active');

    if (!jQsidenav.hasClass('show')) {
      showSidenav();
    } else {
      hideSidenav();
    }
  });

  function showSidenav() {
    // jQsidenav.css('display', 'block');
    jQsidenav.addClass('show');
    jQ('.header__section').addClass('show');
  }

  function hideSidenav() {
    window.setTimeout(function () {// jQsidenav.css('display', 'none');
    }, 400);
    jQsidenav.removeClass('show');
    jQ('.header__section').removeClass('show');
  }

  jQ(window).bind('resize', function (e) {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function () {
      myOrientResizeFunction();
    }, 0);
  });
  jQ(window).resize(function () {
    myOrientResizeFunction();

    if (window.matchMedia('(min-width: 1199.98px) and (max-width: 1200px)').matches) {
      location.reload();
    }
  });
  jQ('#open-search, #open-search-mobile, .open-search').click(function () {
    jQ(this).toggleClass('close-search');
    jQ('header').toggleClass('opened-search');
    jQ('.header__section-search').slideToggle('400');
    setTimeout(function () {
      jQ('#searchInput').focus();
    }, 500);
  });
});

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/assets/script.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scripts_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/scripts/common/common.js */ "./src/assets/scripts/common/common.js");
/* harmony import */ var _assets_scripts_common_common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_common_common_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_layout_mega_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/layout/mega-menu.js */ "./src/assets/scripts/layout/mega-menu.js");
/* harmony import */ var _scripts_layout_mega_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_mega_menu_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_layout_wysiwyg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/layout/wysiwyg.js */ "./src/assets/scripts/layout/wysiwyg.js");
/* harmony import */ var _scripts_layout_wysiwyg_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_wysiwyg_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_layout_video_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/layout/video-modal.js */ "./src/assets/scripts/layout/video-modal.js");
/* harmony import */ var _scripts_layout_video_modal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_video_modal_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_layout_gtranslate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/layout/gtranslate.js */ "./src/assets/scripts/layout/gtranslate.js");
/* harmony import */ var _scripts_layout_gtranslate_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_gtranslate_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_layout_paid_membership_pro_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/layout/paid-membership-pro.js */ "./src/assets/scripts/layout/paid-membership-pro.js");
/* harmony import */ var _scripts_layout_paid_membership_pro_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_paid_membership_pro_js__WEBPACK_IMPORTED_MODULE_5__);

 // import './scripts/layout/menu.js';




 // import './scripts/layout/empty-links.js';
})();

/******/ })()
;
//# sourceMappingURL=script.js.map