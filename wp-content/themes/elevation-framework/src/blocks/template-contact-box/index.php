<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * Contact Box Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function contact_box_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__template-contact-box--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'template-contact-box';
	$className = 'dynamic-assets-load block__template-contact-box';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.
	$left_side = get_field('left_side');
	$right_side = get_field('right_side');

	// settings
	$content_alignment = get_field('content_alignment');
	$container_alignment = get_field('container_alignment');
	$container_width = get_field('container_width');
	$offset_container_width = get_field('offset_container_width');

?>

	<div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className); ?>">

		<div class="block__container container">

			<div class="block__row row justify-content-<?= esc_html($container_alignment); ?>">

				<div class="block__col col-xl-<?= esc_html($container_width); ?> col-12  offset-xl-<?= esc_html($offset_container_width); ?>">

					<div class="block__box block__row-inner">

						<div class="block__content <?= esc_html($content_alignment); ?> block__box--title">

							<?php if (isset($left_side['title']) && !empty($left_side['title'])) : ?>
								<<?= $left_side['title_size'] ?>>
									<?= esc_html($left_side['title']); ?>
								</<?= $left_side['title_size'] ?>>
							<?php endif; ?>

						</div>

						<div class="block__content <?= esc_html($content_alignment); ?> block__box--content">

							<?php if ($right_side != NULL) : ?>
								<?php Helpers::global_content($right_side['editor'], $right_side['links']); ?>
							<?php endif; ?>

						</div>

					</div>

				</div>

			</div>

		</div>

	</div>

<?php
}
