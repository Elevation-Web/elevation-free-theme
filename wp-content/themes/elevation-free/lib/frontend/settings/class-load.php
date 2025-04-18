<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and register the settings
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Frontend\Settings;

use ElevationFree\Lib\Frontend\Settings\Helpers;

/**
 * Class Load
 *
 * @package ElevationFree\Lib\Frontend\Settings
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
		Helpers::instance();
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
