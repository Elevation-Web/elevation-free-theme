<?php

use ElevationFramework\Lib\Directory\Map;

/**
 * Map Directory Block Callback Function.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
function directory_map_block_render_callback($block, $content = '', $is_preview = false, $post_id = 0, $wp_block = false, $context = false)
{

	// Create id attribute allowing for custom "anchor" value.
	$id = 'block__map-directory--' . $block['id'] . '-' . wp_unique_id();
	if (!empty($block['anchor'])) {
		$id = $block['anchor'];
	}

	// Create class attribute allowing for custom "className" and "align" values.
	$data_id = 'directory-map';
	$className = 'dynamic-assets-load block block__map-directory';
	if (!empty($block['className'])) {
		$className .= ' ' . $block['className'];
	}
	if (!empty($block['align'])) {
		$className .= ' align' . $block['align'];
	}

	// Load values and handle defaults.

	$directory_layout = get_field('directory_layout');

	$map_controll = new Map();

?>

	<div data-id="<?php echo esc_attr($data_id); ?>" id="<?= esc_attr($id); ?>" class="<?= esc_attr($className); ?>">

		<div class="block__container">

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

							<div class="filter__row">

								<div class="filter__item filter__item-search">
									<span class="filter__label">Search</span>
									<div class="filter__input filter__input--icon">
										<input type="text" placeholder="Try “Los Angeles” or 90003..." id="keyword">
										<button class="search-btn search_directory" type="button"></button>
									</div>
								</div>

								<div class="filter__item--separeitor">Or</div>

								<div class="filter__item">
									<span class="filter__label">Miles</span>
									<select name="find_miles" id="findMiles" data-type="filter">
										<option value="">Select Miles</option>
										<option value="5">within 5 miles</option>
										<option value="10">within 10 miles</option>
										<option value="30">within 30 miles</option>
										<option value="50">within 50 miles</option>
										<option value="100">within 100 miles</option>
									</select>
								</div>

								<?php $map_controll->get_filters(); ?>

							</div>

							<div class="filter__row">

								<div class="filter__item filter__item-button">
									<div class="filter__button">
										<button class="cta cta--cta-dark search_directory" type="button" id="search_directory">search</button>
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
														<button type="button" class="btn-clear-all-filters" id="clearFiltersModal">Clear all filters

													</div>
													<div class="modal-body">
														<?php $map_controll->get_modal_filters(); ?>

													</div>
													<div class="modal-footer">
														<button type="button" class="cta cta--simple-dark" data-bs-dismiss="modal">Go back without saving</button>
														<button type="button" class="cta cta--cta-dark search_directory" id="filter_search">search</button>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>

								<div class="filter__item filter__item-clear-button">
									<div class="filter__button">
										<button type="button" id="clear_filters" class="visually-hidden">Clear Fiter</button>
									</div>
								</div>

							</div>

						</div>
					</div>

				</div>

				<?php echo $map_controll->get_directory_loop(); ?>
			</div>
		</div>
	</div>

	</div>

	</div>

<?php
}
