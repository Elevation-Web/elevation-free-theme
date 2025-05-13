export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'text-block-float-image__container',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: 'text-block-float-image__info',
				},
				[
					[
						'elevation/interior-components--image-with-srcset',
						{
							showPosition: true,
							inheritClassName: 'float-right media',
							saveWidthAndHeight: true,
							img: {
								url: 'https://picsum.photos/id/1010/350/350.webp',
								styledWidth: '350',
								styledHeight: '350',
							},
						},
					],
					[
						'core/heading',
						{
							content:
								'H2. Subheading lorem aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales',
							level: 2,
							fontSize: 'h4',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Name of Block: Text-Block, Layout: Float Image. Ideal maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Tincidunt id aliquet risus feugiat in ante metus dictum at tempor <strong>euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.</strong>',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra <a href="#">adipiscing at in tellus integer feugiat scelerisque</a> varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus.',
						},
					],
				],
			],
		],
	],
];
