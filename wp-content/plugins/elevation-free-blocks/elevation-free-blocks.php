<?php
/**
 * Plugin Name: Elevation Free Blocks
 * Description: Custom blocks for the Elevation theme.
 * Version: 1.0.0
 * Author: Elevation Team
 * License: GNU General Public License v3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package elevation-free-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ElevationFreeBlocks\Lib\Load;

if ( ! defined( 'ELEVATION_FREE_BLOCKS_DIR' ) ) {
	DEFINE( 'ELEVATION_FREE_BLOCKS_DIR', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'ELEVATION_FREE_BLOCKS_DIR_URL' ) ) {
	DEFINE( 'ELEVATION_FREE_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );
}

/**
 * Initialize class function
 *
 * @return object
 */
function elevation_free_blocks_load_lib() {
	require_once 'lib/class-load.php';
	return Load::instance();
}

// Initialize the class.
elevation_free_blocks_load_lib();


/**
 * Activation hook
 */
register_activation_hook( __FILE__, 'elevation_free_blocks_activate' );
add_action( 'admin_init', 'elevation_free_blocks_redirect' );

/**
 * Activation function
 */
function elevation_free_blocks_activate() {
	add_option( 'elevation_free_blocks_do_activation_redirect', true );
}

/**
 * Redirect to the import page after activation
 */
function elevation_free_blocks_redirect() {
	if ( get_option( 'elevation_free_blocks_do_activation_redirect', false ) ) {
		delete_option( 'elevation_free_blocks_do_activation_redirect' );
		$redirect_url = admin_url( '/tools.php?page=elevation-import' );
		wp_safe_redirect( $redirect_url );
	}
}
