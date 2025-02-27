export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'text-block-default__container',
			containerWidth: 'medium',
		},
		[
			[
				'core/heading',
				{
					content: 'H2. Heading lorem ipsum',
					level: 2,
				},
			],
			[
				'core/paragraph',
				{
					content:
						'Name of Block: Text-Block, Layout: Default. Maximum 50 words per paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius.',
				},
			],
			[
				'core/paragraph',
				{
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius.',
				},
			],
			[
				'elevation/interior-components--buttons',
				{},
				[
					[
						'elevation/interior-components--button',
						{
							btnStyle: 'primary--color-01',
							text: 'Text Button',
						},
					],
				],
			],
		],
	],
];
