<?php
/**
 * File Name: class-cleanup.php
 *
 * Description: This file is used to remove unnecessary items from the WordPress head.
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin\Settings;

use ElevationFree\Lib\Admin\Controls\Load as Controls;

/**
 * Cleanup class
 */
class Cleanup {

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
		add_action( 'after_setup_theme', array( $this, 'start_cleanup' ) );
	}

	/**
	 * Start cleanup
	 */
	public function start_cleanup() {
		// Remove WP version from RSS.
		add_filter( 'the_generator', array( $this, 'wp_remove_rss_version' ) );

		// Remove pesky injected css for recent comments widget.
		add_filter( 'wp_head', array( $this, 'wp_remove_wp_widget_recent_comments_style' ), 1 );

		// Clean up comment styles in the head.
		add_action( 'wp_head', array( $this, 'wp_remove_recent_comments_style' ), 1 );

		// Remove inline width attribute from figure tag.
		add_filter( 'img_caption_shortcode', array( $this, 'wp_remove_figure_inline_style' ), 10, 3 );

		// Remove default Users Sitemap.
		add_filter( 'wp_sitemaps_add_provider', array( $this, 'wp_remove_users_sitemap' ), 10, 2 );

		// Remove default Users JSON API.
		add_filter( 'rest_authentication_errors', array( $this, 'wp_snippet_disable_rest_api' ) );
	}

	/**
	 * Remove RSS version
	 *
	 * @return string
	 */
	public function wp_remove_rss_version() {
		return '';
	}

	/**
	 * Remove user from sitemap
	 *
	 * @param object $provider Object of WP_Sitemaps_Provider.
	 * @param string $name Name of the sitemap.
	 *
	 * @return object
	 */
	public function wp_remove_users_sitemap( $provider, $name ) {
		return ( 'users' === $name ) ? false : $provider;
	}

	/**
	 * Disabled the REST API users endpoint
	 *
	 * @return object
	 */
	public function wp_snippet_disable_rest_api() {
		if ( ! empty( $_SERVER['REQUEST_URI'] ) && str_contains( sanitize_text_field( wp_unslash( $_SERVER['REQUEST_URI'] ) ), '/wp-json/wp/v2/users' ) && ! is_user_logged_in() ) {
			return new WP_Error( 'rest_disabled', __( 'The WordPress REST API users endpoint has been disabled.', 'elevation-free' ), array( 'status' => 404 ) );
		}
	}

	/**
	 * Remove widget recent comments style
	 *
	 * @return void
	 */
	public function wp_remove_wp_widget_recent_comments_style() {
		if ( has_filter( 'wp_head', 'wp_widget_recent_comments_style' ) ) {
			remove_filter( 'wp_head', 'wp_widget_recent_comments_style' );
		}
	}

	/**
	 * Remove recent comments style
	 *
	 * @return void
	 */
	public function wp_remove_recent_comments_style() {
		global $wp_widget_factory;
		if ( isset( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'] ) ) {
			remove_action( 'wp_head', array( $wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style' ) );
		}
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
