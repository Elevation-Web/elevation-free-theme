export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'cards-icons__custom-container',
			containerWidth: 'small',
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
							textAlign: 'center',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis.`,
							align: 'center',
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
					className: 'image-carousel-horizontal-centered__container',
					allowedBlocks: [
						'elevation/interior-components--image-carousel',
					],
					slidesPerView: 1,
					slidesPerViewMd: 1.5,
					slidesPerViewLg: 1.5,
					slidesPerViewXl: 1.5,
					slidesPerViewXxl: 1.5,
					centeredSlides: true,
				},
				[
					['elevation/interior-components--image-carousel', {}],
					['elevation/interior-components--image-carousel', {}],
					['elevation/interior-components--image-carousel', {}],
					['elevation/interior-components--image-carousel', {}],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
					line: true,
					lineType: 'dots',
					linePosition: 'bottom',
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
