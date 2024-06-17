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
		<?php if (
			!is_page_template('page-templates/login.php') &&
			!is_page_template('page-templates/mega-menu-1.php') &&
			!is_page_template('page-templates/mega-menu-2.php') &&
			!is_page_template('page-templates/mega-menu-3.php') &&
			!is_page_template('page-templates/mega-menu-4.php') &&
			!is_page_template('page-templates/mega-menu-5.php') &&
			!is_page_template('page-templates/mega-menu-6.php')
		) : ?>
			<a class="skiplink cta cta__blue visually-hidden-focusable" href="#primary"><?php esc_html_e('Skip to content', 'elevation'); ?></a>
			<header class="header<?= esc_attr($header_class); ?><?= esc_attr($mega_menu_on); ?>">
				<div class="header__section-search">
					<div class="header__container container-fluid container-xl">
						<div class="header__search">
							<form method="get" id="header__search-form" class="header__search-form" action="/">
								<label class="visually-hidden" for="searchInput">Search for:</label>
								<input type="text" value="" name="s" id="searchInput" placeholder="Search here...">
								<input type="submit" id="searchSubmit" value="Search">
							</form>
						</div>
					</div>
				</div>
				<div class="header__section">
					<span class="header__section--fixed-bg"></span>
					<div class="header__container container">
						<nav class="header__nav navbar navbar-expand-xl<?= esc_attr($nav_class); ?>">
							<?php if ($menu_type == 'mega-menu-type-3' || $menu_type == 'mega-menu-type-4') : ?>
								<div class="header__top-menu">
									<span class="header__top-menu--bg" style="background-color: #F2F2F2;"></span>
									<?php
									wp_nav_menu([
										'theme_location'  => 'menu-2',
										'container' => false,
										'fallback_cb' => '__return_false',
										'items_wrap' => '<ul id="%1$s" class="nav navbar-nav %2$s header__top-menu-list" aria-label="Menu">%3$s</ul>',
										'depth' => 1,
										'walker' => WalkerNav::instance()
									]);
									?>
									<button id="open-search">
										<span class="label visually-hidden">Search</span>
									</button>
								</div>
							<?php endif; ?>
							<div class="header__navbar">
								<a href="<?php echo esc_url(home_url('/')); ?>" rel="home" class="header__logo navbar-brand">
									<?php Helpers::global_image($logo, ['loading' => 'eager']); ?>
									<?php
									// if ($header_mode == 'light-on-mobile' && $logo_2) {
									// 	($logo_2, true, 'media-2');
									// }
									?>
									<span class="visually-hidden"><?php bloginfo('name'); ?></span>
								</a>
								<?php
								$header_mobile_cta = get_field('header_mobile_cta', 'option');
								if ($header_mobile_cta) :
									$link_url = $header_mobile_cta['url'];
									$link_title = $header_mobile_cta['title'];
									$link_target = $header_mobile_cta['target'] ? $header_mobile_cta['target'] : '_self';
								?>
									<div class="header__mobile">
										<a href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>" class="cta cta--cta-red"><?php echo esc_html($link_title); ?></a>
									</div>
								<?php endif; ?>

								<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#NavDropdown" aria-controls="NavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span class="navbar-toggler-icon"></span>
									<span class="visually-hidden">Menu</span>
								</button>
							</div>
							<div class="header__bottom-menu">
								<div class="collapse navbar-collapse" id="NavDropdown">
									<?php if (is_page_template('page-templates/portal.php')) : ?>
										<div class="wrapper-collapse">
											<?php
											wp_nav_menu([
												'theme_location'  => 'menu-4',
												'container' => false,
												'fallback_cb' => '__return_false',
												'items_wrap' => '<ul id="%1$s" class="nav navbar-nav %2$s" aria-label="Menu">%3$s</ul>',
												'depth' => 1,
												'walker' => WalkerNav::instance()
											]);

											// User Account Details.
											$user_id = get_current_user_id();
											$user_data = get_userdata($user_id);
											$user_name = $user_data->display_name;
											?>
											<div class="user-dropdown-wrap">
												<button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
													<div class="icon-user">
														<?php Helpers::global_image(get_template_directory_uri() . '/src/assets/images/login-icon.png', ['alt' => "defual icon"]); ?>
													</div>
													<?= $user_name; ?>'s Dashboard
													<div class="icon-dropdown"></div>
												</button>
												<div class="dropdown-menu dropdown-menu-lg-end">
													<a class="dropdown-item" href="/member-portal/">Portal</a>
													<a class="dropdown-item" href="/member-portal/">Profile Edit</a>
													<a class="dropdown-item" href="<?= wp_logout_url(home_url('')); ?>">Logout</a>
												</div>
											</div>
										</div>
									<?php else : ?>
										<div class="wrapper-collapse">
											<?php
											if (get_field('header_mega_menu', 'option')) {
												$depth = 1;
											} else {
												$depth = 3;
											}

											wp_nav_menu([
												'theme_location'  => 'menu-1',
												'container' => false,
												'fallback_cb' => '__return_false',
												'items_wrap' => '<ul id="%1$s" class="nav navbar-nav %2$s" aria-label="Menu">%3$s</ul>',
												'depth' => $depth,
												'walker' => WalkerNav::instance()
											]);
											?>

											<?php if (
												$menu_type == 'mega-menu-type-1' ||
												$menu_type == 'mega-menu-type-2' ||
												$menu_type == 'mega-menu-type-5' ||
												$menu_type == 'mega-menu-type-6'
											) : ?>

												<button id="open-search">
													<span class="label visually-hidden">Search</span>
												</button>
											<?php endif; ?>

											<div class="mobile-wrapper">
												<?php
												wp_nav_menu([
													'theme_location'  => 'menu-2',
													'container' => false,
													'fallback_cb' => '__return_false',
													'items_wrap' => '<ul id="%1$s" class="nav navbar-nav %2$s header__top-menu-list" aria-label="Menu">%3$s</ul>',
													'depth' => 1,
													'walker' => WalkerNav::instance()
												]);
												?>

												<button id="open-search-mobile">
													<span class="label visually-hidden">Search</span>
												</button>
											</div>
										</div>
									<?php endif; ?>
								</div>
							</div>
						</nav>
					</div>
				</div>

				<?php
				if (get_field('header_mega_menu', 'option')) :
					$mega_menu_file = ELEVATION_THEME_DIR . '/lib/admin/menu/mega-menu.php';
					if (file_exists($mega_menu_file)) {
						include $mega_menu_file;
					}
				endif;
				?>

			</header><!-- #site-header -->

		<?php endif; ?>