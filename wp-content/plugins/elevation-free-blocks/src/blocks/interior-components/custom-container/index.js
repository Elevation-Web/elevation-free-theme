import { SVG, Path } from '@wordpress/components';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';

const { name, title } = json;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(name, {
	title: title,
	icon: {
		src: (
			<SVG
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				viewBox="-5.0 -10.0 110.0 135.0"
			>
				<Path
					d="m92.379 7.6211h-84.758v84.758h84.758zm-5.9648 72.488v6.3047h-6.3047zm-10.012 6.3047h-7.0703l17.082-17.086v7.0703zm-10.777 0h-7.0703l27.859-27.859v7.0703zm-10.777 0h-7.0703l38.641-38.641v7.0703zm-10.777 0h-7.0703l49.418-49.418v7.0703zm-10.781 0h-7.0703l60.195-60.195v7.0703zm-10.777 0h-7.0703l70.973-70.973v7.0703zm-8.9258-1.8555v-70.973h70.973zm-1.3086-73.594h76.758v78.07h-78.07v-78.07zm-5.9648-5.9648h88.688v90h-90v-90z"
					fillRule="evenodd"
				/>
			</SVG>
		),
	},
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});
