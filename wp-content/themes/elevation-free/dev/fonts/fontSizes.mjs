import { generateClamp } from '../utils/generateClamp.mjs';

export const headingsLineHeights = {
	h1: '1.2em',
	h2: '1.2em',
	h3: '1.2em',
	h4: '1.4em',
	h5: '1.4em',
	h6: '1.6em',
};

export const headingsLetterSpacing = {
	h1: '-0.03em',
	h2: '-0.03em',
	h3: '-0.02em',
	h4: '-0.02em',
	h5: '-0.01em',
	h6: '-0.01em',
};

export const headingsFontWeight = {
	h1: '700',
	h2: '700',
	h3: '700',
	h4: '700',
	h5: '700',
	h6: '700',
};

export const fontSizes = () => {
	return [
		{
			size: generateClamp('52px', '52px', '52px'),
			slug: 'h1',
			name: 'Heading 1',
		},
		{
			size: generateClamp('39px', '39px', '39px'),
			slug: 'h2',
			name: 'Heading 2',
		},
		{
			size: generateClamp('34px', '34px', '34px'),
			slug: 'h3',
			name: 'Heading 3',
		},
		{
			size: generateClamp('30px', '30px', '30px'),
			slug: 'h4',
			name: 'Heading 4',
		},
		{
			size: generateClamp('24px', '24px', '24px'),
			slug: 'h5',
			name: 'Heading 5',
		},
		{
			size: generateClamp('19px', '19px', '19px'),
			slug: 'h6',
			name: 'Heading 6',
		},
		{
			size: generateClamp('16px', '16px', '16px'),
			slug: 'body',
			name: 'Body Text',
		},
		{
			size: generateClamp('16px', '17px', '18px'),
			slug: 'special-body',
			name: 'Special: Body Text',
		},
		{
			size: generateClamp('14px', '14px', '14px'),
			slug: 'small-labels',
			name: 'Small Labels',
		},
	];
};
