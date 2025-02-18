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
					space: 'spacer__large',
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
									btnStyle: 'secondary--outline',
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
					borderColor: '#E7E1EA',
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--group',
				{
					tagName: 'div',
					className: 'impact-content-boxes-with-icons__row',
					allowedBlocks: [
						'elevation/interior-components--impact-content-boxes-with-icons-item',
					],
				},
				[
					[
						'elevation/interior-components--impact-content-boxes-with-icons-item',
						{
							value: '+8700',
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-1.svg`,
							},
							backgroundColor: 'ui-background-light-01',
						},
					],
					[
						'elevation/interior-components--impact-content-boxes-with-icons-item',
						{
							value: '45%',
							icon: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-content-boxes-with-icons/images/icon-2.svg`,
							},
							backgroundColor: 'ui-background-light-01',
						},
					],
					[
						'elevation/interior-components--impact-content-boxes-with-icons-item',
						{
							value: '50+',
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
					borderColor: '#E7E1EA',
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					line: false,
					space: 'spacer__large',
				},
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'elevation/interior-components--buttons',
];
