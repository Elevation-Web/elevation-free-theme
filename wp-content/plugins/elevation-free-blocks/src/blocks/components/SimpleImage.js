export const SimpleImage = ({
	imgUrl,
	imgAlt,
	width,
	height,
	className,
	lazyload = true,
}) => {
	if (!imgUrl) {
		return;
	}

	return (
		<img
			src={imgUrl}
			alt={imgAlt}
			width={width}
			height={height}
			className={className}
			decoding="async"
			loading={lazyload ? 'lazy' : 'eager'}
		/>
	);
};
