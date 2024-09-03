const TEMPLATE = [
	['elevation/spacer'],
	[
		'elevation/custom-container',
		{
			className: 'cards-images__custom-container',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/group',
				{
					className: '',
				},
				[
					[
						'core/heading',
						{
							level: 3,
							content: 'H3. Heading lorem ipsum euismod',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum.`,
						},
					],
					[
						'elevation/buttons',
						{},
						[
							[
								'elevation/button',
								{
									btnStyle: 'primary-1',
									text: 'Read More',
								},
							],
						],
					],
					[
						'elevation/spacer',
						{
							space: 'spacer__extra-small',
							line: true,
							lineType: 'dots',
						},
					],
				],
			],
			[
				'elevation/group',
				{
					className:
						'cards-images-with-heading-description-card__container-group',
				},
				[
					[
						'elevation/cards-images-with-heading-description-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-images-with-heading-description/images/image-1.webp`,
								alt: '',
							},
						},
					],
					[
						'elevation/cards-images-with-heading-description-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-images-with-heading-description/images/image-2.webp`,
								alt: '',
							},
						},
					],
					[
						'elevation/cards-images-with-heading-description-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-images-with-heading-description/images/image-3.webp`,
								alt: '',
							},
						},
					],
				],
			],

			[
				'elevation/spacer',
				{
					space: 'spacer__extra-small',
					line: true,
					lineType: 'dots',
					linePosition: 'bottom',
				},
			],
		],
	],
	['elevation/spacer'],
];

export default TEMPLATE;
