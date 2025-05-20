<?php
/**
 * Plugin Name: Elevation Blocks
 * Description: Custom blocks for the Elevation theme.
 * Version: 1.0.3
 * Author: Elevation Team
 * License: GNU General Public License v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: elevation-blocks
 *
 * @package elevation-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ElevationBlocks\Lib\Load;


DEFINE( 'ELEVATION_BLOCKS_PLUGIN_VERSION', '1.0.1' );
DEFINE( 'ELEVATION_BLOCKS_DIR', plugin_dir_path( __FILE__ ) );
DEFINE( 'ELEVATION_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );


/**
 * Initialize class function
 *
 * @return object
 */
function elevation_blocks_load_lib() {
	require_once 'lib/class-load.php';
	return Load::instance();
}

// Initialize the class.
elevation_blocks_load_lib();


/**
 * Activation hook
 */
register_activation_hook( __FILE__, 'elevation_blocks_activate' );
add_action( 'admin_init', 'elevation_blocks_redirect' );

/**
 * Activation function
 */
function elevation_blocks_activate() {
	add_option( 'elevation_blocks_do_activation_redirect', true );
}

/**
 * Redirect to the import page after activation
 */
function elevation_blocks_redirect() {
	if ( get_option( 'elevation_blocks_do_activation_redirect', false ) ) {
		delete_option( 'elevation_blocks_do_activation_redirect' );
		$redirect_url = admin_url( '/tools.php?page=elevation-import' );
		wp_safe_redirect( $redirect_url );
	}
}
