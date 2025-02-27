<?php
/**
 * File Name: class-load.php
 *
 * Description: register widgets
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin\Widgets;

/**
 * Class Load
 *
 * Description: Load the admin styles
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
		add_action( 'widgets_init', array( $this, 'elevation_free_widgets_init' ) );
	}

	/**
	 * Register footer widgets
	 *
	 * @return void
	 */
	public function elevation_free_widgets_init() {
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer second column', 'elevation-free' ),
				'id'            => 'footer-1',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer third column', 'elevation-free' ),
				'id'            => 'footer-2',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
		register_sidebar(
			array(
				'name'          => esc_html__( 'Footer fourth column', 'elevation-free' ),
				'id'            => 'footer-3',
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h3 class="widget-title">',
				'after_title'   => '</h3>',
			)
		);
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
