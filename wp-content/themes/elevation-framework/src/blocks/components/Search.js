/* Gutenberg Dependencies */
import { CheckboxControl, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';


const SearchByOptions = (props) => {
    const {
        onChange,
        options,
        selectedOptions,
        type = 'post'
    } = props;

    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);


    const filteredOptions = options && options.filter((option) => {
        if (type == 'post') {
            return option.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
        } else {
            return option.name.toLowerCase().includes(searchTerm.toLowerCase())
        }
    });

    const toggleOption = (option) => {
        console.log('option', option);
        const newOptions = selectedOptions.includes(option.id)
            ? selectedOptions.filter((o) => o !== option.id)
            : [...selectedOptions, option.id];
        onChange(newOptions);
    };

    return (
        <div>
            <div style={{ marginTop: '10px' }} onMouseLeave={() => setDropdownVisible(false)}>
                <TextControl
                    placeholder="Search options..."
                    value={searchTerm}
                    onChange={setSearchTerm}
                    onClick={() => setDropdownVisible(true)}
                />
                {dropdownVisible && (
                    <div style={{ maxHeight: '150px', overflowY: 'auto', marginTop: '10px' }} onMouseEnter={() => setDropdownVisible(true)}>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <CheckboxControl
                                    key={option.id}
                                    label={type == 'post' ? option.title.rendered : option.name}
                                    checked={selectedOptions.includes(option.id)}
                                    onChange={() => toggleOption(option)}
                                />
                            ))
                        ) : (
                            <p>No results found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchByOptions;
