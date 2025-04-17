<?php
/**
 * File Name: class-load.php
 *
 * Description: This file is used to load the styles and scripts for the theme.
 *
 * @package elevation-free-blocks
 */

namespace ElevationFreeBlocks\Lib\Frontend;

/**
 * Class Load
 *
 * @package ElevationFreeBlocks\Lib\Frontend
 */
class Load {

	/**
	 * Instance of the class
	 *
	 * @var object
	 */
	protected static $instance;

	/**
	 * Load constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ), 10 );
	}

	/**
	 * Enqueue scripts and styles
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'comment-reply' );

		if ( get_stylesheet() !== 'elevation-free' ) {

			wp_enqueue_style( 'elevation-free-blocks-critical-css', ELEVATION_FREE_BLOCKS_DIR_URL . '/build/critical-assets/style-index.css', array(), ELEVATION_FREE_BLOCKS_PLUGIN_VERSION );

			wp_enqueue_script( 'elevation-free-blocks-critical-scripts', ELEVATION_FREE_BLOCKS_DIR_URL . '/build/critical-assets/script.js', array(), ELEVATION_FREE_BLOCKS_PLUGIN_VERSION, true );
		}
	}

	/**
	 * Get the instance of the class
	 *
	 * @return object
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}
}
