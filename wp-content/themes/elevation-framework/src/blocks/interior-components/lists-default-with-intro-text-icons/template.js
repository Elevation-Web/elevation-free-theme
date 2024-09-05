export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'lists-default-with-intro-text-icons__custom-container',
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
						'elevation/interior-components--buttons',
						{},
						[
							[
								'elevation/interior-components--button',
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
				'elevation/interior-components--group',
				{
					className:
						'lists-default-with-intro-text-icons-item__container-group',
					tagName: 'ul',
				},
				[
					[
						'elevation/interior-components--lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-intro-text-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-intro-text-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-intro-text-icons/images/icon-3.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-default-with-intro-text-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-default-with-intro-text-icons/images/icon-4.webp`,
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
