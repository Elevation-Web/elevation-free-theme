<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * Sponsors Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

function sponsors_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__sponsors--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'sponsors';
	$className = 'dynamic-assets-load block block__sponsors';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.

	$items = get_field('sponsors_items');
	$sponsors_groups = get_field('sponsors_groups');
	$sponsors_subtitle = get_field('sponsors_subtitle');
	$sponsors_subtitle_size = get_field('sponsors_subtitle_size');
	$sponsors_header = get_field('sponsors_header');

	// settings

	$sponsors_layout = get_field('sponsors_layout');
	$sponsors_grid = get_field('sponsors_grid');
	$sponsors_hr = get_field('sponsors_hr');

	// $centerSwiperControlClass = ($swiper_center) ? '' : 'w-container';
	$centerSwiperControlClass = 'w-container';

	$content_alignment = get_field('content_alignment');
	$container_alignment = get_field('container_alignment');
	$container_width = get_field('container_width');
	$offset_container_width = get_field('offset_container_width');
	$sponsors_overflow_hidden = get_field('sponsors_overflow_hidden');
	$visually_hidden = get_field('visually_hidden');
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

	$swiper = get_field('slider_settings');
	$swiper_attrs = Helpers::get_swiper_attrs($swiper, [
		'loop' => true,
		'centered-slides' => false,
		'grab-cursor' => false,
		'slides-per-view' => 2,
		'space-between' => 30,
		'slides-per-view-md' => 3,
		'slides-per-view-lg' => 4,
		'slides-per-view-xl' => 6,
		'slides-per-view-xxl' => 7,
		'slide-to-click-slide' => true,
		'delay' => 7000,
		'disable-on-interaction' => false
	]);

?>
	<div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className) . esc_attr($pd_top) . esc_attr($pd_bottom); ?>">

		<div class="block__container container">

			<div class="block__row row justify-content-<?= esc_html($container_alignment); ?>">

				<div class="block__col col-xl-<?= esc_html($container_width); ?> col-12  offset-xl-<?= esc_html($offset_container_width); ?>">

					<div class="block__content <?= esc_html($content_alignment); ?>">

						<?php if ($sponsors_header != NULL) : ?>
							<?php Helpers::global_content($sponsors_header['editor'], $sponsors_header['links']); ?>
						<?php endif; ?>

					</div>

					<?php if ($sponsors_layout == 'tier') : ?>

						<?php if (!empty($sponsors_groups)) : ?>

							<?php foreach ($sponsors_groups as $group) : ?>

								<div class="block__sponsors">

									<?= $sponsors_hr ? '<hr class="line hr-top grey tiny">' : ''; ?>

									<?php if (isset($group['sponsors_subtitle']) && !empty($group['sponsors_subtitle'])) : ?>

										<div class="block__content <?= esc_html($content_alignment); ?>">
											<div class="block__editor block__editor--color-dark">
												<h4 class="<?= $group['sponsors_subtitle_size']; ?>"><?= wp_kses_post($group['sponsors_subtitle']); ?></h4>
											</div>
										</div>

									<?php endif; ?>

									<?php if (!empty($group['sponsors_items'])) : ?>

										<div class="block__sponsors<?= '--' . esc_html($sponsors_layout); ?>">

											<div class="block__sponsors-row row row-cols-2 row-cols-md-3 row-cols-xl-<?= esc_html($sponsors_grid); ?>">

												<?php foreach ($group['sponsors_items'] as $item) : ?>

													<div class="col">

														<div class="sponsor">

															<?php if (isset($item['link']) && !empty($item['link'])) : ?>

																<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($item['link']['target']); ?>">

																<?php endif; ?>

																<?php if (isset($item['image']) && !empty($item['image'])) : ?>
																	<?= Helpers::global_image($item['image'], ['class' => 'sponsor__image']) ?>
																<?php endif; ?>

																<?php if (isset($item['title']) && !empty($item['title'])) : ?>
																	<div class="sponsor__body <?= $visually_hidden ? 'visually-hidden' : '' ?>">
																		<span class="sponsor__body__title h6 <?= $visually_hidden ? 'visually-hidden' : '' ?>"><?= esc_html($item['title']); ?></span>
																	</div>
																<?php endif; ?>

																<?php if (isset($item['link']) && !empty($item['link'])) : ?>

																</a>

															<?php endif; ?>

														</div>

													</div>

												<?php endforeach; ?>

											</div>

										</div>

									<?php endif; ?>

									<?= $sponsors_hr ? '<hr class="line hr-bottom grey tiny">' : ''; ?>

								</div>

							<?php endforeach; ?>

						<?php endif; ?>

					<?php elseif ($sponsors_layout == 'carousel') : ?>

						<?php if (!empty($items)) : ?>

							<div class="block__sponsors block__sponsors--carousel <?= $sponsors_overflow_hidden ? 'overflow-hidden' : '' ?>">

								<div class="swiper__sponsors swiper__container<?= '--' . esc_attr($sponsors_layout); ?>" id="swiper-<?= esc_attr($id); ?>" <?php echo esc_attr($swiper_attrs); ?>>

									<div class="swiper-wrapper">

										<?php $post_count = 0; ?>

										<?php foreach ($items as $item) : ?>

											<div class="swiper-slide">

												<?php if (isset($item['link']) && !empty($item['link'])) : ?>

													<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($item['link']['target']); ?>">

													<?php endif; ?>

													<?php if (isset($item['image']) && !empty($item['image'])) : ?>

														<?= Helpers::global_image($item['image'], ['class' => 'sponsor__image']) ?>

													<?php endif; ?>

													<?php if (isset($item['title']) && !empty($item['title'])) : ?>
														<div class="sponsor__body <?= $visually_hidden ? 'visually-hidden' : '' ?>">
															<span class="sponsor__body__title h6 <?= $visually_hidden ? 'visually-hidden' : '' ?>"><?= esc_html($item['title']); ?></span>
														</div>
													<?php endif; ?>

													<?php if (isset($item['link']) && !empty($item['link'])) : ?>

													</a>

												<?php endif; ?>

											</div>

											<?php $post_count++; ?>

										<?php endforeach; ?>

									</div>

									<div class="swiper__container-controls <?= esc_html($content_alignment) . ' ' . esc_html($centerSwiperControlClass); ?>">
										<div class="swiper-button-prev"></div>
										<div class="swiper-pagination"></div>
										<div class="swiper-button-next"></div>

										<?php if ($post_count > 3) : ?>
											<button type="button" aria-label="play" class="swiper-button-play-pause">
												<span class="icon" aria-hidden="true"></span>
											</button>
										<?php endif; ?>

									</div>

								</div>

							</div>

						<?php endif; ?>

					<?php endif; ?>

				</div>

			</div>

		</div>

	</div>

<?php
}
