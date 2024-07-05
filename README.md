# Elevation Wordpress Theme

It's a starter theme made by Elevation.

## Installation

### Requirements

`Elevation Wordpress Theme ` requires the following dependencies:

- [Node.js](https://nodejs.org/)

### Quick Start

### Setup

To start using all the tools that come with `elevation` you need to install the necessary Node.js dependencies :

```sh
$ yarn
```

### Available CLI commands

#### Use Node 20 (v20.10.0) or above

#### Use Yarn (v1.22.19)

`elevation-framework` comes packed with CLI commands tailored for WordPress theme development :

- `yarn build` : lavarage wp-script and compiles SASS files and js files in src folder
- `yarn dev` : watches all SASS and JS files in src folders.
- `yarn themejson` : create theme.json file.

## Files Required for Blocks

This theme lavarege ACF Blocks and in order to create a block it is needed to follow the next files structure:

- Folder with BLOCKNAME
  - block.json
  - index.php (optional)
  - index.js
  - edit.js
  - save.js
  - style.scss
  - edit.scss

For more reference check out the folder **./blocks/**

## theme.json file

Color Pallete, Font family and some presets settings are located in the theme.json file

### Automatically create theme.json file

Run `yarn themejson`.

To edit, modify files inside `dev` folder.
