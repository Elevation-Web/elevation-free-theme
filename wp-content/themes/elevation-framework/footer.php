<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package elevation
 */

use ElevationFramework\Lib\BlockLibrary\Helpers;
use ElevationFramework\Lib\Admin\Menu\WalkerNav;

$logo = get_field('footer_logo', 'option');
$socials = get_field('footer_social_network', 'option');
$address_title = get_field('footer_address_title', 'option');
$address = get_field('footer_address', 'option');
$contact_title = get_field('footer_contact_title', 'option');
$email = get_field('footer_email', 'option');
$phone = get_field('footer_phone', 'option');
$links = get_field('footer_links', 'option');
$ein = get_field('footer_ein', 'option');

?>
<?php if (!is_page_template('page-templates/login.php')) : ?>

	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__top">

				<div class="footer__col footer__col--left">

					<div class="footer__inner-col">

						<div class="footer__logo">
							<a href="<?php echo esc_url(home_url('/')); ?>">
								<?php Helpers::global_image($logo, true, 'footer__media', null, false); ?>
								<span class="visually-hidden"><?php bloginfo('name'); ?></span>
							</a>
						</div>

						<?php if (!empty($socials)) : ?>
							<div class="footer__social">
								<ul class="social-network">
									<?php foreach ($socials as $social) : ?>
										<?php if (isset($social['url']) && !empty($social['url']) || isset($social['email']) && !empty($social['email'])) : ?>
											<li>
												<?php if (isset($social['email']) && !empty($social['email'])) : ?>
													<a href="mailto:<?= esc_html($social['email']); ?>" target="_blank" class="light-icon" rel="noopener noreferrer">
												<?php else : ?>
													<a href="<?= esc_html($social['url']); ?>" target="_blank" class="light-icon" rel="noopener noreferrer">
												<?php endif; ?>
														<span class="icon--<?= esc_html($social['icon']); ?>"></span>
														<span class="visually-hidden"><?= esc_html($social['icon']); ?></span>
													</a>
											</li>
										<?php endif; ?>
									<?php endforeach; ?>
								</ul>
							</div>
						<?php endif; ?>

					</div>

					<div class="footer__inner-col">
						<div class="footer__menu">
							<?php
							wp_nav_menu([
								'theme_location'  => 'menu-3',
								'container' => false,
								'depth' => 1,
								'items_wrap' => '<ul id="%1$s" class="%2$s" aria-label="Menu">%3$s</ul>',
							]);
							?>
						</div>
					</div>

					<div class="footer__inner-col">
						<?php if ($address_title) : ?>
							<div class="footer__title"><?= esc_html($address_title); ?></div>
						<?php else : ?>
							<div class="footer__title">Address</div>
						<?php endif; ?>
	
						<?php if ($address) : ?>
							<div class="footer__address">
								<?= wp_kses_post($address); ?>
							</div>
						<?php endif; ?>
	
						<?php if ($email || $phone) : ?>
							<?php if ($address_title) : ?>
								<div class="footer__title"><?= esc_html($address_title); ?></div>
							<?php else : ?>
								<div class="footer__title">Contact</div>
							<?php endif; ?>
							<div class="footer__contact">
								<?php if ($email) : ?>
									<div class="footer__contact--row">
										<span class="footer__contact--label">email:</span>
										<a href="mailto:<?= esc_html($email); ?>"><?= esc_html($email); ?></a>
									</div>
								<?php endif; ?>
								<?php if ($phone) : ?>
									<div class="footer__contact--row">
										<span class="footer__contact--label">tel:</span>
										<a href="tel:<?= esc_html(str_replace(' ', '', $phone)); ?>"> <?= esc_html($phone); ?></a>
									</div>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					</div>

				</div>

				<div class="footer__col footer__col--right">
					<div class="footer__form" id="sign_up">
						<?php echo do_shortcode('[gravityform id="1" title="true" description="true" ajax="true"]'); ?>
					</div>
				</div>

			</div>

			<div class="footer__bottom">
				<div class="footer__bottom--left">
					<span class="footer__copyrigth">Copyright © <?php echo date("Y"); ?>. <?php bloginfo('name'); ?>.</span>
					<?php if ($ein) : ?>
						<span class="footer__ein"><?= esc_html($ein); ?>.</span>
					<?php endif; ?>
					<span class="footer__createdby">
						Nonprofit Website Design by <a href="https://www.elevationweb.org/portfolio/" target="_blank" title="Nonprofit Website Design ELEVATION" rel="noopener noreferrer">Elevation Web</a>
					</span>
				</div>
				<div class="footer__bottom--right">
					<?php if (have_rows('footer_links', 'option')) : ?>
						<span class="footer__links">
							<?php
							while (have_rows('footer_links', 'option')) : the_row();
								$footer_links = get_sub_field('link');
								if ($footer_links) {
									$footer_link_url = $footer_links['url'];
									$footer_link_title = $footer_links['title'];
									$footer_link_target = $footer_links['target'] ? $footer_links['target'] : '_self';
								}
							?>
								<?php if ($footer_links) : ?>
									<a href="<?php echo esc_url($footer_link_url); ?>" target="<?php echo esc_attr($footer_link_target); ?>" role="button"><?php echo esc_html($footer_link_title); ?></a>
								<?php endif; ?>
							<?php endwhile; ?>
						</span>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</footer>

<?php endif; ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>