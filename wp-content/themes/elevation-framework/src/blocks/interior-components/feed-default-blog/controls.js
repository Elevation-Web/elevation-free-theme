/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import {
    PanelBody,
    QueryControls,
    ToggleControl,
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useEntityRecords } from '@wordpress/core-data';


export const Controls = (props) => {
    const { attributes, setAttributes } = props;
    const { hasCategoryPrefilter, categorySelected, headingLevel } = attributes;
    const { records: categories } = useEntityRecords('taxonomy', 'category');
    const [categoryId, setCategoryId] = useState();

    console.log('categories', categories);

    useEffect(() => {
        const selectedCategoryId = !!categories
            ? categories.filter((taxonomie) => {
                return taxonomie.slug == categorySelected;
            })[0]
            : false;

        if (selectedCategoryId?.id) {
            setCategoryId(selectedCategoryId.id);
        }
    }, [categories]);

    console.log('categories', categories);

    return (
        <InspectorControls>
            <PanelBody title={__('Category Filter')}>

                <ToggleControl
                    label="Has prefilter category?"
                    help={
                        hasCategoryPrefilter ? 'Has a category prefilter' : 'General Blog'
                    }
                    checked={hasCategoryPrefilter}
                    onChange={(newValue) => {
                        setAttributes({ hasCategoryPrefilter: newValue });
                    }}
                />
                {hasCategoryPrefilter && categories && (
                    <QueryControls
                        categoriesList={categories}
                        numberOfItems={5}
                        onCategoryChange={function noRefCheck(val) {
                            const cat = categories.filter(
                                (tax) => tax.id == val
                            )[0];
                            setAttributes({ categorySelected: cat.slug });
                            setCategoryId(val);
                        }}
                        selectedCategoryId={categoryId}
                    />
                )}
            </PanelBody>
        </InspectorControls>
    )
}