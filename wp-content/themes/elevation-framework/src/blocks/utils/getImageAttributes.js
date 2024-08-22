export function getImageAttributes(imageObject, size = 'full') {
	if (!imageObject || !imageObject.sizes || !imageObject.sizes.full) {
		return null;
	}

	// Find the maximum width from the sizes object
	const maxWidth = Math.max(
		...Object.values(imageObject.sizes).map((size) => size.width)
	);
	const sizes = `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`;

	const srcset = Object.keys(imageObject.sizes)
		.map((size) => {
			const img = imageObject.sizes[size];
			return `${img.url} ${img.width}w`;
		})
		.join(', ');

	console.log('size', imageObject.sizes[size]);

	const fullSize = imageObject.sizes[size];

	return {
		fullSize,
		srcset,
		sizes,
		alt: imageObject.alt,
		id: imageObject.id,
	};
}
