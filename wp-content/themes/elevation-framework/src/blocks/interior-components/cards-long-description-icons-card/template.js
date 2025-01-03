export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'core/heading',
		{
			level: 6,
			content: 'Strong Text. Subheading lorem ipsum',
			textColor: 'ui-foreground-primary-text-headings',
		},
	],
	[
		'core/paragraph',
		{
			fontSize: 'body',
			content:
				'Maximum 20 words. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus',
		},
	],
	[
		'elevation/interior-components--buttons',
		{},
		[
			[
				'elevation/interior-components--button',
				{
					btnStyle: 'tertiary--color-01',
				},
			],
		],
	],
];
