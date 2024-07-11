<?php

namespace  ElevationFramework\Lib\Admin\Assets;

class Load
{
    protected static $_instance;

    public function __construct()
    {
        add_action('admin_head', [$this, 'add_admin_styles']);
        add_action('enqueue_block_editor_assets', [$this, 'custom_gutenberg_scripts']);
    }

    public function add_admin_styles()
    {
        echo '<link rel="stylesheet" href="' . ELEVATION_THEME_URL . '/build/assets/index.css' . '" media="all" />';
    }

    public function custom_gutenberg_scripts()
    {
        wp_enqueue_script(
            'custom-gutenberg-js',
            get_template_directory_uri() . '/build/assets/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-hooks')
        );
    }



    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
