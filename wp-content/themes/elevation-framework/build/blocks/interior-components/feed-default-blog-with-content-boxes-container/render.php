<?php

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
<div id="<?php echo esc_attr($attributes['id']); ?>" data-block-id="interior-components/feed-default-blog-with-content-boxes-container" data-block-js="true" class="feed-default-blog-with-content-boxes-container">
    <div class="feed-default-blog-with-content-boxes-container__container">
        <div class="feed-default-blog-with-content-boxes-container__swiper" id="swiper-<?php echo esc_attr($attributes['id']); ?>" data-swiper-options="<?php echo esc_attr(json_encode($swiper_attrs)); ?>">
            <div class="swiper-wrapper">
                <?php
                $args = array(
                    'post_type'           => 'post',
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

                if ($filterBy == 'posts') {
                    $args['post__in'] = $postsSelected;
                }

                $the_query = new \WP_Query($args);



                if ($the_query->have_posts() && !($filterBy == 'posts' && empty($postsSelected)) && !($filterBy == 'category' && empty($categorySelected))) :
                    while ($the_query->have_posts()) : $the_query->the_post();
                        $permalink = get_permalink(get_the_ID());
                        $title = get_the_title(get_the_ID());
                        $description      = wp_strip_all_tags(Helpers::get_excerpt(20));
                        $categories = get_the_terms(get_the_ID(), 'category');
                        $date = get_the_date('M d. Y');
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
                                <div class="card__body">
                                    <aside class="card__body--right">
                                        <div class="card__full-date">
                                            <span><?= esc_html($date); ?></span>
                                        </div>
                                        <?php if (isset($title) && !empty($title)) : ?>
                                            <<?php echo $headingLevel; ?> class="card__title no-animate">
                                                <a href="<?= esc_url($permalink); ?>" target="_self" class="wp-block-heading"><?= esc_html($title); ?></a>
                                            </<?php echo $headingLevel; ?>>
                                        <?php endif; ?>
                                        <?php if (isset($description) && !empty($description)) : ?>
                                            <div class="card__excerpt line-clamp-2">
                                                <p><?= wp_kses_post($description); ?></p>
                                            </div>
                                        <?php endif; ?>
                                        <?php if (isset($categories) && !empty($categories)) : ?>
                                            <div class="card__categories">
                                                <?php foreach ($categories as $category) : ?>
                                                    <span><?= esc_html($category->name); ?></span>
                                                <?php endforeach; ?>
                                            </div>
                                        <?php endif; ?>
                                    </aside>
                                </div>
                                <a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">Read Post <?= esc_html($title) ?></a>
                            </article>
                        </div>
                <?php
                        wp_reset_postdata();
                    endwhile;
                else:
                    echo '<div>
                        <h3>No posts found</h3>
                    </div>';
                endif;
                ?>
            </div>
            <div class="swiper__container-actions">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="swiper__container-controls">
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</div>