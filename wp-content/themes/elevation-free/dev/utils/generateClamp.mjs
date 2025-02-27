import { pxToRem } from './pxToRem.mjs';
/**
 * Generates a CSS `clamp()` function for responsive font sizes.
 *
 * @param {number} mobileSize - The font size for mobile screens, in pixels.
 * @param {number} tabletSize - The font size for tablet screens, in pixels.
 * @param {number} desktopSize - The font size for desktop screens, in pixels.
 * @returns {string} A CSS `clamp()` function that sets the font size to `mobileSize` on mobile screens,
 * `tabletSize` on tablet screens, and `desktopSize` on desktop screens. The font size scales linearly
 * between these breakpoints.
 */

export const generateClamp = (mobileSize, tabletSize, desktopSize) => {
	const mobileSizeWithOutUnit = mobileSize?.replace('px', '');
	const tabletSizeWithOutUnit = tabletSize?.replace('px', '');
	const desktopSizeWithOutUnit = desktopSize?.replace('px', '');

	const mobileRem = pxToRem(`${mobileSizeWithOutUnit}px`);
	const tabletVw = (tabletSizeWithOutUnit / 768) * 100;
	const desktopRem = pxToRem(`${desktopSizeWithOutUnit}px`);

	return `clamp(${mobileRem}, ${tabletVw}vw, ${desktopRem})`;
};
