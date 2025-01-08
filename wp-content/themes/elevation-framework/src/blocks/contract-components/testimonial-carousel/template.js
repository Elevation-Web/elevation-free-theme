export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'testimonial-carousel__custom-container',
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
							fontSize: 'h3',
							content: 'H2. Heading lorem ipsum',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 30 words. Urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis.`,
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
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
							line: true,
							lineType: 'dots',
							linePosition: 'bottom',
						},
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
						},
					],
				],
			],
			[
				'elevation/interior-components--swiper',
				{
					className: 'testimonial-carousel__swiper',
					slidesPerViewXl: '1',
					slidesPerViewXxl: '1',
					allowedBlocks: [
						'elevation/contract-components--testimonial-carousel-item',
					],
				},
				[
					[
						'elevation/contract-components--testimonial-carousel-item',
						{},
					],
					[
						'elevation/contract-components--testimonial-carousel-item',
						{},
					],
					// [
					// 	'elevation/contract-components--testimonial-carousel-item',
					// 	{},
					// ],
					// [
					// 	'elevation/contract-components--testimonial-carousel-item',
					// 	{},
					// ],
					// [
					// 	'elevation/contract-components--testimonial-carousel-item',
					// 	{},
					// ],
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
	'elevation/interior-components--spacer',
];
