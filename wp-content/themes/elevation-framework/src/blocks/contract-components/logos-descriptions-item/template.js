export const TEMPLATE = [
	[
		'elevation/interior-components--image-with-srcset',
		{
			img: {
				url: '/wp-content/themes/elevation-framework/src/blocks/contract-components/logos-descriptions-item/images/logo.webp',
				inheritClassName: 'no-animate',
			},
		},
	],
	[
		'core/heading',
		{
			level: 3,
			fontSize: 'h6',
			content: 'H6. Subheading lorem',
		},
	],
	[
		'core/paragraph',
		{
			content: `Maximum 10 words. Tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur.`,
		},
	],
	[
		'elevation/interior-components--buttons',
		{},
		[
			[
				'elevation/interior-components--button',
				{
					btnStyle: 'tertiary--color-01',
					text: 'Text Button',
					className: 'stretched-link no-animate',
				},
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--image-with-srcset',
];
