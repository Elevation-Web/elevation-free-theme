import fs from 'fs';

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
		} else if (prop === 'name') {
			const slug = replaceSlashAndDotWithDash(obj[prop]);
			result.push({
				slug: slug,
				name: slugToTitle(slug),
				color: obj['rgb'],
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
	const tokens = JSON.parse(data);

	// Create a new array of objects with the required format
	const formattedTokens = traverse(tokens);

	return formattedTokens;
};
