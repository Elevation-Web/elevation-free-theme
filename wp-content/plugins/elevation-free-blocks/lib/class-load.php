<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class, register the settings, and autoload the classes
 *
 * @package elevation-free-blocks
 */

namespace ElevationFreeBlocks\Lib;

/**
 * Class Load
 *
 * @package ElevationFreeBlocks\Lib
 */
final class Load {

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
		spl_autoload_register( array( $this, 'autoload' ) );
		Admin\Load::instance();
		BlockLibrary\Load::instance();
	}

	/**
	 * Autoload the classes
	 *
	 * @param string $class_to_load The class to load.
	 */
	public function autoload( $class_to_load ) {
		if ( 0 !== strpos( $class_to_load, __NAMESPACE__ ) ) {
			return;
		}

		if ( ! class_exists( $class_to_load ) ) {
			$class_file = $this->class_file( $class_to_load );

			if ( is_readable( $class_file ) ) {
				include_once $class_file;
			} elseif ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
					// translators: %1$s is the class file, %2$s is the class to load, %3$s is the namespace.
					$warning_message = sprintf( esc_html__( '"Can\'t find %1$s" for "%2$s" in "%3$s".', 'elevation-free-blocks' ), $class_file, $class_to_load, __NAMESPACE__ );
					// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_trigger_error
					trigger_error( esc_html( $warning_message ), E_USER_NOTICE );
			}
		}
	}

	/**
	 * Get the class file
	 *
	 * @param string $class_name The class name.
	 * @return string
	 */
	public static function class_file( $class_name ) {
		$class_name = str_replace( __NAMESPACE__, '', $class_name );
		// First, modify the class name with preg_replace.
		$class_name = strtolower( preg_replace( array( '/([a-z])([A-Z])/', '/_/', '/\\\/' ), array( '$1-$2', '-', DIRECTORY_SEPARATOR ), $class_name ) );

		// Replace backslashes (if on Windows or similar) to forward slashes for uniformity.
		$class_name = str_replace( '\\', '/', $class_name );

		// Extract the directory path and the class name.
		$path_parts = pathinfo( $class_name );

		// Add 'class-' prefix only to the file name.
		$filename = "{$path_parts['dirname']}/class-{$path_parts['basename']}";

		if ( strpos( $filename, 'build' ) !== false ) {
			return ELEVATION_FREE_BLOCKS_DIR . $filename . '.php';
		}
		return ELEVATION_FREE_BLOCKS_DIR . 'lib/' . $filename . '.php';
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
