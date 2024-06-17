<?php

namespace ElevationFramework\Lib\Directory;

class Resource extends Directory
{
    protected static $_instance;
    public $post_type = 'resources';
    public $label = 'Resource';

    public $labels = array();
    public $directory = [
        'posts_per_page' =>  12,
    ];

    public $taxonomies = [
        [
            'name' => 'resources_categories', // se agrega el prefix de resource
            'label' => 'Category',
            'plural_label' => 'Categories',
            'args' => array(
                'labels' => [
                    'view_item' => 'view cat'
                ]
            ),
            'is_checkbox' => false
        ],
        [
            'name' => 'resources_tags', // se agrega el prefix de resource
            'label' => 'Tag',
            'plural_label' => 'Tags',
        ],
        [
            'name' => 'resources_types', // se agrega el prefix de resource
            'label' => 'Types',
            'plural_label' => 'Types',
            'in_modal' => false /// esto es para que no aparezca en el modal
        ],

    ];

    public function __construct()
    {
        parent::__construct();
    }

    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
