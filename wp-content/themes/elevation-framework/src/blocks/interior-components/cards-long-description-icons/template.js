export const TEMPLATE = [
	['elevation/spacer'],
	[
		'elevation/custom-container',
		{
			className: 'cards-icons__custom-container',
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
							level: 4,
							content: 'H4. Heading lorem ipsum euismod',
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
									btnStyle: 'secondary',
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
						'cards-long-description-icons-card__container-group',
				},
				[
					[
						'elevation/cards-long-description-icons-card',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/cards-long-description-icons-card',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/cards-long-description-icons-card',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-3.webp`,
							},
						},
					],
					[
						'elevation/cards-long-description-icons-card',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-long-description-icons/images/icon-4.webp`,
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

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/buttons',
	'elevation/cards-icons',
];
