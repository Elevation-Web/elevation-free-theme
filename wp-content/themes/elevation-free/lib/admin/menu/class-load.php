<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and register the menu
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin\Menu;

/**
 * Class Load
 *
 * Description: set the instance of the class and register the menu
 *
 * @package elevation-free
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
		add_filter( 'after_setup_theme', array( $this, 'register_menus' ) );
		Walkernavmenuregular::instance();
	}

	/**
	 * Register the menu
	 */
	public function register_menus() {
		\register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Main Menu', 'elevation-free' ),
			)
		);
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
