export const template = [
	[
		'elevation/interior-components--group',
		{
			className: 'numbered-accordion__panel-wrapper',
		},
		[
			[
				'elevation/interior-components--image-with-srcset',
				{
					img: {
						url: '/wp-content/themes/elevation-framework/src/blocks/interior-components/numbered-accordion/images/image.webp',
					},
				},
			],
			[
				'elevation/interior-components--group',
				{
					className: 'numbered-accordion__panel-content',
				},
				[
					[
						'core/paragraph',
						{
							content:
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mauris, nulla aliquam lacus lectus habitant. Eu ullamcorper sed fames libero morbi velit euismod. Sem cursus commodo mollis aliquam aliquam varius. Amet ut mi nunc ut tellus bibendum morbi curabitur adipiscing. Nisl sed risus sit odio. Bibendum massa habitasse nulla fringilla sociis nec cursus et urna. Urna, vitae aliquet fringilla placerat. Porta duis turpis dignissim.',
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
									text: 'Read More',
								},
							],
						],
					],
				],
			],
		],
	],
];

export const allowedBlocks = [
	'core/paragraph',
	'core/list',
	'elevation/interior-components--buttons',
	'elevation/interior-components--group',
	'elevation/interior-components--image-with-srcset',
];
