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
							level: 2,
							content: 'H2. Heading lorem ipsum dolor sit amet',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 20 words. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac.`,
						},
					],
					[
						'elevation/spacer',
						{
							space: 'spacer__extra-small',
							line: false,
						},
					],
				],
			],
			[
				'elevation/group',
				{
					className: 'cards-default-icons-card__container-group',
				},
				[
					[
						'elevation/cards-default-icons-card',
						{
							tagName: '6',
							link: {
								text: 'H6. Subheading lorem ipsum felis eget nunc',
							},
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-default-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/cards-default-icons-card',
						{
							tagName: '6',
							link: {
								text: 'H6. Subheading lorem ipsum felis eget nunc',
							},
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-default-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/cards-default-icons-card',
						{
							tagName: '6',
							link: {
								text: 'H6. Subheading lorem ipsum felis eget nunc',
							},
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/cards-default-icons/images/icon-3.webp`,
							},
						},
					],
				],
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
