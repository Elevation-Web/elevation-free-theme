export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'callout-background-content-center__custom-container',
			containerWidth: 'small',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: '',
				},
				[
					[
						'core/paragraph',
						{
							fontSize: 'body',
							content: `<strong>Maximum 50 words. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.</strong>`,
							align: 'center',
						},
					],
					[
						'elevation/interior-components--buttons',
						{ layout: { type: 'flex', justifyContent: 'center' } },
						[
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'primary-inverse',
									text: 'Text Button',
								},
							],
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'secondary-inverse',
									text: 'Text Button',
								},
							],
						],
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
