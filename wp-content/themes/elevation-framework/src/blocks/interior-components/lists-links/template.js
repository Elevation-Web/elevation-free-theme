export const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: '',
			containerWidth: 'medium',
		},
		[
			[
				'elevation/interior-components--group',
				{
					tagName: 'ul',
					allowedBlocks: [
						'elevation/interior-components--lists-links-item',
					],
				},
				[
					[
						'elevation/interior-components--lists-links-item',
						{},
						[
							[
								'elevation/interior-components--spacer',
								{
									space: 'spacer__extra-small',
									line: true,
									linePosition: 'top',
									lineType: 'dash',
								},
							],
							[
								'core/heading',
								{
									level: 6,
									content: 'H6. Heading lorem ipsum dolor',
								},
							],
							[
								'elevation/interior-components--buttons',
								{},
								[
									[
										'elevation/interior-components--button',
										{
											btnStyle: 'tertiary',
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
									linePosition: 'bottom',
									lineType: 'dash',
								},
							],
						],
					],
					['elevation/interior-components--lists-links-item', {}],
					['elevation/interior-components--lists-links-item', {}],
					['elevation/interior-components--lists-links-item', {}],
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
