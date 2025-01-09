<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$swiper_attrs = [
    "loop" => true,
    "spaceBetween" => 30,
    "slidesPerView" => 1,
    "slidesPerViewSm" => 2,
    "slidesPerViewMd" => 2,
    "slidesPerViewLg" => 2,
    "slidesPerViewXl" => 4,
    "slidesPerViewXxl" => 4,
    "centeredSlides" => false,
    "grabCursor" => false,
    "slideToClickSlide" => true,
    "disableOnInteraction" => true,
    "loopAdditionalSlides" => 0
];

$headingLevel = $attributes['headingLevel'] ?? 'h4';
$postsPerPage = -1;
$taxonomy = $attributes['taxonomy'] ?? 'team_categories';
$postExclude = $attributes['postExclude'] ?? [];
$selectedTeams = $attributes['selectedTeams'] ?? [];
$selectedIds = array_map(function ($team) {
    return $team['postId'];
}, $selectedTeams);
$modal_enable = $attributes['modalEnable'] ?? false;

?>
<div id="<?php echo esc_attr($attributes['id']); ?>" data-block-id="contract-components/team-bios-carousel-container" data-block-js="true" class="team-bios-carousel-container">
    <div class="team-bios-carousel-container__container">
        <div class="team-bios-carousel-container__swiper" id="swiper-<?php echo esc_attr($attributes['id']); ?>" data-swiper-options="<?php echo esc_attr(json_encode($swiper_attrs)); ?>">
            <div class="swiper-wrapper">
                <?php
                if (!empty($selectedIds)) :
                    $args = array(
                        'post_type'           => 'team',
                        'posts_per_page'      => $postsPerPage,
                        'post_status'         => 'publish',
                        'post__in'        => $selectedIds,
                        'orderby'        => 'post__in',
                    );

                    $the_query = new \WP_Query($args);
                    $total_post = $the_query->found_posts;

                    if ($the_query->have_posts()) :
                        while ($the_query->have_posts()) : $the_query->the_post();
                            $permalink = get_permalink(get_the_ID());
                            $title = get_the_title(get_the_ID());
                            $position = get_field('position', get_the_ID());
                            $content  = get_the_content();
                            $email = get_field('email', get_the_ID());
                            $social_network = get_field('social_network', get_the_ID());

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
                                        <?php if ($position) : ?>
                                            <div class="card__position">
                                                <?= esc_html($position); ?>
                                            </div>
                                        <?php endif; ?>
                                    </aside>
                                    <?php if ($modal_enable) : ?>
                                        <button class="stretched-link stretched-link-custom">
                                            Read Post <?= esc_html($title) ?>
                                        </button>
                                    <?php else: ?>
                                        <a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">Read Post <?= esc_html($title) ?></a>
                                    <?php endif; ?>
                                </article>
                                <?php
                                if ($modal_enable) : ?>
                                    <div class="team-bios-carousel__popup">
                                        <div class="modal-content">
                                            <div class="modal-content__left">
                                                <div class="modal-content__image">
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
                                                <?php if ($position || $email || !empty($social_network)) : ?>
                                                    <div class="info-wrapper">
                                                        <?php if ($position) : ?>
                                                            <div class="info-wrapper__contact">
                                                                <span class="info-wrapper__title">Current Appointments</span>
                                                                <span class="info-wrapper__position"><?= esc_html($position); ?></span>
                                                            </div>
                                                        <?php endif; ?>
                                                        <?php if ($email || !empty($social_network)) : ?>
                                                            <div class="info-wrapper__contact">
                                                                <span class="info-wrapper__title">Contact Information</span>
                                                                <?php if ($email) : ?>
                                                                    <a href="mailto:<?= esc_html($email); ?>" class="email"><?= esc_html($email); ?></a>
                                                                <?php endif; ?>
                                                                <?php if (!empty($social_network)) : ?>
                                                                    <ul class="social-networks">
                                                                        <?php foreach ($social_network as $social): ?>
                                                                            <?php if (isset($social['url']) && !empty($social['url'])) : ?>
                                                                                <li>
                                                                                    <a href="<?= esc_html($social['url']); ?>" target="_blank" class="dark-icon" rel="noopener noreferrer">
                                                                                        <span class="icon--<?= esc_html($social['icon']); ?>"></span>
                                                                                        <span class="visually-hidden"><?= esc_html($social['icon']); ?></span>
                                                                                    </a>
                                                                                </li>
                                                                            <?php endif; ?>
                                                                        <?php endforeach; ?>
                                                                    </ul>
                                                                <?php endif; ?>
                                                            </div>
                                                        <?php endif; ?>
                                                    </div>
                                                <?php endif; ?>
                                            </div>
                                            <div class="modal-content__right ">
                                                <h5>
                                                    <?= esc_html($title) ?>
                                                </h5>
                                                <?= $content; ?>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button class="modal-footer__button prev">Prev</button>
                                            <button class="modal-footer__button next">Next</button>
                                        </div>
                                    </div>
                                <?php endif; ?>
                            </div>

                    <?php
                            wp_reset_postdata();
                        endwhile;
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
            <?php endif;
                else: ?>
            <h3>Select Teams to display</h3>
        <?php endif; ?>
        </div>
    </div>
</div>