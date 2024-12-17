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
					color: 'ui-base-white',
				},
				[
					[
						'core/heading',
						{
							level: 3,
							content: 'H3. Heading lorem ipsum',
							textColor: 'ui-base-white',
						},
					],
					[
						'core/paragraph',
						{
							content: `Name of Block: Impact, Layout: Default Content Centered. Maximum 20 words. Orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.`,
							align: 'center',
							textColor: 'ui-base-white',
						},
					],
					[
						'elevation/interior-components--buttons',
						{},
						[
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'secondary-inverse',
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
					lineType: 'dash',
					linePosition: 'top',
					space: 'spacer__extra-small',
				},
			],
			[
				'elevation/interior-components--group',
				{
					tagName: 'div',
					className: 'impact-default-content-centered__row',
				},
				[
					[
						'elevation/interior-components--impact-default-content-centered-item',
						{
							value: 45,
							after_value: '+',
						},
					],
					[
						'elevation/interior-components--impact-default-content-centered-item',
						{
							value: 50,
							after_value: '%',
						},
					],
					[
						'elevation/interior-components--impact-default-content-centered-item',
						{
							value: 870,
							after_value: '+',
						},
					],
					[
						'elevation/interior-components--impact-default-content-centered-item',
						{
							before_value: '>',
							value: 60,
						},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					line: true,
					lineType: 'dash',
					linePosition: 'bottom',
					borderColor: '#8a55b3ff',
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
	'core/paragraph',
	'elevation/interior-components--buttons',
];
