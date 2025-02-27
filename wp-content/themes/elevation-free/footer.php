<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package elevation-free
 */

use ElevationFree\Lib\BlockLibrary\Helpers;

$footer_logo = get_theme_mod( 'footer_logo' );
?>

<footer class="footer">
	<div class="footer__container container">
		<div class="footer__top">

			<div class="footer__col">
				<?php if ( $footer_logo ) : ?>
					<div class="footer__inner-col">
						<div class="footer__logo">
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
								<?php Helpers::global_image( $footer_logo, true, 'footer__media', null, false ); ?>
								<span class="visually-hidden"><?php bloginfo( 'name' ); ?></span>
							</a>
						</div>
					</div>
				<?php endif; ?>

				<?php if ( is_active_sidebar( 'footer-1' ) ) { ?>
					<div class="footer__inner-col">
						<?php dynamic_sidebar( 'footer-1' ); ?>
					</div>
				<?php } ?>

				<?php
				if ( is_active_sidebar( 'footer-2' ) ) {
					?>
					<div class="footer__inner-col">
						<?php dynamic_sidebar( 'footer-2' ); ?>
					</div>
					<?php
				}
				?>

				<?php if ( is_active_sidebar( 'footer-3' ) ) { ?>
					<div class="footer__inner-col">
						<?php dynamic_sidebar( 'footer-3' ); ?>
					</div>
				<?php } ?>


			</div>



		</div>

		<div class="footer__bottom">
			<div class="footer__bottom--left">
				<span class="footer__copyrigth">Copyright © <?php echo esc_html( gmdate( 'Y' ) ); ?>. <?php bloginfo( 'name' ); ?>.</span>
				<span class="footer__createdby">
					<?php echo esc_html__( 'Nonprofit Website Design by', 'elevation-free' ); ?> <a href="<?php echo esc_url( 'https://www.elevationweb.org/portfolio/' ); ?>" target="_blank" title="<?php echo esc_attr__( 'Nonprofit Website Design ELEVATION', 'elevation-free' ); ?>" rel="noopener noreferrer"><?php echo esc_html__( 'Elevation Web', 'elevation-free' ); ?></a>
				</span>
			</div>
		</div>
	</div>
</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
