export const template = [
	[
		'elevation/interior-components--custom-container',
		{
			className:
				'callout-background-content-center-icon__custom-container',
			containerWidth: 'medium',
			backgroundColor: 'ui-foreground-primary-text-headings-span',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: '',
				},
				[
					[
						'elevation/interior-components--image-with-srcset',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/callout-background-content-center-icon/images/callout-icon.webp`,
							},
							layout: { type: 'flex', justifyContent: 'center' },
							align: 'center',
						},
					],
					[
						'core/heading',
						{
							level: 2,
							content: 'H2. Heading lorem',
							textColor: 'ui-base-white',
							textAlign: 'center',
							align: 'center',
						},
					],
					[
						'core/paragraph',
						{
							fontSize: 'body',
							textColor: 'ui-base-white',
							content: `Maximum 30 words. Nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementu..`,
							textAlign: 'center',
							align: 'center',
						},
					],
					[
						'elevation/interior-components--buttons',
						{ layout: { type: 'flex', justifyContent: 'center' } },
						[
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'primary--color-03',
									text: 'Text Button',
								},
							],
							[
								'elevation/interior-components--button',
								{
									btnStyle: 'secondary--outline',
									text: 'Text Button',
								},
							],
						],
					],
				],
			],
		],
	],
];

export const allowedBlocks = [
	'core/heading',
	'core/paragraph',
	'elevation/interior-components--buttons',
];
