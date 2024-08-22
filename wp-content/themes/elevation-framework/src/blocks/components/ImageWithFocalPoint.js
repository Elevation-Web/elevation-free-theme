export const ImageWithFocalPoint = ({
	img,
	className,
	lazyload = true,
	selectorId,
}) => {
	if (!img?.url) {
		return;
	}

	const { url, alt, width, height, sizes, srcset, focalPoint } = img;

	// Calculate object-position from focal point
	let objectPosition = 'center';
	if (focalPoint?.x && focalPoint?.y) {
		objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
	}

	return (
		<>
			<img
				decoding="async"
				src={url}
				alt={alt}
				width={width}
				height={height}
				className={className}
				srcSet={srcset}
				sizes={sizes}
				loading={lazyload ? 'lazy' : 'eager'}
			/>
			<style>
				{`#${selectorId} .${className} {object-position: ${objectPosition};}`}
			</style>
		</>
	);
};
