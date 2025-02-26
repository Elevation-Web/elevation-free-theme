<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and add assets, controls, support, cleanup, disable, customizer and menu
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin;

use ElevationFramework\Lib\Admin\Assets\Load as Assets;
use ElevationFramework\Lib\Admin\Settings\Cleanup;
use ElevationFramework\Lib\Admin\Settings\Disable;
use ElevationFramework\Lib\Admin\Settings\Support;
use ElevationFramework\Lib\Admin\Controls\Load as Controls;
use ElevationFramework\Lib\Admin\Menu\Load as Menu;
use ElevationFramework\Lib\Admin\Settings\Customizer;

/**
 * Class Load
 *
 * Description: set the instance of the class and add assets, controls, support, cleanup, disable, customizer and menu
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
		Assets::instance();
		Controls::instance();
		Support::instance();
		Cleanup::instance();
		Disable::instance();
		Customizer::instance();
		Menu::instance();
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
