export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'lists-intro-text-with-content-boxes__custom-container',
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
							level: 3,
							content: 'H3. Heading lorem',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum.`,
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
						'lists-intro-text-with-content-boxes__container-group',
					tagName: 'ul',
				},
				[
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-box',
						{
							backgroundColor: 'ui-background-light-01',
							lineColor: 'ui-foreground-primary-accent-01',
						},
					],
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-box',
						{
							backgroundColor: 'ui-background-light-01',
							lineColor: 'ui-foreground-primary-accent-02',
						},
					],
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-box',
						{
							backgroundColor: 'ui-background-light-01',
							lineColor: 'ui-foreground-primary-accent-05',
						},
					],
					[
						'elevation/interior-components--lists-intro-text-with-content-boxes-box',
						{
							backgroundColor: 'ui-background-light-01',
							lineColor: 'ui-foreground-primary-accent-04',
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
