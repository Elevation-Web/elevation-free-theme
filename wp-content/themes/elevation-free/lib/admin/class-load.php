<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and add assets, support, cleanup, disable, customizer and menu
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin;

use ElevationFree\Lib\Admin\Assets\Load as Assets;
use ElevationFree\Lib\Admin\Settings\Blocks;
use ElevationFree\Lib\Admin\Settings\Cleanup;
use ElevationFree\Lib\Admin\Settings\Disable;
use ElevationFree\Lib\Admin\Settings\Support;
use ElevationFree\Lib\Admin\Settings\Customizer;
use ElevationFree\Lib\Admin\Menu\Load as Menu;
use ElevationFree\Lib\Admin\Widgets\Load as Widgets;

/**
 * Class Load
 *
 * Description: set the instance of the class and add assets, support, cleanup, disable, customizer and menu
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
		Assets::instance();
		Support::instance();
		Blocks::instance();
		Cleanup::instance();
		Disable::instance();
		Customizer::instance();
		Menu::instance();
		Widgets::instance();
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
