/* Gutenberg Dependencies */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	SearchControl,
	SelectControl,
	Draggable,
} from '@wordpress/components';
import { useEntityRecords } from '@wordpress/core-data';
import { useRef, useState } from '@wordpress/element';
import { Icon, close } from '@wordpress/icons';

export const Controls = (props) => {
	const { attributes, setAttributes } = props;
	const {
		selectedTeams,
		modalEnable,
		singlePageEnabled,
		headingLevel,
		showFilter,
	} = attributes;
	const [search, setSearch] = useState('');
	const { records: options } = useEntityRecords('postType', 'team');
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const ref = useRef();

	const handleSelect = (option) => {
		if (!selectedTeams.includes(option)) {
			setAttributes({ selectedTeams: [...selectedTeams, option] });
		}
	};

	const handleRemove = (id) => {
		const newSelectedTeams = [];

		selectedTeams.forEach((item) => {
			if (item.id !== id) {
				newSelectedTeams.push({
					id:
						newSelectedTeams.length > 0
							? newSelectedTeams.length.toString()
							: '0',
					postId: item.postId,
					title: item.title,
				});
			}
		});

		setAttributes({
			selectedTeams: newSelectedTeams,
		});
	};

	const handleDragStart = (e, draggedId) => {
		e.dataTransfer.setData('draggedId', draggedId);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e, droppedId) => {
		const draggedId = e.dataTransfer.getData('draggedId');
		if (!draggedId || draggedId === droppedId) {
			return;
		}

		const draggedIndex = selectedTeams.findIndex(
			(item) => item.id === draggedId
		);
		const droppedIndex = selectedTeams.findIndex(
			(item) => item.id === droppedId
		);

		if (draggedIndex === -1 || droppedIndex === -1) {
			return;
		}
		const updatedItems = [...selectedTeams];
		const [movedItem] = updatedItems.splice(draggedIndex, 1);
		updatedItems.splice(droppedIndex, 0, movedItem);
		setAttributes({ selectedTeams: updatedItems });
	};

	return (
		<InspectorControls>
			<PanelBody title={__('')}>
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
							className="team-bios-gallery-container__options"
						>
							<div
								onClick={() =>
									setIsDropdownOpen(!isDropdownOpen)
								}
								className="team-bios-gallery-container__options__selected"
							>
								<ul className="draggable-list">
									{selectedTeams.map((item) => (
										<Draggable
											key={item.id}
											elementId={item.id}
										>
											{({
												onDraggableStart,
												onDraggableEnd,
											}) => (
												<li
													id={item.id}
													className="draggable-item"
													draggable
													onDragStart={(e) => {
														handleDragStart(
															e,
															item.id
														);
														onDraggableStart(e);
													}}
													onDragOver={handleDragOver}
													onDrop={(e) =>
														handleDrop(e, item.id)
													}
													onDragEnd={onDraggableEnd}
												>
													<div style={{ flex: 1 }}>
														{item.title}
													</div>
													<span
														className="drag-handle"
														onClick={(e) => {
															e.preventDefault();
															handleRemove(
																item.id
															);
														}}
													>
														<Icon icon={close} />
													</span>
												</li>
											)}
										</Draggable>
									))}
								</ul>
								<SearchControl
									value={search}
									placeholder="Select tems"
									onClick={() => setIsDropdownOpen(true)}
									onChange={function noRefCheck(e) {
										if (
											ref?.current &&
											document.activeElement ===
												ref.current
										) {
											setIsDropdownOpen(true);
										} else {
											setIsDropdownOpen(false);
										}
										setSearch(e);
									}}
									className="team-bios-gallery-container__options__search"
									ref={ref}
								/>
							</div>
							{isDropdownOpen && (
								<ul className="team-bios-gallery-container__options__dropdown">
									{options
										.filter((option) => {
											const selectedTeamsIds =
												selectedTeams.map(
													(team) => team.postId
												);
											return !selectedTeamsIds.includes(
												option.id
											);
										})
										.filter((option) =>
											search === ''
												? option
												: option.title.rendered
														.toLowerCase()
														.includes(
															search.toLowerCase()
														)
										)
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
												}}
												className="team-bios-gallery-container__options__dropdown__item"
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
				{!modalEnable && (
					<ToggleControl
						label="Enable link to team member page"
						checked={singlePageEnabled}
						onChange={(newValue) => {
							setAttributes({
								singlePageEnabled: newValue,
							});
						}}
					/>
				)}
				<ToggleControl
					label="Show filter"
					checked={showFilter}
					onChange={(newValue) => {
						setAttributes({
							showFilter: newValue,
						});
					}}
				/>
				<SelectControl
					label="Select cards heading type"
					value={headingLevel}
					options={[
						{ value: 'h2', label: 'Heading 2' },
						{ value: 'h3', label: 'Heading 3' },
						{ value: 'h4', label: 'Heading 4' },
						{ value: 'h5', label: 'Heading 5' },
						{ value: 'h6', label: 'Heading 6' },
					]}
					onChange={(newHeadingLevel) => {
						setAttributes({
							headingLevel: newHeadingLevel,
						});
					}}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
