<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elevation-free
 */

get_header();
?>

<main id="primary" class="site-main container main-archive">

	<header class="page-header alignfull">
		<div class="container">
			<?php
				the_archive_title( '<h1 class="page-title">', '</h1>' );
				the_archive_description( '<div class="archive-description">', '</div>' );
			?>
		</div>
	</header><!-- .page-header -->
	
	<?php if ( have_posts() ) : ?>
		<div class="col-wrapper">
		<?php
		/* Start the Loop */
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content' );

		endwhile;
		?>
		</div>
		<?php
		the_posts_pagination();
		?>
		<?php
	else :

		get_template_part( 'template-parts/content', 'none' );

	endif;
	?>

</main><!-- #main -->

<?php
get_footer();
