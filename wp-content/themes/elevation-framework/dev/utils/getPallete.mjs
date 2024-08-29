import fs from 'fs';
import { removeDuplicateColors } from './removeDuplicateColors.mjs';

const excludeUX = 'UX';

// Function to replace slash and dot with dash
function replaceSlashAndDotWithDash(str) {
	return str.replace(/[/. ]/g, '-').toLowerCase();
}

// Function to convert slug to title
function slugToTitle(str) {
	return str.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

// Function to traverse the nested object
function traverse(obj) {
	let result = [];
	for (let prop in obj) {
		if (typeof obj[prop] === 'object') {
			result = result.concat(traverse(obj[prop]));
		} else if (prop === 'name' && !obj[prop].includes(excludeUX)) {
			const slug = replaceSlashAndDotWithDash(obj[prop]);
			result.push({
				slug: slug,
				name: slugToTitle(slug),
				color: obj['hex8'],
			});
		}
	}
	return result;
}

// Function to get the pallete
export const getPallete = (url) => {
	// Read the JSON file
	const data = fs.readFileSync(url, 'utf8');

	// Parse the JSON data
	const colors = JSON.parse(data);

	// Create a new array of objects with the required format
	const formattedColors = traverse(colors);

	const uniqueColors = removeDuplicateColors(formattedColors);

	const formattedCustomColors = formattedColors.reduce((acc, color) => {
		acc[`$${color.slug}`] = color.color;
		return acc;
	}, {});

	let sassVariables = ``;
	for (const [key, value] of Object.entries(formattedCustomColors)) {
		sassVariables += `${key}: ${value};`;
	}

	return {
		colors: uniqueColors,
		sassVariables: sassVariables,
	};
};
