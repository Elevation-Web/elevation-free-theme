<?php

use ElevationFramework\Lib\BlockLibrary\Helpers;

$headingLevel = $attributes['headingLevel'] ?? 'h4';
$categorySelected = $attributes['categorySelected'] ?? [];
$postsSelected = $attributes['postsSelected'] ?? [];
$postsPerPage = $attributes['postsPerPage'] ?? -1;
$filterBy = $attributes['filterBy'] ?? 'latest';
$cardDirectory = $attributes['cardDirectory'] ?? true;
$titleDirectory = $attributes['titleDirectory'] ?? 'Title Page (Directory)';
$urlDirectory = $attributes['urlDirectory'] ?? '/directory';

?>
<div id="<?php echo esc_attr($attributes['id']); ?>" data-block-id="contract-components/feed-directory-grid-default-container" data-block-js="true" class="feed-directory-grid-default-container">
    <div class="feed-directory-grid-default-container__container">
        <?php if (function_exists('tribe_get_events')) : ?>
            <?php
            $args = array(
                'post_type'           => 'resources',
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
                $args['tax_query'] = [
                    [
                        'taxonomy' => 'resources_categories', // Taxonomía de categorías de eventos
                        'field'    => 'term_id',         // Filtrar por ID de término
                        'terms'    => $cats,             // IDs de las categorías seleccionadas
                        'operator' => 'IN',              // Incluir términos coincidentes
                    ],
                ];
            }

            if ($filterBy == 'resource') {
                $args['post__in'] = $postsSelected;
            }

            $the_query = new \WP_Query($args);
            $total_post = $the_query->found_posts;


            if ($the_query->have_posts() && !($filterBy == 'resource' && empty($postsSelected)) && !($filterBy == 'category' && empty($categorySelected))) :
                while ($the_query->have_posts()) : $the_query->the_post();
                    $permalink = get_permalink(get_the_ID());
                    $title = get_the_title(get_the_ID());
                    $categories = get_the_terms(get_the_ID(), 'resources_categories');
                    if (has_post_thumbnail()) {
                        $image = get_post_thumbnail_id(get_the_ID());
                        $alt_image = sanitize_text_field(get_post_meta($image, '_wp_attachment_image_alt', true));
                    } else {
                        $image = get_template_directory_uri() . '/src/assets/images/default.svg';
                        $alt_image = 'default image';
                    }
            ?>
                    <article class="card">
                        <div class="card__image">
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
                            <div class="card__categories">
                                <?php foreach ($categories as $category) : ?>
                                    <?php if (isset($category) && !empty($category)) : ?>
                                        <div class="card__category">
                                            <span class="category">
                                                <?php echo $category->name; ?>
                                            </span>
                                        </div>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            </div>
                        </aside>
                        <a href="<?= esc_url($permalink); ?>" target="_self" class="stretched-link stretched-link-custom">View <?= esc_html($title) ?></a>
                    </article>
            <?php
                    wp_reset_postdata();
                endwhile;
            endif;
            ?>

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
        <?php if ($cardDirectory) : ?>
            <div class="card card-directory">
                <span class="text">
                    See more from
                </span>
                <h6><?= esc_html($titleDirectory); ?></h6>
                <a href="<?= esc_url($urlDirectory); ?>" target="_self" class="stretched-link stretched-link-custom">View <?= esc_html($titleDirectory) ?></a>
            </div>
        <?php endif; ?>
    </div>
</div>