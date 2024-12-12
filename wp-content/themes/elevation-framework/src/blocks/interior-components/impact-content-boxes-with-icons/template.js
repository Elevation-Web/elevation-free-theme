export const TEMPLATE = [
	[
		'elevation/interior-components--custom-container',
		{
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
					type: 'type-row',
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
				'elevation/interior-components--spacer',
				{
					line: false,
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					lineType: 'solid',
					linePosition: 'top',
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--group',
				{
					tagName: 'div',
					className: 'impact-content-boxes-with-icons__row',
				},
				[
					[
						'elevation/interior-components--impact-content-boxes-with-icons-item',
						{
							value: 8700,
							after_value: '+',
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-1.svg`,
							},
							backgroundColor: 'ui-background-light-01',
						},
					],
					[
						'elevation/interior-components--impact-content-boxes-with-icons-item',
						{
							value: 45,
							after_value: '%',
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-2.svg`,
							},
							backgroundColor: 'ui-background-light-01',
						},
					],
					[
						'elevation/interior-components--impact-content-boxes-with-icons-item',
						{
							value: 50,
							after_value: '+',
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-3.svg`,
							},
							backgroundColor: 'ui-background-light-01',
						},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					lineType: 'solid',
					linePosition: 'bottom',
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
