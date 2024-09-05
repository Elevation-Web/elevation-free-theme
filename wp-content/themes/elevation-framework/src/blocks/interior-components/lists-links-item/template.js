export const allowedBlocks = ['core/paragraph'];

export const template = [
	[
		'elevation/interior-components--spacer',
		{
			space: 'spacer__extra-small',
		},
	],
	[
		'core/heading',
		{
			level: 6,
			content: 'H6. Heading lorem ipsum dolor',
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
					text: 'Text Button',
				},
			],
		],
	],
	[
		'elevation/interior-components--spacer',
		{
			space: 'spacer__extra-small',
			line: true,
			linePosition: 'bottom',
			lineType: 'dash',
		},
	],
];
