export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'lists-default-with-icons__custom-container',
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
							level: 4,
							content: 'H4. Heading lorem ipsum felis eget',
							// textColor: '$ui-foreground-primary-text-headings',
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className: 'lists-default-with-icons__container-group',
					tagName: 'ul',
					allowedBlocks: [
						'elevation/interior-components--lists-default-with-icons-item',
					],
				},
				[
					[
						'elevation/interior-components--lists-default-with-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-default-with-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-default-with-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-icons/images/icon-3.webp`,
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
];
