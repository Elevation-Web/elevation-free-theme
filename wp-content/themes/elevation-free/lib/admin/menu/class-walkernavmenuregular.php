<?php
/**
 * File Name: class-walkernavmenuregular.php
 *
 * Description: walker class for the navigation menu
 *
 * @package elevation-free
 */

namespace ElevationFree\Lib\Admin\Menu;

/**
 * Class Walkernavmenuregular
 *
 * Description: walker class for the navigation menu
 *
 * @package elevation-free
 */
class Walkernavmenuregular extends \Walker_Nav_Menu {

	/**
	 * Instance of the class
	 *
	 * @var null
	 */
	protected static $instance;

	/**
	 * Class constructor.
	 */
	public function __construct() {}

	/**
	 * Start level (for submenu)
	 *
	 * @param string $output The output.
	 * @param int    $depth The depth.
	 * @param array  $args The arguments.
	 */
	public function start_lvl( &$output, $depth = 0, $args = null ) {
		$output .= '<ul class="nav__sub-menu nav__sub-menu--level-' . $depth . '">';
	}

	/**
	 * End level (for submenu)
	 *
	 * @param string $output The output.
	 * @param int    $depth The depth.
	 * @param array  $args The arguments.
	 */
	public function end_lvl( &$output, $depth = 0, $args = null ) {
		$output .= '</ul>';
	}

	/**
	 * Start element
	 *
	 * @param string $output The output.
	 * @param object $item The item.
	 * @param int    $depth The depth.
	 * @param array  $args The arguments.
	 * @param int    $id The ID.
	 */
	public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
		$classes   = empty( $item->classes ) ? array() : (array) $item->classes;
		$classes[] = 'menu-item-' . $item->ID;

		// Check for a submenu.
		$has_submenu = in_array( 'menu-item-has-children', $classes, true );
		$class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args ) );
		$class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

		$id = 'menu-item-' . $item->ID;
		$id = apply_filters( 'nav_menu_item_id', $id, $item, $args );
		$id = $id ? ' id="' . esc_attr( $id ) . '"' : '';

		$href    = ! empty( $item->url ) ? $item->url : '#';
		$output .= '<li' . $id . $class_names . '>';

		// If it's a menu item with submenu, add a button for the submenu toggle.
		if ( $has_submenu ) {
			$output .= '<a href="' . esc_url( $href ) . '" aria-expanded="false">' . esc_html( $item->title ) . '</a>';
			$output .= '<button class="nav__button" aria-expanded="false"><span><span class="visually-hidden">show submenu for “' . esc_html( $item->title ) . '”</span></span></button>';
		} else {
			$output .= '<a href="' . esc_url( $href ) . '">' . esc_html( $item->title ) . '</a>';
		}
	}

	/**
	 * End element
	 *
	 * @param string $output The output.
	 * @param object $item The item.
	 * @param int    $depth The depth.
	 * @param array  $args The arguments.
	 */
	public function end_el( &$output, $item, $depth = 0, $args = null ) {
		$output .= '</li>';
	}

	/**
	 * Get the instance of the class
	 */
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
