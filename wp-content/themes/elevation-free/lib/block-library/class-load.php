<?php
/**
 * File Name: class-load.php
 *
 * Description: This file is used to load the blocks.
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\BlockLibrary;

/**
 * Load class
 */
class Load {

	/**
	 * Instance of the class
	 *
	 * @var object
	 */
	protected static $instance;

	/**
	 * Constructor
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
