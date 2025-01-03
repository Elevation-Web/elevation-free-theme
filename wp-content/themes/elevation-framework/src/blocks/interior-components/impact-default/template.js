export const TEMPLATE = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'impact-default__row',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					lineType: 'dash',
					linePosition: 'bottom',
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
							level: 3,
							content: 'H3. Heading lorem',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 50 words per paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero donec pulvinar vulputate.`,
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
						'elevation/interior-components--impact-default-item',
					],
				},
				[
					[
						'elevation/interior-components--impact-default-item',
						{
							value: 8700,
							after_value: '+',
						},
					],
					[
						'elevation/interior-components--impact-default-item',
						{
							value: 45,
							after_value: '%',
						},
					],
					[
						'elevation/interior-components--impact-default-item',
						{
							value: 50,
							after_value: '+',
						},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					lineType: 'dash',
					linePosition: 'top',
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
