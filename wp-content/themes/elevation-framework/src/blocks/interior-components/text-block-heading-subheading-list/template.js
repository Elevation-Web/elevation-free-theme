export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--spacer',
];

export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'text-block-heading-subheading-list__container',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: 'text-block-heading-subheading-list__heading',
				},
				[
					[
						'core/heading',
						{
							content:
								'H2. Heading lorem ipsum euismod sagittis vitae at urna ',
							level: 2,
						},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
					line: true,
					lineType: 'dots',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--group',
				{
					className:
						'text-block-heading-subheading-list__list-wrapper',
				},
				[
					[
						'elevation/interior-components--text-block-heading-subheading-list-item',
						{},
					],
					[
						'elevation/interior-components--text-block-heading-subheading-list-item',
						{},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
					line: true,
					lineType: 'dots',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
				},
			],
		],
	],
];
