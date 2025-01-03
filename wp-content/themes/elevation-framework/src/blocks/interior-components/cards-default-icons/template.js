export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'cards-icons__custom-container',
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
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
							line: false,
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className: 'cards-default-icons-card__container-group',
					allowedBlocks: [
						'elevation/interior-components--cards-default-icons-card',
					],
				},
				[
					[
						'elevation/interior-components--cards-default-icons-card',
						{
							tagName: '6',
							link: {
								text: 'H6. Subheading lorem ipsum felis eget nunc',
							},
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-default-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/interior-components--cards-default-icons-card',
						{
							tagName: '6',
							link: {
								text: 'H6. Subheading lorem ipsum felis eget nunc',
							},
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-default-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/interior-components--cards-default-icons-card',
						{
							tagName: '6',
							link: {
								text: 'H6. Subheading lorem ipsum felis eget nunc',
							},
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-default-icons/images/icon-3.webp`,
							},
						},
					],
				],
			],
		],
	],
	['elevation/interior-components--spacer'],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--cards-icons',
];
