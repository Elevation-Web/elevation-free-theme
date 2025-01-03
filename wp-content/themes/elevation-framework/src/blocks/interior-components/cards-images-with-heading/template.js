const TEMPLATE = [
	['elevation/interior-components--spacer'],
	[
		'elevation/interior-components--custom-container',
		{
			className: 'cards-border-images__custom-container',
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
							level: 3,
							content: 'H3. Heading lorem ipsum euismod',
						},
					],
					[
						'core/paragraph',
						{
							content: `Maximum 50 words per paragraph. Libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum.`,
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
									text: 'Read More',
								},
							],
						],
					],
					[
						'elevation/interior-components--spacer',
						{
							space: 'spacer__extra-small',
							line: true,
							lineType: 'dots',
						},
					],
				],
			],
			[
				'elevation/interior-components--group',
				{
					className:
						'cards-images-with-heading-card__container-group',
					allowedBlocks: [
						'elevation/interior-components--cards-images-with-heading-card',
					],
				},
				[
					[
						'elevation/interior-components--cards-images-with-heading-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading/images/image-1.webp`,
								alt: '',
							},
							link: {
								text: 'H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget sit',
							},
							textColor: '$ui-foreground-primary-text-headings',
						},
					],
					[
						'elevation/interior-components--cards-images-with-heading-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading/images/image-2.webp`,
								alt: '',
							},
							link: {
								text: 'H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget sit',
							},
							textColor: '$ui-foreground-primary-text-headings',
						},
					],
					[
						'elevation/interior-components--cards-images-with-heading-card',
						{
							img: {
								url: `/wp-content/themes/elevation-framework/src/blocks/interior-components/cards-images-with-heading/images/image-3.webp`,
								alt: '',
							},
							link: {
								text: 'H6. Heading lorem ipsum maecenas sed enim ut sem viverra aliquet eget sit',
							},
							textColor: '$ui-foreground-primary-text-headings',
						},
					],
				],
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
		],
	],
	['elevation/interior-components--spacer'],
];

export default TEMPLATE;
