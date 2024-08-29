import clsx from 'clsx';
import { useSetting } from '@wordpress/block-editor';
import {
	__experimentalInputControl,
	ColorPalette,
	Button,
	Popover,
	ColorIndicator,
	FlexItem,
	__experimentalHStack as HStack,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export const ColorPicker = ({ onChange, color, label, colorPallet }) => {
	const colorPaletteDefault = useSetting('color.palette');
	const [visible, setVisible] = useState(false);
	const toggleProps = {
		className: clsx(
			'block-editor-panel-color-gradient-settings__dropdown',
			{ 'is-open': visible }
		),
		style: {
			height: 'auto',
			padding: '0px',
		},
	};

	return (
		<>
			<Button
				{...toggleProps}
				onClick={() => {
					setVisible(true);
				}}
			>
				<HStack
					justify="flex-start"
					style={{
						border: '1px solid #ddd',
						padding: '10px 12px',
						borderRadius: '2px',
					}}
				>
					<ColorIndicator
						className="block-editor-panel-color-gradient-settings__color-indicator"
						colorValue={color}
					/>
					<FlexItem
						className="block-editor-panel-color-gradient-settings__color-name"
						title={label}
						style={{ fontWeight: 600 }}
					>
						{label}
					</FlexItem>
				</HStack>
			</Button>
			{visible && (
				<Popover onClose={() => setVisible(false)}>
					<ColorPalette
						value={color}
						colors={
							!!colorPallet ? colorPallet : colorPaletteDefault
						}
						onChange={onChange}
					/>
				</Popover>
			)}
		</>
	);
};
