<?php

namespace  ElevationFramework\Lib\BlockLibrary;

class Load
{
    protected static $_instance;

    public $block_dir = ELEVATION_THEME_DIR . '/build/blocks/';

    public function __construct()
    {
        Helpers::instance();
        add_filter('should_load_separate_core_block_assets', '__return_true');
        add_filter('styles_inline_size_limit', '__return_zero');
        add_action('init', [$this, 'load_blocks'], 10);
        add_filter('block_categories_all', [$this, 'block_categories'], 10, 2);
    }

    public function get_blocks()
    {
        $block_path = get_template_directory() . '/build/blocks/';

        // Get a list of all subdirectories in the blocks directory
        $directories = glob($block_path . '*/*', GLOB_ONLYDIR);

        return $directories;
    }

    public function load_blocks()
    {
        $directories = $this->get_blocks();

        foreach ($directories as $dir) {
            // Check if block.json file exists in block directory
            if (file_exists($dir . '/' . 'block.json')) {
                // Register block
                register_block_type($dir);
            }
        }
    }

    public function block_categories($categories)
    {

        // Check to see if we already have a elevation category
        $include = true;
        foreach ($categories as $category) {
            if ('elevation' === $category['slug']) {
                $include = false;
            }
        }

        if ($include) {
            $categories = array_merge(
                [
                    [
                        'slug'  => 'elevation-blocks',
                        'title' => 'Elevation Blocks'
                    ]
                ],
                $categories
            );
        }

        return $categories;
    }

    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
