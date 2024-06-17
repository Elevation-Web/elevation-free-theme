<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

if (has_post_thumbnail()) {
	$image       = get_the_post_thumbnail_url();
	$thumbnailID = get_post_thumbnail_id(get_the_ID());
	$altImage    = sanitize_text_field(get_post_meta($thumbnailID, '_wp_attachment_image_alt', true));
} else {
	$image    = get_template_directory_uri() . '/src/assets/images/default.svg';
	$altImage = 'This is the default image';
}
$title      = get_the_title();
$excerpt      = wp_strip_all_tags(Helpers::get_excerpt(20));
$categories = get_the_terms(get_the_ID(), 'resources_categories');
$types      = get_the_terms(get_the_ID(), 'resources_types');
$permalink  = get_permalink();

$card_image_change = '';
$downloadable = get_field('downloadable', get_the_ID());
if (isset($downloadable) && !empty($downloadable)) {
	$card_image_change = ' card__image--pdf';
}
$video_youtube = get_field('youtube', get_the_ID());
if (isset($video_youtube) && !empty($video_youtube)) {
	$card_image_change = ' card__image--video';
}

$html .= '
<div class="col">
	<article class="card">
		<header class="card__header">
			<figure class="card__image' . $card_image_change . '">
				<img decoding="async" loading="lazy" src="' . $image . '" class="attachment-lg size-lg wp-post-image" alt="' . $altImage . '">
			</figure>
		</header>
		<div class="card__body">
			<h2 class="card__title h5">
				<span>' . $title . '</span>
			</h2>
			<div class="card__excerpt line-clamp-4">
				<p>' . $excerpt . '</p>
			</div>';

$html .= '
			</div>
		<a href="' . $permalink . '" class="stretched-link stretched-link-custom">Read Post</a>
	</article>
</div>';
