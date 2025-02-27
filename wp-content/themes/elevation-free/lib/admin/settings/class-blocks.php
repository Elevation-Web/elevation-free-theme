<?php
/**
 * File Name: class-blocks.php
 *
 * Description: This file is used to add theme support and other settings.
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin\Settings;

require_once ABSPATH . 'wp-admin/includes/plugin.php';

/**
 * Class Support
 *
 * @package ElevationFree\Lib\Admin\Settings
 */
class Blocks {

	/**
	 * Instance of the class
	 *
	 * @var object
	 */
	protected static $instance;

	/**
	 * Support constructor.
	 */
	public function __construct() {
		if ( ! is_plugin_active( 'elevation-free-blocks/elevation-free-blocks.php' ) ) {
			add_action( 'admin_notices', array( $this, 'elevation_admin_notice' ) );
		}
	}

	/**
	 * Display an admin notice if the Elevation Blocks plugin is not active
	 */
	public function elevation_admin_notice() {
		$class          = 'notice notice-error';
		$message_part_1 = __( 'Please install and activate the ', 'elevation-free' );
		$url            = home_url() . '/wp-admin/plugin-install.php?s=Elevation%2520Free%2520Blocks&tab=search&type=term';
		$message_part_2 = __( 'Elevation Free Blocks', 'elevation-free' );
		$message_part_3 = __( ' plugin to enable custom blocks.', 'elevation-free' );

		printf( '<div class="%1$s"><p>%2$s <a href="%3$s"><strong>%4$s</strong></a> %5$s.</p></div>', esc_attr( $class ), esc_html( $message_part_1 ), esc_url( $url ), esc_html( $message_part_2 ), esc_html( $message_part_3 ) );
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
