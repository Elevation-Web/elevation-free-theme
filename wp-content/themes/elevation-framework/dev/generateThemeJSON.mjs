import { getPallete } from './utils/getPallete.mjs';
import { typography } from './fonts/typography.mjs';
import { elementsStyles, bodyStyles } from './styles/styles.mjs';
import { coreBlocks } from './core-blocks/coreBlocks.mjs';
import fs from 'fs';

const { colors, customColors } = getPallete('./dev/figma/figmaTokens.json');

const theme = {
	version: 2,
	settings: {
		appearanceTools: true,
		color: {
			defaultPalette: false,
			gradients: [],
			customGradient: false,
			palette: colors,
		},
		spacing: {
			units: ['%', 'px', 'em', 'rem', 'vh', 'vw'],
		},
		typography: typography(),
		layout: {
			contentSize: '75%',
			wideSize: '90%',
		},
	},
	styles: {
		...bodyStyles(),
		...elementsStyles(),
	},
	blocks: coreBlocks(),
};

fs.writeFile('./theme.json', JSON.stringify(theme, null, 4), (err) => {
	if (err) throw err;
	console.log('theme.json created successfully!');
});

fs.writeFile(
	'./src/assets/styles/scss/utilities/_default-variables.scss',
	customColors,
	(err) => {
		if (err) throw err;
		console.log('_default-variables.scss created successfully!');
	}
);
