<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

/**
 * Feed Posts Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function feed_blog_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__feed--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'feed-post';
	$className = 'dynamic-assets-load block block__feed';
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
		'grab-cursor' => false,
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
			<div class="block__feed <?= 'block__feed--' . esc_html($feed_layout); ?>">
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

					<div class="block__feed-row row row-cols-xl-<?= $feed_grid ? esc_html($feed_grid) : '3'; ?> row-cols-md-2 row-cols-1">

					<?php else : ?>

						<div class="swiper__feed swiper__container--feed" id="swiper-<?= esc_attr($id); ?>" <?php echo esc_attr($swiper_attrs); ?>>



							<div class="swiper-wrapper">

							<?php endif; ?>

							<?php if ($feed_options == "by_manually") : ?>

								<?php if (!empty($items)) : ?>
									<?php $post_count = 0; ?>
									<?php foreach ($items as $item) : ?>

										<?php if ($feed_layout == "grid") : ?>
											<div class="col">
												<?php if (isset($item['link']) && !empty($item['link'])) : ?>
													<article class="card card-link">
													<?php else : ?>
														<article class="card">
														<?php endif; ?>

													<?php else : ?>
														<article class="card swiper-slide">
														<?php endif; ?>

														<?php if (isset($item['link']) && !empty($item['link'])) : ?>
															<?php if (isset($item['image']) && !empty($item['image'])) : ?>
																<?= Helpers::global_image(
																	$item['image'],
																	[
																		'echo' => false,
																		'class' => 'card__image card__image--hover-effect'
																	]
																); ?>
															<?php endif; ?>
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
															<?php if (isset($item['title']) && !empty($item['title'])) : ?>
																<h2 class="card__body__title h6">
																	<span>
																		<?= esc_html($item['title']); ?>
																	</span>
																</h2>
															<?php endif; ?>
															<?php if (isset($item['description']) && !empty($item['description'])) : ?>
																<div class="card__body__excerpt line-clamp-4">
																	<p><?= wp_kses_post($item['description']); ?></p>
																</div>
															<?php endif; ?>
															<?php if (isset($item['categories']) && !empty($item['categories'])) : ?>
																<div class="card__body__category">
																	<?php foreach ($item['categories'] as $category) : ?>
																		<?php if (isset($category['category']) && !empty($category['category'])) : ?>
																			<span><?= esc_html($category['category']); ?></span>
																		<?php endif; ?>
																	<?php endforeach; ?>
																</div>
															<?php endif; ?>
														</div>
														<?php if (isset($item['footer']) && !empty($item['footer'])) : ?>
															<div class="card__footer">
																<span><?= esc_html($item['footer']); ?></span>
															</div>
														<?php endif; ?>

														<?php if (isset($item['link']) && !empty($item['link'])) : ?>
															<?php $target = $item['link']['target'] ? $item['link']['target'] : '_self'; ?>
															<a href="<?= esc_url($item['link']['url']); ?>" target="<?= esc_attr($target); ?>" class="stretched-link stretched-link-custom">
																Read More <?= esc_html($item['title']); ?>
															</a>
														<?php endif; ?>

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
								global $post;
								$post_type = 'post';
								$taxonomy  = 'category';
								$term_ids  = get_field('feed_taxonomy');

								if ($term_ids) {
									$args = array(
										'post_type'      => $post_type,
										'posts_per_page' => -1,
										'tax_query'      => array(
											array(
												'taxonomy' => $taxonomy,
												'field'    => 'term_id',
												'terms'    => $term_ids,
												'operator' => 'IN',
											),
										),
									);
								} else {
									$args = array(
										'post_type'      => $post_type,
										'posts_per_page' => -1,
									);
								}

								$posts = new WP_Query($args);

								$post_count = $posts->post_count;

								if ($posts->have_posts()) :
									while ($posts->have_posts()) : $posts->the_post();
										$permalink = get_permalink($post->ID);
										$title = get_the_title($post->ID);
										$description = get_the_excerpt($post->ID);
										$categories = get_the_terms($post->ID, 'category');
										$date = get_the_date('F m');
										if (has_post_thumbnail()) {
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
													<?= Helpers::global_image(
														$image,
														[
															'size' => 'medium',
															'alt' => $alt_image,
															'echo' => false,
															'class' => 'card__image card__image--hover-effect'
														]
													); ?>

													<div class="card__body">
														<?php if (isset($title) && !empty($title)) : ?>
															<h2 class="card__body__title line-clamp-2 h6">
																<span>
																	<?= esc_html($title); ?>
																</span>
															</h2>
														<?php endif; ?>
														<?php if (isset($description) && !empty($description)) : ?>
															<div class="card__body__excerpt line-clamp-4">
																<p><?= wp_kses_post($description); ?></p>
															</div>
														<?php endif; ?>

														<?php if (isset($categories) && !empty($categories)) : ?>
															<span class="card__body__category">
																<?php //foreach ($categories as $category) : 
																?>
																<span><?= esc_html($categories[0]->name); ?></span>
																<?php //endforeach; 
																?>
															</span>
														<?php endif; ?>

													</div>

													<?php if (isset($date) && !empty($date)) : ?>
														<div class="card__footer">
															<span><?= esc_html($date); ?></span>
														</div>
													<?php endif; ?>

													<a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">Read Post <?= esc_html($title) ?></a>

													<?php if ($feed_layout == "grid") : ?>
													</article>
											</div>
										<?php else : ?>
											</article>
										<?php endif; ?>

										<?php $post_count++; ?>
									<?php endwhile; ?>
								<?php endif; ?>

							<?php elseif ($feed_options == 'by_posts') : ?>

								<?php $featured_posts = get_field('feed_post_object');
								if ($featured_posts) :
									$post_count = 0;
									foreach ($featured_posts as $featured_post) :
										$permalink = get_permalink($featured_post->ID);
										$title = get_the_title($featured_post->ID);
										$description = get_the_excerpt($featured_post->ID);
										$categories = get_the_terms($featured_post->ID, 'category');
										$date = get_the_date('m F Y');
										if (has_post_thumbnail()) {
											$image = get_post_thumbnail_id($featured_post->ID);
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

													<?= Helpers::global_image(
														$image,
														[
															'size' => 'medium',
															'alt' => $alt_image,
															'echo' => false,
															'class' => 'card__image card__image--hover-effect'
														]
													); ?>

													<div class="card__body">

														<?php if (isset($title) && !empty($title)) : ?>
															<h2 class="card__body__title h6">
																<span>
																	<?= esc_html($title); ?>
																</span>
															</h2>
														<?php endif; ?>
														<?php if (isset($description) && !empty($description)) : ?>
															<div class="card__body__excerpt line-clamp-4">
																<p><?= wp_kses_post($description); ?></p>
															</div>
														<?php endif; ?>

														<?php if (isset($categories) && !empty($categories)) : ?>
															<span class="card__body__category">
																<?php // foreach ($categories as $category) : 
																?>
																<span><?= esc_html($categories[0]->name); ?></span>
																<?php // endforeach; 
																?>
															</span>
														<?php endif; ?>

													</div>

													<?php if (isset($date) && !empty($date)) : ?>
														<div class="card__footer">
															<span><?= esc_html($date); ?></span>
														</div>
													<?php endif; ?>

													<a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">Read Post <?= esc_html($title) ?></a>

													<?php if ($feed_layout == "grid") : ?>
													</article>
											</div>
										<?php else : ?>
											</article>
										<?php endif; ?>

										<?php $post_count++; ?>
									<?php endforeach; ?>
								<?php endif; ?>


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
