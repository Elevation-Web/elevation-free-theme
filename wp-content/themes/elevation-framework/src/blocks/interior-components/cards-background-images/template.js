export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'cards-background-images__custom-container',
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
									btnStyle: 'primary-1',
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
					className: 'cards-background-images-card__container-group',
				},
				[
					[
						'elevation/interior-components--cards-background-images-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-background-images/images/image-1.webp`,
								alt: '',
							},
							link: {
								text: 'Heading lorem ipsum',
							},
							textColor: '$ui-base-white',
						},
					],
					[
						'elevation/interior-components--cards-background-images-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-background-images/images/image-2.webp`,
								alt: '',
							},
							link: {
								text: 'Heading lorem ipsum',
							},
							textColor: '$ui-base-white',
						},
					],
					[
						'elevation/interior-components--cards-background-images-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-background-images/images/image-3.webp`,
								alt: '',
							},
							link: {
								text: 'Heading lorem ipsum',
							},
							textColor: '$ui-base-white',
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

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--cards-background-images',
];
