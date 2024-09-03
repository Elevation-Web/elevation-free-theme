export const TEMPLATE = [
	['elevation/spacer'],
	[
		'elevation/custom-container',
		{
			className: 'lists-default-with-icons__custom-container',
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
							content: 'H4. Heading lorem ipsum felis eget',
							// textColor: '$ui-foreground-primary-text-headings',
						},
					],
				],
			],
			[
				'elevation/group',
				{
					className: 'lists-default-with-icons-item__container-group',
				},
				[
					[
						'elevation/lists-default-with-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/lists-default-with-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/lists-default-with-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-icons/images/icon-3.webp`,
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
];
