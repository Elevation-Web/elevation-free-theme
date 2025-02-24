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

use ElevationFramework\Lib\Admin\Menu\WalkerNavMenuRegular;
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

<body <?php body_class(); ?>>

	<?php SettingsHelpers::body_open(); ?>

	<div id="page" class="site">
		<a class="skiplink cta cta__blue visually-hidden-focusable" href="#primary"><?php esc_html_e('Skip to content', 'elevation'); ?></a>
		<header class="header">
			<div class="container">
				<div class="header__branding">
					<?php
					if (is_front_page()) :
					?>
						<h1 class="site-title">
							<?php the_custom_logo(); ?>
							<span class="visually-hidden"> <?php bloginfo('name'); ?></span>
						</h1>
					<?php else : ?>
						<p class="site-title visually-hidden">
							<?php the_custom_logo(); ?>
							<span class="visually-hidden"> <?php bloginfo('name'); ?></span>
						</p>
					<?php endif; ?>
				</div>
				<nav class="header__nav">
					<button class="header__toggle-menu" aria-expanded="false" aria-label="<?php echo esc_attr__('Open Menu', 'elevation'); ?>"></button>
					<?php
					wp_nav_menu([
						'theme_location'  => 'menu-1',
						'container' => false,
						'fallback_cb' => '__return_false',
						'items_wrap' => '<ul id="%1$s" class="nav %2$s" aria-label="Menu">%3$s</ul>',
						'depth' => 3,
						'walker' => WalkerNavMenuRegular::instance(),
					]);
					?>
				</nav>
			</div>
		</header>