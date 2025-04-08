<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and add login check
 *
 * @package elevation-free-blocks
 */

namespace ElevationFreeBlocks\Lib\Admin\Controls;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Load
 *
 * Description: set the instance of the class and add login check
 *
 * @package elevation-free-blocks
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
		Helpers::instance();
		Notices::instance();
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
