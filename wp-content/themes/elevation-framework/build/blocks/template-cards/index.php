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
function template_cards_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__cards-template--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'template-cards';
	$className = 'dynamic-assets-load block block__cards-template';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.
	$cards_header = get_field('cards_header');
	$items = get_field('cards_items');

	//settings
	$cards_grid = get_field('cards_grid');
	$global_title_size = get_field('global_title_size');
	$show_description = get_field('show_description');

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
					<div class="block__content <?= esc_html($content_alignment); ?>">

						<?php if ($cards_header != NULL) : ?>
							<?php Helpers::global_content($cards_header['editor'], $cards_header['links']); ?>
						<?php endif; ?>

					</div>
				</div>

				<?php if (!empty($items)) : ?>

					<div class="block__col col-12">

						<div class="block__cards-template--row row row-cols-xl-<?= esc_html($cards_grid); ?> row-cols-md-2 row-cols-1">

							<?php foreach ($items as $item) : ?>

								<div class="col">

									<article class="card">

										<?php if (isset($item['image']) && !empty($item['image'])) : ?>

											<div class="card__header">
												<?= Helpers::global_image(
													$item['image'],
													[
														'echo' => false,
														'class' => 'card__header card__image--hover-effect'
													]
												); ?>

												<?php if (isset($item['link']) && !empty($item['link'])) : ?>
													<?php $target = $item['link']['target'] ? $item['link']['target'] : '_self'; ?>
													<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($target); ?>" class="stretched-link stretched-link-custom"><?= esc_html($item['link']['title']); ?></a>
												<?php endif; ?>
											</div>

										<?php endif; ?>

										<div class="card__body">

											<?php if (isset($item['date']) && !empty($item['date'])) : ?>
												<span class="card__body__date">
													<?= esc_html($item['date']); ?>
												</span>
											<?php endif; ?>

											<?php if (isset($item['title']) && !empty($item['title'])) : ?>
												<h3 class="card__body__title <?= esc_html($global_title_size); ?>">
													<?= esc_html($item['title']); ?>
												</h3>
											<?php endif; ?>

											<?php if (isset($show_description) && !empty($show_description)) : ?>
												<?php if (isset($item['description']) && !empty($item['description'])) : ?>
													<div class="card__body__excerpt line-clamp-5">
														<p><?= wp_kses_post($item['description']); ?></p>
													</div>
												<?php endif; ?>
											<?php endif; ?>

											<?php if (isset($item['link']) && !empty($item['link'])) : ?>

												<span class="card__body__button">
													<?php $target = $item['link']['target'] ? $item['link']['target'] : '_self'; ?>
													<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($target); ?>" class="cta cta--cta-dark stretched-link stretched-link-custom"><?= esc_html($item['link']['title']); ?></a>
												</span>

											<?php endif; ?>

										</div>

									</article>

								</div>

							<?php endforeach; ?>

						</div>

					</div>

				<?php endif; ?>

			</div>
		</div>
	</div>
<?php
}
