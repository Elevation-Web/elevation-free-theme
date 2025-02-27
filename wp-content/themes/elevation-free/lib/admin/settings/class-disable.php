<?php
/**
 * File Name: class-disable.php
 *
 * Description: This file will disable the comments, comments menu, comments dashboard widget, comments admin bar, comments REST API endpoints, and specific core blocks.
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin\Settings;

/**
 * Disable class
 */
class Disable {

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
		add_action( 'admin_init', array( $this, 'disable_comments' ) );
		add_filter( 'comments_open', array( $this, 'disable_comments_status' ), 20, 2 );
		add_filter( 'pings_open', array( $this, 'disable_comments_status' ), 20, 2 );
		add_filter( 'comments_array', array( $this, 'disable_comments_existing_comments' ), 10, 2 );
		add_action( 'admin_menu', array( $this, 'disable_comments_admin_menu' ) );
		add_action( 'admin_init', array( $this, 'disable_comments_admin_menu_redirect' ) );
		add_action( 'admin_init', array( $this, 'disable_comments_dashboard' ) );
		add_action( 'init', array( $this, 'disable_comments_admin_bar' ) );
		add_filter( 'rest_endpoints', array( $this, 'disable_default_endpoints' ) );
		add_action( 'allowed_block_types_all', array( $this, 'unregister_specific_core_blocks' ) );
	}

	/**
	 * Disable default REST API endpoints
	 *
	 * @param array $endpoints Endpoints.
	 * @return array
	 */
	public function disable_default_endpoints( $endpoints ) {
		$endpoints_to_remove = array(
			'/wp/v2/users',
		);

		if ( ! is_user_logged_in() ) {
			foreach ( $endpoints_to_remove as $rem_endpoint ) {
				foreach ( $endpoints as $maybe_endpoint => $object ) {
					if ( stripos( $maybe_endpoint, $rem_endpoint ) !== false ) {
						unset( $endpoints[ $maybe_endpoint ] );
					}
				}
			}
		}
		return $endpoints;
	}

	/**
	 * Disable comments
	 */
	public function disable_comments() {
		$post_types = get_post_types();
		foreach ( $post_types as $post_type ) {
			if ( post_type_supports( $post_type, 'comments' ) ) {
				remove_post_type_support( $post_type, 'comments' );
				remove_post_type_support( $post_type, 'trackbacks' );
			}
		}
	}

	/**
	 * Disable comments status
	 *
	 * @return bool
	 */
	public function disable_comments_status() {
		return false;
	}

	/**
	 * Disable comments existing comments
	 *
	 * @param array $comments Comments.
	 * @return array
	 */
	public function disable_comments_existing_comments( $comments ) {
		$comments = array();
		return $comments;
	}

	/**
	 * Disable comments admin menu
	 */
	public function disable_comments_admin_menu() {
		remove_menu_page( 'edit-comments.php' );
	}

	/**
	 * Disable comments admin menu redirect
	 */
	public function disable_comments_admin_menu_redirect() {
		global $pagenow;
		if ( 'edit-comments.php' === $pagenow ) {
			wp_safe_redirect( admin_url() );
			exit;
		}
	}

	/**
	 * Disable comments dashboard
	 */
	public function disable_comments_dashboard() {
		remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
	}

	/**
	 * Disable comments admin bar
	 */
	public function disable_comments_admin_bar() {
		if ( is_admin_bar_showing() ) {
			remove_action( 'admin_bar_menu', 'wp_admin_bar_comments_menu', 60 );
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

	/**
	 * Unregister specific core blocks
	 *
	 * @return array
	 */
	public function unregister_specific_core_blocks() {
		$registry         = \WP_Block_Type_Registry::get_instance();
		$registerd_blocks = $registry->get_all_registered();
		$registerd_blocks = array_keys( $registerd_blocks );

		$blocks_to_remove = array(
			'core/buttons',
			'core/button',
			'core/spacer',
		);

		$allowed_block_types = array_diff( $registerd_blocks, $blocks_to_remove );
		$allowed_block_types = array_values( $allowed_block_types );

		return $allowed_block_types;
	}
}
