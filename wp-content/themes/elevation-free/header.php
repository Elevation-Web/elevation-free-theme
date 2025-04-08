<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package elevation-free
 */

use ElevationFree\Lib\Admin\Menu\Walkernavmenuregular;
use ElevationFree\Lib\Frontend\Settings\Helpers as SettingsHelpers;
use ElevationFree\Lib\BlockLibrary\Helpers;

$custom_logo = get_theme_mod( 'custom_logo' );
if( ! $custom_logo ) {
	$custom_logo = get_template_directory_uri() . '/assets/fonts/images/logo-elevation.webp';
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php SettingsHelpers::body_open(); ?>

	<div id="page" class="site">
		<a class="skiplink cta cta__blue visually-hidden-focusable" href="#primary"><?php esc_html_e( 'Skip to content', 'elevation-free' ); ?></a>
		<header class="header">
			<div class="container">
				<div class="header__branding">
					<a href="<?php echo esc_url( home_url() ); ?>" class="site-title">
						<?php Helpers::global_image( $custom_logo, true, 'footer__media', null, false ); ?>
						<span class="visually-hidden"> <?php echo bloginfo( 'name' ); ?></span>
					</a>
				</div>
				<nav class="header__nav">
					<button class="header__toggle-menu" aria-expanded="false" aria-label="<?php echo esc_attr__( 'Open Menu', 'elevation-free' ); ?>"></button>
					<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'container'      => false,
							'fallback_cb'    => '__return_false',
							'items_wrap'     => '<ul id="%1$s" class="nav %2$s" aria-label="Menu">%3$s</ul>',
							'depth'          => 3,
							'walker'         => Walkernavmenuregular::instance(),
						)
					);
					?>
				</nav>
			</div>
		</header>
