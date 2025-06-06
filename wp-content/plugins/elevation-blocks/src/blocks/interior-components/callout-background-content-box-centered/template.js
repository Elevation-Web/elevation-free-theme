export const template = [
	[
		'elevation/interior-components--group',
		{
			className: '',
		},
		[
			[
				'core/heading',
				{
					level: 4,
					content: 'H4. Heading lorem ipsum euismod',
				},
			],
			[
				'core/paragraph',
				{
					fontSize: 'body',
					content: `Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis..`,
				},
			],
			[
				'elevation/interior-components--buttons',
				{ layout: { type: 'flex', justifyContent: 'start' } },
				[
					[
						'elevation/interior-components--button',
						{
							btnStyle: 'tertiary--inverse',
							text: 'Text Button',
						},
					],
				],
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];
