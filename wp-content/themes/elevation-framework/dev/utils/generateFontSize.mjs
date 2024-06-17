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

export const generateFontSize = (mobileSize, tabletSize, desktopSize) => {
    const mobilePx = `${mobileSize}px`;
    const tabletVw = (tabletSize / 768) * 100;
    const desktopPx = `${desktopSize}px`;

    return `clamp(${mobilePx}, ${tabletVw}vw, ${desktopPx})`;
}