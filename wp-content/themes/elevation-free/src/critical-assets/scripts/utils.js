// Function to add CSS file
export const addCSS = (path) => {
	let css = document.createElement('link');
	css.rel = 'stylesheet';
	css.href = `${path}/style-index.css`;
	document.head.appendChild(css);
};

// Function to add JS file
export const addJS = (path, name = 'index') => {
	let js = document.createElement('script');
	js.src = `${path}/${name}.js`;
	document.body.appendChild(js);
};

// Set the base path for the CSS and JS files
export const base = `${window.location.origin}/wp-content/themes/elevation-free`;
export const pluginBase = `${window.location.origin}/wp-content/plugins/elevation-free-blocks`;
