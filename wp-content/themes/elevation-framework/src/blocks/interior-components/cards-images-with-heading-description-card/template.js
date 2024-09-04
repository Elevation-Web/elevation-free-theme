export const allowedBlocks = [
	'elevation/interior-components--image-with-srcset',
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'core/heading',
		{
			level: 6,
			content:
				'H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur.',
		},
	],
	[
		'elevation/interior-components--buttons',
		{},
		[
			[
				'elevation/interior-components--button',
				{
					btnStyle: 'tertiary',
				},
			],
		],
	],
];
