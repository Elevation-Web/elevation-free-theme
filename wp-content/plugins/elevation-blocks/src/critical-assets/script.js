import loadBlocksCSSandJS from './scripts/loadBlocksCSSandJS';
import loadAssetsCSSandJS from './scripts/loadAssetsCSSandJS';
import waitForUserInteraction from './scripts/waitForUserInteraction';
import getFirstsBlock from './scripts/getFirstBlock';
import { globalAnimations } from './scripts/global-animations';

const firstBlocks = ['interior-components/spacer', 'interior-components/group'];

// set to only add if exist
const addIfExist = ['interior-components/swiper'];
// set to exclude
const excludedBlocks = ['interior-components/group'];
// Include the first block in the firstBlocks array
const firstTwoBlockIds = getFirstsBlock(firstBlocks);
if (firstTwoBlockIds) {
	firstBlocks.push(...firstTwoBlockIds);
}

globalAnimations();

// Add more blocks to the firstBlocks array if needed
// firstBlocks.push('BLOCK_ID_1');

loadBlocksCSSandJS(firstBlocks, true, addIfExist, excludedBlocks);

// showBody();

// Wait for user interaction before loading CSS and JS files
waitForUserInteraction(() => {
	loadAssetsCSSandJS();
	loadBlocksCSSandJS(firstBlocks, false, [], excludedBlocks);
});
