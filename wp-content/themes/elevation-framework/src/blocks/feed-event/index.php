<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * Feed Events Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function feed_event_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__feed-events--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'feed-event';
	$className = 'dynamic-assets-load block block__feed-events';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.
	$feed_header = get_field('feed_header');
	$items = get_field('feed_items');
	$feed_grid = get_field('feed_grid');
	$feed_layout = get_field('feed_layout');
	$feed_options = get_field('feed_options');
	$feed_hr = get_field('feed_hr');

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

	$swiper = get_field('slider_settings');
	$swiper_attrs = Helpers::get_swiper_attrs($swiper, [
		'centered-slides' => false,
		'grab-cursor' => true,
		'slides-per-view' => 1,
		'space-between' => 30,
		'slides-per-view-md' => 2,
		'slides-per-view-lg' => 3,
		'slides-per-view-xl' => 3,
		'slide-to-click-slide' => true,
		'delay' => 7000,
		'disable-on-interaction' => true
	]);

?>
	<div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className) . esc_attr($pd_top) . esc_attr($pd_bottom); ?>">
		<div class="block__container container">
			<div class="block__row row justify-content-<?= esc_html($container_alignment); ?>">
				<div class="block__col col-xl-<?= esc_html($container_width); ?> col-12 offset-xl-<?= esc_html($offset_container_width); ?>">
					<div class="block__content <?= esc_html($content_alignment); ?>">
						<?php if ($feed_header != NULL) : ?>
							<?php Helpers::global_content($feed_header['editor'], $feed_header['links']); ?>
						<?php endif; ?>
					</div>
				</div>
			</div>
			<div class="block__feed-events <?= 'block__feed-events--' . esc_html($feed_layout); ?>">

				<?= $feed_hr ? '<hr class="line hr-top dark">' : ''; ?>

				<?php if (is_user_logged_in()) : ?>
					<?php if ($feed_options == "by_manually") : ?>
						<span class="admin-view h5">By Manually</span>
					<?php elseif ($feed_options == 'by_terms') : ?>
						<span class="admin-view h5">By Category</span>
					<?php elseif ($feed_options == 'by_posts') : ?>
						<span class="admin-view h5">By Post Object</span>
					<?php endif; ?>
				<?php endif; ?>

				<?php if ($feed_layout == "grid") : ?>

					<div class="block__feed-events-row row row-cols-xl-<?= esc_html($feed_grid); ?> row-cols-md-2 row-cols-1">

					<?php else : ?>

						<div class="swiper__feed swiper__container--feed swiper__feed-events" id="swiper-<?= esc_attr($id); ?>" <?php echo esc_attr($swiper_attrs); ?>>



							<div class="swiper-wrapper">

							<?php endif; ?>

							<?php if ($feed_options == "by_manually") : ?>

								<?php if (!empty($items)) : ?>
									<?php $post_count = 0; ?>
									<?php foreach ($items as $item) : ?>

										<?php if ($feed_layout == "grid") : ?>
											<div class="col">
												<article class="card">
												<?php else : ?>
													<article class="card swiper-slide">
													<?php endif; ?>

													<?php if (isset($item['link']) && !empty($item['link'])) : ?>
														<a class="card__header card__link" href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($item['link']['target']); ?>">
															<?php if (isset($item['image']) && !empty($item['image'])) : ?>
																<?= Helpers::global_image(
																	$item['image'],
																	[
																		'echo' => false,
																		'class' => 'card__image card__image--hover-effect'
																	]
																); ?>
															<?php endif; ?>
														</a>
													<?php else : ?>
														<?php if (isset($item['image']) && !empty($item['image'])) : ?>
															<?= Helpers::global_image(
																$item['image'],
																[
																	'echo' => false,
																	'class' => 'card__image'
																]
															); ?>
														<?php endif; ?>
													<?php endif; ?>

													<div class="card__body">

														<?php if (isset($item['weekday']) && !empty($item['weekday']) || isset($item['time']) && !empty($item['time'])) : ?>
															<aside class="card__date card__body--left">
																<?php if (isset($item['weekday']) && !empty($item['weekday'])) : ?>
																	<span class="card__date--weekday"><?= esc_html($item['weekday']); ?></span>
																<?php endif; ?>
																<?php if (isset($item['day_of_month']) && !empty($item['day_of_month'])) : ?>
																	<span class="card__date--day"><?= esc_html($item['day_of_month']); ?></span>
																<?php endif; ?>
															</aside>
														<?php endif; ?>

														<aside class="card__body--right">

															<?php if (isset($item['full_datetime']) && !empty($item['full_datetime'])) : ?>
																<div class="card__full-date">
																	<span><?= esc_html($item['full_datetime']); ?></span>
																</div>
															<?php endif; ?>

															<?php if (isset($item['title']) && !empty($item['title'])) : ?>
																<h2 class="card__title h6">
																	<?php if (isset($item['link']) && !empty($item['link'])) : ?>
																		<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($item['link']['target']); ?>">
																		<?php endif; ?>
																		<?= esc_html($item['title']); ?>
																		<?php if (isset($item['link']) && !empty($item['link'])) : ?>
																		</a>
																	<?php endif; ?>
																</h2>
															<?php endif; ?>

															<?php if (isset($item['location']) && !empty($item['location'])) : ?>
																<div class="card__location">
																	<span><?= wp_kses_post($item['location']); ?></span>
																</div>
															<?php endif; ?>

															<?php if (isset($item['description']) && !empty($item['description'])) : ?>
																<div class="card__excerpt line-clamp-3">
																	<p><?= wp_kses_post($item['description']); ?></p>
																</div>
															<?php endif; ?>

														</aside>

													</div>

													<?php if ($feed_layout == "grid") : ?>
													</article>
											</div>
										<?php else : ?>
											</article>
										<?php endif; ?>

										<?php $post_count++; ?>
									<?php endforeach; ?>
								<?php endif; ?>

							<?php elseif ($feed_options == 'by_terms') : ?>

								<?php
								if (function_exists('tribe_get_start_date')) {
									global $post;
									$post_type = 'tribe_events';
									$taxonomy  = 'tribe_events_cat';
									$term_ids  = get_field('feed_taxonomy');
									$args = array(
										'post_type'      => $post_type,
										'posts_per_page' => -1,
										'orderby'        => 'date',
										'order'          => 'DESC',
										'tax_query'      => array(
											array(
												'taxonomy' => $taxonomy,
												'field'    => 'term_id',
												'terms'    => $term_ids,
												'operator' => 'IN',
											),
										),
									);

									$posts = new WP_Query($args);

									$post_count = $posts->post_count;

									if ($posts->have_posts()) :
										while ($posts->have_posts()) : $posts->the_post();
											$start_weekday = tribe_get_start_date($post->ID, false, 'D');
											$start_day = tribe_get_start_date($post->ID, false, 'j');
											$location = tribe_get_venue($post->ID);
											$permalink = get_permalink($post->ID);
											$title = get_the_title($post->ID);
											$description = get_the_excerpt($post->ID);
											$categories = get_the_terms($post->ID, 'tribe_events_cat');

											$start_date = tribe_get_start_date($post->ID, false, 'F j');
											$start_time = tribe_get_start_time($post->ID, 'g:i a');

											$end_date = tribe_get_end_date($post->ID, false, 'F j');
											$end_time = tribe_get_end_time($post->ID, 'g:i a');

											if ($start_date == $end_date) {
												$end_date = '';
											} else {
												$end_date = tribe_get_end_date($post->ID, false, 'F j') . ' @ ';
											}
											if (has_post_thumbnail($post->ID)) {
												$image = get_post_thumbnail_id($post->ID);
												$alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
											} else {
												$image = get_template_directory_uri() . '/src/assets/images/default.svg';
												$alt_image = 'default image';
											}
								?>
											<?php if ($feed_layout == "grid") : ?>
												<div class="col">
													<article class="card">
													<?php else : ?>
														<article class="card swiper-slide">
														<?php endif; ?>

														<a class="card__header card__link" href="<?= esc_url($permalink); ?>" target="_self">
															<?= Helpers::global_image(
																$image,
																[
																	'is_figure' => false,
																	'size' => 'medium',
																	'alt' => $alt_image,
																	'echo' => false,
																	'class' => 'card__image card__image--hover-effect'
																]
															); ?>
														</a>

														<div class="card__body">

															<?php if (isset($start_weekday) && !empty($start_weekday) || isset($start_day) && !empty($start_day)) : ?>
																<aside class="card__date card__body--left">
																	<span class="card__date--weekday"><?= esc_html($start_weekday); ?></span>
																	<span class="card__date--day"><?= esc_html($start_day); ?></span>
																</aside>
															<?php endif; ?>

															<aside class="card__body--right">

																<div class="card__full-date">
																	<span><?= esc_html($start_date) . ' @ ' . esc_html($start_time) . ' - ' . esc_html($end_date) . ' ' . esc_html($end_time); ?></span>
																</div>

																<?php if (isset($title) && !empty($title)) : ?>
																	<h2 class="card__title h6">
																		<a href="<?= esc_url($permalink); ?>" target="_self"><?= esc_html($title); ?></a>
																	</h2>
																<?php endif; ?>

																<?php if (isset($location) && !empty($location)) : ?>
																	<div class="card__location">
																		<span><?= wp_kses_post($location); ?></span>
																	</div>
																<?php endif; ?>

																<?php if (isset($description) && !empty($description)) : ?>
																	<div class="card__excerpt line-clamp-3">
																		<p><?= wp_kses_post($description); ?></p>
																	</div>
																<?php endif; ?>

															</aside>

														</div>


														<?php if ($feed_layout == "grid") : ?>
														</article>
												</div>
											<?php else : ?>
												</article>
											<?php endif; ?>

											<?php $post_count++; ?>

										<?php endwhile; ?>
								<?php endif;
								} else {
									echo "<p>Tribe events Plugin is Required</p>";
								} ?>

							<?php elseif ($feed_options == 'by_posts') : ?>

								<?php $events = get_field('feed_post_object');
								if ($events) :
									if (function_exists('tribe_get_start_date')) {
										$post_count = 0;
										foreach ($events as $event) :
											$start_weekday = tribe_get_start_date($event->ID, false, 'D');
											$start_day = tribe_get_start_date($event->ID, false, 'j');
											$location = tribe_get_venue($event->ID);
											$permalink = get_permalink($event->ID);
											$title = get_the_title($event->ID);
											$description = get_the_excerpt($event->ID);
											$categories = get_the_terms($event->ID, 'tribe_events_cat');

											$start_date = tribe_get_start_date($event->ID, false, 'F j');
											$start_time = tribe_get_start_time($event->ID, 'g:i a');

											$end_date = tribe_get_end_date($event->ID, false, 'F j');
											$end_time = tribe_get_end_time($event->ID, 'g:i a');

											if ($start_date == $end_date) {
												$end_date = '';
											} else {
												$end_date = tribe_get_end_date($event->ID, false, 'F j') . ' @ ';
											}
											if (has_post_thumbnail($event->ID)) {
												$image = get_post_thumbnail_id($event->ID);
												$alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
											} else {
												$image = get_template_directory_uri() . '/src/assets/images/default.svg';
												$alt_image = 'default image';
											} ?>

											<?php if ($feed_layout == "grid") : ?>
												<div class="col">
													<article class="card">
													<?php else : ?>
														<article class="card swiper-slide">
														<?php endif; ?>

														<a class="card__header card__link" href="<?= esc_url($permalink); ?>" target="_self">
															<?= Helpers::global_image(
																$image,
																[
																	'is_figure' => false,
																	'size' => 'medium',
																	'alt' => $alt_image,
																	'echo' => false,
																	'class' => 'card__image card__image--hover-effect'
																]
															); ?>
														</a>

														<div class="card__body">

															<?php if (isset($start_weekday) && !empty($start_weekday) || isset($start_day) && !empty($start_day)) : ?>
																<aside class="card__date card__body--left">
																	<span class="card__date--weekday"><?= esc_html($start_weekday); ?></span>
																	<span class="card__date--day"><?= esc_html($start_day); ?></span>
																</aside>
															<?php endif; ?>

															<aside class="card__body--right">

																<div class="card__full-date">
																	<span><?= esc_html($start_date) . ' @ ' . esc_html($start_time) . ' - ' . esc_html($end_date) . ' ' . esc_html($end_time); ?></span>
																</div>

																<?php if (isset($title) && !empty($title)) : ?>
																	<h2 class="card__title h6">
																		<a href="<?= esc_url($permalink); ?>" target="_self"><?= esc_html($title); ?></a>
																	</h2>
																<?php endif; ?>

																<?php if (isset($location) && !empty($location)) : ?>
																	<div class="card__location">
																		<span><?= wp_kses_post($location); ?></span>
																	</div>
																<?php endif; ?>

																<?php if (isset($description) && !empty($description)) : ?>
																	<div class="card__excerpt line-clamp-3">
																		<p><?= wp_kses_post($description); ?></p>
																	</div>
																<?php endif; ?>

															</aside>

														</div>

														<?php if ($feed_layout == "grid") : ?>
														</article>
												</div>
											<?php else : ?>
												</article>
											<?php endif; ?>
											<?php $post_count++; ?>
										<?php endforeach; ?>
								<?php } else {
										echo "<p>Tribe events Plugin is Required</p>";
									}
								endif; ?>

							<?php endif; ?>

							<?php if ($feed_layout == "grid") : ?>
							</div>
						<?php else : ?>
						</div>
						<div class="swiper__container-controls center">
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
				<?php endif; ?>

				<?= $feed_hr ? '<hr class="line hr-bottom dark">' : ''; ?>

			</div>
		</div>
	</div>
<?php
}
