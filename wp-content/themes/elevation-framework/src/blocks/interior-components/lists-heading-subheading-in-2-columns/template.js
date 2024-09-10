export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: '',
			containerWidth: 'medium',
		},
		[
			[
				'core/heading',
				{
					level: 2,
					content: 'H2. Heading lorem ipsum euismod',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__normal',
				},
			],
			[
				'elevation/interior-components--group',
				{
					tagName: 'ul',
					className:
						'lists-heading-subheading-in-2-columns__container',
				},
				[
					[
						'elevation/interior-components--lists-heading-subheading-in-2-columns-item',
						{},
					],
					[
						'elevation/interior-components--lists-heading-subheading-in-2-columns-item',
						{},
					],
					[
						'elevation/interior-components--lists-heading-subheading-in-2-columns-item',
						{},
					],
				],
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
