export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className:
				'lists-intro-text-with-content-boxes-icons__custom-container',
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
							content: `Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida.`,
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
									text: 'Text Button',
								},
							],
						],
					],
					[
						'elevation/interior-components--spacer',
						{
							line: true,
							space: 'spacer__extra-small',
							linePosition: 'bottom',
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className:
						'lists-intro-text-with-content-boxes-icons__container-group',
					tagName: 'ul',
					allowedBlocks: [
						'elevation/interior-components--lists-intro-text-with-content-boxes-icons-item',
					],
				},
				[
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-1.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-2.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-3.webp`,
							},
						},
					],
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-icons-item',
						{
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/lists-intro-text-with-content-boxes-icons/images/icon-4.webp`,
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
