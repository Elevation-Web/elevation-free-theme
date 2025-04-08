<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elevation-free
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<div class="card__title-wrapper alignfull">
			<div class="container">
				<h1 class="card__title">
					<?php echo esc_html( get_the_title() ); ?>
				</h1>
			</div>
		</div>
			<?php
			the_content();
			?>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
