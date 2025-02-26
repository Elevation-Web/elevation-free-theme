<?php
/**
 * File Name: class-support.php
 *
 * Description: This file is used to add theme support and other settings.
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin\Settings;

/**
 * Class Support
 *
 * @package ElevationFramework\Lib\Admin\Settings
 */
class Support {

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
		add_action( 'after_setup_theme', array( $this, 'setup_theme' ) );
		add_action( 'init', array( $this, 'register_pattern_categories' ) );
		add_action( 'init', array( $this, 'theme_json' ) );
		add_filter( 'wp_check_filetype_and_ext', array( $this, 'check_filetype' ), 10, 4 );
		add_filter( 'upload_mimes', array( $this, 'allow_mimes' ) );
		add_action( 'wp_dashboard_setup', array( $this, 'remove_draft_widget' ), 999 );
		add_filter( 'allow_dev_auto_core_updates', '__return_false' );
		add_filter( 'get_the_archive_title', array( $this, 'get_title' ) );
	}

	/**
	 * Setup theme
	 */
	public function setup_theme() {
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'custom-logo' );

		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		add_theme_support( 'widgets' );

		add_theme_support( 'responsive-embeds' );

		add_theme_support( 'block-templates' );
		remove_theme_support( 'core-block-patterns' );
	}

	/**
	 * Register block pattern categories
	 */
	public function register_pattern_categories() {
		register_block_pattern_category(
			'contact',
			array( 'label' => __( 'Contact Template', 'elevationweb' ) )
		);
		register_block_pattern_category(
			'media-center',
			array( 'label' => __( 'Media Center', 'elevationweb' ) )
		);
	}

	/**
	 * Add block styles support
	 */
	public function theme_json() {
		add_theme_support( 'wp-block-styles' );
	}

	/**
	 * Check file type
	 *
	 * @param array  $data File data array.
	 * @param array  $file File array.
	 * @param string $filename File name.
	 * @param array  $mimes Mime types.
	 *
	 * @return array
	 */
	public function check_filetype( $data, $file, $filename, $mimes ) {
		global $wp_version;

		$filetype = wp_check_filetype( $filename, $mimes );

		return array(
			'ext'             => $filetype['ext'],
			'type'            => $filetype['type'],
			'proper_filename' => $data['proper_filename'],
		);
	}

	/**
	 * Allow mime types
	 *
	 * @param array $mimes Mime types.
	 *
	 * @return array
	 */
	public function allow_mimes( $mimes ) {
		$mimes['json'] = 'application/json';
		$mimes['svg']  = 'image/svg+xml';
		$mimes['svgz'] = 'image/svg+xml';
		$mimes['csv']  = 'text/csv';
		return $mimes;
	}

	/**
	 * Remove draft widget
	 */
	public function remove_draft_widget() {
		remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' );
	}

	/**
	 * Get the title
	 *
	 * @param string $title Title.
	 *
	 * @return string
	 */
	public function get_title( $title ) {
		if ( is_category() ) {
			$title = single_cat_title( '', false );
		} elseif ( is_tag() ) {
			$title = single_tag_title( '', false );
		} elseif ( is_author() ) {
			$title = '<span class="vcard">' . get_the_author() . '</span>';
		} elseif ( is_tax() ) { // for custom post types.
			// translators: %1$s is the term title.
			$title = single_term_title( '', false );
		} elseif ( is_post_type_archive() ) {
			$title = post_type_archive_title( '', false );
		}
		return $title;
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
