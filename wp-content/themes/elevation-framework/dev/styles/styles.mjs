import { generateClamp } from '../utils/generateClamp.mjs';
import {
	fontSizes,
	headingsLineHeights,
	headingsLetterSpacing,
	headingsFontWeight,
} from '../fonts/fontSizes.mjs';

export const bodyStyles = () => {
	return {
		typography: {
			fontFamily: '"Body Font", sans-serif',
			lineHeight: '160%',
			fontSize: generateClamp('16px', '16px', '16px'),
			letterSpacing: '-0.03em',
		},
	};
};

const headingSizes = (fontSizes) => {
	const headingSizes = fontSizes.slice(0, 6);
	return headingSizes.reduce((acc, fontSize) => {
		acc[fontSize.slug] = {
			typography: {
				fontSize: fontSize.size,
				lineHeight: headingsLineHeights[fontSize.slug],
				letterSpacing: headingsLetterSpacing[fontSize.slug],
				fontWeight: headingsFontWeight[fontSize.slug],
			},
		};
		return acc;
	}, {});
};

export const elementsStyles = () => {
	return {
		elements: {
			button: {
				typography: {
					fontFamily: '"Body Font", sans-serif',
				},
			},
			heading: {
				typography: {
					fontFamily: '"Heading Font", serif',
				},
			},
			...headingSizes(fontSizes()),
		},
	};
};
