/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */
import json from './block.json';
import edit from './edit';
import save from './save';
import './style.scss';
import './editor.scss';

const { name, title } = json;
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(name, {
	title: title,
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});

/** Child blocks */
import {
	json as infoJson,
	name as infoName,
	settings as infoSettings,
} from './children/info/index';

registerBlockType({ infoName, ...infoJson }, infoSettings);

import {
	json as imageJson,
	name as imageName,
	settings as imageSettings,
} from './children/image/index';

registerBlockType({ imageName, ...imageJson }, imageSettings);
