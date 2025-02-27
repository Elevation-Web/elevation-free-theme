var jQ = jQuery.noConflict();
jQ(document).ready(function () {
	function myOrientResizeFunction() {
		if (jQ(window).width() >= 1199.99) {
			jQ(
				'.header.header.mega-menu-active #NavDropdown ul.nav > li a.nav-link'
			).unbind('focus');
			jQ(
				'header.header.mega-menu-active #NavDropdown ul.nav > li a.nav-link'
			).on('focus', function () {
				const navId = jQ(this).parent().attr('id');
				jQ('.mega-menu')
					.stop(true, true)
					.slideUp('fast', function () {
						jQ('#mega-' + navId)
							.stop(true, true)
							.slideDown();
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
						jQ('#mega-' + navId + ' a')
							.first()
							.focus();
					}
				});
				jQ('#mega-' + navId + ' a').unbind('keydown');
				jQ('#mega-' + navId + ' a').on('keydown', function (e) {
					e.preventDefault();
					if (jQ(this).parent().hasClass('mega-menu__info--bottom')) {
						if (
							e.code === 'ArrowDown' ||
							e.code === 'ArrowRight' ||
							(e.code === 'Tab' && !e.shiftKey)
						) {
							const ctaInImage = jQ(this)
								.closest('.mega-menu__row')
								.find('.box-aside a')
								.first();
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
						} else if (
							e.code === 'ArrowUp' ||
							e.code === 'ArrowLeft' ||
							(e.code === 'Tab' && e.shiftKey)
						) {
							jQ(this).parent().prev().find('a').focus();
						}
					} else if (jQ(this).parent().hasClass('block__buttons')) {
						if (
							e.code === 'ArrowUp' ||
							e.code === 'ArrowLeft' ||
							(e.code === 'Tab' && e.shiftKey)
						) {
							jQ(this)
								.closest('.mega-menu__row')
								.find('.mega-menu__info--bottom a')
								.first()
								.focus();
						} else if (
							e.code === 'ArrowDown' ||
							e.code === 'ArrowRight' ||
							(e.code === 'Tab' && !e.shiftKey)
						) {
							const mainItem = jQ('#' + navId);
							const megaMenuItems = jQ('#menu-main-menu > li');
							const lastItem =
								megaMenuItems[megaMenuItems.length - 1];

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
					} else if (
						jQ(this).parent().is(':last-child') &&
						(e.code === 'ArrowDown' ||
							e.code === 'ArrowRight' ||
							(e.code === 'Tab' && !e.shiftKey))
					) {
						jQ(this)
							.parent()
							.parent()
							.next()
							.find('a')
							.first()
							.focus();
					} else if (
						jQ(this).parent().is(':first-child') &&
						(e.code === 'ArrowUp' ||
							e.code === 'ArrowLeft' ||
							(e.code === 'Tab' && e.shiftKey))
					) {
						let navId = jQ(this).closest('.mega-menu').attr('id');
						navId = navId.replace('mega-', '');
						jQ('#' + navId)
							.find('a')
							.first()
							.focus();
					} else {
						if (
							e.code === 'ArrowUp' ||
							e.code === 'ArrowLeft' ||
							(e.code === 'Tab' && e.shiftKey)
						) {
							if (jQ(this).parent().hasClass('sub-nav-header')) {
								jQ(this).next().find('a').first().focus();
							} else {
								jQ(this)
									.parent()
									.prev()
									.find('a')
									.first()
									.focus();
							}
						}
						if (
							e.code === 'ArrowDown' ||
							e.code === 'ArrowRight' ||
							(e.code === 'Tab' && !e.shiftKey)
						) {
							if (jQ(this).parent().hasClass('sub-nav-header')) {
								jQ(this)
									.parent()
									.prev()
									.find('a:last-child')
									.focus();
							} else {
								jQ(this)
									.parent()
									.next()
									.find('a')
									.first()
									.focus();
							}
						}
					}
				});
			});

			jQ('#NavDropdown ul.navbar-nav > li.dropdown > a').removeAttr(
				'data-bs-toggle aria-haspopup aria-expanded'
			);

			var timer;
			jQ(
				'header.header.mega-menu-active #NavDropdown ul.navbar-nav > li.dropdown > a'
			)
				.on('mouseenter', function () {
					var that = this;
					var id = jQ(this).parent().attr('id');
					clearTimeout(timer);
					timer = setTimeout(function () {
						jQ('.mega-menu')
							.stop(true, false)
							.slideUp('fast')
							.removeClass('active');
						jQ('#mega-' + id)
							.stop(true, false)
							.slideDown('slow')
							.addClass('active');
						jQ('header.header.mega-menu-active').append(
							'<span class="closeMenu"></span>'
						);
						setTimeout(function () {
							jQ('.closeMenu').on('mouseenter', function () {
								jQ('.mega-menu')
									.stop(true, false)
									.slideUp('fast')
									.removeClass('active');
								jQ('.closeMenu').remove();
							});
						}, 200);
						jQ(document).on('mouseleave', function () {
							jQ('.mega-menu')
								.stop(true, false)
								.slideUp('fast')
								.removeClass('active');
						});
					}, 400);
				})
				.on('mouseleave', function () {
					clearTimeout(timer);
				});

			jQ(document).on('mouseleave', '.mega-menu', function (e) {
				if (!jQ(e.relatedTarget).closest('.mega-menu').length) {
					jQ('.mega-menu')
						.stop(true, false)
						.slideUp('fast')
						.removeClass('active');
				}
			});
		} else if (jQ(window).width() <= 1199.98) {
			jQ('.dropdown-btn').remove();
			var itemBtn =
				'<button  class="dropdown-toggle dropdown-btn"></button>';
			jQ('header .nav .dropdown > a').after(itemBtn);

			jQ('.dropdown-btn').unbind();
			jQ('.dropdown, .dropdown-menu').unbind();

			jQ('.dropdown-btn, .dropdown-toggle .dropdown-btn').click(
				function () {
					jQ(this).find('.fas').toggleClass('open');
					jQ(this).next().slideToggle('open');
				}
			);

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
		window.setTimeout(function () {
			// jQsidenav.css('display', 'none');
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
		if (
			window.matchMedia('(min-width: 1199.98px) and (max-width: 1200px)')
				.matches
		) {
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
