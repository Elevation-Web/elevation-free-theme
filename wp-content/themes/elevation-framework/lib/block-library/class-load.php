<?php
/**
 * File Name: class-load.php
 *
 * Description: This file is used to load the blocks.
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\BlockLibrary;

/**
 * Load class
 */
class Load {

	/**
	 * Instance of the class
	 *
	 * @var object
	 */
	protected static $instance;

	/**
	 * Block directory
	 *
	 * @var string
	 */
	public $block_dir = ELEVATION_THEME_DIR . '/build/blocks/';

	/**
	 * Constructor
	 */
	public function __construct() {
		Helpers::instance();
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );
		add_filter( 'styles_inline_size_limit', '__return_zero' );
		add_action( 'init', array( $this, 'load_blocks' ), 10 );
		add_filter( 'block_categories_all', array( $this, 'block_categories' ), 10, 2 );
	}

	/**
	 * Get all blocks
	 *
	 * @return array
	 */
	public function get_blocks() {
		$block_path = get_template_directory() . '/build/blocks/';

		// Get a list of all subdirectories in the blocks directory.
		$directories = glob( $block_path . '*/*', GLOB_ONLYDIR );

		return $directories;
	}

	/**
	 * Load blocks
	 */
	public function load_blocks() {
		$directories = $this->get_blocks();

		foreach ( $directories as $dir ) {
			// Check if block.json file exists in block directory.
			if ( file_exists( $dir . '/block.json' ) ) {
				// Register block.
				register_block_type( $dir );
			}
		}
	}

	/**
	 * Add elevation category to blocks
	 *
	 * @param array $categories Array of block categories.
	 * @return array
	 */
	public function block_categories( $categories ) {

		// Check to see if we already have a elevation category.
		$include = true;
		foreach ( $categories as $category ) {
			if ( 'elevation' === $category['slug'] ) {
				$include = false;
			}
		}

		if ( $include ) {
			$categories = array_merge(
				array(
					array(
						'slug'  => 'elevation-blocks',
						'title' => 'Elevation Blocks',
					),
				),
				$categories
			);
		}

		return $categories;
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
