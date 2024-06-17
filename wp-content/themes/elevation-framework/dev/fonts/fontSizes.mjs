import { generateFontSize } from '../utils/generateFontSize.mjs';

export const fontSizes = () => {
	return [
		{
			size: generateFontSize(52, 52, 52),
			slug: 'h1',
			name: 'Heading 1',
		},
		{
			size: generateFontSize(39, 39, 39),
			slug: 'h2',
			name: 'Heading 2',
		},
		{
			size: generateFontSize(34, 34, 34),
			slug: 'h3',
			name: 'Heading 3',
		},
		{
			size: generateFontSize(30, 30, 30),
			slug: 'h4',
			name: 'Heading 4',
		},
		{
			size: generateFontSize(24, 24, 24),
			slug: 'h5',
			name: 'Heading 5',
		},
		{
			size: generateFontSize(19, 19, 19),
			slug: 'h6',
			name: 'Heading 6',
		},
		{
			size: generateFontSize(16, 16, 16),
			slug: 'body',
			name: 'Body Text',
		},
		{
			size: generateFontSize(16, 17, 18),
			slug: 'special-body',
			name: 'Special: Body Text',
		},
	];
};
