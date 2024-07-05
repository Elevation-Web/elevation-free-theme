<?php

namespace  ElevationFramework\Lib\Admin\Assets;

class Load
{
    protected static $_instance;

    public function __construct()
    {
        add_action('admin_head', [$this, 'add_admin_styles']);
    }

    public function add_admin_styles()
    {
        echo '<link rel="stylesheet" href="' . ELEVATION_THEME_URL . '/build/assets/index.css' . '" media="all" />';
    }


    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
