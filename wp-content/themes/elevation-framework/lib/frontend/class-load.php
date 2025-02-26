<?php
/**
 * File Name: class-load.php
 *
 * Description: This file is used to load the styles and scripts for the theme.
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Frontend;

/**
 * Class Load
 *
 * @package ElevationFramework\Lib\Frontend
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
		wp_deregister_script( 'jquery' );
		wp_enqueue_script( 'jquery', get_template_directory_uri() . '/assets/scripts/vendor/jquery-3.7.1.min.js', array(), '1.0.0', true );

		wp_enqueue_style( 'elevation-critical-css', get_template_directory_uri() . '/build/critical-assets/style-index.css', array(), '1.0.0' );
		wp_enqueue_script( 'elevation-critical-scripts', get_template_directory_uri() . '/build/critical-assets/script.js', array(), '1.0.0', true );

		// Load single templates styles.
		if ( is_singular() && ! is_front_page() ) {
			wp_enqueue_style( 'elevation-style-single-post', get_template_directory_uri() . '/build/single/style-index.css', array(), '1.0.0' );
		}

		if ( is_category() || is_archive() || is_home() ) {
			wp_enqueue_style( 'elevation-style-archive', get_template_directory_uri() . '/build/archive/style-index.css', array(), '1.0.0' );
		}

		if ( is_search() || is_404() ) {
			wp_enqueue_style( 'elevation-style-miscellaneous', get_template_directory_uri() . '/build/miscellaneous/style-index.css', array(), '1.0.0' );
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
