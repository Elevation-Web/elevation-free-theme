<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * Cards Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function template_presskit_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__template-presskit--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'template-presskit';
	$className = 'dynamic-assets-load block block__template-presskit';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.
	$cards_header = get_field('cards_header');
	$items = get_field('cards_items');
	$cards_footer = get_field('cards_footer');

	//settings
	$cards_grid = get_field('cards_grid');
	$cards_hr = get_field('cards_hr');
	$global_title_size = get_field('global_title_size');

	$content_alignment = get_field('content_alignment');
	$container_alignment = get_field('container_alignment');
	$container_width = get_field('container_width');
	$offset_container_width = get_field('offset_container_width');
	if (get_field('padding_disable')) {
		if (!get_field('padding_top')) {
			$pd_top = ' pt-0 ';
		} else {
			$pd_top = '';
		}
		if (!get_field('padding_bottom')) {
			$pd_bottom = ' pb-0 ';
		} else {
			$pd_bottom = '';
		}
	} else {
		$pd_top = '';
		$pd_bottom = '';
	}

?>
	<div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className) . esc_attr($pd_top) . esc_attr($pd_bottom); ?>">
		<div class="block__container container">
			<div class="block__row row justify-content-<?= esc_html($container_alignment); ?>">
				<div class="block__col col-xl-<?= esc_html($container_width); ?> col-12 offset-xl-<?= esc_html($offset_container_width); ?>">

					<?php if (isset($cards_header['editor']) && !empty($cards_header['editor']) || isset($cards_header['links']) && !empty($cards_header['links'])) : ?>

						<div class="block__content <?= esc_html($content_alignment); ?>">

							<?php if ($cards_header != NULL) : ?>
								<?php Helpers::global_content($cards_header['editor'], $cards_header['links']); ?>
							<?php endif; ?>

						</div>

					<?php endif; ?>

					<?php if (!empty($items)) : ?>

						<div class="block__template-presskit-container">

							<?= $cards_hr ? '<hr class="line hr-top dark">' : ''; ?>

							<div class="block__template-presskit--row row row-cols-xl-<?= esc_html($cards_grid); ?> row-cols-md-2 row-cols-1">

								<?php foreach ($items as $item) : ?>

									<div class="col">

										<article class="card">

											<?php if (isset($item['icon']) && !empty($item['icon'])) : ?>
												<?= Helpers::global_image($item['icon'], [
													'echo' => false,
													'class' => 'card__body__icon'
												]); ?>
											<?php endif; ?>

											<div class="card__body">


												<?php if (isset($item['title']) && !empty($item['title'])) : ?>
													<h3 class="card__body__title <?= esc_html($global_title_size); ?>">
														<?= esc_html($item['title']); ?>
													</h3>
												<?php endif; ?>

												<?php if (isset($item['description']) && !empty($item['description'])) : ?>
													<div class="card__body__excerpt">
														<p><?= wp_kses_post($item['description']); ?></p>
													</div>
												<?php endif; ?>

											</div>

										</article>

									</div>

								<?php endforeach; ?>

							</div>

							<?= $cards_hr ? '<hr class="line hr-bottom dark">' : ''; ?>

						</div>
					<?php endif; ?>

					<?php if ($cards_footer != NULL) : ?>
						<?= Helpers::global_link($cards_footer); ?>
					<?php endif; ?>

				</div>
			</div>
		</div>
	</div>
<?php
}
