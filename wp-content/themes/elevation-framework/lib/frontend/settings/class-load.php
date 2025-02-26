<?php
/**
 * File Name: load.php
 *
 * Description: set the instance of the class and register the settings
 *
 * @package elevation
 */


namespace  ElevationFramework\Lib\Frontend\Settings;

use ElevationFramework\Lib\Frontend\Settings\Helpers as Helpers;

class Load
{

    protected static $_instance;

    public function __construct()
    {
        Helpers::instance();
    }

    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
