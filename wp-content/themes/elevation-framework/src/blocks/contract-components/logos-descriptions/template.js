export const TEMPLATE = [
	[
		'elevation/interior-components--custom-container',
		{
			className: 'logos-descriptions__container',
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
				'core/heading',
				{
					level: 2,
					fontSize: 'h3',
					content: 'H2. Heading lorem',
				},
			],
			[
				'core/paragraph',
				{
					content: `Name of Block: Logos, Layout: Descriptions. Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus.`,
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
					lineType: 'dash',
					linePosition: 'bottom',
				},
			],
			[
				'elevation/interior-components--group',
				{
					className: 'logos-descriptions__items',
					allowedBlocks: [
						'elevation/contract-components--logos-descriptions-item',
					],
				},
				[
					[
						'elevation/contract-components--logos-descriptions-item',
						{},
					],
					[
						'elevation/contract-components--logos-descriptions-item',
						{},
					],
					[
						'elevation/contract-components--logos-descriptions-item',
						{},
					],
					[
						'elevation/contract-components--logos-descriptions-item',
						{},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					line: false,
				},
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
	'elevation/interior-components--spacer',
];
