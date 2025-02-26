function createFontFamily(name, fontFaces, isSerif = false) {
	const slug = name.toLowerCase();
	const serif = isSerif ? 'serif' : 'sans-serif';
	const fontFamily = `"${name}", ${serif}`;

	const formattedFontFaces = fontFaces.map((face) => ({
		fontFamily: name,
		fontWeight: face.fontWeight,
		fontStyle: face.fontStyle || 'normal',
		fontStretch: face.fontStretch || 'normal',
		fontDisplay: face.fontDisplay || 'swap',
		src: face.src,
	}));

	return {
		fontFamily,
		name,
		slug,
		fontFace: formattedFontFaces,
	};
}

export const fontFamilies = () => {
	// Usage:
	const heading = createFontFamily(
		'Heading Font',
		[
			{
				fontWeight: '700',
				src: ['file:./assets/fonts/Inter-Bold.woff2'],
			},
			{
				fontWeight: '500',
				src: ['file:./assets/fonts/Inter-Medium.woff2'],
			},
		],
		true
	);

	const body = createFontFamily(
		'Body Font',
		[
			{
				fontWeight: '400',
				src: ['file:./assets/fonts/Inter-Regular.woff2'],
			},
			{
				fontWeight: '700',
				src: ['file:./assets/fonts/Inter-Bold.woff2'],
			},
		],
		false
	);

	return [heading, body];
};
