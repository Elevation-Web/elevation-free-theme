export const TEMPLATE = [
	[
		'elevation/interior-components--spacer',
		{
			line: false,
			space: 'spacer__large',
		},
	],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'accordion__custom-container',
			containerWidth: 'small',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: 'accordion__content',
				},
				[
					[
						'core/heading',
						{
							level: 2,
							content: 'H2. Heading lorem ipsum',
						},
					],
					[
						'core/paragraph',
						{
							content:
								'Maximum 50 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in aliquam lorem, in blandit mi. Duis non neque et neque vulputate aliquet vitae nec libero. Donec pulvinar vulputate tempor. Praesent orci velit, viverra non pulvinar in, pretium sit amet felis. Donec cursus tortor dolor. Vestibulum viverra gravida felis, in varius.',
						},
					],
				],
			],
			[
				'elevation/interior-components--spacer',
				{
					space: 'spacer__extra-small',
					line: true,
					lineType: 'solid',
					linePosition: 'bottom',
					borderColor: '#E7E1EA',
				},
			],
			[
				'elevation/interior-components--spacer',
				{
					line: false,
					space: 'spacer__extra-small',
				},
			],
			['elevation/interior-components--accordion-item', {}],
			['elevation/interior-components--accordion-item', {}],
			['elevation/interior-components--accordion-item', {}],
		],
	],
	[
		'elevation/interior-components--spacer',
		{
			line: false,
			space: 'spacer__large',
		},
	],
];

export const allowedBlocks = ['elevation/interior-components--accordion-item'];
