export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'testimonial-single__custom-container',
			containerWidth: 'small',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: '',
					backgroundColor: 'ui-background-light-01',
				},
				[
					[
						'core/heading',
						{
							level: 2,
							fontSize: 'h3',
							content: 'H2. Heading lorem ipsum',
							textAlign: 'center',
						},
					],
					[
						'core/paragraph',
						{
							content: `Name of Block: Testimonial, Layout: Single. Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus.`,
							align: 'center',
						},
					],
					[
						'elevation/interior-components--buttons',
						{
							layout: { type: 'flex', justifyContent: 'center' },
						},
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
							space: 'spacer__extra-small',
							line: true,
							lineType: 'dots',
							linePosition: 'bottom',
						},
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
						},
					],
				],
			],
			['elevation/contract-components--testimonial-single-item', {}],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
				},
			],
		],
	],
	['elevation/interior-components--spacer'],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--spacer',
	'elevation/contract-components--testimonial-single-item',
];
