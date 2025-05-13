<?php
/**
 * File Name: render.php
 *
 * Description: Render function for the image with srcset block
 *
 * @package elevation-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ElevationBlocks\Lib\BlockLibrary\Helpers;

$img_id = 0;

if ( isset( $attributes['img']['id'] ) || isset( $attributes['img']['url'] ) ) :
	$img_id                 = isset( $attributes['img']['id'] ) ? $attributes['img']['id'] : ( Helpers::is_external_url( $attributes['img']['url'] ) ? $attributes['img']['url'] : home_url() . $attributes['img']['url'] );
	$img_inherit_class_name = '';
	$loading                = $attributes['isLazy'] ? 'lazy' : 'eager';

	if ( isset( $attributes['className'] ) ) {
		$img_inherit_class_name .= ! empty( $attributes['className'] ) ? $attributes['className'] : '';
	}

	if ( isset( $attributes['img']['inheritClassName'] ) ) {
		$img_inherit_class_name .= ( $img_inherit_class_name ? ' ' : '' ) . $attributes['img']['inheritClassName'];
	}

	if ( isset( $attributes['inheritClassName'] ) ) {
		$img_inherit_class_name .= ( $img_inherit_class_name ? ' ' : '' ) . $attributes['inheritClassName'];
	}

	$styled_args = array();

	if ( isset( $attributes['img']['styledWidth'] ) && isset( $attributes['img']['styledHeight'] ) ) {
		$styled_args = array(
			'styled_width'  => $attributes['img']['styledWidth'],
			'styled_height' => $attributes['img']['styledHeight'],
		);
	}

	if ( isset( $attributes['link']['url'] ) && '' !== $attributes['link']['url'] ) :
		$target = $attributes['link']['target'] ? 'target="_blank"  rel="noopener noreferrer"' : '';
		echo '<a href="' . esc_url( $attributes['link']['url'] ) . '" class="' . esc_attr( $img_inherit_class_name ) . '"' . esc_attr( $target ) . '>';
		Helpers::global_image(
			$img_id,
			array(
				'is_figure' => false,
				'loading'   => $loading,
			),
			...$styled_args
		);
		Helpers::global_caption( $img_id );
		echo '</a>';
	else :
		Helpers::global_image(
			$img_id,
			array(
				'class'     => $img_inherit_class_name,
				'is_figure' => false,
				'loading'   => $loading,
				...$styled_args,
			)
		);
		Helpers::global_caption( $img_id );
	endif;



endif;
