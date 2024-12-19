/* Gutenberg Dependencies */
import { CheckboxControl, SearchControl } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';

const SearchByOptions = (props) => {
	const { onChange, options, selectedOptions, type = 'post' } = props;

	const [searchTerm, setSearchTerm] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef();

	const filteredOptions =
		options &&
		options.filter((option) => {
			if (type == 'post') {
				return option.title.rendered
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			} else {
				return option.name
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			}
		});

	const toggleOption = (option) => {
		const newOptions = selectedOptions.includes(option.id)
			? selectedOptions.filter((o) => o !== option.id)
			: [...selectedOptions, option.id];
		onChange(newOptions);
	};

	return (
		<div>
			<div style={{ marginTop: '10px' }}>
				<SearchControl
					value={searchTerm}
					onClick={() => setIsVisible(true)}
					onChange={function noRefCheck(e) {
						if (
							ref?.current &&
							document.activeElement === ref.current
						) {
							setIsVisible(true);
						} else {
							setIsVisible(false);
						}
						setSearchTerm(e);
					}}
					ref={ref}
				/>
				<div
					style={{ position: 'relative' }}
					className="member-control__popover"
				>
					{isVisible && (
						<div className="component-popover">
							{filteredOptions.length > 0 ? (
								filteredOptions.map((option) => (
									<CheckboxControl
										key={option.id}
										label={
											type == 'post'
												? option.title.rendered
												: option.name
										}
										checked={selectedOptions.includes(
											option.id
										)}
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
		</div>
	);
};

export default SearchByOptions;
