export const TEMPLATE = [
	[
		'elevation/interior-components--group',
		{
			className: 'testimonial-single-item__image',
			allowedBlocks: ['elevation/interior-components--image-with-srcset'],
		},
		[
			[
				'elevation/interior-components--image-with-srcset',
				{
					img: {
						url: '/wp-content/themes/elevation-framework/src/blocks/contract-components/testimonial-single-item/images/default.webp',
					},
				},
			],
		],
	],
	[
		'elevation/interior-components--group',
		{
			className: 'testimonial-single-item__content',
			allowedBlocks: ['core/quote', 'core/paragraph'],
		},
		[
			[
				'core/quote',
				{},
				[
					[
						'core/paragraph',
						{
							content:
								'<strong>“Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.”</strong>',
							textColor:
								'ui-foreground-primary-text-highlight-text',
							fontSize: 'h6',
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className: 'testimonial-single-item__content-bottom',
					allowedBlocks: [
						'elevation/interior-components--buttons',
						'core/paragraph',
					],
				},
				[
					[
						'core/paragraph',
						{
							content:
								'<strong>Name Lorem Ipsum</strong><br>Func Area Lorem Ipsum',
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
									text: 'Read Full Story',
								},
							],
						],
					],
				],
			],
		],
	],
];

export const allowedBlocks = [];
