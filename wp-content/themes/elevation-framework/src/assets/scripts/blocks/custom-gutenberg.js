const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
const { Fragment } = wp.element;
const { select } = wp.data;

// Higher-order component to conditionally remove controls
const withConditionalImageControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { name, clientId } = props;

		// Only apply to core/image blocks
		if (name === 'core/image') {
			// Get the parent block
			const parentBlockId =
				select('core/block-editor').getBlockParents(clientId)[0];
			const parentBlock =
				select('core/block-editor').getBlocksByClientId(
					parentBlockId
				)[0];

			// Check if the parent block is elevation/banner-standard
			if (
				parentBlock &&
				parentBlock?.name === 'elevation/banner-standard'
			) {
				// Modify the block settings conditionally
				const settings = wp.blocks.getBlockType(name);

				// Disable specific controls
				if (settings.supports) {
					settings.supports.anchor = false;
					settings.supports.align = false;
					settings.supports.alignwide = false;
					settings.supports.arialabel = false;
					settings.supports.background = false;
					settings.supports.classname = false;
					settings.supports.color = false;
					settings.supports.customclassname = false;
					settings.supports.dimensions = false;
					settings.supports.filter = false;
					settings.supports.html = false;
					settings.supports.inserter = false;
					settings.supports.interactivity = false;
					settings.supports.layout = false;
					settings.supports.lock = false;
					settings.supports.position = false;
					settings.supports.renaming = false;
					settings.supports.reusable = false;
					settings.supports.shadow = false;
					settings.supports.spacing = false;
					settings.supports.typography = false;
					settings.supports.splitting = false;
				}

				// Return the block without inspector controls
				return (
					<Fragment>
						<BlockEdit {...props} />
						{/* Remove specific controls by not rendering InspectorControls */}
						<InspectorControls>
							<PanelBody>My custom control</PanelBody>
						</InspectorControls>
					</Fragment>
				);
			}
		}

		// Return the block with its original controls
		return <BlockEdit {...props} />;
	};
}, 'withConditionalImageControls');

// Add the filter to remove inspector controls
addFilter(
	'editor.BlockEdit',
	'custom/with-conditional-image-controls',
	withConditionalImageControls
);
