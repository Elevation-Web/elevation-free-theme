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

?>

<footer class="footer">
	<div class="footer__container container">
		<div class="footer__top">

			<div class="footer__col footer__col--left">

				<div class="footer__inner-col">

					<div class="footer__logo">
						<a href="<?php echo esc_url(home_url('/')); ?>">
							<?php $footer_logo = get_theme_mod('footer_logo'); ?>
							<?php Helpers::global_image($footer_logo, true, 'footer__media', null, false); ?>
							<span class="visually-hidden"><?php bloginfo('name'); ?></span>
						</a>
					</div>

				</div>

				<div class="footer__inner-col">
					<div class="footer__menu">
						<!-- dynamic widget -->
					</div>
				</div>

				<div class="footer__inner-col">
					<!-- dynamic widget -->

				</div>

			</div>

			<div class="footer__col footer__col--right">
				<!-- dynamic widget -->

			</div>

		</div>

		<div class="footer__bottom">
			<div class="footer__bottom--left">
				<span class="footer__copyrigth">Copyright © <?php echo date("Y"); ?>. <?php bloginfo('name'); ?>.</span>
				<span class="footer__createdby">
					<?php echo esc_html__('Nonprofit Website Design by'); ?> <a href="<?php echo esc_url('https://www.elevationweb.org/portfolio/'); ?>" target="_blank" title="<?php echo esc_attr__('Nonprofit Website Design ELEVATION'); ?>" rel="noopener noreferrer"><?php echo esc_html__('Elevation Web'); ?></a>
				</span>
			</div>
		</div>
	</div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>