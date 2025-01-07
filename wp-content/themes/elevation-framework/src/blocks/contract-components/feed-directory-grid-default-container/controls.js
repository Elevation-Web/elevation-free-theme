/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import {
	PanelBody,
	QueryControls,
	ToggleControl,
	TextControl,
} from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const {
		categorySelected,
		filterEnabled,
		postType,
		taxonomy,
		cardDirectory,
		urlDirectory,
		titleDirectory,
		textDirectory,
	} = attributes;

	const { records: categories } = useEntityRecords('taxonomy', taxonomy);

	const [categorySuggestions, setCategorySuggestions] = useState({});
	let associatedTaxonomies = [];
	const postTypes = useSelect(
		(select) => select(coreStore).getPostTypes({ per_page: -1 }),
		[]
	);
	var postTypeOptions = !Array.isArray(postTypes)
		? postTypes
		: postTypes
				.filter(
					// Filter out internal WP post types eg: wp_block, wp_navigation, wp_template, wp_template_part..
					(postType) =>
						postType.viewable == true &&
						[
							'page',
							'tribe_venue',
							'attachment',
							'tribe_organizer',
						].includes(postType.slug) == false
				)
				.map(
					// Format the options for display in the <SelectControl/>
					(postType) => ({
						label: postType.labels.singular_name,
						value: postType.slug, // the value saved as postType in attributes
					})
				);

	const taxonomies = useSelect((select) => select(coreStore).getTaxonomies());

	if (taxonomies) {
		const allTaxonomies = taxonomies.filter((taxonomy) =>
			taxonomy.types.includes(postType)
		);

		associatedTaxonomies = !Array.isArray(allTaxonomies)
			? allTaxonomies
			: allTaxonomies.map(
					// Format the options for display in the <SelectControl/>
					(tax) => ({
						label: tax.name,
						value: tax.slug, // the value saved as postType in attributes
					})
				);
	}

	useEffect(() => {
		if (categories) {
			const suggestions = {};
			categories.forEach((category) => {
				suggestions[category.name] = {
					id: category.id,
					name: category.name,
					parent: category.parent,
				};
			});
			setCategorySuggestions(suggestions);
		}
	}, [categories]);

	useEffect(() => {
		if (associatedTaxonomies.length > 0) {
			setAttributes({ taxonomy: associatedTaxonomies[0].value });
		}
		setAttributes({
			categorySelected: [],
		});
	}, [postType]);

	const addCategory = (value) => {
		setAttributes({
			categorySelected: [
				...categorySelected,
				categorySuggestions[value[value.length - 1]],
			],
		});
	};

	const removeCategory = (value) => {
		setAttributes({ categorySelected: value });
	};

	return (
		<InspectorControls>
			<PanelBody title={__('Category Filter')}>
				<SelectControl
					label="Post type"
					value={postType}
					options={postTypeOptions}
					onChange={(newValue) =>
						setAttributes({ postType: newValue })
					}
				/>

				<ToggleControl
					label="Filter by Taxonomy"
					checked={filterEnabled}
					onChange={(newValue) =>
						setAttributes({ filterEnabled: newValue })
					}
				/>
			</PanelBody>
			{filterEnabled && (
				<PanelBody title={__('Category Filter')}>
					{associatedTaxonomies.length > 0 && (
						<SelectControl
							label="Filter By"
							value={taxonomy}
							options={associatedTaxonomies}
							onChange={(newTaxonomy) =>
								setAttributes({ taxonomy: newTaxonomy })
							}
						/>
					)}
					{filterEnabled &&
						associatedTaxonomies.length > 0 &&
						taxonomy != '' &&
						categorySuggestions && (
							<QueryControls
								categorySuggestions={categorySuggestions}
								onCategoryChange={function noRefCheck(val) {
									if (categorySelected.length > val.length) {
										removeCategory(val);
									} else {
										addCategory(val);
									}
								}}
								selectedCategories={categorySelected}
							/>
						)}
				</PanelBody>
			)}

			{/* 		<PanelBody title={__('Category Filter')}>
				<RangeControl
					label="Number of Items"
					value={postsPerPage}
					onChange={(newValue) =>
						setAttributes({ postsPerPage: newValue })
					}
					min={1}
					max={21}
				/>
			</PanelBody> */}

			<PanelBody title={__('Card Directory')}>
				<ToggleControl
					label="View the button to Directory"
					checked={cardDirectory}
					onChange={(newValue) =>
						setAttributes({ cardDirectory: newValue })
					}
				/>
				{cardDirectory && (
					<>
						<TextControl
							label="Title Directory"
							value={titleDirectory}
							onChange={(value) =>
								setAttributes({ titleDirectory: value })
							}
						/>
						<TextControl
							label="Text Directory"
							value={textDirectory}
							onChange={(value) =>
								setAttributes({ textDirectory: value })
							}
						/>
						<TextControl
							label="Url Directory"
							value={urlDirectory}
							onChange={(value) =>
								setAttributes({ urlDirectory: value })
							}
						/>
					</>
				)}
			</PanelBody>
		</InspectorControls>
	);
};
