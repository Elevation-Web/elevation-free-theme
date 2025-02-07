<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package elevation
 */

use ElevationFramework\Lib\Admin\Menu\WalkerNav;
use ElevationFramework\Lib\BlockLibrary\Helpers;
use ElevationFramework\Lib\Frontend\Settings\Helpers as SettingsHelpers;

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<?php
$nav_class = '';
$header_class = '';
$menu_type = '';
$logo = get_field('header_logo_dark', 'option');
if (get_field('header_mega_menu', 'option')) {
	$menu_type = get_field('choose_type_menu', 'option');
	$mega_menu_on = ' mega-menu-active ' . $menu_type;
} else {
	$mega_menu_on = ' ';
}


$header_transparent = get_field('header_transparent', get_the_ID());
$body_classes = $header_transparent == true || (isset($args['header_type']) && $args['header_type'] === 'transparent') ? ['header__transparent'] : '';
?>

<body <?php body_class($body_classes); ?>>
	<?php SettingsHelpers::body_open(); ?>
	<div id="page" class="site">
		<a class="skiplink cta cta__blue visually-hidden-focusable" href="#primary"><?php esc_html_e('Skip to content', 'elevation'); ?></a>
		<header class="header<?= esc_attr($header_class); ?>">
			<div class="container">
				<?php
				wp_nav_menu([
					'theme_location'  => 'menu-1',
					'container' => false,
					'fallback_cb' => '__return_false',
					'items_wrap' => '<ul id="%1$s" class="nav %2$s" aria-label="Menu">%3$s</ul>',
					'depth' => 1,
					'walker' => WalkerNav::instance()
				]);
				?>
			</div>
		</header>