import fs from 'fs';
import path from 'path';

export const listDirectories = async (dir, depth = 0) => {
	try {
		const files = fs.readdirSync(dir, { withFileTypes: true });
		files.forEach((file) => {
			if (file.isDirectory()) {
				console.log(`${'  '.repeat(depth)}- ${file.name}`);
				listDirectories(path.join(dir, file.name), depth + 1);
			}
		});
	} catch (err) {
		console.error(`Error reading directory ${dir}:`, err);
	}
};

const rootDir = path.resolve('../src/blocks'); // Convert to absolute path
console.log(`Listing folders in: ${rootDir}`);
listDirectories(rootDir, 2);
