function getFutureDates() {
	const options = { month: 'short', day: 'numeric', year: 'numeric' };
	const today = new Date();

	// Calculate two future dates
	const futureDate1 = new Date(today);
	futureDate1.setDate(today.getDate() + 7); // 1 week from today

	const futureDate2 = new Date(today);
	futureDate2.setDate(today.getDate() + 14); // 2 weeks from today

	// Format dates as "Mar 12. 2024"
	const formatDate = (date) => {
		const [month, day, year] = date
			.toLocaleDateString('en-US', options)
			.replace(',', '')
			.split(' ');
		return `${month} ${day}. ${year}`;
	};

	return [formatDate(futureDate1), formatDate(futureDate2)];
}

const index = 1;

const dates = getFutureDates();

export const TEMPLATE = [
	[
		'elevation/interior-components--group',
		{
			className: 'timeline-vertical-item__image',
			allowedBlocks: ['elevation/interior-components--image-with-srcset'],
		},
		[
			[
				'elevation/interior-components--image-with-srcset',
				{
					img: {
						url: `/wp-content/themes/elevation-framework/src/blocks/contract-components/timeline-vertical-item/images/default${index}.webp`,
					},
				},
			],
		],
	],
	[
		'elevation/interior-components--group',
		{
			className: 'timeline-vertical-item__content',
			allowedBlocks: ['core/quote', 'core/paragraph'],
		},
		[
			[
				'core/paragraph',
				{
					fontSize: 'h5',
					textColor: 'ui-foreground-primary-text-date-text',
					content: `<strong>${dates[index - 1]}</strong>`,
				},
			],
			[
				'core/heading',
				{
					level: 4,
					fontSize: 'h4',
					textColor: 'ui-foreground-primary-text-links',
					content: 'H4. Subheading lorem ipsum',
				},
			],
			[
				'core/paragraph',
				{
					content: `Maximum 60 words. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.`,
				},
			],
		],
	],
];

export const allowedBlocks = [];
