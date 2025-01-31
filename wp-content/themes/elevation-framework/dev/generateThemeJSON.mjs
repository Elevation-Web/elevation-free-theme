import { getPallete } from './utils/getPallete.mjs';
import { typography } from './fonts/typography.mjs';
import { elementsStyles, bodyStyles } from './styles/styles.mjs';
import fs from 'fs';

const { colors, sassVariables } = getPallete('./dev/figma/figmaTokens.json');

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
			contentSize: 'clamp(320px,1440px,90%)',
			wideSize: null,
		},
	},
	styles: {
		...bodyStyles(),
		...elementsStyles(),
	},
};

fs.writeFile('./theme.json', JSON.stringify(theme, null, 4), (err) => {
	if (err) throw err;
	console.log('theme.json created successfully!');
});

fs.writeFile(
	'./src/assets/styles/scss/utilities/_default-variables.scss',
	sassVariables,
	(err) => {
		if (err) throw err;
		console.log('_default-variables.scss created successfully!');
	}
);
