	<?php

	/**
	 * The template for displaying all single posts
	 *
	 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
	 *
	 * @package elevation
	 */

	use ElevationFramework\Lib\BlockLibrary\Helpers;

	global $id;

	get_header();

	$categories = get_the_terms($id, 'resources_categories');
	$tags = get_the_terms($id, 'resources_tags');
	$types = get_the_terms($id, 'resources_types');

	$link_resource = get_field('link_resource', $id);
	$video_youtube = get_field('youtube', $id);
	$downloadable = get_field('downloadable', $id);
	$video_image = get_field('video_poster', $id);


	$show_authors = get_field('sr_show_authors', 'option');
	$custom_author = get_field('sr_custom_author', $id);
	$custom_author_name = get_field('sr_custom_author_name', $id);
	$custom_author_description = get_field('sr_custom_author_description', $id);


	$directory_url = get_field('sr_directory_url', 'option');
	$directory_url_label = get_field('sr_directory_url_label', 'option');

	?>

	<main id="primary" class="site-main container">
		<?php
		while (have_posts()) :
			the_post();
		?>

			<article class="post post__single">
				<div class="row">
					<div class="col-xl-8 offset-xl-1">

						<div class="post__breadcrumbs aioseo-breadcrumbs" id="breadcrumbs">
							<span class="aioseo-breadcrumb">
								<a href="<?php echo site_url(); ?>">Home</a>
							</span>

							<?php if ($directory_url) : ?>
								<span class="aioseo-breadcrumb-separator">»</span>
								<span class="aioseo-breadcrumb">
									<a href="<?= $directory_url; ?>"><?= $directory_url_label; ?></a>
								</span>
							<?php endif; ?>

							<span class="aioseo-breadcrumb-separator">»</span>

							<?php the_category('<span class="aioseo-breadcrumb-separator">»</span>', 'multiple', $id); ?>

							<span class="aioseo-breadcrumb">
								<?= get_the_title($id); ?>
							</span>
						</div>

						<div class="post__title">
							<h1><?= get_the_title($id); ?></h1>
						</div>

						<?php if ($categories || $tags || $types) : ?>

							<div class="post__flex-row">

								<?php if ($categories) : ?>
									<span class="post__category"><?= $categories[0]->name; ?></span>
								<?php endif; ?>

								<?php if ($types) : ?>
									<span class="post__category"><?= $types[0]->name; ?></span>
								<?php endif; ?>

								<?php if ($tags) : ?>
									<div class="post__tags">
										<?php foreach ($tags as $tag) : ?>
											<span><?php echo $tag->name; ?></span>
										<?php endforeach; ?>
									</div>
								<?php endif; ?>

							</div>

						<?php endif; ?>

						<?php if (has_post_thumbnail($id)) : ?>

							<?php if (isset($downloadable['file_url'])) : ?>
								<figure class="post__image post__image--pdf ratio ratio-16x9">
								<?php else : ?>
									<figure class="post__image ratio ratio-16x9">
									<?php endif; ?>
									<?= the_post_thumbnail('full'); ?>
									</figure>

								<?php else : ?>

									<?php if ($video_youtube) : ?>
										<div class="post__video block__video">
											<div class="block__video block__video--poster">

												<?php if (isset($video_image['image']) && !empty($video_image['image'])) : ?>
													<?php Helpers::global_image(
														$video_image,
														[
															'class' => 'block__video--poster-img',
															'decorative' =>  true
														]
													); ?>
												<?php else : ?>
													<?php Helpers::global_image(
														get_template_directory_uri() . "/src/assets/images/default-2.svg",
														[
															'class' => 'block__video--poster-img',
															'decorative' =>  true
														]
													); ?>
												<?php endif; ?>

												<?php if ($video_youtube) : ?>
													<div class="block__video--button float bottom-left">
														<button class="video <?= $video_youtube ? 'youtube' : '' ?>" data-video="<?= $video_youtube ? Helpers::youtube_url($video_youtube, false, true) : '' ?>" data-bs-toggle="modal" data-bs-target="#videoTextBlockModal-<?= $id; ?>">
															<span class="button-icon"></span>
															<span class="button-label">Watch <br> the Video</span>
														</button>
													</div>
												<?php endif; ?>

											</div>
											<div class="modal fade" id="videoTextBlockModal-<?= $id; ?>" role="dialog" tabindex="-1" aria-labelledby="videoTextBlockModal-<?= $id; ?>-Title" aria-hidden="true">
												<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title visually-hidden" id="videoTextBlockModal-<?= $id; ?>Title">videoTextBlockModal-<?= $id; ?>-Title</h5>
															<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div class="modal-body">
															<div class="ratio ratio-16x9">
																<video class="ratio ratio-16x9 embed-responsive-item" controls>
																	<source src="" type="video/mp4">
																	Your browser does not support the video tag.
																</video>
																<iframe class="ratio ratio-16x9 embed-responsive-item" src="" allowfullscreen></iframe>
															</div>
														</div>
														<div class="modal-footer">
															<button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close Popup</span></button>
														</div>
													</div>
												</div>
											</div>
										</div>
									<?php endif; ?>

								<?php endif; ?>

								<div class="post__content">
									<?php the_content($id); ?>
								</div>

								<?php if ($link_resource) : ?>
									<div class="post__buttons">
										<a href="<?php echo $link_resource; ?>" target="_blank" rel="noopener noreferrer" class="cta cta--cta-dark-arrow-right">External Resource</a>
									</div>
								<?php endif; ?>

								<?php if (has_post_thumbnail()) : ?>

									<?php if ($video_youtube) : ?>
										<div class="post__video block__video">
											<div class="block__video block__video--poster">

												<?php if (isset($video_image['image']) && !empty($video_image['image'])) : ?>
													<?php Helpers::global_image(
														$video_image,
														[
															'class' => 'block__video--poster-img',
															'decorative' =>  true
														]
													); ?>
												<?php else : ?>
													<?php Helpers::global_image(
														get_template_directory_uri() . "/src/assets/images/default-2.svg",
														[
															'class' => 'block__video--poster-img',
															'decorative' =>  true
														]
													); ?>
												<?php endif; ?>

												<?php if ($video_youtube) : ?>
													<div class="block__video--button float bottom-left">
														<button class="video <?= $video_youtube ? 'youtube' : '' ?>" data-video="<?= $video_youtube ? Helpers::youtube_url($video_youtube, false, true) : '' ?>" data-bs-toggle="modal" data-bs-target="#videoTextBlockModal-<?= $id; ?>">
															<span class="button-icon"></span>
															<span class="button-label">Watch <br> the Video</span>
														</button>
													</div>
												<?php endif; ?>
											</div>
											<div class="modal fade" id="videoTextBlockModal-<?= $id; ?>" role="dialog" tabindex="-1" aria-labelledby="videoTextBlockModal-<?= $id; ?>-Title" aria-hidden="true">
												<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title visually-hidden" id="videoTextBlockModal-<?= $id; ?>Title">videoTextBlockModal-<?= $id; ?>-Title</h5>
															<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div class="modal-body">
															<div class="ratio ratio-16x9">
																<video class="ratio ratio-16x9 embed-responsive-item" controls>
																	<source src="" type="video/mp4">
																	Your browser does not support the video tag.
																</video>
																<iframe class="ratio ratio-16x9 embed-responsive-item" src="" allowfullscreen></iframe>
															</div>
														</div>
														<div class="modal-footer">
															<button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close Popup</span></button>
														</div>
													</div>
												</div>
											</div>
										</div>
									<?php endif; ?>

								<?php endif; ?>

								<?php if ($show_authors) : ?>

									<?php if ($custom_author && ($custom_author_name || $custom_author_description)) : ?>

										<div class="post__author">

											<div class="post__author--body">
												<span class="post__author--title h6"><?= $custom_author_name; ?></span>
												<p><?= $custom_author_description; ?></p>
											</div>

										</div>

									<?php else : ?>

										<div class="post__author">

											<div class="post__author--body">
												<span class="post__author--title h4"><?= get_the_author($id); ?></span>
												<?php
												$author_id = get_the_author_meta($id);
												$author_description = get_the_author_meta('description', $author_id);
												echo '<p>' . $author_description . '</p>';
												?>
											</div>

										</div>

									<?php endif; ?>

								<?php endif; ?>

					</div>

					<?php if (isset($downloadable['editor']) && !empty($downloadable['editor']) || isset($downloadable['file_url']) && !empty($downloadable['file_url'])) : ?>
						<div class="col-xl-10 offset-xl-1">
							<div class="block__downloadable block__row row justify-content-start">
								<div class="block__col col-xl-12 col-12">
									<?php if ($downloadable['editor']) : ?>
										<div class="block__editor">
											<?php echo $downloadable['editor']; ?>
										</div>
									<?php endif; ?>
									<?php if ($downloadable['file_url']) : ?>
										<div class="block__buttons">
											<a href="<?php echo esc_url($downloadable['file_url']); ?>" class="cta cta--cta-dark-download-left" target="_blank" download rel="noopener noreferrer"><?php echo esc_html($downloadable['label_button']); ?></a>
										</div>
									<?php endif; ?>
								</div>
							</div>
						</div>
					<?php endif; ?>

				</div>

				<div class="addtoany-float">
					<?php echo do_shortcode('[addtoany]'); ?>
				</div>

			</article>

		<?php
		endwhile; // End of the loop.
		?>

		<?php

		$directory_url = get_field('sr_directory_url', 'option');
		$directory_url_label = get_field('sr_directory_url_label', 'option');
		if ($categories && !is_wp_error($categories)) {
			$category_array = array_map(function ($category) {
				return [
					'id' => $category->term_id,
					'name' => $category->name,
				];
			}, $categories);

			$category_json = json_encode($category_array);
		} else {
			$category_json = '[]';
		}

		$related_resources = '<!-- wp:elevation/contract-components--feed-directory-grid-default --><div data-block-id="contract-components/feed-directory-grid-default" data-block-js="false" id="feed-directory-grid-default-72079e03-90bf-42c7-9839-043ca3f2d24b" class="wp-block-elevation-contract-components--feed-directory-grid-default feed-directory-grid-default alignfull row-undefined"><!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} --><div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div><!-- /wp:elevation/interior-components--spacer --><!-- wp:elevation/interior-components--custom-container {"containerWidth":"medium","className":""} --><div class="wp-block-elevation-interior-components--custom-container custom-container custom-container--medium"><!-- wp:elevation/interior-components--group --><div data-block-id="interior-components/group" data-block-js="false" class="wp-block-elevation-interior-components--group elevation-interior-components--group group type-default"><!-- wp:heading --><h2 class="wp-block-heading">H3. Heading lorem ipsum euismod</h2><!-- /wp:heading --><!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small","line":true,"lineType":"dash","linePosition":"bottom","borderColor":"#d5d4dcff"} --><div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-enable line-type-dash position-bottom" style="--border-color:#d5d4dcff"></div><!-- /wp:elevation/interior-components--spacer --><!-- wp:elevation/interior-components--spacer {"space":"spacer__extra-small"} --><div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__extra-small line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div><!-- /wp:elevation/interior-components--spacer --></div><!-- /wp:elevation/interior-components--group --><!-- wp:elevation/contract-components--feed-directory-grid-default-container {"titleDirectory": "' . $directory_url_label . '",
		"urlDirectory": "' . $directory_url . '","textDirectory":"See more from2", "postExclude" : [' . $id . '], "categorySelected": ' . $category_json . '} /--></div><!-- /wp:elevation/interior-components--custom-container --><!-- wp:elevation/interior-components--spacer {"space":"spacer__large"} --><div data-block-id="interior-components/spacer" aria-hidden="true" class="wp-block-elevation-interior-components--spacer spacer spacer__large line-disable line-type-solid position-top" style="--border-color:ui-border-bounds"></div><!-- /wp:elevation/interior-components--spacer --></div><!-- /wp:elevation/contract-components--feed-directory-grid-default -->';

		$parsed_blocks = parse_blocks($related_resources);

		if ($parsed_blocks) {
			foreach ($parsed_blocks as $block) {
				echo render_block($block);
			}
		}
		?>
	</main> <!-- #main -->

	<?php

	get_sidebar();
	get_footer();
