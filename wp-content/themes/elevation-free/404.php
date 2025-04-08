<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package elevation-free
 */

use ElevationFree\Lib\BlockLibrary\Helpers;

get_header(
	'',
	array(
		'header_type' => 'transparent',
	)
);
$title_404   = __('404','elevation-free');
$subtitle    = __('Nothing found','elevation-free');
$description = __('It looks like nothing was found at this location. Maybe try one of the links below or a search?','elevation-free');
$link_404    = home_url();
?>

<main id="primary" class="site-main">
	<section class="error-404 not-found">
		<div class="container">
			<header class="error-404__header">
				<h1 class="error-404__title"><?php echo esc_html( $title_404 ); ?></h1>
				<h2 class="error-404__subtitle h3"><?php echo esc_html( $subtitle ); ?></h1>
			</header><!-- .page-header -->

			<div class="error-404__content">
				<p class="body-1"><?php echo esc_html( $description ); ?></p>

			</div><!-- .page-content -->
		</div>
	</section><!-- .error-404 -->
</main><!-- #main -->

<?php
get_footer();
