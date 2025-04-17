<?php
/**
 * File Name: class-load.php
 *
 * Description: set the instance of the class and add login check
 *
 * @package elevation-free-blocks-blocks
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
 * @package elevation-free-blocks-blocks
 */
class Notices {

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
		$active_theme = wp_get_theme(); // Get the current active theme.

		if ( $active_theme->get( 'Name' ) !== 'Elevation Free' ) {
			add_action( 'admin_notices', array( $this, 'elevation_free_blocks_check_active_theme' ) );
		}
	}

	/**
	 * Check if the active theme is Elevation Free
	 */
	public function elevation_free_blocks_check_active_theme() {
			$class          = 'notice notice-error is-dismissible';
			$message_part_1 = __( 'Elevation Free Blocks ', 'elevation-free-blocks' );
			$message_part_2 = __( 'requires the ', 'elevation-free-blocks' );
			$url            = home_url() . '/wp-admin/theme-install.php?search=Elevation%20Free';
			$message_part_3 = __( 'Elevation Free Theme', 'elevation-free-blocks' );
			$message_part_4 = __( '  to be activated for full functionality.', 'elevation-free-blocks' );

			printf( '<div class="%1$s"><p><strong>%2$s</strong> %3$s <a href="%4$s"><strong>%5$s</strong></a> %6$s.</p></div>', esc_attr( $class ), esc_html( $message_part_1 ), esc_html( $message_part_2 ), esc_url( $url ), esc_html( $message_part_3 ), esc_html( $message_part_4 ) );
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
