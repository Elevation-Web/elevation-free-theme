export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'timeline-vertical__custom-container',
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
							level: 2,
							fontSize: 'h3',
							content: 'H2. Heading lorem ipsum euismod',
						},
					],
					[
						'core/paragraph',
						{
							content: `Name of Block: Timeline, Layout: Vertical. Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus.`,
						},
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
							space: 'spacer__small',
						},
					],
				],
			],
			['elevation/contract-components--timeline-vertical-sections', {}],
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
	'elevation/contract-components--timeline-vertical-year',
];
