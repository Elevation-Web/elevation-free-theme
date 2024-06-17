<?php

use ElevationFramework\Lib\Directory\Map;
use ElevationFramework\Lib\BlockLibrary\Helpers;

if (has_post_thumbnail()) {
	$image       = get_the_post_thumbnail_url();
	$thumbnailID = get_post_thumbnail_id(get_the_ID());
	$altImage    = sanitize_text_field(get_post_meta($thumbnailID, '_wp_attachment_image_alt', true));
} else {
	$image    = get_template_directory_uri() . '/src/assets/images/default.svg';
	$altImage = 'This is the default image';
}

$title     = get_the_title();
$permalink = get_permalink();
$excerpt      = wp_strip_all_tags(Helpers::get_excerpt(20));
$content   = get_the_content();
$country   = get_the_terms(get_the_ID(), 'map_country');
$types     = get_the_terms(get_the_ID(), 'map_type');
$location  = get_field('location', get_the_ID());
$latitude  = get_field('map_latitude', get_the_ID());
$longitude = get_field('map_longitude', get_the_ID());
$email     = get_field('email', get_the_ID());
$phone     = get_field('phone', get_the_ID());
$website   = get_field('website', get_the_ID());
$distance  = '';
$address = get_field('address', get_the_ID());

if (isset($latitude) && isset($longitude)) {
	$distance = round(Map::instance()->get_distance($latitude, $longitude), 2);
}

$count = get_the_ID();

$html .= '
	<div class="col" data-lat="' . esc_attr($location['lat']) . '" data-lng="' . esc_attr($location['lng']) . '"
     data-title="' . $title . '" data-location="' . $location['address'] . '" data-address="' . $address . '">
		<article class="card">
			<figure class="card__image">
				<div class="card__image--initial">
					<img decoding="async" loading="lazy" src="' . $image . '" alt="' . $altImage . '" class="attachment-lg size-lg wp-post-image">
				</div>				
			</figure>
			<div class="card__body">
				<div class="card__left">
					<h2 class="card__title h5"><a data-bs-toggle="modal" data-bs-target="#modal-map-' . $count . '">' . $title . '</a></h2>
					<div class="card__excerpt line-clamp-3">
						<p>' . $excerpt . '</p>
					</div>
					<div class="card__row">
						<div class="card__col">
							<span class="card__subtitle">Address</span>
							<span class="card__address">' . $location['address'] . '</span>
						</div>';
if ($phone || $email) {
	$html .= '
						<div class="card__col">
							<span class="card__subtitle">Contact</span>
							<span class="card__contact">';
	if ($phone) {
		$html .= '<a href="tel:' . $phone . '" target="_blank" rel="noopener noreferrer">' . $phone . '</a>';
	}
	if ($email) {
		$html .= '<a href="mailto:' . $email . '" target="_blank" rel="noopener noreferrer" class="line-clamp-1">' . $email . '</a>';
	}
	$html .= '
							</span>
						</div>';
}
$html .= '
					</div>';


if ($types) {
	$html .= '<div class="card__taxonomy">';
	foreach ($types as $type) :
		$html .= '<span rel="type">' . $type->name . '</span>';
	endforeach;
	$html .= '</div>';
}

$html .= '
					<div class="card__category-location">';
if ($country) {
	$html .= '
						<span class="category">' . $country[0]->name . '</span>';
}
$html .= '
						<span class="location">' . $location['address'] . '</span>
					</div>

				</div>

				<div class="card__right">';
if ($distance) {
	$html .= '
						<div class="card__distance">
							<span class="value">' . $distance . '</span>
							<span class="measure">mi</span>
						</div>';
}
$html .= '
					<div class="card__buttons">
						<a class="cta cta--simple-dark-arrow-left" data-bs-toggle="modal" data-bs-target="#modal-map-' . $count . '">view more</a>';
if ($website) :
	$html .= '<a class="cta cta--simple-dark-arrow-left" href="' . $website . '" target="_blank" rel="noopener noreferrer">website</a>';
endif;
$html .= '
					</div>
				</div>

			</div>
		</article>
		<div class="modal modal-map fade" id="modal-map-' . $count . '" aria-labelledby="modal-map-' . $count . '-Label" role="dialog">
			<div class="modal-dialog modal-xl modal-dialog-centered">
				<div class="modal__content modal-content">
					<div class="modal__header">
						<button type="button" class="modal__close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal__body">
						<div class="row">

							<div class="col-lg-12 modal__body-top">
								<div class="org-name">
									<h2>' . $title . '</h2>
								</div>
								<span class="modal__category-location">';
if ($country) {
	$html .= '<span class="category">' . $country[0]->name . '</span>';
}
if ($location['address']) {
	$html .= '<span class="location">' . $location['address'] . '</span>';
}
$html .= '
								</span>
							</div>';

if (has_post_thumbnail()) {
	$html .= '<div class="col-lg-8">';
} else {
	$html .= '<div class="col-lg-12">';
}
$html .= '
								<div class="modal__row">
									<div class="modal__col">
										<span class="modal__subtitle">Address</span>
										<span class="modal__address">' . $location['address'] . '</span>
									</div>';
if ($phone || $email) {
	$html .= '
									<div class="modal__col">
										<span class="modal__subtitle">Contact</span>
										<span class="modal__contact">';
	if ($phone) {
		$html .= '<a href="tel:' . $phone . '" target="_blank" rel="noopener noreferrer">' . $phone . '</a>';
	}
	if ($email) {
		$html .= '<a href="mailto:' . $email . '" target="_blank" rel="noopener noreferrer">' . $email . '</a>';
	}
	$html .= '
										</span>
									</div>';
}
$html .= '
								</div>
							</div>';

if (has_post_thumbnail()) {
	$html .= '
							<div class="col-lg-4">
								<figure class="modal__image">
									<img decoding="async" loading="lazy" src="' . $image . '" class="attachment-lg size-lg wp-post-image" alt="' . $altImage . '">
								</figure>												
							</div>';
}

$html .= '
							<div class="col-12">
								<div class="block__content">
									<div class="block__editor">
										<h5>More Information</h5>
										<p>' . $content . '</p>
									</div>';
if ($website) {
	$html .= '
										<div class="block__buttons">
											<a href="' . $website . '" target="_blank" class="cta cta--cta-dark" rel="noopener noreferrer">read more</a>
										</div>';
}
$html .= '
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>';
