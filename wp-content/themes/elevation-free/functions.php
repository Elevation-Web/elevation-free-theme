<?php
/**
 * Theme functions and definitions
 *
 * @package elevation-free
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use ElevationFree\Lib\Load;

define( 'ELEVATION_THEME_NAME', 'elevation-free' );
define( 'ELEVATION_THEME_VERSION', '3.0.3' );
define( 'ELEVATION_THEME_FILE', __FILE__ );
define( 'ELEVATION_THEME_DIR', __DIR__ . DIRECTORY_SEPARATOR );
define( 'ELEVATION_THEME_URL', get_template_directory_uri() );

/**
 * Initialize class function
 *
 * @return object
 */
function load_lib() {
	require_once 'lib/class-load.php';
	return Load::instance();
}

// Initialize the class.
load_lib();
