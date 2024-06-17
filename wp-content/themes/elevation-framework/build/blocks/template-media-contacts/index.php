<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * teams Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function template_media_contacts_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__media-contacts--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'template-media-contacts';
	$className = 'dynamic-assets-load block__media-contacts';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.
	$teams_header = get_field('teams_header');
	$items = get_field('teams_items');
	$teams_grid = get_field('teams_grid');

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

					<div class="block__inner-row">
						<div class="block__inner-column col-xl-4 col-12">
							<div class="block__content <?= esc_html($content_alignment); ?>">
								<?php if ($teams_header != NULL) : ?>
									<?php Helpers::global_content($teams_header['editor'], $teams_header['links']); ?>
								<?php endif; ?>
							</div>
						</div>
						<div class="block__inner-column col-xl-8 col-12">

							<?php if (!empty($items)) : ?>

								<div class="block__media-contacts--row row row-cols-xl-<?= esc_html($teams_grid); ?> row-cols-md-2 row-cols-1">

									<?php foreach ($items as $item) : ?>

										<div class="col">

											<article class="card">

												<?php if (isset($item['link']) && !empty($item['link'])) : ?>
													<a class="card__image card__image--link" href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($item['link']['target']); ?>">
													<?php endif; ?>

													<?php if (isset($item['image']) && !empty($item['image'])) : ?>
														<?= Helpers::global_image(
															$item['image'],
															[
																'echo' => false,
																'class' => 'card__image'
															]
														); ?>
													<?php endif; ?>

													<?php if (isset($item['link']) && !empty($item['link'])) : ?>
													</a>
												<?php endif; ?>

												<div class="card__body">

													<?php if (isset($item['title']) && !empty($item['title'])) : ?>

														<h3 class="card__body__title h5">

															<?php if (isset($item['link']) && !empty($item['link'])) : ?>
																<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($item['link']['target']); ?>">
																<?php endif; ?>

																<?= esc_html($item['title']); ?>

																<?php if (isset($item['link']) && !empty($item['link'])) : ?>
																</a>
															<?php endif; ?>

														</h3>

													<?php endif; ?>

													<?php if (isset($item['position']) && !empty($item['position'])) : ?>
														<span class="card__body__position h5"><?= esc_html($item['position']); ?></span>
													<?php endif; ?>

													<?php if (isset($item['description']) && !empty($item['description'])) : ?>

														<span class="card__body__excerpt">

															<p><?= wp_kses_post($item['description']); ?></p>

														</span>

													<?php endif; ?>

													<hr class="line card__body__divider">


													<span class="card__body__contact">
														<?php if (isset($item['email']) && !empty($item['email'])) : ?>
															<span class="card__body__contact--email">
																<a href="mailto:<?= esc_html($item['email']); ?>"><?= esc_html($item['email']); ?></a>
															</span>
														<?php endif; ?>

														<?php if (isset($item['phone']) && !empty($item['phone'])) : ?>
															<span class="card__body__contact--phone">
																<?= wp_kses_post($item['phone']); ?>
															</span>
														<?php endif; ?>
													</span>

													<?php if (isset($item['social_network']) && !empty($item['social_network'])) : ?>

														<hr class="line card__body__divider">


														<div class="card__body__social">

															<ul class=" social-network">

																<?php foreach ($item['social_network'] as $social) : ?>

																	<?php if (isset($social['url']) && !empty($social['url']) || isset($social['email']) && !empty($social['email'])) : ?>

																		<li>
																			<?php if (isset($social['email']) && !empty($social['email'])) : ?>
																				<a href="mailto:<?= esc_html($social['email']); ?>" target="_blank" class="dark-icon" rel="noopener noreferrer">
																				<?php else : ?>
																					<a href="<?= esc_html($social['url']); ?>" target="_blank" class="dark-icon" rel="noopener noreferrer">
																					<?php endif; ?>

																					<span class="icon--<?= esc_html($social['icon']); ?>"></span>
																					<span class="visually-hidden"><?= esc_html($social['icon']); ?></span>

																					</a>
																		</li>

																	<?php endif; ?>

																<?php endforeach; ?>

															</ul>

														</div>

													<?php endif; ?>

												</div>

											</article>

										</div>

									<?php endforeach; ?>

								</div>

							<?php endif; ?>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<?php
}
