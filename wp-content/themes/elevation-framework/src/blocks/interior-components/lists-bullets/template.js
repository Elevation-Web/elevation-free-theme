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
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
					line: true,
					linePosition: 'top',
					lineType: 'dash',
				},
			],
			[
				'elevation/interior-components--group',
				{
					tagName: 'ul',
					className: 'lists-bullets__container',
					allowedBlocks: [
						'elevation/interior-components--lists-bullets-item',
					],
				},
				[
					['elevation/interior-components--lists-bullets-item', {}],
					['elevation/interior-components--lists-bullets-item', {}],
					['elevation/interior-components--lists-bullets-item', {}],
					['elevation/interior-components--lists-bullets-item', {}],
					['elevation/interior-components--lists-bullets-item', {}],
					['elevation/interior-components--lists-bullets-item', {}],
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
		],
	],
	['elevation/interior-components--spacer'],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];
