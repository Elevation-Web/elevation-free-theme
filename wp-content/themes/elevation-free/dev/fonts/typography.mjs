import { fontSizes } from './fontSizes.mjs';
import { fontFamilies } from './fontFamilies.mjs';

export const typography = () => {
	return {
		dropCap: false,
		fontWeight: false,
		fontStyle: false,
		textTransform: false,
		fontSizes: fontSizes(),
		fontFamilies: fontFamilies(),
	};
};
