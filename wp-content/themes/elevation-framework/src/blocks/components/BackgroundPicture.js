const BackgroundPicture = ({
	imgMobile,
	imgTablet,
	imgDesktop,
	imgAlt,
	width,
	height,
	className,
	lazyload,
	focalPointDesktop,
}) => {
	if (!imgDesktop) {
		return;
	}

	// Calculate object-position from focal point
	const objectPositionDesktop = `${focalPointDesktop.x * 100}% ${focalPointDesktop.y * 100}%`;

	return (
		<picture className={className}>
			{imgMobile && (
				<source media="(max-width:575px)" srcset={imgMobile} />
			)}
			{imgTablet && (
				<source media="(max-width:1200px)" srcset={imgTablet} />
			)}
			<img
				decoding="async"
				lazyload={lazyload ? 'lazy' : 'eager'}
				src={imgDesktop}
				alt={imgAlt}
				width={width}
				height={height}
				className={className}
				style={{ objectPosition: objectPositionDesktop }}
			/>
		</picture>
	);
};

export default BackgroundPicture;
