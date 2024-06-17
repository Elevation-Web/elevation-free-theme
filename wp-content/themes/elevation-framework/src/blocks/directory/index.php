<?php

use ElevationFramework\Lib\Directory\Resource;

/**
 * Directory Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function directory_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__directory--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'directory';
	$className = 'dynamic-assets-load block block__directory';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}

	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.

	$directory_layout = get_field('directory_layout');

	// settings
?>

	<div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className); ?>">

		<div class="block__container container">

			<div class="block__row row justify-content-center">

				<div class="block__col col-xl-12 col-12">

					<?php if (is_user_logged_in()) : ?>
						<?php if ($directory_layout == 'option-1') : ?>
							<span class="admin-view h5">Option 1</span>
						<?php elseif ($directory_layout == 'option-2') : ?>
							<span class="admin-view h5">Option 2</span>
						<?php elseif ($directory_layout == 'option-3') : ?>
							<span class="admin-view h5">Option 3</span>
						<?php endif; ?>
					<?php endif; ?>

					<div class="filter">
						<div class="filter__container">

							<div class="filter__row filter__row-top">

								<span class="filter__label--row">Explore:</span>

								<div class="filter__item">
									<span class="filter__label">Search</span>
									<div class="filter__input filter__input--icon">
										<input type="text" placeholder="Search by Keyword" id="keyword">
										<button class="search-btn search_directory" type="button"></button>
									</div>
								</div>

							</div>

							<div class="filter__row filter__row-middle">

								<span class="filter__label--row">Filter by:</span>

								<?php
								Resource::instance()->get_filters()
								?>

								<!-- <div class="filter__item" id="elevaTerm"> 

									<span class="filter__label">Categories*</span>

								</div>

								<div class="filter__item" id="elevaTermII">

									<span class="filter__label">Content Type*</span>

								</div>

								<div class="filter__item" id="elevaTermIII">

									<span class="filter__label">Audience*</span>

								</div>

								<div class="filter__item" id="elevaTermIII">

									<span class="filter__label">Tags*</span>

								</div> -->

							</div>

							<div class="filter__row filter__row-bottom">

								<div class="filter__item filter__item-button">
									<div class="filter__button">
										<button class="cta cta--cta-dark" type="button" id="search_directory">search</button>
									</div>
								</div>

								<div class="filter__item filter__item-filter-button">
									<div class="filter__button">

										<button class="cta cta--cta-filter" type="button" data-bs-toggle="modal" data-bs-target="#modalFilters" id="viewAllFilters">View all Filters</button>

										<!-- Filters Modal -->
										<div class="filter__modal modal fade" id="modalFilters" data-bs-keyboard="true" tabindex="-1" aria-labelledby="modalFiltersLabel" aria-hidden="true">
											<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
												<div class="modal-content">
													<div class="modal-header">
														<h2 class="modal-title" id="modalFiltersLabel">All Filters</h2>
														<button type="button" id="clearFiltersModal" class="btn-clear-all-filters">Clear all filters
													</div>
													<div class="modal-body">
														<?php Resource::instance()->get_modal_filters(); ?>
													</div>
													<div class="modal-footer">
														<button type="button" class="cta cta--simple-dark" data-bs-dismiss="modal">Go back without saving</button>
														<button type="button" class="cta cta--cta-dark" id="filter_search">search</button>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>

						</div>
					</div>

				</div>

				<?php if ($directory_layout == 'option-3') : ?>

					<div class="block__col filter-results col-xl-10 col-12 <?= $directory_layout; ?>">
						<div class="group-results">
							<div class="label">Displaying Results For:</div>
							<!-- <div class="result_filter">topic<span class="remove_filter"></span></div> -->
						</div>
						<button id="clear_filters" type="button" class="ml-auto visually-hidden">Clear all filters</button>
					</div>

					<div class="block__col col-xl-10 col-12">

					<?php else : ?>

						<div class="block__col filter-results col-xl-2 col-12">
							<div class="group-results">
								<div class="label">Displaying Results For:</div>
							</div>
							<button id="clear_filters" type="button" class="visually-hidden">Clear all filters</button>
						</div>

						<div class="block__col col-xl-10 col-12">

						<?php endif; ?>


						<?php
						echo Resource::instance()->get_directory_loop($directory_layout . ' row-cards row row-cols-xl-3 row-cols-md-2 row-cols-1');
						?>
						</div>

					</div>

			</div>

		<?php
	}
