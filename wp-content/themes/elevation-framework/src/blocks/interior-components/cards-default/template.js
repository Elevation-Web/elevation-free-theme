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
					className: 'cards-default-card__container-group',
				},
				[
					[
						'elevation/cards-default-card',
						{
							tagName: '5',
							link: {
								text: 'H5. Subheading lorem',
							},
						},
					],
					[
						'elevation/cards-default-card',
						{
							tagName: '5',
							link: {
								text: 'H5. Subheading lorem',
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
