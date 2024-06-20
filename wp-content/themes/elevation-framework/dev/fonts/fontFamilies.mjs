function createFontFamily(name, fontFaces) {
	const slug = name.toLowerCase();
	const fontFamily = `"${name}", Arial, sans-serif`;

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
	const heading = createFontFamily('Martel', [
		{
			fontWeight: 'normal',
			src: ['file:./src/assets/fonts/Martel-Regular.woff2'],
		},
		{
			fontWeight: '800',
			src: ['file:./src/assets/fonts/Martel-ExtraBold.woff2'],
		},
	]);

	const body = createFontFamily('Inter', [
		{
			fontWeight: '500',
			src: ['file:./src/assets/fonts/Inter-Medium.woff2'],
		},
		{
			fontWeight: '700',
			src: ['file:./src/assets/fonts/Inter-Bold.woff2'],
		},
	]);

	return [heading, body];
};

export const fontStyles = () => {
	return {
		typography: {
			fontFamily: '"Inter", sans-serif',
		},
	};
};

export const headingFontStyles = () => {
	return {
		'core/heading': {
			styles: {
				typography: {
					fontFamily: '"Martel", serif',
				},
			},
		},
	};
};
