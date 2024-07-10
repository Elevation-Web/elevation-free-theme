import { registerBlockType } from '@wordpress/blocks';
import { resizeCornerNE } from '@wordpress/icons';

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
	icon: resizeCornerNE,
	/**
	 * @see ./edit.js
	 */
	edit,

	/**
	 * @see ./save.js
	 */
	save,
});
