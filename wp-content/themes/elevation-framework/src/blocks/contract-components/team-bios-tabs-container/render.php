<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$headingLevel = $attributes['headingLevel'] ?? 'h3';
$postsPerPage = -1;
$showFilter = $attributes['showFilter'] ?? false;
$taxonomy = $attributes['taxonomy'] ?? 'team_categories';
$postExclude = $attributes['postExclude'] ?? [];
$selectedTeams = $attributes['selectedTeams'] ?? [];
$selectedIds = array_map(function ($team) {
    return $team['postId'];
}, $selectedTeams);
$modal_enable = $attributes['modalEnable'] ?? false;
$singlePageEnabled = $attributes['singlePageEnabled'] ?? false;
$clickable = $modal_enable || $singlePageEnabled ? ' clickable' : '';

?>
<div id="<?php echo esc_attr($attributes['id']); ?>" class="team-bios-tabs-container">
    <div class="team-bios-tabs-container__container container--medium">
        <?php if ($showFilter): ?>
            <div class="team-bios-tabs-container__filters">
                <ul class="team-bios-tabs-container__filters__list">
                    <li class="team-bios-tabs-container__filters__list__item">
                        <button class="team-bios-tabs-container__filters__list__item__button active has-small-labels-font-size" data-filter="all">All</button>
                    </li>
                    <?php
                    $terms = get_terms([
                        'taxonomy' => $taxonomy,
                        'hide_empty' => false,
                    ]);
                    foreach ($terms as $term) {
                        $term_name = $term->name;
                        $term_slug = $term->slug;
                    ?>
                        <li class="team-bios-tabs-container__filters__list__item">
                            <button class="team-bios-tabs-container__filters__list__item__button has-small-labels-font-size" data-filter="<?= esc_attr($term_slug); ?>"><?= esc_html($term_name); ?></button>
                        </li>
                    <?php } ?>
                </ul>
            </div>
        <?php endif; ?>
        <div class="team-bios-tabs-container__wrapper<?php echo $clickable; ?>">
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
                        $team_id = get_the_ID();
                        $permalink = get_permalink($team_id);
                        $title = get_the_title($team_id);
                        $position = get_field('position', $team_id);
                        $content  = get_the_content();
                        $email = get_field('email', $team_id);
                        $social_network = get_field('social_network', $team_id);

                        if (has_post_thumbnail()) {
                            $image = get_post_thumbnail_id($team_id);
                            $alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
                        } else {
                            $image = get_template_directory_uri() . '/src/assets/images/default.svg';
                            $alt_image = 'default image';
                        }

                        $team_categories = get_the_terms($team_id, $taxonomy);
                        $team_categories_slugs = is_array($team_categories) ? array_map(function ($term) {
                            return $term->slug;
                        }, $team_categories) : [];
                        $team_categories_names = is_array($team_categories) ? array_map(function ($term) {
                            return $term->name;
                        }, $team_categories) : [];

            ?>
                        <article class="card" data-category="<?php echo esc_attr(implode(' ', $team_categories_slugs)); ?>">
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
                                <?php if (!empty($team_categories_names)): ?>
                                    <div class="card__category-wrapper">
                                        <?php foreach ($team_categories_names as $team_category) : ?>
                                            <span class="card__category has-small-labels-font-size"><?= esc_html($team_category); ?></span>
                                        <?php endforeach; ?>
                                    </div>
                                <?php endif; ?>
                                <?php if (isset($title) && !empty($title)) : ?>
                                    <<?php echo esc_attr($headingLevel) ?> class="card__title no-animate has-h-6-font-size">
                                        <?= esc_html($title); ?>
                                    </<?php echo esc_attr($headingLevel) ?>>
                                <?php endif; ?>
                                <?php if ($position) : ?>
                                    <div class="card__position has-small-labels-font-size">
                                        <?= esc_html($position); ?>
                                    </div>
                                <?php endif; ?>
                            </aside>
                            <?php if ($modal_enable) : ?>
                                <button class="card__stretched-link">
                                    Read more about <?= esc_html($title) ?>
                                </button>
                            <?php elseif ($singlePageEnabled): ?>
                                <a href="<?= esc_url($permalink); ?>" target="_self" class="card__stretched-link">Read more about <?= esc_html($title) ?></a>
                            <?php endif; ?>
                        </article>
                        <?php
                        if ($modal_enable) : ?>
                            <div class="team-bios-tabs__popup" data-modal-id="popup-<?= get_the_ID(); ?>">
                                <div class="team-bios-modal">
                                    <div class="team-bios-modal__left">
                                        <div class="team-bios-modal__image">
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
                                    <div class="team-bios-modal__right no-animate">
                                        <h5>
                                            <?= esc_html($title) ?>
                                        </h5>
                                        <?= $content; ?>
                                    </div>
                                </div>
                                <div class="team-bios-modal__footer">
                                    <button class="team-bios-modal__footer__button prev">Prev</button>
                                    <button class="team-bios-modal__footer__button next">Next</button>
                                </div>
                            </div>
                        <?php endif; ?>

                <?php
                        wp_reset_postdata();
                    endwhile;
                endif;
                ?>


            <?php else: ?>
                <p class="has-h-5-font-size team-bios-tabs-container__box">Select a team member in the right sidebar.</p>
            <?php endif; ?>
        </div>
    </div>
</div>