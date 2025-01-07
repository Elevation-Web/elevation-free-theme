export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: '',
			containerWidth: 'default',
		},
		[
			[
				'elevation/interior-components--group',
				{
					tagName: 'div',
					className: 'separator-three-images__container',
				},
				[
					['elevation/interior-components--image-with-srcset'],
					['elevation/interior-components--image-with-srcset'],
					['elevation/interior-components--image-with-srcset'],
				],
			],
		],
	],
	['elevation/interior-components--spacer'],
];

export const allowedBlocks = [
	'elevation/interior-components--image-with-srcset',
];
