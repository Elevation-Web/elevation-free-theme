export const TEMPLATE = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'impact-default-with-icons__row',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--spacer',
				{
					line: false,
				},
			],
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
							content:
								'H2. Heading lorem ipsum nunc scelerisque viverra mauris',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 50 words per paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero donec pulvinar.`,
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
									text: 'Text Button',
								},
							],
						],
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__small',
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					tagName: 'div',
					className: '',
					allowedBlocks: [
						'elevation/interior-components--impact-default-with-icons-item',
					],
				},
				[
					[
						'elevation/interior-components--impact-default-with-icons-item',
						{
							value: "8700+",
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-default-with-icons/images/icon-1.svg`,
							},
						},
					],
					[
						'elevation/interior-components--impact-default-with-icons-item',
						{
							value: "45%",
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-default-with-icons/images/icon-2.svg`,
							},
						},
					],
					[
						'elevation/interior-components--impact-default-with-icons-item',
						{
							value: "50+",
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-default-with-icons/images/icon-3.svg`,
							},
						},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					lineType: 'solid',
					linePosition: 'top',
					borderColor: '#8a55b3ff',
				},
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];
