<?php


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
$query = $attributes['query'] ?? null;
$hasCategoryPrefilter = $attributes['hasCategoryPrefilter'] ?? false;
$categories = $attributes['categories'] ?? [];
$selectedPost = $attributes['selectedPost'] ?? [];

?>
<div data-block-id="feed-default-blog" data-block-js="true" class="feed-default-blog">
    <div class="feed-default-blog__container">
        <div class="feed-default-blog__swiper" id="swiper" data-swiper-options="<?php echo esc_attr(json_encode($swiper_attrs)); ?>">
            <div class="swiper-wrapper">
                <?php
                $args = array(
                    'post_type'           => 'post',
                    'posts_per_page'      => -1,
                    'orderby'             => 'date',
                    'order'               => 'DESC',
                    'post_status'         => 'publish',
                );
                $the_query = new \WP_Query($args);
                if ($the_query->have_posts()) :
                    while ($the_query->have_posts()) : $the_query->the_post();
                ?>
                        <div class="swiper-slide">
                            <article class="feed-default-blog__card">
                                <div class="feed-default-blog__card-header">
                                    
                                </div>
                                <div class="feed-default-blog__card-body">
                                    <span><?php the_title(); ?></span>
                                </div>
                            </article>
                        </div>
                <?php
                    endwhile;
                endif;
                ?>
            </div>
            <div class="swiper__container-controls center">z
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</div>