export const exclude = [
	// blocks.contractComponents.accordion,
	// blocks.contractComponents.feedDefaultBlog,
	// blocks.contractComponents.feedDefaultBlog,
	// blocks.contractComponents.feedDefaultBlogWithContentBoxes,
	// blocks.contractComponents.feedDefaultEvents,
	// blocks.contractComponents.feedDirectoryGridDefault,
	// blocks.contractComponents.feedEventsHorizontal,
	// blocks.contractComponents.logosCarousel,
	// blocks.contractComponents.logosDescriptions,
	// blocks.contractComponents.teamBiosCarousel,
	// blocks.contractComponents.testimonialCarousel,
	// blocks.contractComponents.testimonialSingle,
	// blocks.contractComponents.timelineHorizontal,
	// blocks.contractComponents.timelineVertical,
	// blocks.interiorComponents.numberedAccordion,
	// blocks.interiorComponents.banners,
	// blocks.interiorComponents.callouts.calloutBackgroundContentBoxCentered,
	// blocks.interiorComponents.callouts.calloutBackgroundContentBoxLeft,
	// blocks.interiorComponents.callouts.calloutBackgroundContentCenter,
	// blocks.interiorComponents.callouts.calloutBackgroundContentCenterIcon,
	// blocks.interiorComponents.callouts.calloutImageRight,
	// blocks.interiorComponents.cards.backgroundImages,
	// blocks.interiorComponents.cards.default,
	// blocks.interiorComponents.cards.defaultIcons,
	// blocks.interiorComponents.cards.imagesWithHeading,
	// blocks.interiorComponents.cards.longDescription,
	// blocks.interiorComponents.imageCarousel,
	// blocks.interiorComponents.imageGallery,
	// blocks.interiorComponents.impactContentBoxesWithIcons,
	// blocks.interiorComponents.impactDefault,
	// blocks.interiorComponents.lists.bullets,
	// blocks.interiorComponents.lists.withIcons,
	// blocks.interiorComponents.lists.headingSubheadingIn2Columns,
	// blocks.interiorComponents.lists.introTextWithContentBoxes,
	// blocks.interiorComponents.lists.links,
	// blocks.interiorComponents.accordionNumbered,
	// blocks.interiorComponents.separators,
	// blocks.interiorComponents.video.carousel,
	// blocks.interiorComponents.video.fullWidth,
	// blocks.interiorComponents.video.default,
];

export const blocks = {
	contractComponents: {
		accordion: [
			'contract-components/accordion',
			'contract-components/accordion-item',
		],
		feedDefaultBlog: [
			'contract-components/feed-default-blog',
			'contract-components/feed-default-blog-container',
		],
		feedDefaultBlogWithContentBoxes: [
			'contract-components/feed-default-blog-with-content-boxes',
			'contract-components/feed-default-blog-with-content-boxes-container',
		],
		feedDefaultEvents: [
			'contract-components/feed-default-events',
			'contract-components/feed-default-events-container',
		],
		feedDirectoryGridDefault: [
			'contract-components/feed-directory-grid-default',
			'contract-components/feed-directory-grid-default-container',
		],
		feedEventsHorizontal: [
			'contract-components/feed-events-horizontal',
			'contract-components/feed-events-horizontal-container',
		],
		logosCarousel: [
			'contract-components/logos-carousel',
			'contract-components/logos-carousel-item',
		],
		logosDescriptions: [
			'contract-components/logos-descriptions',
			'contract-components/logos-descriptions-item',
		],
		teamBiosCarousel: [
			'contract-components/team-bios-carousel',
			'contract-components/team-bios-carousel-container',
		],
		teamBiosDefault: [
			'contract-components/team-bios-default',
			'contract-components/team-bios-default-container',
		],
		teamBiosGallery: [
			'contract-components/team-bios-gallery',
			'contract-components/team-bios-gallery-container',
		],
		testimonialCarousel: [
			'contract-components/testimonial-carousel',
			'contract-components/testimonial-carousel-item',
		],
		testimonialSingle: [
			'contract-components/testimonial-single',
			'contract-components/testimonial-single-item',
		],
		timelineHorizontal: [
			'contract-components/timeline-horizontal',
			'contract-components/timeline-horizontal-item',
		],
		timelineVertical: [
			'contract-components/timeline-vertical',
			'contract-components/timeline-vertical-item',
			'contract-components/timeline-vertical-sections',
			'contract-components/timeline-vertical-year',
		],
	},
	interiorComponents: {
		banners: [
			'interior-components/banner-full-img',
			'interior-components/banner-standard',
		],
		callouts: {
			calloutBackgroundContentBoxCentered: [
				'interior-components/callout-background-content-box-centered',
			],
			calloutBackgroundContentBoxLeft: [
				'interior-components/callout-background-content-box-left',
			],
			calloutBackgroundContentCenter: [
				'interior-components/callout-background-content-center',
			],
			calloutBackgroundContentCenterIcon: [
				'interior-components/callout-background-content-center-icon',
			],
			calloutImageRight: ['interior-components/callout-image-right'],
		},
		cards: {
			backgroundImages: [
				'interior-components/cards-background-images',
				'interior-components/cards-background-images-card',
			],
			default: [
				'interior-components/cards-default',
				'interior-components/cards-default-card',
			],
			defaultIcons: [
				'interior-components/cards-default-icons',
				'interior-components/cards-default-icons-card',
			],
			imagesWithHeading: [
				'interior-components/cards-images-with-heading',
				'interior-components/cards-images-with-heading-card',
				'interior-components/cards-images-with-heading-description',
				'interior-components/cards-images-with-heading-description-card',
			],
			longDescription: [
				'interior-components/cards-long-description-icons',
				'interior-components/cards-long-description-icons-card',
			],
		},
		imageCarousel: [
			'interior-components/image-carousel',
			'interior-components/image-carousel-fixed-with-hover',
			'interior-components/image-carousel-horizontal-centered',
			'interior-components/image-carousel-horizontal-left-aligned',
		],
		imageGallery: [
			'interior-components/image-gallery',
			'interior-components/image-gallery-default',
		],
		impactContentBoxesWithIcons: [
			'interior-components/impact-content-boxes-with-icons',
			'interior-components/impact-content-boxes-with-icons-item',
		],
		impactDefault: [
			'interior-components/impact-default',
			'interior-components/impact-default-item',
			'interior-components/impact-default-content-centered',
			'interior-components/impact-default-content-centered-item',
			'interior-components/impact-default-with-icons',
			'interior-components/impact-default-with-icons-item',
			'interior-components/impact-vertical-image',
			'interior-components/impact-vertical-image-item',
		],
		lists: {
			bullets: [
				'interior-components/lists-bullets',
				'interior-components/lists-bullets-item',
			],
			withIcons: [
				'interior-components/lists-default-with-icons',
				'interior-components/lists-default-with-icons-item',
				'interior-components/lists-default-with-intro-text-icons',
				'interior-components/lists-default-with-intro-text-icons-item',
			],
			headingSubheadingIn2Columns: [
				'interior-components/lists-heading-subheading-in-2-columns',
				'interior-components/lists-heading-subheading-in-2-columns-item',
			],
			introTextWithContentBoxes: [
				'interior-components/lists-intro-text-with-content-boxes',
				'interior-components/lists-intro-text-with-content-boxes-box',
				'interior-components/lists-intro-text-with-content-boxes-icons',
				'interior-components/lists-intro-text-with-content-boxes-icons-item',
			],
			links: [
				'interior-components/lists-links',
				'interior-components/lists-links-item',
			],
		},
		accordionNumbered: [
			'interior-components/numbered-accordion',
			'interior-components/numbered-accordion-item',
		],
		separators: [
			'interior-components/separator-image-full-width',
			'interior-components/separator-three-images',
		],
		video: {
			carousel: [
				'interior-components/video-carousel',
				'interior-components/video-carousel-item',
			],
			fullWidth: [
				'interior-components/video-carousel-full-width',
				'interior-components/video-carousel-full-width-item',
			],
			default: [
				'interior-components/video-default',
				'interior-components/video-default-item',
			],
		},
	},
};
