export const TEMPLATE = [
	['elevation/interior-components--spacer'],
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
							content: `Name of Block: Video, Layout: Carousel. Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius.`,
						},
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__small',
						},
					],
				],
			],
			[
				'elevation/interior-components--swiper',
				{
					className: 'video-carousel__container',
					slidesPerViewLg: '2',
					slidesPerViewXl: '3',
					slidesPerViewXxl: '3',
				},
				[
					['elevation/interior-components--video-carousel-item', {}],
					['elevation/interior-components--video-carousel-item', {}],
					['elevation/interior-components--video-carousel-item', {}],
					['elevation/interior-components--video-carousel-item', {}],
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
	['elevation/interior-components--spacer'],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--cards-icons',
];
