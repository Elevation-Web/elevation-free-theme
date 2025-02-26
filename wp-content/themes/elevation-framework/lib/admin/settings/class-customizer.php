<?php
/**
 * File Name: class-customizer.php
 *
 * Description: This file is used to add customizer settings.
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin\Settings;

/**
 * Customizer class
 */
class Customizer {

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
		add_action( 'customize_register', array( $this, 'customize_register' ) );
		add_action( 'customize_register', array( $this, 'elevation_customize_register' ) );
	}

	/**
	 * Register customizer settings
	 *
	 * @param object $wp_customize WP_Customize_Manager.
	 */
	public function customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial(
				'blogname',
				array(
					'selector'        => '.site-title a',
					'render_callback' => array( $this, 'customize_partial_blogname' ),
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'blogdescription',
				array(
					'selector'        => '.site-description',
					'render_callback' => array( $this, 'customize_partial_blogdescription' ),
				)
			);
		}
	}

	/**
	 * Render the site title for the selective refresh partial.
	 */
	public function customize_partial_blogname() {
		bloginfo( 'name' );
	}

	/**
	 * Render the site tagline for the selective refresh partial.
	 */
	private function customize_partial_blogdescription() {
		bloginfo( 'description' );
	}

	/**
	 * Register customizer footer logo settings
	 *
	 * @param object $wp_customize WP_Customize_Manager.
	 */
	private function elevation_customize_register( $wp_customize ) {
		// Add a section for the footer logo.
		$wp_customize->add_section(
			'footer_logo_section',
			array(
				'title'    => __( 'Footer Logo', 'elevation' ),
				'priority' => 30,
			)
		);

		// Add setting for the footer logo.
		$wp_customize->add_setting(
			'footer_logo',
			array(
				'capability'        => 'edit_theme_options',
				'sanitize_callback' => 'esc_url_raw',
			)
		);

		// Add control for the footer logo.
		$wp_customize->add_control(
			new \WP_Customize_Image_Control(
				$wp_customize,
				'footer_logo',
				array(
					'label'    => __( 'Footer Logo', 'elevation' ),
					'section'  => 'footer_logo_section',
					'settings' => 'footer_logo',
				)
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
