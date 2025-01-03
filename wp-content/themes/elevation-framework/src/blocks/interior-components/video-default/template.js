export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'video-default__container',
			containerWidth: 'medium',
		},
		[
			['elevation/interior-components--video-default-item', {}],
			[
				'elevation/interior-components--group',
				{
					className: 'video-default__content',
				},
				[
					['elevation/interior-components--spacer'],
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
							content: `Name of Block: Video, Layout: Carousel. Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius.`,
						},
					],
					[
						'elevation/interior-components--buttons',
						{},
						[
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'tertiary--color-01',
									text: 'Text Button',
								},
							],
						],
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					linePosition: 'bottom',
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__large',
				},
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--cards-icons',
];
