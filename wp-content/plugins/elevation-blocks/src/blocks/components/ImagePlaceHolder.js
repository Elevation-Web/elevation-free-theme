export const ImagePlaceHolder = (
	name = '',
	text = 'No image selected, use sidebar to select image'
) => {
	return (
		<div className={`${name}-image__placeholder`}>
			<p>{text}</p>
		</div>
	);
};
