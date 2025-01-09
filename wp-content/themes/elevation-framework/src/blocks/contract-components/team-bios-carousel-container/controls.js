/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
// import { SelectControl } from '@wordpress/components';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';
import { useRef, useState } from '@wordpress/element';
import { Draggable } from '@wordpress/components';
import { Icon, more } from '@wordpress/icons';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const { selectedTeams, modalEnable } = attributes;

	const { records: options } = useEntityRecords('postType', 'team');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const ref = useRef();

	const handleSelect = (option) => {
		if (!selectedTeams.includes(option)) {
			setAttributes({ selectedTeams: [...selectedTeams, option] });
		}
	};

	const handleRemove = (option) => {
		setAttributes({
			selectedTeams: selectedTeams.filter((item) => item.id !== option),
		});
	};

	const [items, setItems] = useState([
		{ id: '1', text: 'Elemento 1' },
		{ id: '2', text: 'Elemento 2' },
		{ id: '3', text: 'Elemento 3' },
	]);

	// console.log('selectedTeams',selectedTeams);

	const handleDragStart = (e, draggedId) => {
		e.dataTransfer.setData('draggedId', draggedId); // Pasar el ID del elemento arrastrado
	};

	const handleDragOver = (e) => {
		e.preventDefault(); // Permitir soltar
	};

	const handleDrop = (e, droppedId) => {
		const draggedId = e.dataTransfer.getData('draggedId');
		console.log('draggedId', draggedId);
		if (!draggedId || draggedId === droppedId) {
			return; // Sin cambios si se suelta en el mismo lugar
		}

		const draggedIndex = selectedTeams.findIndex(
			(item) => item.id === draggedId
		);
		const droppedIndex = selectedTeams.findIndex(
			(item) => item.id === droppedId
		);

		if (draggedIndex === -1 || droppedIndex === -1) {
			return; // Elementos no encontrados
		}
		console.log('selectedTeams', selectedTeams);
		// Reordenar la lista
		const updatedItems = [...selectedTeams];
		const [movedItem] = updatedItems.splice(draggedIndex, 1);
		updatedItems.splice(droppedIndex, 0, movedItem);
		setAttributes({ selectedTeams: updatedItems });
	};

	return (
		<InspectorControls>
			<PanelBody title={__('')}>
				<PanelBody>
					<h3>Order: </h3>
					<ul className="draggable-list">
						{selectedTeams.map((item) => (
							<Draggable key={item.id} elementId={item.id}>
								{({ onDraggableStart, onDraggableEnd }) => (
									<li
										id={item.id}
										className="draggable-item"
										draggable
										onDragStart={(e) => {
											handleDragStart(e, item.id);
											onDraggableStart(e);
										}}
										onDragOver={handleDragOver}
										onDrop={(e) => handleDrop(e, item.id)}
										onDragEnd={onDraggableEnd}
									>
										<span className="drag-handle">
											<Icon icon={more} />
										</span>
										{item.title}
									</li>
								)}
							</Draggable>
						))}
					</ul>
				</PanelBody>
				<div style={{ marginBottom: '20px' }}>
					<label
						className="block-editor-block-card__title"
						style={{ fontSize: '14px' }}
					>
						Select Teams
					</label>
					{!!options && (
						<div
							style={{ position: 'relative', width: '100%' }}
							ref={ref}
							className="team-bios-carousel-container__options"
						>
							<div
								onClick={() =>
									setIsDropdownOpen(!isDropdownOpen)
								}
								style={{
									border: '1px solid #ccc',
									borderRadius: '4px',
									padding: '8px',
									display: 'flex',
									flexWrap: 'wrap',
									gap: '5px',
									cursor: 'pointer',
									marginTop: '10px',
								}}
							>
								<input
									type="text"
									placeholder="Selecciona opciones"
									style={{
										border: 'none',
										flex: 1,
										outline: 'none',
										boxShadow: 'none',
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
										borderRadius: '0px',
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
													(team) => team.postId // id => post ID
												);
											return !selectedTeamsIds.includes(
												option.id
											);
										})
										.map((option) => (
											<li
												key={option.id}
												onClick={() => {
													const idxNext =
														!selectedTeams
															? 0
															: selectedTeams.length +
																1;

													handleSelect({
														id: idxNext.toString(),
														postId: option.id,
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
				</div>
				<ToggleControl
					label="Show modal"
					checked={modalEnable}
					onChange={(newValue) => {
						setAttributes({
							modalEnable: newValue,
						});
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
