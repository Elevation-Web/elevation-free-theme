<?php
global $pagenow;

use ElevationFramework\Lib\BlockLibrary\Helpers;

$swiper_attrs = [
    "loop" => true,
    "spaceBetween" => 30,
    "slidesPerView" => 1,
    "slidesPerViewSm" => 2,
    "slidesPerViewMd" => 2,
    "slidesPerViewLg" => 2,
    "slidesPerViewXl" => 3,
    "slidesPerViewXxl" => 3,
    "centeredSlides" => false,
    "grabCursor" => false,
    "slideToClickSlide" => true,
    "disableOnInteraction" => true,
    "loopAdditionalSlides" => 0
];

$headingLevel = $attributes['headingLevel'] ?? 'h4';
$categorySelected = $attributes['categorySelected'] ?? [];
$postsSelected = $attributes['postsSelected'] ?? [];
$postsPerPage = $attributes['postsPerPage'] ?? -1;
$filterBy = $attributes['filterBy'] ?? 'latest';

?>
<div id="<?php echo esc_attr($attributes['id']); ?>" data-block-id="interior-components/feed-default-events-container" data-block-js="true" class="feed-default-events-container">
    <div class="feed-default-events-container__container">
        <?php if (function_exists('tribe_get_events')) : ?>
            <div class="feed-default-events-container__swiper" id="swiper-<?php echo esc_attr($attributes['id']); ?>" data-swiper-options="<?php echo esc_attr(json_encode($swiper_attrs)); ?>">
                <div class="swiper-wrapper">
                    <?php
                    $args = array(
                        'post_type'           => 'tribe_events',
                        'posts_per_page'      => $postsPerPage,
                        'post_status'         => 'publish',
                    );

                    if ($filterBy == 'latest') {
                        $args['orderby'] = 'date';
                        $args['order'] = 'DESC';
                    }

                    if ($filterBy == 'newest') {
                        $args['orderby'] = 'date';
                        $args['order'] = 'ASC';
                    }

                    if ($filterBy == 'category' && $categorySelected) {
                        $cats = array_map(function ($cat) {
                            return $cat['id'];
                        }, $categorySelected);
                        $args['category__in'] = $cats;
                    }

                    if ($filterBy == 'events') {
                        $args['post__in'] = $postsSelected;
                    }

                    $the_query = new \WP_Query($args);
                    $total_post = $the_query->found_posts;


                    if ($the_query->have_posts() && !($filterBy == 'events' && empty($postsSelected)) && !($filterBy == 'category' && empty($categorySelected))) :
                        while ($the_query->have_posts()) : $the_query->the_post();
                            $permalink = get_permalink(get_the_ID());
                            $title = get_the_title(get_the_ID());
                            $categories = get_the_terms(get_the_ID(), 'tribe_events_cat');
                            $start_date = tribe_get_start_date(get_the_ID(), false, 'M j, Y');
                            $start_time = tribe_get_start_time(get_the_ID());
                            $formatted_time = date('g:i a', strtotime($start_time));
                            if (has_post_thumbnail()) {
                                $image = get_post_thumbnail_id(get_the_ID());
                                $alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
                            } else {
                                $image = get_template_directory_uri() . '/src/assets/images/default.svg';
                                $alt_image = 'default image';
                            }
                    ?>
                            <div class="swiper-slide">
                                <article class="card">
                                    <div class="card__header">
                                        <?= Helpers::global_image(
                                            $image,
                                            [
                                                'is_figure' => false,
                                                'size' => 'medium',
                                                'alt' => $alt_image,
                                                'echo' => false,
                                                'class' => 'no-animate card__image'
                                            ]
                                        ); ?>
                                    </div>
                                    <aside class="card__body">
                                        <?php if (isset($title) && !empty($title)) : ?>
                                            <<?php echo $headingLevel; ?> class="card__title no-animate">
                                                <a href="<?= esc_url($permalink); ?>" target="_self" class="wp-block-heading"><?= esc_html($title); ?></a>
                                            </<?php echo $headingLevel; ?>>
                                        <?php endif; ?>
                                        <div class="card__full-date">
                                            <?php if ($start_date) : ?>
                                                <span class="card__date">
                                                    <?php echo $start_date; ?>
                                                </span>
                                            <?php endif; ?>
                                            <?php if ($formatted_time) : ?>
                                                <span class="card__time">
                                                    <?php echo $formatted_time; ?>
                                                </span>
                                            <?php endif; ?>
                                        </div>
                                    </aside>
                                    <?php if (isset($categories) && !empty($categories)) : ?>
                                        <div class="card__category">
                                            <span class="category">
                                                <?php echo $categories[0]->name; ?>
                                            </span>
                                        </div>
                                    <?php endif; ?>
                                    <a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">Read Post <?= esc_html($title) ?></a>
                                </article>
                            </div>
                    <?php
                            wp_reset_postdata();
                        endwhile;
                    else:
                        echo '<div>
                        <h3>No events found</h3>
                    </div>';
                    endif;
                    ?>
                </div>
                <?php if ($total_post > 3) : ?>
                    <div class="swiper__container-actions">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                    <div class="swiper__container-controls">
                        <div class="swiper-pagination"></div>
                    </div>
                <?php endif; ?>
            </div>
        <?php else: ?>
            <?php if (current_user_can('edit_posts')) : ?>
                <div class="elevation-message-warning">
                    <h5>Tribe events is require.</h5>
                    <a href="plugin-install.php?tab=plugin-information&plugin=the-events-calendar&TB_iframe=true&width=772&height=800" class="thickbox components-button editor-post-publish-button editor-post-publish-button__button is-primary is-compact">
                        Install Tribe Events
                    </a>
                </div>
            <?php else: ?>
                <h5>Not found events.</h5>
            <?php endif; ?>
        <?php endif; ?>
    </div>
</div>