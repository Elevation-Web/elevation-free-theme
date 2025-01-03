const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'cards-images__custom-container',
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
						'elevation/interior-components--buttons',
						{},
						[
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'primary--color-01',
									text: 'Read More',
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
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className:
						'cards-images-with-heading-description-card__container-group',
					allowedBlocks: [
						'elevation/interior-components--cards-images-with-heading-description-card',
					],
				},
				[
					[
						'elevation/interior-components--cards-images-with-heading-description-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading-description/images/image-1.webp`,
								alt: '',
							},
						},
					],
					[
						'elevation/interior-components--cards-images-with-heading-description-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading-description/images/image-2.webp`,
								alt: '',
							},
						},
					],
					[
						'elevation/interior-components--cards-images-with-heading-description-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading-description/images/image-3.webp`,
								alt: '',
							},
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
		],
	],
	['elevation/interior-components--spacer'],
];

export default TEMPLATE;
