<?php
/**
 * File Name: class-load.php
 *
 * Description: Load the admin styles
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin\Assets;

/**
 * Class Load
 *
 * Description: Load the admin styles
 *
 * @package elevation
 */
class Load {

	/**
	 * Instance of the class
	 *
	 * @var null
	 */
	protected static $instance;

	/**
	 * Class constructor.
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'add_admin_styles' ) );
	}

	/**
	 * Add the admin styles
	 */
	public function add_admin_styles() {
		wp_enqueue_style( 'elevation-admin-style', ELEVATION_THEME_URL . '/build/assets/index.css', array(), '1.0', 'all' );
	}

	/**
	 * Get the instance of the class
	 */
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
