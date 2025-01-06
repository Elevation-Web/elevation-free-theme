export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'logos-carousel__custom-container',
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
					className: 'logos-carousel__swiper',
					slidesPerView: '1',
					slidesPerViewSm: '2',
					slidesPerViewMd: '3',
					slidesPerViewLg: '3',
					slidesPerViewXl: '4',
					slidesPerViewXxl: '4',
					spaceBetween: '33px',
					allowedBlocks: [
						'elevation/contract-components--logos-carousel-item',
					],
				},
				[
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
					['elevation/contract-components--logos-carousel-item', {}],
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
