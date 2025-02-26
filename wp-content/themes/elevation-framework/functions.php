<?php
/**
 * Theme functions and definitions
 *
 * @package elevation
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use ElevationFramework\Lib\Load;

define( 'ELEVATION_THEME_NAME', 'elevation' );
define( 'ELEVATION_THEME_VERSION', '1.0.0' );
define( 'ELEVATION_THEME_FILE', __FILE__ );
define( 'ELEVATION_THEME_DIR', __DIR__ . DIRECTORY_SEPARATOR );
define( 'ELEVATION_THEME_URL', get_template_directory_uri() );
define( 'ELEVATION_THEME_PREFIX', 'elevation' );
define( 'ELEVATION_THEME_DEVELOPMENT_MODE', false );
define( 'ELEVATION_VERSION', '1.0.0' );

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
