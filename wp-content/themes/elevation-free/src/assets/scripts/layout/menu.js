import { handleResize } from '../../../critical-assets/scripts/handleResize';

var breakpoint = 992;

const menuRegularInit = () => {
	const menu = document.querySelector('.nav.menu');
	const menuItems = document.querySelectorAll(
		'.nav.menu li.menu-item-has-children'
	);
	if (!menu || !menuItems.length) return;

	// close all menus
	const closeAllMenus = () => {
		menuItems.forEach((item) => toggleMenu(item, false));
	};

	// Function to close sibling menu items (without affecting ancestors)
	const closeSiblingMenus = (menuItem) => {
		const parent = menuItem.parentElement;
		if (!parent) return;

		[...parent.children].forEach((sibling) => {
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
	menuItems.forEach((menuItem) => {
		const button = menuItem.querySelector('button');
		let timer;

		if (!button) return;

		// Button click handler
		const buttonHanlder = (event) => {
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

		handleResize(
			breakpoint,
			() => {
				menuItem.removeEventListener(
					'mouseover',
					meniItemMouseOverHandler
				);
				menuItem.removeEventListener(
					'mouseout',
					menuItemMouseOutHandler
				);
			},
			() => {
				closeAllMenus();
				menuItem.removeEventListener(
					'mouseover',
					meniItemMouseOverHandler
				);
				menuItem.addEventListener(
					'mouseover',
					meniItemMouseOverHandler
				);

				menuItem.removeEventListener(
					'mouseout',
					menuItemMouseOutHandler
				);
				menuItem.addEventListener('mouseout', menuItemMouseOutHandler);
			}
		);
	});

	// Close all menus when focus leaves the entire navigation
	const menuFocusOutHandler = (event) => {
		if (!menu.contains(event.relatedTarget)) {
			menuItems.forEach((item) => toggleMenu(item, false));
		}
	};

	handleResize(
		breakpoint,
		() => {
			menu.removeEventListener('focusout', menuFocusOutHandler);
		},
		() => {
			menu.removeEventListener('focusout', menuFocusOutHandler);
			menu.addEventListener('focusout', menuFocusOutHandler);
		}
	);
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
	const closeMenuOnDocument = (event) => {
		if (
			!menu.contains(event.target) &&
			!menuToggle.contains(event.target)
		) {
			closeMenu();
		}
	};
	const closeMenu = () => {
		menuList.classList.remove('open');
		menuToggle.setAttribute('aria-expanded', 'false');
	};

	handleResize(
		breakpoint,
		() => {
			// Toggle the main menu
			menuToggle.removeEventListener('click', menuToggleClickHandler);
			menuToggle.addEventListener('click', menuToggleClickHandler);

			// Close menu when clicking outside
			document.removeEventListener('click', closeMenuOnDocument);
			document.addEventListener('click', closeMenuOnDocument);
		},
		() => {
			closeMenu();
			menuToggle.removeEventListener('click', menuToggleClickHandler);
			document.removeEventListener('click', closeMenuOnDocument);
		}
	);
};

responsiveMenuInit();
