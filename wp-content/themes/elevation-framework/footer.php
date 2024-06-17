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

$logo = get_field('footer_logo', 'option');
$socials = get_field('footer_social_network', 'option');
$information = get_field('footer_information', 'option');
$information_title = get_field('footer_information_title', 'option');
$phone = get_field('footer_phone', 'option');
$email = get_field('footer_email', 'option');
$links = get_field('footer_links', 'option');

// $form_id_newsletter = get_field('footer_newsletter_form','option');

?>
<?php if (!is_page_template('page-templates/login.php')) : ?>

	<footer class="footer">
		<div class="footer__container container">
			<div class="footer__top row">
				<div class="footer__col col-xl-3 col-md-6">
					<span class="footer__logo">
						<a href="<?php echo esc_url(home_url('/')); ?>">
							<?php Helpers::global_image($logo, true, 'footer__media', null, false); ?>
							<span class="visually-hidden"><?php bloginfo('name'); ?></span>
						</a>
					</span>
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

				<div class="footer__col col-xl-2 col-md-6">
					<?php
					wp_nav_menu([
						'theme_location'  => 'menu-3',
						'depth' => 2,
						'items_wrap' => '<ul class="footer__menu">%3$s</ul>'
					]);
					?>
				</div>

				<div class="footer__col col-xl-2 col-md-6">
					<?php if ($information_title) : ?>
						<span class="footer__title"><?= esc_html($information_title); ?></span>
					<?php else : ?>
						<span class="footer__title">Address</span>
					<?php endif; ?>
					<?php
					if ($information) :
						echo '<div class="footer__address">';
						echo wp_kses_post($information);
						echo '</div>';
					endif;
					?>
					<?php if ($email || $phone) : ?>
						<span class="footer__title">Contact Us</span>
						<span class="footer__contact">
							<?php if ($email) : ?>
								<span class="footer__contact--row">
									<label>email:</label>
									<a href="mailto:<?= esc_html($email); ?>"><?= esc_html($email); ?></a>
								</span>
							<?php endif; ?>
							<?php if ($phone) : ?>
								<span class="footer__contact--row">
									<label>tel:</label>
									<a href="tel:<?= esc_html(str_replace(' ', '', $phone)); ?>"> <?= esc_html($phone); ?></a>
								</span>
							<?php endif; ?>
						</span>
					<?php endif; ?>
				</div>

				<div class="footer__col col-xl-2 col-md-6">

					<span class="footer__title">Follow Us</span>

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

				<div class="footer__col col-xl-3">
					<div class="footer__form" id="sign_up">
						<?php echo do_shortcode('[gravityform id="1" title="true" description="true" ajax="true"]'); ?>
					</div>
				</div>

			</div>
			<div class="footer__bootom">
				<div class="footer__grid">
					<span class="footer__copyrigth">©<?php echo date("Y"); ?> <?php bloginfo('name'); ?></span>
					<span class="footer__createdby">
						<a href="http://www.elevationweb.org/" target="_blank" title="Nonprofit Website Design" rel="noopener noreferrer">Nonprofit Website
							Design</a> by <a href="https://www.elevationweb.org/portfolio/" target="_blank" title="Elevation Web" rel="noopener noreferrer">Elevation Web</a>
					</span>
				</div>
			</div>
		</div>
	</footer>

<?php endif; ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>