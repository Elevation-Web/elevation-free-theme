export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'text-block-default-image__container',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: 'text-block-default-image__image',
				},
				[
					[
						'elevation/interior-components--image-with-srcset',
						{
							img: {
								url: '/wp-content/themes/elevation-framework/src/blocks/interior-components/text-block-default-image/images/default.webp',
							},
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className: 'text-block-default-image__info',
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
								'Name of Block: Text-Block, Layout: Default-Small-Image. Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce.',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes <a href="#">nascetur ridiculus</a> mus mauris vitae ultricies leo.',
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
		],
	],
];
