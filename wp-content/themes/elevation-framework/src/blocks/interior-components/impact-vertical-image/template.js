export const TEMPLATE = [
	[
		'elevation/interior-components--custom-container',
		{
			containerWidth: 'large',
		},
		[
			[
				'elevation/interior-components--group',
				{
					className: '',
					color: 'ui-base-white',
					className: 'impact-vertical-image__container',
					backgroundColor: 'ui-background-light-01',
				},
				[
					[
						'elevation/interior-components--image-with-srcset',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/impact-vertical-image/images/image.webp`,
							},
						},
					],
					[
						'elevation/interior-components--group',
						{
							className: '',
							color: 'ui-base-white',
							className: 'impact-vertical-image__content-wrapper',
						},
						[
							[
								'core/heading',
								{
									level: 3,
									content: 'H3. Heading lorem ipsum',
								},
							],
							[
								'core/paragraph',
								{
									content: `Maximum 20 words. Orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci.`,
									align: 'center',
								},
							],
							[
								'elevation/interior-components--group',
								{
									className: '',
									color: 'ui-base-white',
								},
								[
									[
										'elevation/interior-components--spacer',
										{
											space: 'spacer__extra-small',
										},
									],
									[
										'elevation/interior-components--group',
										{
											tagName: 'div',
											className:
												'impact-vertical-image__row',
										},
										[
											[
												'elevation/interior-components--impact-vertical-image-item',
												{
													value: '50+',
												},
											],
											[
												'elevation/interior-components--impact-vertical-image-item',
												{
													value: '45%',
												},
											],
											[
												'elevation/interior-components--impact-vertical-image-item',
												{
													value: '8700+',
												},
											],
											[
												'elevation/interior-components--impact-vertical-image-item',
												{
													value: '>60',
												},
											],
										],
									],
									[
										'elevation/interior-components--spacer',
										{
											line: true,
											space: 'spacer__extra-small',
											linePosition: 'bottom',
										},
									],
									[
										'elevation/interior-components--spacer',
										{
											space: 'spacer__extra-small',
										},
									],
									[
										'elevation/interior-components--buttons',
										{
											layout: {
												type: 'flex',
												justifyContent: 'center',
											},
										},
										[
											[
												'elevation/interior-components--button',
												{
													btnStyle:
														'secondary--outline',
													text: 'Text Button',
												},
											],
										],
									],
								],
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
