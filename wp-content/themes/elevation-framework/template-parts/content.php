<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package elevation
 */

use ElevationFramework\Lib\Frontend\Settings\Helpers;
use ElevationFramework\Lib\BlockLibrary\Helpers as BlockHelpers;

?>

<div class="col">
	<article id="post-<?php the_ID(); ?>" <?php post_class( 'card' ); ?>>
		<header class="card__header">
		<?php
		if ( has_post_thumbnail() ) {
			$image     = get_post_thumbnail_id( get_the_ID() );
			$alt_image = get_post_meta( $image, '_wp_attachment_image_alt', true );

			BlockHelpers::global_image(
				$image,
				array(
					'size'  => 'medium',
					'alt'   => $alt_image,
					'class' => 'card__image',
				)
			);
		}
		?>
		</header>
		<div class="card__body">
			<span class="card__date-author">
				<time class="card__date">
					<?php echo esc_html( get_the_date( 'd F Y' ) ); ?>
				</time>
				<span class="author">by <?php echo get_the_author(); ?></span>
			</span>
			<h2 class="card__title has-h-6-font-size">
				<a href="<?php echo esc_url( get_permalink() ); ?>" rel="bookmark" class="stretched-link"><?php echo esc_html( get_the_title() ); ?></a>
			</h2>
			<div class="card__excerpt line-clamp-4">
				<?php echo esc_html( get_the_excerpt() ); ?>
			</div>
			<div class="card__category">
				<?php echo wp_kses_post( get_the_category_list() ); ?>
			</div>
			
		</div>
	</article><!-- #post-<?php the_ID(); ?> -->
</div>
