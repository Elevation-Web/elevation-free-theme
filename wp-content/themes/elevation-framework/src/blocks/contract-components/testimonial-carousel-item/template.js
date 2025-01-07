export const TEMPLATE = [
	[
		'elevation/interior-components--group',
		{
			className: 'testimonial-carousel-item__image',
			allowedBlocks: ['elevation/interior-components--image-with-srcset'],
		},
		[
			[
				'elevation/interior-components--image-with-srcset',
				{
					img: {
						url: '/wp-content/themes/elevation-framework/src/blocks/contract-components/testimonial-carousel-item/images/default.webp',
					},
				},
			],
		],
	],
	[
		'elevation/interior-components--group',
		{
			className: 'testimonial-carousel-item__content',
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
								'“Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.”',
						},
					],
				],
			],
			[
				'core/paragraph',
				{
					content: '<strong>Name Lorem Ipsum</strong>',
				},
			],
			[
				'core/paragraph',
				{
					content: 'Func Area Lorem Ipsum.',
				},
			],
		],
	],
];

export const allowedBlocks = [];
