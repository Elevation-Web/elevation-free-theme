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
			className: 'text-block-list-w-button__container',
			containerWidth: 'default',
			backgroundColor: 'ui-background-light-01',
		},
		[
			[
				'elevation/interior-components--custom-container',
				{
					className: 'text-block-list-w-button__inner-container',
					containerWidth: 'medium',
				},
				[
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__normal',
						},
					],
					[
						'elevation/interior-components--group',
						{
							className: 'text-block-list-w-button__list-wrapper',
							allowedBlocks: [
								'elevation/interior-components--text-block-list-w-button-item',
							],
						},
						[
							[
								'elevation/interior-components--text-block-list-w-button-item',
								{},
							],
							[
								'elevation/interior-components--text-block-list-w-button-item',
								{},
							],
						],
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__normal',
						},
					],
				],
			],
		],
	],
];
