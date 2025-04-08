<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and add assets, support, cleanup, disable, customizer and menu
 *
 * @package elevation-free-blocks-blocks
 */

namespace ElevationFreeBlocks\Lib\Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ElevationFreeBlocks\Lib\Admin\Controls\Load as Controls;

/**
 * Class Load
 *
 * Description: set the instance of the class and add assets, support, cleanup, disable, customizer and menu
 *
 * @package elevation-free-blocks-blocks
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
		Controls::instance();
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
