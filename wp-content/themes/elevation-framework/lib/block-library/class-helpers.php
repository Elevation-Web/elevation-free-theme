<?php
/**
 * File Name: class-helpers.php
 *
 * Description: set the instance of the class and register the settings
 *
 * @package elevation
 */

namespace ElevationFramework\Lib\BlockLibrary;

/**
 * Class Helpers
 *
 * @package ElevationFramework\Lib\BlockLibrary
 */
class Helpers {

	/**
	 * Instance of the class
	 *
	 * @var object
	 */
	protected static $instance;

	/**
	 * Load constructor.
	 */
	public function __construct() {
		add_action( 'wp_head', array( $this, 'elevation_avoid_fouc_css' ), 1 );
		add_filter( 'style_loader_tag', array( $this, 'preload_styles' ), 10, 4 );
		add_filter( 'script_loader_tag', array( $this, 'defer_scripts' ), 10, 3 );
	}

	/**
	 * Get Image from URL, ID or ACF field.
	 *
	 * @param string|array $image The image URL, ID or ACF field.
	 * @param array        $args The arguments to customize the image. Default is null.
	 *
	 * @return string|void
	 */
	public static function global_image( $image, $args = null ) {
		if ( empty( $image ) ) {
			return '';
		}

		$is_url = false;
		if ( filter_var( $image, FILTER_VALIDATE_URL ) ) {
			$is_url = true;
		} elseif ( is_numeric( $image ) ) {
			$image_id = $image;
		} elseif ( isset( $image['image']['ID'] ) ) {
			$image_id = $image['image']['ID'];
		} else {
			return '';
		}

		$defaults = array(
			'echo'          => true,
			'class'         => 'media',
			'decorative'    => null,
			'is_figure'     => true,
			'loading'       => null,
			'size'          => 'full',
			'alt'           => null,
			'icon'          => false,
			'styled_width'  => null,
			'styled_height' => null,
		);

		// Combinar los argumentos proporcionados con los valores predeterminados.
		$args = wp_parse_args( $args, $defaults );

		// Extraer los argumentos como variables locales.
		$echo          = $args['echo'];
		$class         = $args['class'];
		$decorative    = $args['decorative'];
		$is_figure     = $args['is_figure'];
		$loading       = $args['loading'];
		$size          = $args['size'];
		$alt           = $args['alt'];
		$icon          = $args['icon'];
		$styled_width  = $args['styled_width'];
		$styled_height = $args['styled_height'];

		$image_args = array(
			'class'    => $class . '-image',
			'decoding' => 'async',
		);

		$is_lazy = isset( $image['is_lazy'] ) && null === $image['is_lazy'] ? true : ( isset( $image['is_lazy'] ) && false === $image['is_lazy'] ? false : true );

		if ( $is_lazy ) {
			$image_args['loading'] = 'lazy';
		}
		if ( $loading ) {
			$image_args['loading'] = $loading;
		}
		if ( $decorative ) {
			$image_args['alt'] = '';
		}

		if ( $alt ) {
			$image_args['alt'] = $alt;
		}

		$figure = $is_figure ? 'figure' : 'span';

		if ( $is_url ) {
			// If $attachment_id_or_url is a URL, directly print the image by URL.
			$img = sprintf( '<img src="%s" alt="%s" class="%s" loading="%s" decoding="async">', esc_url( $image ), esc_attr( isset( $image['alt'] ) && $image_args['alt'] ? $image_args['alt'] : '' ), esc_attr( $image_args['class'] ), esc_attr( $image_args['loading'] ) );
		} else {
			// Get the attachment image HTML markup.
			$img = wp_get_attachment_image( $image_id, $size, $icon, $image_args );
		}

		$wrapper_style = '';

		if ( $styled_width && $styled_height ) {
			$wrapper_style = ' style="width: ' . $styled_width . 'px; height: ' . $styled_height . 'px;"';
		}

		$image_component = '<' . esc_attr( $figure ) . ' class="' . esc_attr( $class ) . '"' . esc_attr( $wrapper_style ) . '>' . wp_kses_post( $img ) . '</' . esc_attr( $figure ) . '>';

		if ( $echo ) {
			echo wp_kses_post( $image_component );
		} else {
			return $image_component;
		}
	}

	/**
	 * Get the image from ACF.
	 *
	 * @since 1.0.0
	 *
	 * @param array $image_id Image id.
	 * @param array $args The arguments to customize the image. Default is null.
	 *
	 * @return string This returns an caption. If there isn't one, it returns an empty string.
	 */
	public static function global_caption( $image_id = null, $args = null ) {
		if ( ! $image_id ) {
			return;
		}

		$defaults = array(
			'echo'       => true,
			'class_name' => 'media-caption',
			'tag_name'   => 'span',
		);

		$args = wp_parse_args( $args, $defaults );

		$echo       = $args['echo'];
		$class_name = $args['class_name'];
		$tag_name   = $args['tag_name'];
		$is_figure  = $args['is_figure'];

		$image_data = wp_get_attachment_caption( $image_id );
		if ( ! $image_data ) {
			return;
		}

		$caption = '<' . esc_attr( $tag_name ) . ' class="' . esc_attr( $class_name ) . '">' . esc_html( $image_data ) . '</' . esc_attr( $tag_name ) . '>';

		if ( $echo ) {
			echo wp_kses_post( $caption );
		} else {
			return $caption;
		}
	}

	/**
	 * Filter out empty, 0 or "0" values from an array
	 *
	 * @param array $array_to_filter The array to filter.
	 *
	 * @return array
	 */
	public static function array_filter_false( $array_to_filter ) {
		if ( ! is_array( $array_to_filter ) ) {
			return $array_to_filter;
		}

		foreach ( $array_to_filter as $key => $value ) {
			if ( '' === $value || 0 === $value || '0' === $value ) {
				unset( $array_to_filter[ $key ] );
			}
		}
		return $array_to_filter;
	}

	/**
	 * Preload styles
	 *
	 * @param string $html The HTML tag.
	 * @param string $handle The handle of the script.
	 * @param string $href The URL of the script.
	 * @param string $media The media type.
	 *
	 * @return string
	 */
	public function preload_styles( $html, $handle, $href, $media ) {
		if ( ! is_admin() ) {
			if ( str_contains( $href, '/build/blocks/' ) || str_contains( $href, '/build/assets/' ) ) {
				return;
			}
			if ( 'elevation-critical-css' !== $handle ) {
				$html = '<link rel="preload" href="' . $href . '" as="style" id="' . $handle . '" media="' . $media . '" onload="this.onload=null;this.rel=\'stylesheet\'">'
					. '<noscript>' . $html . '</noscript>';
			}
		}
		return $html;
	}

	/**
	 * Add CSS to avoid FOUC
	 *
	 * @return void
	 */
	public function elevation_avoid_fouc_css() {
		echo '<style id="avoid-fouc-css">body{opacity:0;transition:opacity 0.2s ease-in 0.2s;}</style><noscript><style id="reverse-avoid-fouc-css">body{opacity:1!important;}</style></noscript>';
	}

	/**
	 * Defer scripts
	 *
	 * @param string $tag The HTML tag.
	 * @param string $handle The handle of the script.
	 * @param string $source The URL of the script.
	 *
	 * @return string
	 */
	public function defer_scripts( $tag, $handle, $source ) {
		if ( is_admin() || 'elevation-jquery' === $handle ) {
			return $tag;
		}

		if ( str_contains( $source, '/build/blocks/' ) || str_contains( $source, '/build/assets/' ) ) {
			return;
		}

		// Add defer attribute to the script tag.
		$type_or_defer = 'defer="defer"';

		if ( 'elevation-critical-scripts' !== $handle ) {
			$tag = '<script ' . $type_or_defer . ' src="' . $source . '" id="' . $handle . '"></script>';
		}

		return $tag;
	}

	/**
	 * Get the excerpt of a post
	 *
	 * @param int $post_id The post ID.
	 *
	 * @return string
	 */
	public function block_excerpt( $post_id ) {
		$excerpt = get_the_excerpt( $post_id );

		if ( ! $excerpt ) {
			$blocks  = parse_blocks( get_the_content( $post_id ) );
			$excerpt = '';
			foreach ( $blocks as $block ) {
				$excerpt .= render_block( $block );
			}
			$excerpt = wp_strip_all_tags( $excerpt );
		}

		return wp_trim_words( $excerpt, 50, '...' );
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
