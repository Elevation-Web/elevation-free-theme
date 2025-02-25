<?php
/**
 * File Name: load.php
 *
 * Description: set the instance of the class and register the menu
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\Admin\Menu;

include_once 'walker-nav.php';

class Load
{
    protected static $_instance;


    public function __construct()
    {
        // $this->mega_menu();
        add_filter('after_setup_theme', [$this, 'register_menus']);
        WalkerNavMenuRegular::instance();
    }

    public function register_menus()
    {
        \register_nav_menus(
            array(
                'menu-1' => esc_html__('Main Menu', 'elevation'),
            )
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
