import { generateClamp } from '../utils/generateClamp.mjs';

const spacing = () => {
	return {
		customSpacingSize: true,
		units: ['px', 'em', 'rem', 'vh', 'vw', '%'],
		spacingSizes: [
			{
				slug: '20',
				name: '2X-Small',
				size: generateClamp('10px', '10px', '10px'),
			},
			{
				slug: '30',
				name: 'X-Small',
				size: generateClamp('10px', '15px', '15px'),
			},
			{
				slug: '40',
				name: 'Small',
				size: generateClamp('15px', '20px', '20px'),
			},
			{
				slug: '50',
				name: 'Medium',
				size: generateClamp('15px', '30px', '30px'),
			},
			{
				slug: '60',
				name: 'Large',
				size: generateClamp('20px', '40px', '40px'),
			},
			{
				slug: '70',
				name: 'X-Large',
				size: generateClamp('20px', '60px', '60px'),
			},
			{
				slug: '80',
				name: '2X-Large',
				size: generateClamp('20px', '80px', '80px'),
			},
		],
	};
};

export default spacing;
