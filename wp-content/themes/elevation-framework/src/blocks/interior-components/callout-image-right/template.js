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
					level: 2,
					content: 'H2. Heading lorem ipsum sapien et',
				},
			],
			[
				'core/paragraph',
				{
					fontSize: 'body',
					content: `Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.`,
				},
			],
			[
				'elevation/interior-components--buttons',
				{ layout: { type: 'flex', justifyContent: 'center' } },
				[
					[
						'elevation/interior-components--button',
						{
							btnStyle: 'primary--color-03',
							text: 'Text Button',
						},
					],
					[
						'elevation/interior-components--button',
						{
							btnStyle: 'secondary--outline',
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
