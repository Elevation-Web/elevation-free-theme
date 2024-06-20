import { getPallete } from './utils/getPallete.mjs';
import { typography } from './fonts/typography.mjs';
import { fontStyles, headingFontStyles } from './fonts/fontFamilies.mjs';
import fs from 'fs';

const theme = {
	version: 2,
	settings: {
		appearanceTools: true,
		color: {
			defaultPalette: false,
			gradients: [],
			customGradient: false,
			palette: getPallete('./dev/figma/figmaTokens.json'),
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
	styles: fontStyles(),
	blocks: headingFontStyles(),
};

fs.writeFile('./theme.json', JSON.stringify(theme, null, 4), (err) => {
	if (err) throw err;
	console.log('theme.json created successfully!');
});
