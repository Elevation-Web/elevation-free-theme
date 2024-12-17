/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import {
    PanelBody,
    QueryControls,
    RangeControl,
    ToggleControl,
} from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';
import { useEffect, useState } from '@wordpress/element';

/* Internal Dependencies */
import SearchByOptions from '../../components/Search';

export const Controls = (props) => {
    const { attributes, setAttributes } = props;
    const { categorySelected, postsSelected, postsPerPage, filterBy } = attributes;
    const { records: categories } = useEntityRecords('taxonomy', 'category');
    const { records: posts } = useEntityRecords('postType', 'post');
    const [categorySuggestions, setCategorySuggestions] = useState({});
    const [postSuggestions, setPostSuggestions] = useState([]);

    useEffect(() => {
        if (categories) {
            const suggestions = {};
            categories.forEach((category) => {
                suggestions[category.name] = {
                    id: category.id,
                    name: category.name,
                    parent: category.parent
                }
            });
            setCategorySuggestions(suggestions);
        }
    }, [categories]);

    useEffect(() => {
        if (posts) {
            if (categorySelected.length > 0) {
                const categoriesId = categorySelected.map((category) => category.id);
                const suggestions = posts.filter((post) => post.categories.some((category) => categoriesId.includes(category.id)));
                setPostSuggestions(suggestions);
            } else {
                setPostSuggestions(posts);
            }
        }
    }, [posts, categorySelected]);

    const addCategory = (value) => {
        setAttributes({
            categorySelected: [
                ...categorySelected,
                categorySuggestions[value[value.length - 1]]
            ]
        });
    }

    const removeCategory = (value) => {
        setAttributes({ categorySelected: value });
    }

    return (
        <InspectorControls>
            <PanelBody title={__('Category Filter')}>
                <SelectControl
                    label="Filter By"
                    value={filterBy}
                    options={[
                        { label: 'Newest Oldest', value: 'latest' },
                        { label: 'Oldest Newest', value: 'oldest' },
                        { label: 'Category', value: 'category' },
                        { label: 'Posts', value: 'posts' },
                    ]}
                    onChange={(newSize) => setAttributes({ filterBy: newSize })}
                />
                {filterBy == 'category' && categorySuggestions && (
                    <QueryControls
                        categorySuggestions={categorySuggestions}
                        numberOfItems={postsPerPage}
                        onCategoryChange={function noRefCheck(val) {
                            if (categorySelected.length > val.length) {
                                removeCategory(val);
                            } else {
                                addCategory(val);
                            }
                        }}
                        onNumberOfItemsChange={(value) => {
                            setAttributes({ postsPerPage: value });
                        }}
                        selectedCategories={categorySelected}
                    />
                )}
            </PanelBody>

            <PanelBody title={__('Category Filter')}>
                <RangeControl
                    label="Number of Items"
                    value={postsPerPage}
                    onChange={(newValue) => setAttributes({ postsPerPage: newValue })}
                    min={1}
                    max={10}
                />
            </PanelBody>
            {filterBy == 'posts' && postSuggestions && (
                <PanelBody title={__('Select Posts')}>
                    <SearchByOptions
                        options={postSuggestions}
                        selectedOptions={postsSelected}
                        onChange={(value) => {
                            setAttributes({ postsSelected: value });
                        }}
                    />
                </PanelBody>)
            }
        </InspectorControls>
    )
}