<?php

namespace  ElevationFramework\Lib\Admin\Settings;

class Customizer
{
    protected static $_instance;

    public function __construct()
    {
        add_action('customize_register', [$this, 'customize_register']);
        add_action('customize_preview_init', [$this, 'customize_preview_js']);
        add_action('customize_register', [$this, 'elevation_customize_register']);
    }

    function customize_register($wp_customize)
    {
        $wp_customize->get_setting('blogname')->transport         = 'postMessage';
        $wp_customize->get_setting('blogdescription')->transport  = 'postMessage';
        $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

        if (isset($wp_customize->selective_refresh)) {
            $wp_customize->selective_refresh->add_partial(
                'blogname',
                array(
                    'selector'        => '.site-title a',
                    'render_callback' => [$this, 'customize_partial_blogname'],
                )
            );
            $wp_customize->selective_refresh->add_partial(
                'blogdescription',
                array(
                    'selector'        => '.site-description',
                    'render_callback' => [$this, 'customize_partial_blogdescription'],
                )
            );
        }
    }

    function customize_partial_blogname()
    {
        bloginfo('name');
    }

    function customize_partial_blogdescription()
    {
        bloginfo('description');
    }

    function customize_preview_js()
    {
        wp_enqueue_script('elevation-customizer', ELEVATION_THEME_URL . 'aseets/scripts/components/customizer.js', array('customize-preview'), ELEVATION_VERSION, true);
    }

    function elevation_customize_register($wp_customize)
    {
        // Add a section for the footer logo
        $wp_customize->add_section('footer_logo_section', array(
            'title'    => __('Footer Logo', 'elevation'),
            'priority' => 30,
        ));

        // Add setting for the footer logo
        $wp_customize->add_setting('footer_logo', array(
            'capability'        => 'edit_theme_options',
            'sanitize_callback' => 'esc_url_raw',
        ));

        // Add control for the footer logo
        $wp_customize->add_control(new \WP_Customize_Image_Control($wp_customize, 'footer_logo', array(
            'label'    => __('Footer Logo', 'elevation'),
            'section'  => 'footer_logo_section',
            'settings' => 'footer_logo',
        )));
    }


    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
