<?php
/**
 * File Name: class-load.php
 *
 * Description: This file is used to load the styles and scripts for the theme.
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Frontend;

/**
 * Class Load
 *
 * @package ElevationFree\Lib\Frontend
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

		wp_enqueue_style( 'elevation-critical-css', get_template_directory_uri() . '/build/critical-assets/style-index.css', array(), ELEVATION_THEME_VERSION );

		wp_enqueue_script( 'elevation-critical-scripts', get_template_directory_uri() . '/build/critical-assets/script.js', array(), ELEVATION_THEME_VERSION, true );

		// Load single templates styles.
		if ( is_singular() && ! is_front_page() ) {
			wp_enqueue_style( 'elevation-style-single-post', get_template_directory_uri() . '/build/single/style-index.css', array(), ELEVATION_THEME_VERSION );
		}

		if ( is_category() || is_archive() || is_home() ) {
			wp_enqueue_style( 'elevation-style-archive', get_template_directory_uri() . '/build/archive/style-index.css', array(), ELEVATION_THEME_VERSION );
		}

		if ( is_search() || is_404() ) {
			wp_enqueue_style( 'elevation-style-miscellaneous', get_template_directory_uri() . '/build/miscellaneous/style-index.css', array(), ELEVATION_THEME_VERSION );
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
