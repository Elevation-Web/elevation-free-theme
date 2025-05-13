export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'text-block-heading-subheading-2-columns__container',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className:
						'text-block-heading-subheading-2-columns__heading',
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
				'elevation/interior-components--group',
				{
					className: 'text-block-heading-subheading-2-columns__info',
				},
				[
					[
						'core/heading',
						{
							content:
								'H3. Subheading lorem aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales',
							level: 3,
							fontSize: 'h5',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Name of Block: Text-Block, Layout: Heading+Subheading in 2 Columns. Ideal maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
						},
					],
					[
						'elevation/interior-components--lists-bullets',
						{
							altTemplate: true,
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
