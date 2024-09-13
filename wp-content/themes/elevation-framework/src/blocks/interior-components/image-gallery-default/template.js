export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'image-gallery-default-container',
			// containerWidth: '',
		},
		[
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
							content: 'H2. Heading lorem ipsum',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id.',
						},
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__small',
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className: 'image-gallery-default__grid',
				},
				[
					['elevation/interior-components--image-gallery', {}],
					['elevation/interior-components--image-gallery', {}],
					['elevation/interior-components--image-gallery', {}],
					['elevation/interior-components--image-gallery', {}],
					['elevation/interior-components--image-gallery', {}],
					['elevation/interior-components--image-gallery', {}],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
				},
			],
		],
	],
	['elevation/interior-components--spacer'],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];
