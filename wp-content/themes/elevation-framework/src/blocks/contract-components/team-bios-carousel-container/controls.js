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
	const { selectedTeams } = attributes;

	const { records: options } = useEntityRecords('postType', 'team');
	const { records: teams } = useEntityRecords('postType', 'team');
	const [selectedTeam, setSelectedTeam] = useState(attributes.selectedTeam);

	// const [selectedTeams, setAttributes]{ selectedTeams :  = useState(selectedTeams);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	// Maneja la selección de una opción
	const handleSelect = (option) => {
		if (!selectedTeams.includes(option)) {
			setAttributes({ selectedTeams: [...selectedTeams, option] });
		}
	};

	// Maneja la eliminación de una opción
	const handleRemove = (option) => {
		setAttributes({
			selectedTeams: selectedTeams.filter((item) => item.id !== option),
		});
	};

	return (
		<InspectorControls>
			<PanelBody title={__('')}>
				<label>Select Teams</label>
				{!!options && (
					<div style={{ position: 'relative', width: '100%' }}>
						<div
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							style={{
								border: '1px solid #ccc',
								borderRadius: '4px',
								padding: '8px',
								display: 'flex',
								flexWrap: 'wrap',
								gap: '5px',
								cursor: 'pointer',
							}}
						>
							{selectedTeams.map((option) => (
								<span
									key={option.id}
									style={{
										background: '#007BFF',
										color: 'white',
										padding: '5px 10px',
										borderRadius: '12px',
										display: 'inline-flex',
										alignItems: 'center',
										gap: '5px',
									}}
								>
									{option.title}
									<button
										onClick={(e) => {
											e.stopPropagation();
											handleRemove(option.id);
										}}
										style={{
											background: 'transparent',
											border: 'none',
											color: 'white',
											cursor: 'pointer',
											fontSize: '12px',
										}}
									>
										✕
									</button>
								</span>
							))}
							<input
								type="text"
								placeholder="Selecciona opciones"
								style={{
									border: 'none',
									flex: 1,
									outline: 'none',
									minWidth: '50px',
								}}
							/>
						</div>

						{/* Dropdown de opciones */}
						{isDropdownOpen && (
							<ul
								style={{
									listStyle: 'none',
									margin: 0,
									padding: '10px',
									border: '1px solid #ccc',
									borderRadius: '4px',
									position: 'absolute',
									top: '100%',
									left: 0,
									right: 0,
									maxHeight: '150px',
									overflowY: 'auto',
									background: 'white',
									zIndex: 1000,
								}}
							>
								{options
									.filter((option) => {
										const selectedTeamsIds =
											selectedTeams.map(
												(team) => team.id
											);
										return !selectedTeamsIds.includes(
											option.id
										);
									})
									.map((option) => (
										<li
											key={option.id}
											onClick={() => {
												handleSelect({
													id: option.id,
													title: option.title
														.rendered,
												});
												// setIsDropdownOpen(false);
											}}
											style={{
												padding: '5px',
												cursor: 'pointer',
											}}
										>
											{option.title.rendered}
										</li>
									))}
							</ul>
						)}
					</div>
				)}
			</PanelBody>
		</InspectorControls>
	);
};
