<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elevation-free
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<div class="container">
			<?php
			the_content();
			?>
		</div>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
