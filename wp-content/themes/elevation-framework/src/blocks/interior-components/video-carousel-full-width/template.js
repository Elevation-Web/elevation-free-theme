export const TEMPLATE = [
	[
		'elevation/interior-components--spacer',
		{
			space: 'spacer__large',
		},
	],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'cards-icons__custom-container',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: '',
				},
				[
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
							content: `Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius.`,
						},
					],
					[
						'elevation/interior-components--buttons',
						{},
						[
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'primary-1',
									text: 'Text Button',
								},
							],
						],
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
						},
					],
				],
			],
		],
	],
	[
		'elevation/interior-components--swiper',
		{
			className: 'video-carousel__container',
			slidesPerViewLg: '1',
			slidesPerViewXl: '1',
			slidesPerViewXxl: '1',
			spaceBetween: 0,
			allowedBlocks: [
				'elevation/interior-components--video-carousel-full-width-item',
			],
		},
		[
			[
				'elevation/interior-components--video-carousel-full-width-item',
				{},
			],
			[
				'elevation/interior-components--video-carousel-full-width-item',
				{},
			],
			[
				'elevation/interior-components--video-carousel-full-width-item',
				{},
			],
			[
				'elevation/interior-components--video-carousel-full-width-item',
				{},
			],
		],
	],
	[
		'elevation/interior-components--spacer',
		{
			space: 'spacer__large',
		},
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--cards-icons',
];
