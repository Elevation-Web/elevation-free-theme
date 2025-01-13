const d = new Date();
const year = d.getFullYear();

export const TEMPLATE = [
	[
		'elevation/interior-components--group',
		{
			className: 'timeline-vertical-year__section-title',
			allowedBlocks: ['core/heading'],
		},
		[
			[
				'core/heading',
				{
					level: 3,
					fontSize: 'h6',
					content: `${year}`,
					backgroundColor: 'ui-foreground-primary-text-headings-span',
					textColor: 'ui-base-white',
				},
			],
		],
	],
	[
		'elevation/interior-components--group',
		{
			className: 'timeline-vertical-year__section-items',
			allowedBlocks: [
				'elevation/contract-components--timeline-vertical-item',
				'core/heading',
			],
		},
		[
			['elevation/contract-components--timeline-vertical-item', {}],
			['elevation/contract-components--timeline-vertical-item', {}],
		],
	],
];

export const allowedBlocks = [
	'elevation/contract-components--timeline-vertical-item',
];
