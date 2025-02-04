export const TEMPLATE = [
	[
		'elevation/interior-components--spacer',
		{
			space: 'spacer__large',
		},
	],
	[
		'elevation/interior-components--custom-container',
		{
			className: '',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{},
				[
					[
						'core/heading',
						{
							level: 3,
							content: 'H3. Heading lorem ipsum euismod',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Name of Block: Team Bios, Layout: Tabs. Maximum 30 words. Dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus.',
						},
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
							line: true,
							linePosition: 'bottom',
							lineType: 'dash',
						},
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
							linePosition: 'top',
						},
					],
				],
			],
			['elevation/contract-components--team-bios-tabs-container', {}],
		],
	],
	[
		'elevation/interior-components--spacer',
		{
			space: 'spacer__large',
		},
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--custom-container',
	'elevation/interior-components--buttons',
	'elevation/contract-components--team-bios-tabs-container',
	'elevation/interior-components--group',
	'elevation/interior-components--spacer',
];
