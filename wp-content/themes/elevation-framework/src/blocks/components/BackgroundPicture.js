const BackgroundPicture = ({
	imgMobile,
	imgTablet,
	imgDesktop,
	imgAlt,
	width,
	height,
	className,
	lazyload = true,
}) => {
	if (!imgDesktop?.url) {
		return;
	}

	// Calculate object-position from focal point
	const objectPositionDesktop = `${imgDesktop.focalPoint.x * 100}% ${imgDesktop.focalPoint.y * 100}%`;

	return (
		<picture className={className}>
			{imgMobile && (
				<source media="(max-width:575px)" srcSet={imgMobile} />
			)}
			{imgTablet && (
				<source media="(max-width:1200px)" srcSet={imgTablet} />
			)}
			<img
				decoding="async"
				lazyload={lazyload ? 'lazy' : 'eager'}
				src={imgDesktop.url}
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
