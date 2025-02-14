export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];

export const template = [
	[
		'core/heading',
		{
			content: 'H4. Subheading lorem ipsum',
			level: 3,
			fontSize: 'h4',
		},
	],
	[
		'core/paragraph',
		{
			content:
				'<a href="#">Name of Block: Text-Block, Layout: List w/Button.</a> Maximum 50 words per paragraph. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.',
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
];
