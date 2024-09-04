export const TEMPLATE = [
	['elevation/spacer'],
	[
		'elevation/custom-container',
		{
			className: 'lists-default-with-intro-text-icons__custom-container',
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
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 30 words per paragraph. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam.`,
						},
					],
					[
						'core/paragraph',
						{
							content: `Felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus:`,
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
									text: 'Text Button',
								},
							],
						],
					],
				],
			],
			[
				'elevation/group',
				{
					className:
						'lists-default-with-intro-text-icons-item__container-group',
				},
				[
					[
						'elevation/lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-3.webp`,
							},
						},
					],
					[
						'elevation/lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/lists-default-with-intro-text-icons/images/icon-4.webp`,
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
