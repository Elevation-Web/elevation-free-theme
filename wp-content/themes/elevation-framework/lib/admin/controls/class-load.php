<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and add login check
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin\Controls;

/**
 * Class Load
 *
 * Description: set the instance of the class and add login check
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
		Helpers::instance();
	}

	/**
	 * Check if the user is logged in
	 *
	 * @return boolean
	 */
	public function is_login() {
		// phpcs:ignore WordPress.NamingConventions.ValidVariableName.VariableNotSnakeCase
		$globals    = $_GLOBALS;
		$abspath_my = str_replace( array( '\\', '/' ), DIRECTORY_SEPARATOR, ABSPATH );
		return ( ( in_array( $abspath_my . 'wp-login.php', get_included_files(), true ) || in_array( $abspath_my . 'wp-register.php', get_included_files(), true ) ) || ( isset( $$globals['pagenow'] ) && 'wp-login.php' === $$globals['pagenow'] ) || ( ! empty( $_SERVER['PHP_SELF'] ) && '/wp-login.php' === $_SERVER['PHP_SELF'] ) );
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
