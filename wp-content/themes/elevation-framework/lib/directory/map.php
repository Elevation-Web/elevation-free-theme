<?php

namespace ElevationFramework\Lib\Directory;

class Map extends Directory
{
    protected static $_instance;

    public $post_type = 'map_directory';
    public $label = 'Map';
    public $labels = array();
    public $directory = [
        'order' => 'ASC',
        'posts_per_page' =>  15,
    ];

    public $lat2 = '';
    public $lon2 = '';
    public $taxonomies = [
        [
            'name' => 'map_country',
            'label' => 'Country',
            'plural_label' => 'Countries',
            'args' => array(
                'labels' => [
                    'view_item' => 'view cat'
                ]
            ),
        ],
        [
            'name' => 'map_type',
            'label' => 'Type',
            'plural_label' => 'Types',
        ],
    ];

    public function __construct()
    {
        parent::__construct();

        add_action('init', [$this, 'add_map_script']);
        add_filter('posts_fields', array($this, 'posts_fields'), 10, 2);
        add_filter('posts_join', array($this, 'posts_join'), 10, 2);
        add_filter('posts_where', array($this, 'posts_where'), 10, 2);
        add_filter('posts_orderby', array($this, 'posts_orderby'), 10, 2);
    }
    public function posts_fields($sql, $query)
    {
        global $wpdb;
        $geo_query = $query->get('geo_query');
        if ($geo_query) {

            if ($sql) {
                $sql .= ', ';
            }
            $sql .= $this->haversine_term($geo_query) . " AS geo_query_distance";
        }
        return $sql;
    }

    public function posts_join($sql, $query)
    {
        global $wpdb;
        $geo_query = $query->get('geo_query');
        if ($geo_query) {

            if ($sql) {
                $sql .= ' ';
            }
            $sql .= "INNER JOIN " . $wpdb->prefix . "postmeta AS geo_query_lat ON ( " . $wpdb->prefix . "posts.ID = geo_query_lat.post_id ) ";
            $sql .= "INNER JOIN " . $wpdb->prefix . "postmeta AS geo_query_lng ON ( " . $wpdb->prefix . "posts.ID = geo_query_lng.post_id ) ";
        }
        return $sql;
    }

    // match on the right metafields, and filter by distance
    public function posts_where($sql, $query)
    {
        global $wpdb;
        $geo_query = $query->get('geo_query');
        if ($geo_query) {
            $lat_field = 'latitude';
            if (!empty($geo_query['lat_field'])) {
                $lat_field =  $geo_query['lat_field'];
            }
            $lng_field = 'longitude';
            if (!empty($geo_query['lng_field'])) {
                $lng_field =  $geo_query['lng_field'];
            }
            $distance = 20;
            if (isset($geo_query['distance'])) {
                $distance = $geo_query['distance'];
            }
            if ($sql) {
                $sql .= " AND ";
            }
            $haversine = $this->haversine_term($geo_query);
            $new_sql = "( geo_query_lat.meta_key = %s AND geo_query_lng.meta_key = %s AND " . $haversine . " <= %f )";
            $sql .= $wpdb->prepare($new_sql, $lat_field, $lng_field, $distance);
        }
        return $sql;
    }

    // handle ordering
    public function posts_orderby($sql, $query)
    {
        $geo_query = $query->get('geo_query');
        if ($geo_query) {
            $orderby = $query->get('orderby');
            $order   = $query->get('order');
            if ($orderby == 'distance') {
                if (!$order) {
                    $order = 'ASC';
                }
                $sql = 'geo_query_distance ' . $order;
            }
        }
        return $sql;
    }

    public static function the_distance($post_obj = null, $round = false)
    {
        echo self::get_the_distance($post_obj, $round);
    }

    public static function get_the_distance($post_obj = null, $round = false)
    {
        global $post;
        if (!$post_obj) {
            $post_obj = $post;
        }
        if (property_exists($post_obj, 'geo_query_distance')) {
            $distance = $post_obj->geo_query_distance;
            if ($round !== false) {
                $distance = round($distance, $round);
            }
            return $distance;
        }
        return false;
    }

    private function haversine_term($geo_query)
    {
        global $wpdb;
        $units = "miles";
        if (!empty($geo_query['units'])) {
            $units = strtolower($geo_query['units']);
        }
        $radius = 3959;
        if (in_array($units, array('km', 'kilometers'))) {
            $radius = 6371;
        }
        $lat_field = "geo_query_lat.meta_value";
        $lng_field = "geo_query_lng.meta_value";
        $lat = 0;
        $lng = 0;
        if (isset($geo_query['latitude'])) {
            $lat = $geo_query['latitude'];
        }
        if (isset($geo_query['longitude'])) {
            $lng = $geo_query['longitude'];
        }
        $haversine  = "( " . $radius . " * ";
        $haversine .=     "acos( cos( radians(%f) ) * cos( radians( " . $lat_field . " ) ) * ";
        $haversine .=     "cos( radians( " . $lng_field . " ) - radians(%f) ) + ";
        $haversine .=     "sin( radians(%f) ) * sin( radians( " . $lat_field . " ) ) ) ";
        $haversine .= ")";
        $haversine  = $wpdb->prepare($haversine, array($lat, $lng, $lat));
        return $haversine;
    }

    public function add_map_script()
    {
        wp_enqueue_script('elevation-custom-map-script', ELEVATION_THEME_URL . '/lib/directory/assets/map.js', array(), '1.0', true);
    }

    public function after_content()
    {
    }

    public function get_directory_loop($classname = '', $feature_posts = [], $posts_per_page = null)
    {

        $html = '<div class="row option-2 row-cards row row-cols-1">';
        $html .= '<div class="block__col col-xl-7 col-12 option-2 row-cards row row-cols-1" id="data-container-directory" data-post-type="' . $this->post_type . '">';
        $html .= $this->get_directory();
        $html .= '</div>';
        $html .= '<div class="block__col col-xl-5 col-12">
            <div id="sidebar">
                <div class="innerWrapSelector">
                    <div class="block__map">
                        <div class="acf-map" data-zoom="16"></div>
                    </div>
                </div>
            </div>
        </div>';
        $html .= '</div>';

        echo $html;
    }

    /// this called before the loop (too in directory filtered)
    public function set_custom_args($args)
    {
        $userLat           = '';
        $userLon           = '';

        if (!empty($args['s'])) {
            $latLng  = $this->get_lan_lon(sanitize_text_field($args['s']));
            $userLat = $latLng[0];
            $userLon = $latLng[1];
            $miles = isset($_GET['findMiles']) ? sanitize_text_field($_GET['findMiles']) : 40;

            if (!empty($userLat) && !empty($userLon)) {
                $this->lon2 = $userLon;
                $this->lat2 = $userLat;

                $args['geo_query'] =
                    array(
                        'lat_field' => 'map_latitude',
                        'lng_field' => 'map_longitude',
                        'latitude'  => $userLat,
                        'longitude' => $userLon,
                        'distance'  => $miles,
                        'units'     => 'miles'
                    );

                $args['orderby'] = 'distance';
                $args['order'] = $this->directory['order'];

                $args['s'] = '';
            }
        } else {
            $this->lon2 = false;
            $this->lat2 = false;
        }

        return $args;
    }

    function get_lan_lon($address)
    {
        $address = sanitize_text_field($address);
        $address = preg_replace('/\s+/', '+', $address);

        $url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . $address . '&key=AIzaSyBrarmE2fRT5u5bfjAOeikL3ecnQvYr2HE';

        $data = wp_remote_get($url);
        $jsonData = json_decode($data['body'], true);
        $lat = $jsonData['results'][0]['geometry']['location']['lat'];
        $lng = $jsonData['results'][0]['geometry']['location']['lng'];

        return [$lat, $lng];
    }

    public function get_distance($lat1, $lon1)
    {
        $lat2 = $this->lat2;
        $lon2 = $this->lon2;

        if ($lat2 && $lon2) {
            $R = 6371; // Radius of the earth in km
            $dLat = deg2rad($this->lat2 - $lat1);  // deg2rad below
            $dLon = deg2rad($this->lon2 - $lon1);
            $a = sin($dLat / 2) * sin($dLat / 2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($dLon / 2) * sin($dLon / 2);
            $c = 2 * atan2(sqrt($a), sqrt(1 - $a));
            $d = $R * $c; // Distance in km
            return $d * 0.62137; // KM * 0.62137 = MILES
        }

        return 0;
    }

    public static function instance()
    {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }
}
